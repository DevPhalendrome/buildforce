'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/IMG-20260215-WA0190.jpg"
          alt="Buildforce construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-[#080808]/60 to-[#080808]" />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B87333]/30 bg-[#B87333]/10 text-[#CD8F4A] text-xs font-semibold mb-6">
          South Africa's Premier Construction Partner
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          We build structures that <span className="text-[#B87333]">stand the test of time</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          From foundation to finish, Buildforce delivers expert construction across 18+ trades. Premium craftsmanship backed by Phalendrome's trusted legacy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">Get a Free Quote</Link>
          <Link href="/projects" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">View Our Work</Link>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/5 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-[#D4A857] mb-1">18+</div>
            <div className="text-gray-500 text-sm">Trades Covered</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-[#D4A857] mb-1">161</div>
            <div className="text-gray-500 text-sm">Projects Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-[#D4A857] mb-1">5+</div>
            <div className="text-gray-500 text-sm">Years of Experience</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}