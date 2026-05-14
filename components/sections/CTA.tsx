'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-compact border-t border-white/[0.04] border-b border-white/[0.04]">
      <div className="container">
        <div className="max-w-2xl">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            Get Started
          </span>
          <h2 className="heading-lg mb-4">
            Ready to build something{' '}
            <span className="text-copper">exceptional</span>?
          </h2>
          <p className="subtitle mb-10">
            Get a free, no-obligation quote for your project. Tell us what you need and we&apos;ll give you a clear plan and a fair price.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-copper text-black text-sm font-semibold hover:bg-copper-light transition-colors duration-300"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <a
              href="https://wa.me/27677715045"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/80 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/[0.04]">
          <div className="grid grid-cols-3 gap-10 max-w-md">
            {[
              { value: '18+', label: 'Trades Covered' },
              { value: '161', label: 'Projects Done' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/30 uppercase tracking-[0.1em] mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
