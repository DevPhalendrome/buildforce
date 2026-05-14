'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/IMG-20260215-WA0190.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/30" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-copper" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                South Africa&apos;s Premier Construction Partner
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.92] tracking-tight mb-8">
              We build structures that stand the test of time
            </h1>

            <p className="text-base sm:text-lg text-white/50 max-w-xl mb-10 leading-relaxed">
              From foundation to finish, Buildforce delivers expert construction across{' '}
              <span className="text-white/80 font-medium">18+ trades</span>. Premium craftsmanship
              backed by Phalendrome&apos;s trusted legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-copper text-black text-sm font-semibold hover:bg-copper-light transition-colors duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white/80 text-sm font-medium hover:border-white/30 hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-lg">
              {[
                { value: '18+', label: 'Trades Covered' },
                { value: '161', label: 'Projects Completed' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-white/10 pl-5">
                  <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/30 uppercase tracking-[0.1em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  )
}
