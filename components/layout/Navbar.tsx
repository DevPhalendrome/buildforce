'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#080808]/92 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#B87333] rounded flex items-center justify-center text-white font-black text-sm">BF</div>
            <div>
              <span className="text-white font-extrabold tracking-tight">Build</span>
              <span className="text-[#B87333] font-extrabold tracking-tight">force</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-400 hover:text-white transition text-sm font-medium">Home</Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition text-sm font-medium">Projects</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition text-sm font-medium">Contact</Link>
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">Get a Quote</Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/5">
            <Link href="/" className="block py-2.5 text-gray-400 hover:text-white transition text-sm">Home</Link>
            <Link href="/projects" className="block py-2.5 text-gray-400 hover:text-white transition text-sm">Projects</Link>
            <Link href="/contact" className="block py-2.5 text-gray-400 hover:text-white transition text-sm">Contact</Link>
            <Link href="/contact" className="btn-primary w-full mt-4 text-center inline-block text-sm">Get a Quote</Link>
          </div>
        )}
      </div>
    </nav>
  )
}