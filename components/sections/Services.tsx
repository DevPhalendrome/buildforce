'use client'

import { motion } from 'framer-motion'
import { HardHat, Building2, Hammer, DoorOpen, Paintbrush, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: HardHat,
      title: 'Roofing',
      description: 'Complete roofing solutions from new installs to repairs and waterproofing. Metal, tile, and IBR roofing built for South African conditions.'
    },
    {
      icon: Building2,
      title: 'Structural Work',
      description: 'Concrete foundations, steel reinforcement, load-bearing walls and structural alterations. The backbone of every build, done right.'
    },
    {
      icon: Hammer,
      title: 'Carpentry',
      description: 'Custom woodwork from fitted cupboards to timber structures. Precision joinery and finishing that transforms spaces.'
    },
    {
      icon: DoorOpen,
      title: 'Windows and Doors',
      description: 'Expert installation and replacement of windows, doors, and frames. Security, aesthetics, and weather resistance combined.'
    },
    {
      icon: Paintbrush,
      title: 'Finishing',
      description: 'Plastering, painting, tiling, and ceiling installation. The final touch that makes every project look and feel premium.'
    },
    {
      icon: Zap,
      title: 'Electrical and Fencing',
      description: 'Safe, certified electrical installations alongside sturdy fencing and gate solutions. Security and functionality from the ground up.'
    },
  ]

  return (
    <section id="services" className="section-padding bg-[#0D0D0D]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#B87333]" />What We Do<span className="w-6 h-px bg-[#B87333]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive construction across every trade</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">No matter the scope, we have the skills, the team, and the track record to deliver exceptional results on time and on budget.</p>
        </motion.div>

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
                className="bg-[#141414] p-8 rounded-lg border border-white/5 hover:border-[#B87333]/40 transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="mb-4 w-11 h-11 rounded flex items-center justify-center bg-[#B87333]/10 text-[#CD8F4A] group-hover:bg-[#B87333] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}