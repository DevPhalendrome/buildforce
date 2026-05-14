'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-white/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-copper transition-colors duration-300">
              <span className="text-white font-bold text-xs tracking-widest">BF</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold tracking-tight text-sm">BUILDFORCE</span>
              <span className="block text-[10px] text-white/30 tracking-[0.15em] uppercase">Phalendrome Works</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-xs px-5 py-2.5 uppercase tracking-[0.1em]">
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 space-y-1 bg-surface/95 backdrop-blur-md border-t border-white/[0.04]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/50 hover:text-white transition-colors border-b border-white/[0.03] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full mt-3 text-center text-xs uppercase tracking-[0.1em]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}
