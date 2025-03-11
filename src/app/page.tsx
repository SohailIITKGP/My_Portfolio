import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full overflow-hidden ring-4 ring-white">
          <Image
            src="/Sohail.jpg"
            alt="Sohail's Profile"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
      </div>
      
      <div className="animate-fade-in">
        <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Sohail
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 sm:text-xl">
          A passionate developer focused on creating beautiful and user-friendly applications. 
          I love turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/sohail"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/sohail"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:sohail@example.com"
            className="rounded-full p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Link
          href="/about"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <ArrowRight className="inline-block h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/projects"
          className="group text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600"
        >
          View My Work{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
