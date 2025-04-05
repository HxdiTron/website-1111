import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Mock data - in a real app, this would come from a database
const units = {
  '101': {
    unitNumber: '101',
    owner: 'John Smith',
    size: 85,
    type: 'apartment',
    parking: true,
    storage: true
  },
  '102': {
    unitNumber: '102',
    owner: 'Sarah Johnson',
    size: 95,
    type: 'penthouse',
    parking: true,
    storage: true
  }
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const unit = units[params.id as keyof typeof units];

    if (!unit) {
      return NextResponse.json(
        { success: false, error: 'Unit not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(unit, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 