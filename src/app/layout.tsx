import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sohail's Portfolio",
  description: "Professional portfolio showcasing my work, projects, and experience in software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={cn(
          inter.className,
          "min-h-screen bg-gradient-to-b from-white via-gray-50 to-white antialiased selection:bg-indigo-600/10 selection:text-indigo-600"
        )}
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden">
            {/* Top-right gradient */}
            <div className="absolute -right-[40%] top-0 h-[1000px] w-[1000px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] opacity-20" />
            
            {/* Bottom-left gradient */}
            <div className="absolute -left-[40%] bottom-0 h-[1000px] w-[1000px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] opacity-20" />
            
            {/* Center subtle gradient */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-[100px] opacity-30" />

            {/* Grid pattern */}
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" 
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="flex min-h-screen flex-col pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
