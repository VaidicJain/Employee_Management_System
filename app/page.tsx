// "use cleint";
// import { redirect } from "next/navigation"

// export default function Home() {
//   redirect("/login")
// }


"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check for auth token in localStorage
    const token = typeof window !== "undefined" ? localStorage.getItem("webx-auth") : null;
    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return null;
}