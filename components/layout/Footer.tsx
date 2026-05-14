'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Buildforce</h3>
            <p className="text-gray-400">A subdivision of Phalendrone Solutions (PTY) LTD. Professional construction services throughout South Africa.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-accent transition">Roofing</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Structural Work</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Carpentry</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Electrical</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Plumbing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition">Our Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact & Social</h4>
            <div className="space-y-3 text-gray-400 mb-6">
              <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-accent transition">
                <Phone size={18} /> +27 (0) 12 345 6789
              </a>
              <a href="mailto:info@phalendrone.com" className="flex items-center gap-2 hover:text-accent transition">
                <Mail size={18} /> info@phalendrone.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Buildforce - A Division of Phalendrome Solutions (PTY) LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
