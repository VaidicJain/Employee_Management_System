// "use client"

// import { useState } from "react"
// import { Label } from "../ui/label"
// import { Input } from "../ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
// import { CalendarIcon } from "lucide-react"
// import { Button } from "../ui/button"
// import { Calendar } from "../ui/calendar"
// import { format } from "date-fns"
// import { cn } from "@/lib/utils"

// export default function AddEmployeeForm({ onSuccess }: { onSuccess?: () => void }) {
//   const [form, setForm] = useState({
//     name: "",
//     employeeId: "",
//     position: "",
//     department: "Engineering",
//     email: "",
//     phone: "",
//     joinDate: format(new Date(), "yyyy-MM-dd"),
//     status: "Active",
//     avatar: ""
//   })
//   const [loading, setLoading] = useState(false)
//   const [joinDateOpen, setJoinDateOpen] = useState(false)
//   const [joinDate, setJoinDate] = useState<Date | undefined>(new Date())
//   const [error, setError] = useState<string | null>(null)  // <-- new error state

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSelectChange = (name: string, value: string) => {
//     setForm((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleJoinDateSelect = (date: Date | undefined) => {
//     setJoinDate(date)
//     if (date) {
//       setForm((prev) => ({ ...prev, joinDate: format(date, "yyyy-MM-dd") }))
//       setJoinDateOpen(false)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null) // clear previous errors
//     try {
//       const res = await fetch("/api/employees", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       })
//       const data = await res.json()
//       if (res.ok) {
//         if (onSuccess) onSuccess()
//         setForm({
//           name: "",
//           employeeId: "",
//           position: "",
//           department: "Engineering",
//           email: "",
//           phone: "",
//           joinDate: format(new Date(), "yyyy-MM-dd"),
//           status: "Active",
//           avatar: ""
//         })
//       } else {
//         setError(data.error || "Failed to add employee")
//       }
//     } catch (err) {
//       setError("Network error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       {error && <p className="text-red-600 mb-2">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Keep all input/select components and labels as before; no styling changes */}
//           <div className="space-y-2">
//             <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
//             <Input id="name" name="name" value={form.name} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="employeeId">Employee ID <span className="text-red-500">*</span></Label>
//             <Input id="employeeId" name="employeeId" value={form.employeeId} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="position">Position <span className="text-red-500">*</span></Label>
//             <Input id="position" name="position" value={form.position} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
//             <Select value={form.department} onValueChange={(value) => handleSelectChange("department", value)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select department" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Engineering">Engineering</SelectItem>
//                 <SelectItem value="Marketing">Marketing</SelectItem>
//                 <SelectItem value="Human Resources">Human Resources</SelectItem>
//                 <SelectItem value="Finance">Finance</SelectItem>
//                 <SelectItem value="Sales">Sales</SelectItem>
//                 <SelectItem value="Operations">Operations</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
//             <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone</Label>
//             <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="joinDate">Join Date <span className="text-red-500">*</span></Label>
//             <Popover open={joinDateOpen} onOpenChange={setJoinDateOpen}>
//               <PopoverTrigger asChild>
//                 <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !joinDate && "text-muted-foreground")}>
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {joinDate ? format(joinDate, "PPP") : "Select date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar mode="single" selected={joinDate} onSelect={handleJoinDateSelect} initialFocus />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
//             <Select value={form.status} onValueChange={(value) => handleSelectChange("status", value)}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Active">Active</SelectItem>
//                 <SelectItem value="On Leave">On Leave</SelectItem>
//                 <SelectItem value="Remote">Remote</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="avatar">Avatar URL</Label>
//             <Input id="avatar" name="avatar" value={form.avatar} onChange={handleChange} placeholder="Enter avatar URL or leave blank" />
//           </div>
//         </div>
//         <div className="flex justify-end gap-2">
//           <Button type="submit" className="bg-sky-600 hover:bg-sky-700" disabled={loading}>
//             {loading ? "Adding..." : "Add Employee"}
//           </Button>
//         </div>
//       </form>
//     </>
//   )
// }






"use client"

import { useState } from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function AddEmployeeForm({ onSuccess }: { onSuccess?: (employee?: any) => void }) {
  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    position: "",
    department: "Engineering",
    email: "",
    phone: "",
    joinDate: format(new Date(), "yyyy-MM-dd"),
    status: "Active",
    avatar: ""
  })
  const [loading, setLoading] = useState(false)
  const [joinDateOpen, setJoinDateOpen] = useState(false)
  const [joinDate, setJoinDate] = useState<Date | undefined>(new Date())
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleJoinDateSelect = (date: Date | undefined) => {
    setJoinDate(date)
    if (date) {
      setForm((prev) => ({ ...prev, joinDate: format(date, "yyyy-MM-dd") }))
      setJoinDateOpen(false)
    }
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  try {
    const res = await fetch("/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();  // always await response JSON
    if (res.ok) {
      if (onSuccess) onSuccess(data); // pass created employee
      // reset form or any other logic here
    } else {
      setError(data.error || "Failed to add employee");
    }
  } catch {
    setError("Network error");
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
            <Input id="name" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employeeId">Employee ID <span className="text-red-500">*</span></Label>
            <Input id="employeeId" name="employeeId" value={form.employeeId} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position <span className="text-red-500">*</span></Label>
            <Input id="position" name="position" value={form.position} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
            <Select value={form.department} onValueChange={(value) => handleSelectChange("department", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Human Resources">Human Resources</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="joinDate">Join Date <span className="text-red-500">*</span></Label>
            <Popover open={joinDateOpen} onOpenChange={setJoinDateOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !joinDate && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {joinDate ? format(joinDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={joinDate} onSelect={handleJoinDateSelect} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
            <Select value={form.status} onValueChange={(value) => handleSelectChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="On Leave">On Leave</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatar">Avatar URL</Label>
            <Input id="avatar" name="avatar" value={form.avatar} onChange={handleChange} placeholder="Enter avatar URL or leave blank" />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button type="submit" className="bg-sky-600 hover:bg-sky-700" disabled={loading}>
            {loading ? "Adding..." : "Add Employee"}
          </Button>
        </div>
      </form>
    </>
  )
}
