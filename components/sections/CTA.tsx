'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(184,115,51,0.08) 0%, transparent 70%)'
      }} />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build something exceptional?
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Get a free, no-obligation quote for your project. Tell us what you need and we'll give you a clear plan and a fair price.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                Request a Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <motion.a
              href="https://wa.me/27677715045"
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg"
            >
              WhatsApp Us
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-white/5"
          >
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div>
                <p className="text-3xl font-bold text-[#D4A857]">18+</p>
                <p className="text-gray-500 text-sm">Trades Covered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D4A857]">161</p>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D4A857]">5+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}