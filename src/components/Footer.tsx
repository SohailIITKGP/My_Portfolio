'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <footer className="w-full border-t border-gray-100 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 py-12 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute -top-24 -right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: '/', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/experience', label: 'Experience' },
                { href: '/responsibilities', label: 'Responsibilities' },
              ].map(({ href, label }) => (
                <Link 
                  key={href} 
                  href={href}
                  className={`px-2 py-1 transition-colors duration-200 ${
                    isActive(href) ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:your.email@example.com"
                className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <span className="relative rounded-full bg-purple-50 p-2 transition-colors duration-200 group-hover:bg-purple-100">
                  <Mail className="h-4 w-4" />
                </span>
                <span>your.email@example.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors duration-200"
              >
                <span className="relative rounded-full bg-pink-50 p-2 transition-colors duration-200 group-hover:bg-pink-100">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+1 (234) 567-890</span>
              </a>
              <div className="group flex items-center gap-2 text-gray-600">
                <span className="relative rounded-full bg-indigo-50 p-2">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Your Location, Country</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-indigo-600">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                <span className="relative rounded-full bg-indigo-50 p-2 transition-colors duration-200 group-hover:bg-indigo-100">
                  <Github className="h-4 w-4" />
                </span>
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
              >
                <span className="relative rounded-full bg-purple-50 p-2 transition-colors duration-200 group-hover:bg-purple-100">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 w-fit mx-auto">
              © 2025 Sohail. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 