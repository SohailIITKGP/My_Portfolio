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
          "min-h-screen bg-white antialiased selection:bg-blue-600/10 selection:text-blue-600"
        )}
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="pointer-events-none fixed inset-0 z-0 select-none">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-600/20 to-purple-600/20 blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-600/20 to-blue-600/20 blur-[100px] opacity-20" />
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
