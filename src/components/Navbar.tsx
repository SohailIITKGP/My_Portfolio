'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/about') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white/50 to-white/40 backdrop-blur-xl"></div>
      <div className="container relative mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link 
            href="/" 
            className="relative group"
          >
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-indigo-600 transition-all duration-500">
              Portfolio
            </span>
            <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-100/20 shadow-sm">
              {[
                { href: '/', label: 'About' },
                { href: '/experience', label: 'Experience' },
                { href: '/projects', label: 'Projects' },
                { href: '/responsibilities', label: 'Positions Of Responsibility' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "group relative px-4 py-2 rounded-full transition-all duration-200",
                    isActive(href) 
                      ? "text-indigo-600 bg-indigo-50/50" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <span className="relative z-10 font-medium">
                    {label}
                  </span>
                  {!isActive(href) && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative rounded-full p-2.5 text-gray-600 hover:text-gray-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 rounded-full bg-gray-100 opacity-0 transition-opacity duration-200 hover:opacity-100"></span>
            <span className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-20 bg-white/90 backdrop-blur-xl border-t border-gray-100/20 shadow-lg md:hidden animate-in fade-in slide-in-from-top duration-200">
            <div className="container mx-auto divide-y divide-gray-100/20">
              {[
                { href: '/', label: 'About' },
                { href: '/experience', label: 'Experience' },
                { href: '/projects', label: 'Projects' },
                { href: '/responsibilities', label: 'Positions Of Responsibility' },
              ].map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center px-6 py-4 transition-all duration-200 animate-in fade-in slide-in-from-right",
                    isActive(href)
                      ? "text-indigo-600 bg-indigo-50/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50"
                  )}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'backwards'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 