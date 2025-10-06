'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { EmployeeActivity } from '@/components/dashboard/employee-activity';
import { DepartmentDistribution } from '@/components/dashboard/department-distribution';
import { RecentEmployees } from '@/components/dashboard/recent-employees';
import { UpcomingEvents } from '@/components/dashboard/upcoming-events';

export default function DashboardPage() {
  const user = useSelector((state: any) => state.auth.user);
  const error = useSelector((state: any) => state.auth.error);
  const { toast } = useToast();
  const router = useRouter();

   const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("webx-auth") : null;
    if (!token) {
      router.replace("/login");
    } else {
      setIsAuthChecked(true);
    }
  }, [router]);

  if (!isAuthChecked) {
    return null; // or a loading spinner
  }


  // useEffect(() => {
  //   if (!user) {
  //     router.replace('/login');
  //   }
  // }, [user, router]);

  // useEffect(() => {
  //   if (error) {
  //     toast({ title: 'Error', description: error, variant: 'destructive' });
  //   }
  // }, [error, toast]);

  // if (!user) {
  //   // Optionally, show a loading spinner or nothing while redirecting
  //   return null;
  // }

   return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EmployeeActivity />
        <DepartmentDistribution />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentEmployees />
        <UpcomingEvents />
      </div>
    </div>
  )

}






// import { DashboardStats } from "@/components/dashboard/dashboard-stats"
// import { EmployeeActivity } from "@/components/dashboard/employee-activity"
// import { RecentEmployees } from "@/components/dashboard/recent-employees"
// import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
// import { DepartmentDistribution } from "@/components/dashboard/department-distribution"

// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
//       <DashboardStats />
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <EmployeeActivity />
//         <DepartmentDistribution />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <RecentEmployees />
//         <UpcomingEvents />
//       </div>
//     </div>
//   )
// }
