import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
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
            
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Me
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a passionate developer with a keen eye for design and a love for creating 
              intuitive user experiences. With expertise in modern web technologies, I strive 
              to build applications that not only look beautiful but also provide real value 
              to users.
            </p>
            
            <div className="mt-8 flex gap-6">
              <a
                href="https://github.com/sohail"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Github className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/sohail"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="mailto:sohail@example.com"
                className="group rounded-full p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Mail className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
            
            <div className="grid gap-6">
              <div className="group rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:sohail@example.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      sohail@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="group rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 