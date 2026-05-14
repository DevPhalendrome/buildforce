'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#B87333] rounded flex items-center justify-center text-white font-black text-xs">BF</div>
              <div>
                <span className="text-white font-extrabold tracking-tight">Build</span>
                <span className="text-[#B87333] font-extrabold tracking-tight">force</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">A division of Phalendrome Solutions (PTY) LTD. Professional construction services across South Africa.</p>
            <p className="text-gray-600 text-xs mt-3">Reg. No. 9451732512</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80 text-xs uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Roofing</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Structural Work</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Carpentry</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Windows and Doors</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Finishing</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Electrical and Fencing</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Flooring and Paving</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80 text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link href="/" className="hover:text-[#B87333] transition">Home</Link></li>
              <li><Link href="/projects" className="hover:text-[#B87333] transition">Our Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#B87333] transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80 text-xs uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-gray-500 text-sm">
              <a href="tel:+27677715045" className="block hover:text-[#B87333] transition">(0)67 771 5045</a>
              <a href="tel:+27723927759" className="block hover:text-[#B87333] transition">(0)72 392 7759</a>
              <a href="https://wa.me/27677715045" target="_blank" rel="noopener" className="block hover:text-[#B87333] transition">WhatsApp: +27 67 771 5045</a>
              <a href="mailto:info@phalendrone.com" className="block hover:text-[#B87333] transition">info@phalendrone.com</a>
              <a href="mailto:phalendrome@outlook.com" className="block hover:text-[#B87333] transition">phalendrome@outlook.com</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs">
          <p>&copy; {new Date().getFullYear()} Buildforce - A Division of Phalendrome Solutions (PTY) LTD | Reg. No. 9451732512. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}