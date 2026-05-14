'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function About() {
  const features = [
    'Expert multi-trade construction teams across 18+ trades',
    'Premium quality materials and workmanship on every project',
    'Clear, transparent quotes with no hidden costs',
    'Strict safety protocols on every site',
    'Full coordination across all trades, no third-party juggling',
    'Custom solutions for residential and commercial projects',
  ]

  return (
    <section id="about" className="section-padding bg-[#0D0D0D]">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-[#B87333]" />About Us<span className="w-6 h-px bg-[#B87333]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built on trust, driven by craftsmanship</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Buildforce is the construction division of Phalendrome. We bring the same commitment to precision and quality that defines our group to every project we build.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With over 18 trades covered in-house, we handle everything from structural groundwork to final finishes. Our team is built on clear communication, honest pricing, and workmanship that lasts.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-[#B87333] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="btn-primary inline-flex"
            >
              Get a Free Quote
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/IMG-20260215-WA0190.jpg"
              alt="Buildforce construction project"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}