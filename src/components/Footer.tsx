import Link from 'next/link'
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Navigation Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
              <Link href="/experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
              <Link href="/responsibilities" className="text-gray-600 hover:text-gray-900">Responsibilities</Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-5 w-5" />
                your.email@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Phone className="h-5 w-5" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5" />
                Your Location, Country
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 