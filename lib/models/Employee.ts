import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  employeeId: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  status: string;
  avatar: string;
  [key: string]: any;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  phone: { type: String, required: true },
  joinDate: { type: String, required: true },
  status: { type: String, required: true },
  avatar: { type: String, required: false },
}, { strict: false });


export default mongoose.models.Employee || mongoose.model<IEmployee>("Employee", EmployeeSchema);
