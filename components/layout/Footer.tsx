import Link from 'next/link'

const serviceLinks = [
  'Roofing', 'Structural Work', 'Carpentry',
  'Windows & Doors', 'Finishing', 'Electrical & Fencing', 'Flooring & Paving',
]

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-surface">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div className="w-9 h-9 border border-white/20 flex items-center justify-center group-hover:border-copper transition-colors">
                <span className="text-white font-bold text-xs tracking-widest">BF</span>
              </div>
              <div>
                <span className="text-white font-bold tracking-tight text-sm">BUILDFORCE</span>
                <span className="block text-[10px] text-white/30 tracking-[0.15em] uppercase">Phalendrome Works</span>
              </div>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-4">
              A division of Phalendrome Solutions (PTY) LTD. Professional construction services across South Africa.
            </p>
            <p className="text-xs text-white/20">Reg. No. 9451732512</p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/projects"
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+27677715045" className="block text-white/40 hover:text-white transition-colors duration-300">
                (0)67 771 5045
              </a>
              <a href="tel:+27723927759" className="block text-white/40 hover:text-white transition-colors duration-300">
                (0)72 392 7759
              </a>
              <a
                href="https://wa.me/27677715045"
                target="_blank"
                rel="noopener"
                className="block text-white/40 hover:text-white transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@phalendrone.com"
                className="block text-white/40 hover:text-white transition-colors duration-300"
              >
                info@phalendrone.com
              </a>
              <a
                href="mailto:phalendrome@outlook.com"
                className="block text-white/40 hover:text-white transition-colors duration-300"
              >
                phalendrome@outlook.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Buildforce &mdash; A Division of Phalendrome Solutions (PTY) LTD.
          </p>
          <span className="text-xs text-white/20">Reg. No. 9451732512</span>
        </div>
      </div>
    </footer>
  )
}
