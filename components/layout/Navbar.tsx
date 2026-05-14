'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-accent">Buildforce</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-600 hover:text-accent transition">Services</Link>
            <Link href="/projects" className="text-gray-600 hover:text-accent transition">Projects</Link>
            <Link href="#gallery" className="text-gray-600 hover:text-accent transition">Gallery</Link>
            <Link href="#about" className="text-gray-600 hover:text-accent transition">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-accent transition">Contact</Link>
            <Link href="/contact" className="btn-primary">Get Quote</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link href="#services" className="block py-2 text-gray-600 hover:text-accent">Services</Link>
            <Link href="/projects" className="block py-2 text-gray-600 hover:text-accent">Projects</Link>
            <Link href="#gallery" className="block py-2 text-gray-600 hover:text-accent">Gallery</Link>
            <Link href="#about" className="block py-2 text-gray-600 hover:text-accent">About</Link>
            <Link href="/contact" className="block py-2 text-gray-600 hover:text-accent">Contact</Link>
            <Link href="/contact" className="btn-primary w-full mt-4 text-center inline-block">Get Quote</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
