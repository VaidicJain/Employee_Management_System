// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { CalendarIcon } from "lucide-react"
// import { format, parse } from "date-fns"
// import { cn } from "@/lib/utils"

// interface EditEmployeeFormProps {
//   employee: any
//   onSubmit: (data: any) => void
//   onCancel: () => void
// }

// export function EditEmployeeForm({ employee, onSubmit, onCancel }: EditEmployeeFormProps) {
//   const [formData, setFormData] = useState({ ...employee })

//   const [joinDateOpen, setJoinDateOpen] = useState(false)
//   const [birthDateOpen, setBirthDateOpen] = useState(false)

//   const [joinDate, setJoinDate] = useState<Date | undefined>(
//     employee.joinDate ? parse(employee.joinDate, "MMMM d, yyyy", new Date()) : new Date(),
//   )

//   const [birthDate, setBirthDate] = useState<Date | undefined>(
//     employee.birthDate ? parse(employee.birthDate, "MMMM d, yyyy", new Date()) : undefined,
//   )

//   useEffect(() => {
//     setFormData({ ...employee })

//     // Try to parse dates in different formats
//     try {
//       if (employee.joinDate) {
//         // Try different date formats
//         let parsedDate: Date | undefined
//         try {
//           parsedDate = parse(employee.joinDate, "MMMM d, yyyy", new Date())
//         } catch {
//           try {
//             parsedDate = parse(employee.joinDate, "yyyy-MM-dd", new Date())
//           } catch {
//             try {
//               parsedDate = new Date(employee.joinDate)
//             } catch {
//               parsedDate = new Date()
//             }
//           }
//         }
//         setJoinDate(parsedDate)
//       }

//       if (employee.birthDate) {
//         // Try different date formats
//         let parsedDate: Date | undefined
//         try {
//           parsedDate = parse(employee.birthDate, "MMMM d, yyyy", new Date())
//         } catch {
//           try {
//             parsedDate = parse(employee.birthDate, "yyyy-MM-dd", new Date())
//           } catch {
//             try {
//               parsedDate = new Date(employee.birthDate)
//             } catch {
//               parsedDate = undefined
//             }
//           }
//         }
//         setBirthDate(parsedDate)
//       }
//     } catch (error) {
//       console.error("Error parsing dates:", error)
//     }
//   }, [employee])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSelectChange = (name: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleJoinDateSelect = (date: Date | undefined) => {
//     setJoinDate(date)
//     if (date) {
//       setFormData((prev) => ({ ...prev, joinDate: format(date, "MMMM d, yyyy") }))
//       setJoinDateOpen(false)
//     }
//   }

//   const handleBirthDateSelect = (date: Date | undefined) => {
//     setBirthDate(date)
//     if (date) {
//       setFormData((prev) => ({ ...prev, birthDate: format(date, "MMMM d, yyyy") }))
//       setBirthDateOpen(false)
//     }
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(formData)
//   }



//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="name">
//             Full Name <span className="text-red-500">*</span>
//           </Label>
//           <Input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter full name"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="position">
//             Position <span className="text-red-500">*</span>
//           </Label>
//           <Input
//             id="position"
//             name="position"
//             value={formData.position}
//             onChange={handleChange}
//             placeholder="Enter position"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="department">
//             Department <span className="text-red-500">*</span>
//           </Label>
//           <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select department" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Engineering">Engineering</SelectItem>
//               <SelectItem value="Marketing">Marketing</SelectItem>
//               <SelectItem value="Human Resources">Human Resources</SelectItem>
//               <SelectItem value="Finance">Finance</SelectItem>
//               <SelectItem value="Sales">Sales</SelectItem>
//               <SelectItem value="Operations">Operations</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="email">
//             Email <span className="text-red-500">*</span>
//           </Label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter email address"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone</Label>
//           <Input
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter phone number"
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="joinDate">
//             Join Date <span className="text-red-500">*</span>
//           </Label>
//           <Popover open={joinDateOpen} onOpenChange={setJoinDateOpen}>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className={cn("w-full justify-start text-left font-normal", !joinDate && "text-muted-foreground")}
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {/* {joinDate ? format(joinDate, "PPP") : "Select date"} */}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar mode="single" selected={joinDate} onSelect={handleJoinDateSelect} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="status">
//             Status <span className="text-red-500">*</span>
//           </Label>
//           <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Active">Active</SelectItem>
//               <SelectItem value="On Leave">On Leave</SelectItem>
//               <SelectItem value="Remote">Remote</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="birthDate">Birth Date</Label>
//           <Popover open={birthDateOpen} onOpenChange={setBirthDateOpen}>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className={cn("w-full justify-start text-left font-normal", !birthDate && "text-muted-foreground")}
//               >
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {/* {birthDate ? format(birthDate, "PPP") : "Select date"} */}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar
//                 mode="single"
//                 selected={birthDate}
//                 onSelect={handleBirthDateSelect}
//                 initialFocus
//                 fromYear={1950}
//                 toYear={new Date().getFullYear() - 18}
//               />
//             </PopoverContent>
//           </Popover>
//         </div>
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="address">Address</Label>
//         <Textarea
//           id="address"
//           name="address"
//           value={formData.address || ""}
//           onChange={handleChange}
//           placeholder="Enter address"
//           rows={3}
//         />
//       </div>

