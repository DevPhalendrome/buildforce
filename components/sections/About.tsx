'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const features = [
  'Expert multi-trade construction teams across 18+ trades',
  'Premium quality materials and workmanship on every project',
  'Clear, transparent quotes with no hidden costs',
  'Strict safety protocols on every site',
  'Full coordination across all trades — no third-party juggling',
  'Custom solutions for residential and commercial projects',
]

export default function About() {
  return (
    <section id="about" className="section border-t border-white/[0.04]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <span className="label flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-copper" />
              About Us
            </span>
            <h2 className="heading-lg mb-6">
              Built on trust, driven by{' '}
              <span className="text-copper">craftsmanship</span>
            </h2>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-4">
              Buildforce is the construction division of Phalendrome Works. We bring the same commitment to precision and quality that defines our group to every project we build.
            </p>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-10">
              With over 18 trades covered in-house, we handle everything from structural groundwork to final finishes. Our team is built on clear communication, honest pricing, and workmanship that lasts.
            </p>

            <div className="space-y-3 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-copper/80 flex-shrink-0 mt-2" />
                  <span className="text-sm text-white/60">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-copper text-black text-sm font-semibold hover:bg-copper-light transition-colors duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden h-[500px] sm:h-[600px]">
              <Image
                src="/images/IMG-20260215-WA0190.jpg"
                alt="Buildforce construction project"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
            </div>
            <div className="absolute -bottom-px -left-px border-l border-t border-white/[0.06] bg-surface/90 backdrop-blur-md px-6 py-5 max-w-xs">
              <p className="text-xs text-white/40 uppercase tracking-[0.1em] mb-1">Since 2020</p>
              <p className="text-sm text-white font-medium">Proudly South African</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
