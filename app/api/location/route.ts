import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
  
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    return NextResponse.json({
      city: data.city || 'Sydney',
      country: data.country_name || 'Australia'
    });
  } catch (error) {
    // Fallback to Sydney, Australia if the API fails
    return NextResponse.json({
      city: 'Sydney',
      country: 'Australia'
    });
  }
} 