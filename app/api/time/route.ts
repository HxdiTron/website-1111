import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  return NextResponse.json({ time: timeString });
} 