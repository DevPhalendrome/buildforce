'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-r from-dark via-dark/95 to-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #ff6b35 25%, transparent 25%), linear-gradient(-45deg, #ff6b35 25%, transparent 25%)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 0 20px'
        }} />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Get a free consultation from our expert team. We'll assess your needs and provide a transparent quote with no hidden costs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4"
            >
              Call Now
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-gray-700"
          >
            <p className="text-gray-400 text-sm mb-4">TRUSTED BY</p>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-gray-400 text-sm">Completed Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
