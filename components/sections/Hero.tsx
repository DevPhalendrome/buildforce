'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG-20260215-WA0190.jpg"
          alt="Premium construction work"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Precision Craftsmanship.<br />Built to Last.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto">
          Professional construction services spanning 18+ specialized trades. We deliver excellence across roofing, structural work, electrical, plumbing, finishing, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="btn-primary text-lg px-8 py-4">Request Quote</button>
          <button className="btn-secondary text-lg px-8 py-4">View Gallery</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">250+</div>
            <div className="text-gray-200">Projects Completed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-gray-200">Years Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-200">Client Satisfaction</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
