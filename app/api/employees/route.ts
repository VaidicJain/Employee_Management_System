import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Employee from "@/lib/models/Employee";

// GET: List all employees
export async function GET() {
  await connectDB();
  const employees = await Employee.find({});
  return NextResponse.json(employees);
}

// POST: Create a new employee
export async function POST(req: Request) {
  await connectDB();
  try {
    const data = await req.json();
    if (data.avatar === "") {
      delete data.avatar; // remove empty string avatar so mongoose accepts optional
    }
    const employee = await Employee.create(data);
    return NextResponse.json(employee, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Invalid data" }, { status: 400 });
  }
}