//       <div className="flex justify-end gap-2">
//         <Button type="button" variant="outline" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button type="submit" className="bg-sky-600 hover:bg-sky-700">
//           Save Changes
//         </Button>
//       </div>
//     </form>
//   )
// }




















// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { CalendarIcon } from "lucide-react"
// import { format, parse } from "date-fns"
// import { cn } from "@/lib/utils"

// interface EditEmployeeFormProps {
//   employee: any
//   onSuccess?: () => void
//   onCancel: () => void
// }

// export function EditEmployeeForm({ employee, onSuccess, onCancel }: EditEmployeeFormProps) {
//   const [form, setForm] = useState({ ...employee })
//   const [loading, setLoading] = useState(false)
//   const [joinDateOpen, setJoinDateOpen] = useState(false)
//   const [joinDate, setJoinDate] = useState<Date | undefined>(
//     employee.joinDate ? new Date(employee.joinDate) : new Date()
//   )

//   useEffect(() => {
//     setForm({ ...employee })
//     setJoinDate(employee.joinDate ? new Date(employee.joinDate) : new Date())
//   }, [employee])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSelectChange = (name: string, value: string) => {
//     setForm((prev :typeof form) => ({ ...prev, [name]: value }))
//   }

//   const handleJoinDateSelect = (date: Date | undefined) => {
//     setJoinDate(date)
//     if (date) {
//       setForm((prev: typeof form) => ({ ...prev, joinDate: format(date, "yyyy-MM-dd") }))
//       setJoinDateOpen(false)
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const res = await fetch(`/api/employees/${employee._id || employee.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       })
//       if (res.ok) {
//         if (onSuccess) onSuccess()
//       } else {
//         // Handle error
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
//           <Input id="name" name="name" value={form.name} onChange={handleChange} required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="employeeId">Employee ID <span className="text-red-500">*</span></Label>
//           <Input id="employeeId" name="employeeId" value={form.employeeId} onChange={handleChange} required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="position">Position <span className="text-red-500">*</span></Label>
//           <Input id="position" name="position" value={form.position} onChange={handleChange} required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="department">Department <span className="text-red-500">*</span></Label>
//           <Select value={form.department} onValueChange={(value) => handleSelectChange("department", value)}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select department" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Engineering">Engineering</SelectItem>
//               <SelectItem value="Marketing">Marketing</SelectItem>
//               <SelectItem value="Human Resources">Human Resources</SelectItem>
//               <SelectItem value="Finance">Finance</SelectItem>
//               <SelectItem value="Sales">Sales</SelectItem>
//               <SelectItem value="Operations">Operations</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
//           <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="phone">Phone</Label>
//           <Input id="phone" name="phone" value={form.phone} onChange={handleChange} />
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="joinDate">Join Date <span className="text-red-500">*</span></Label>
//           <Popover open={joinDateOpen} onOpenChange={setJoinDateOpen}>
//             <PopoverTrigger asChild>
//               <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !joinDate && "text-muted-foreground")}>
//                 <CalendarIcon className="mr-2 h-4 w-4" />
//                 {joinDate ? format(joinDate, "PPP") : "Select date"}
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-auto p-0" align="start">
//               <Calendar mode="single" selected={joinDate} onSelect={handleJoinDateSelect} initialFocus />
//             </PopoverContent>
//           </Popover>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="status">Status <span className="text-red-500">*</span></Label>
//           <Select value={form.status} onValueChange={(value) => handleSelectChange("status", value)}>
//             <SelectTrigger>
//               <SelectValue placeholder="Select status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="Active">Active</SelectItem>
//               <SelectItem value="On Leave">On Leave</SelectItem>
//               <SelectItem value="Remote">Remote</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="space-y-2">
//           <Label htmlFor="avatar">Avatar URL</Label>
//           <Input id="avatar" name="avatar" value={form.avatar} onChange={handleChange} placeholder="Enter avatar URL or leave blank" />
//         </div>
//       </div>
//       <div className="flex justify-end gap-2">
//         <Button type="button" variant="outline" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button type="submit" className="bg-sky-600 hover:bg-sky-700" disabled={loading}>
//           {loading ? "Saving..." : "Save Changes"}
//         </Button>
//       </div>
//     </form>
//   )
// }

















// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { CalendarIcon } from "lucide-react"
// import { format } from "date-fns"
// import { cn } from "@/lib/utils"

// interface EditEmployeeFormProps {
//   employee: any;
//   onSuccess?: (employee?: any) => void;
//   onCancel: () => void;
// }


// export function EditEmployeeForm({ employee, onSuccess, onCancel }: EditEmployeeFormProps) {
//   const [form, setForm] = useState({ ...employee,  avatar: employee.avatar || ""  })
//   const [loading, setLoading] = useState(false)
//   const [joinDateOpen, setJoinDateOpen] = useState(false)
//   const [joinDate, setJoinDate] = useState<Date | undefined>(
//     employee.joinDate ? new Date(employee.joinDate) : new Date()
//   )
//   const [error, setError] = useState<string | null>(null) // To display API errors

//   useEffect(() => {
//     setForm({ ...employee })
//     setJoinDate(employee.joinDate ? new Date(employee.joinDate) : new Date())
//     setError(null)
//   }, [employee])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSelectChange = (name: string, value: string) => {
//     setForm((prev: typeof form) => ({ ...prev, [name]: value }))
//   }

//   const handleJoinDateSelect = (date: Date | undefined) => {
//     setJoinDate(date)
//     if (date) {
//       setForm((prev: typeof form) => ({ ...prev, joinDate: format(date, "yyyy-MM-dd") }))
//       setJoinDateOpen(false)
//     }
//   }

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault()
//   //   setLoading(true)
//   //   setError(null)
//   //   try {
//   //     const res = await fetch(`/api/employees/${employee._id || employee.id}`, {
//   //       method: "PUT",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(form)
//   //     })
//   //     const data = await res.json()
//   //     if (res.ok) {
//   //       if (onSuccess) onSuccess(updatedEmployee)
//   //     } else {
//   //       setError(data.error || "Failed to update employee")
//   //     }
//   //   } catch {
//   //     setError("Network error")
//   //   } finally {
//   //     setLoading(false)
//   //   }
//   // }
//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setLoading(true);
//   setError(null);
//   try {
//     const res = await fetch(`/api/employees/${employee._id || employee.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });
//     const updatedEmployee = await res.json();  // <-- parse updated employee here
//     if (res.ok) {
//       if (onSuccess) onSuccess(updatedEmployee); // <-- pass the updated employee object here
//     } else {
//       setError(updatedEmployee.error || "Failed to update employee");
//     }
//   } catch {
//     setError("Network error");
//   } finally {
//     setLoading(false);
//   }
// };


