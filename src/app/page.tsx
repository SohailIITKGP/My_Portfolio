import Image from "next/image";
import { Github, Linkedin, Mail, Code, Sparkles, Rocket, BookOpen, Coffee, Users } from "lucide-react";

export default function About() {
  const skills = [
    { icon: Code, label: "Full Stack Development", desc: "Proficient in both frontend and backend technologies" },
    { icon: Sparkles, label: "UI/UX Design", desc: "Creating beautiful and intuitive user interfaces" },
    { icon: Rocket, label: "Performance Optimization", desc: "Building fast and scalable applications" },
    { icon: BookOpen, label: "Continuous Learning", desc: "Always staying updated with latest technologies" },
    { icon: Coffee, label: "Problem Solving", desc: "Finding elegant solutions to complex problems" },
    { icon: Users, label: "Team Collaboration", desc: "Working effectively in agile environments" },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-white via-indigo-50/20 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500 animate-tilt"></div>
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-2xl overflow-hidden ring-4 ring-white">
                <Image
                  src="/Sohail.jpg"
                  alt="Sohail's Profile"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Me
                </span>
              </h1>
              
              <p className="text-lg leading-8 text-gray-600">
                I'm a passionate developer with a keen eye for design and a love for creating 
                intuitive user experiences. With expertise in modern web technologies, I strive 
                to build applications that not only look beautiful but also provide real value 
                to users.
              </p>
              
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/sohail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-3 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="relative h-6 w-6 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/sohail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-full p-3 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Linkedin className="relative h-6 w-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
                </a>
                <a
                  href="mailto:sohail@example.com"
                  className="group relative rounded-full p-3 bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Mail className="relative h-6 w-6 text-gray-600 group-hover:text-pink-600 transition-colors" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="/experience"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  View Experience
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold text-lg border-2 border-indigo-200 shadow-xl shadow-indigo-100/30 hover:shadow-indigo-100/50 hover:border-indigo-300 transition-all duration-300 hover:-translate-y-1"
                >
                  View Projects
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/responsibilities"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-1"
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
                  className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <skill.icon className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.label}</h3>
                  <p className="text-gray-600">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 