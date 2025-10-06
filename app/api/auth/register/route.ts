import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Employee from '@/lib/models/Employee';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, email, position, password } = await req.json();
    if (!name || !email || !position || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    const existing = await Employee.findOne({ email });
    if (existing) return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    const hashedPassword = await bcrypt.hash(password, 10);
    const employee = await Employee.create({ name, email, position, password: hashedPassword });
    return NextResponse.json({ message: 'Registered', employee });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}