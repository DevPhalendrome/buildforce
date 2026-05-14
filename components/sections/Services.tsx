'use client'

import { motion } from 'framer-motion'
import { Hammer, Home, Wind, Zap, Wrench, SquareStack } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: SquareStack,
      title: 'Structural Works',
      description: 'Expert structural design and installation including welding, carports, and load-bearing frameworks built to last.'
    },
    {
      icon: Hammer,
      title: 'Carpentry & Framing',
      description: 'Precision carpentry work and aluminum framing for residential and commercial projects with perfect execution.'
    },
    {
      icon: Wind,
      title: 'Windows & Doors',
      description: 'Professional installation of aluminum windows, sliding patio doors, and garage door systems with modern design.'
    },
    {
      icon: Zap,
      title: 'Electrical & Fencing',
      description: 'Complete electrical installations and expert electric fencing for security and safety with modern standards.'
    },
    {
      icon: Wrench,
      title: 'Plumbing & Gas',
      description: 'Professional plumbing and gas fitting services ensuring safety, efficiency, and compliance with all regulations.'
    },
    {
      icon: Home,
      title: 'Flooring & Paving',
      description: 'Professional flooring installation and paving solutions for all property types and residential needs.'
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete construction solutions across multiple specialized trades
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid-symmetrical">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
