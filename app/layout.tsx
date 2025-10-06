"use client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { LayoutProvider } from "@/components/layout/layout-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>

           <LayoutProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </LayoutProvider>

          </Provider>
      </body>
    </html>
  );
}



// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
// import { LayoutProvider } from "@/components/layout/layout-provider"

// const inter = Inter({ subsets: ["latin"] })

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <LayoutProvider>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//             {children}
//             <Toaster />
//           </ThemeProvider>
//         </LayoutProvider>
//       </body>
//     </html>
//   )
// }
