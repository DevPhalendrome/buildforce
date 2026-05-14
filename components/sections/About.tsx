'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function About() {
  const features = [
    'Expert multi-trade construction teams',
    'Premium quality materials and workmanship',
    '20+ years of industry experience',
    'Comprehensive warranty coverage',
    'Licensed and fully insured contractors',
    'Custom solutions for every project',
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Phalendrone Works is a leading provider of construction and installation services across South Africa. With over two decades of experience in structural works, carpentry, electrical systems, and specialized installations, we've earned the trust of hundreds of satisfied clients.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team combines technical expertise with attention to detail, delivering projects that exceed expectations. From residential renovations to large commercial installations, we bring professionalism and precision to every job.
            </p>

            {/* Features List */}
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
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="btn-primary"
            >
              Contact Us Today
            </motion.button>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full rounded-lg overflow-hidden"
          >
            <Image
              src="/images/IMG-20260215-WA0190.jpg"
              alt="Phalendrone Works team project"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
