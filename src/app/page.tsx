import Image from "next/image";
import { Github, Linkedin, Code, Sparkles, Rocket, BookOpen, Coffee, Users } from "lucide-react";

export default function About() {
  const skills = [
    { icon: Code, label: "MERN Stack Development", desc: "Expert in building Mern-stack applications using MongoDB, Express.js, React, and Node.js,etc" },
    { icon: Rocket, label: "Performance Optimization", desc: "Specialized in enhancing application performance and scalability" },
    { icon: BookOpen, label: "Continuous Learning", desc: "Committed to staying updated with the latest advancements in technology" },
    { icon: Coffee, label: "Problem Solving", desc: "Adept at finding innovative solutions to complex challenges" },
    { icon: Users, label: "Team Collaboration", desc: "Experienced in working effectively within agile teams" },
    { icon: Sparkles, label: "Leadership", desc: "Proven ability to lead teams towards successful project completion" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-blue-50/80 via-cyan-50/40 to-emerald-50/60 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] -z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute right-0 w-[600px] h-[600px] rounded-full bg-emerald-100/20 blur-3xl"></div>
        <div className="absolute left-20 w-[600px] h-[600px] rounded-full bg-cyan-100/20 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden ring-4 ring-white/80 backdrop-blur-sm">
                <Image
                  src="/Sohail.webp"
                  alt="Sohail's Profile"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Hey, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 animate-gradient">
                  Sohail Belim
                </span>
              </h1>

              <p className="text-lg leading-8 text-gray-700">
                I am a <span className="font-semibold text-blue-600">Pre-final year student</span> at the
                <span className="font-semibold text-blue-600"> Indian Institute of Technology, Kharagpur (IIT Kharagpur)</span>,
                from the <span className="font-semibold text-blue-600">Department of Humanities and Social Sciences</span>,
                pursuing <span className="font-semibold text-blue-600">Bachelor's and Master's of Science in Economics</span>.
              </p>

              <p className="text-lg leading-8 text-gray-700 mt-4">
                I am passionate about 
                <span className="font-semibold text-green-600"> Software development,</span>
                <span className="font-semibold text-green-600"> full-stack development</span> and
                <span className="font-semibold text-green-600"> app development using React Native (Expo)</span>.
                I love crafting <span className="font-semibold">clean, scalable, and user-friendly applications </span>
              </p>

              <p className="text-lg leading-8 text-gray-700 mt-4">
                Let&apos;s build something amazing together! 🚀
              </p>

              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/SohailIITKGP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-3 bg-gradient-to-br from-blue-100 to-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Github className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sohail-belim-082387258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-3 bg-gradient-to-br from-cyan-100 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-cyan-600 transition-colors" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/experience"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  View Experience
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 text-emerald-600 font-semibold text-lg border-2 border-emerald-200/80 shadow-xl shadow-emerald-100/30 hover:shadow-emerald-100/50 hover:border-emerald-300/80 transition-all duration-300 hover:-translate-y-1"
                >
                  View Projects
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/responsibilities"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  Responsibilities
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-10">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/80 to-blue-50/30 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/20"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <skill.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.label}</h3>
                  <p className="text-gray-700">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 