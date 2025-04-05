import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  unitNumber: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

// In-memory storage for demonstration
const users: UserData[] = [];

// Track login attempts for rate limiting
const loginAttempts = new Map<string, { count: number; timestamp: number }>();

export async function POST(request: Request) {
  try {
    const body: LoginRequest = await request.json();

    // Validate input
    if (!body.email || !body.password) {
      return NextResponse.json(
        { success: false, error: 'Missing email or password' },
        { status: 400 } // Bad Request
      );
    }

    // Check for rate limiting
    const attempts = loginAttempts.get(body.email);
    if (attempts && attempts.count >= 5) {
      const timeSinceLastAttempt = Date.now() - attempts.timestamp;
      if (timeSinceLastAttempt < 15 * 60 * 1000) { // 15 minutes
        return NextResponse.json(
          { success: false, error: 'Too many login attempts. Please try again later.' },
          { status: 429 } // Too Many Requests
        );
      }
      // Reset attempts if 15 minutes have passed
      loginAttempts.delete(body.email);
    }

    // Find user
    const user = users.find(u => u.email === body.email);
    
    if (!user || user.password !== body.password) {
      // Update login attempts
      const currentAttempts = loginAttempts.get(body.email) || { count: 0, timestamp: Date.now() };
      loginAttempts.set(body.email, {
        count: currentAttempts.count + 1,
        timestamp: currentAttempts.timestamp
      });

      return NextResponse.json(
        { success: false, error: 'Invalid email or password' },
        { status: 401 } // Unauthorized
      );
    }

    // Reset login attempts on successful login
    loginAttempts.delete(body.email);

    // Return success with user data (excluding password)
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        unitNumber: user.unitNumber
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to login' },
      { status: 500 } // Internal Server Error
    );
  }
} 