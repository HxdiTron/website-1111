import { NextResponse } from 'next/server';

export const runtime = 'edge';

interface UserData {
  id: string;
  email: string;
  password: string;
  name: string;
  unitNumber: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  unitNumber: string;
}

// In-memory storage for demonstration
const users: UserData[] = [];

export async function POST(request: Request) {
  try {
    const body: RegisterRequest = await request.json();

    // Validate input
    if (!body.email || !body.password || !body.name || !body.unitNumber) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === body.email);
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create new user
    const newUser: UserData = {
      id: Date.now().toString(), // Simple ID generation
      email: body.email,
      password: body.password, // In production, this should be hashed
      name: body.name,
      unitNumber: body.unitNumber
    };

    // Add user to storage
    users.push(newUser);

    // Return success with user data (excluding password)
    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        unitNumber: newUser.unitNumber
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to register' },
      { status: 500 }
    );
  }
} 