//   return (
//     <>
//       {error && <p className="text-red-600 mb-2">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
//           <Button type="button" variant="outline" onClick={onCancel}>
//             Cancel
//           </Button>
//           <Button type="submit" className="bg-sky-600 hover:bg-sky-700" disabled={loading}>
//             {loading ? "Saving..." : "Save Changes"}
//           </Button>
//         </div>
//       </form>
//     </>
//   )
// }






"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EditEmployeeFormProps {
  employee: any;
  onSuccess?: (employee: any) => void;
  onCancel: () => void;
}

export function EditEmployeeForm({ employee, onSuccess, onCancel }: EditEmployeeFormProps) {
  const [form, setForm] = useState({ ...employee, avatar: employee.avatar || "" });
  const [loading, setLoading] = useState(false);
  const [joinDateOpen, setJoinDateOpen] = useState(false);
  const [joinDate, setJoinDate] = useState<Date | undefined>(employee.joinDate ? new Date(employee.joinDate) : new Date());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setForm({ ...employee, avatar: employee.avatar || "" });
    setJoinDate(employee.joinDate ? new Date(employee.joinDate) : new Date());
    setError(null);
  }, [employee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev: typeof form) => ({ ...prev, [name]: value }));
  };

  const handleJoinDateSelect = (date: Date | undefined) => {
    setJoinDate(date);
    if (date) {
      setForm((prev: typeof form) => ({ ...prev, joinDate: format(date, "yyyy-MM-dd") }));
      setJoinDateOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const id = employee._id || employee.id;
      const payload: any = { ...form };
      delete payload._id;
      delete payload.id;

      if (payload.avatar === "") delete payload.avatar;

      const res = await fetch(`/api/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        onSuccess?.(data);
      } else {
        setError(data?.error || "Failed to update employee");
      }
    } catch (err: any) {
      setError(err?.message || "Network error");
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
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="bg-sky-600 hover:bg-sky-700" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </>
  );
}
