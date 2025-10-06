// // import { NextRequest, NextResponse } from 'next/server';
// // import { connectDB } from '@/lib/mongodb';
// // import Employee from '@/lib/models/Employee';

// // export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
// //   try {
// //     await connectDB();
// //     const employee = await Employee.findById(params.id).select('-password');
// //     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
// //     return NextResponse.json(employee);
// //   } catch (error) {
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 });
// //   }
// // }

// // export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
// //   try {
// //     await connectDB();
// //     const { name, email, position } = await req.json();
// //     const employee = await Employee.findByIdAndUpdate(
// //       params.id,
// //       { name, email, position },
// //       { new: true }
// //     ).select('-password');
// //     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
// //     return NextResponse.json(employee);
// //   } catch (error) {
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 });
// //   }
// // }

// // export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
// //   try {
// //     await connectDB();
// //     const employee = await Employee.findByIdAndDelete(params.id);
// //     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
// //     return NextResponse.json({ message: 'Deleted' });
// //   } catch (error) {
// //     return NextResponse.json({ error: 'Server error' }, { status: 500 });
// //   }
// // }




// import { NextRequest, NextResponse } from 'next/server';
// import { connectDB } from '@/lib/mongodb';
// import Employee from '@/lib/models/Employee';

// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const employee = await Employee.findById(params.id).select('-password');
//     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
//     return NextResponse.json(employee);
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const { name, email, position } = await req.json();
//     const employee = await Employee.findByIdAndUpdate(
//       params.id,
//       { name, email, position },
//       { new: true }
//     ).select('-password');
//     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
//     return NextResponse.json(employee);
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }

// export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const employee = await Employee.findByIdAndDelete(params.id);
//     if (!employee) return NextResponse.json({ error: 'Not found' }, { status: 404 });
//     return NextResponse.json({ message: 'Deleted' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }








// import { NextResponse } from "next/server";
// import {connectDB} from "@/lib/mongodb";
// import Employee from "@/lib/models/Employee";

// // GET: Get a single employee by ID
// export async function GET(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const employee = await Employee.findById(params.id);
//   if (!employee) {
//     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//   }
//   return NextResponse.json(employee);
// }

// // PUT: Update all details of an employee by ID
// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const data = await req.json();
//   try {
//     const employee = await Employee.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
//     if (!employee) {
//       return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//     }
//     return NextResponse.json(employee);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
// }

// // DELETE: Remove an employee by ID
// export async function DELETE(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const employee = await Employee.findByIdAndDelete(params.id);
//   if (!employee) {
//     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//   }
//   return NextResponse.json({ message: "Employee deleted" });
// }













// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Employee from "@/lib/models/Employee";

// // GET: Get a single employee by ID
// export async function GET(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const employee = await Employee.findById(params.id);
//   if (!employee) {
//     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//   }
//   return NextResponse.json(employee);
// }

// // PUT: Update all details of an employee by ID
// export async function PUT(req: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   try {
//     const data = await req.json();
//     const employee = await Employee.findByIdAndUpdate(params.id, data, { new: true, runValidators: true });
//     if (!employee) {
//       return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//     }
//     return NextResponse.json(employee);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Invalid data" }, { status: 400 });
//   }
// }

// // DELETE: Remove an employee by ID
// export async function DELETE(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const employee = await Employee.findByIdAndDelete(params.id);
//   if (!employee) {
//     return NextResponse.json({ error: "Employee not found" }, { status: 404 });
//   }
//   return NextResponse.json({ message: "Employee deleted" });
// }









import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Employee from "@/lib/models/Employee";

// GET one
export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const employee = await Employee.findById(params.id);
  if (!employee) return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  return NextResponse.json(employee);
}

// PUT update
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  try {
    const data = await req.json();

    // Never update identifiers from client payload
    if ("_id" in data) delete data._id;
    if ("id" in data) delete data.id;

    // Optional avatar: normalize empty to unset
    if (data.avatar === "") delete data.avatar;

    // Enforce unique on update if employeeId/email changed
    if (data.employeeId || data.email) {
      const dup = await Employee.findOne({
        $and: [
          { _id: { $ne: params.id } },
          {
            $or: [
              ...(data.employeeId ? [{ employeeId: data.employeeId }] : []),
              ...(data.email ? [{ email: data.email }] : []),
            ],
          },
        ],
      });
      if (dup) {
        return NextResponse.json(
          { error: "Employee with this ID or email already exists." },
          { status: 400 }
        );
      }
    }

    const employee = await Employee.findByIdAndUpdate(params.id, data, {
      new: true,
      runValidators: true,
    });
    if (!employee) return NextResponse.json({ error: "Employee not found" }, { status: 404 });
    return NextResponse.json(employee);
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate key: Employee ID or Email already exists." },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: error?.message || "Update failed" }, { status: 400 });
  }
}

// DELETE
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const employee = await Employee.findByIdAndDelete(params.id);
  if (!employee) return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  return NextResponse.json({ message: "Employee deleted" });
}
