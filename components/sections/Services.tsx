'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    key: 'roofing',
    title: 'Roofing',
    description: 'Complete roofing solutions from new installations to repairs and waterproofing. Metal, tile, and IBR roofing built for South African conditions.',
    features: ['New roof installation', 'Roof repairs & restoration', 'Waterproofing & sealing', 'Metal, tile, IBR roofing'],
    image: '/images/IMG-20260215-WA0000.jpg',
  },
  {
    key: 'structural',
    title: 'Structural Work',
    description: 'Concrete foundations, steel reinforcement, load-bearing walls and structural alterations. The backbone of every build.',
    features: ['Concrete foundations', 'Steel reinforcement', 'Load-bearing walls', 'Structural alterations'],
    image: '/images/IMG-20260215-WA0016.jpg',
  },
  {
    key: 'carpentry',
    title: 'Carpentry',
    description: 'Custom woodwork from fitted cupboards to timber structures. Precision joinery that transforms spaces.',
    features: ['Fitted cupboards & closets', 'Custom shelving & storage', 'Timber decking & pergolas', 'Doors & window frames'],
    image: '/images/IMG-20260215-WA0035.jpg',
  },
  {
    key: 'windows-doors',
    title: 'Windows & Doors',
    description: 'Expert installation and replacement of windows, doors, and frames. Security, aesthetics, and weather resistance combined.',
    features: ['Window installation', 'Door frames & hardware', 'Security doors & gates', 'Aluminium & uPVC solutions'],
    image: '/images/IMG-20260215-WA0008.jpg',
  },
  {
    key: 'finishing',
    title: 'Finishing',
    description: 'Plastering, painting, tiling, and ceiling installation. The final touch that makes every project look premium.',
    features: ['Plastering & skimming', 'Interior & exterior painting', 'Wall & floor tiling', 'Ceiling installation'],
    image: '/images/IMG-20260215-WA0015.jpg',
  },
  {
    key: 'electrical-fencing',
    title: 'Electrical & Fencing',
    description: 'Safe, certified electrical installations alongside sturdy fencing and gate solutions. Security from the ground up.',
    features: ['Full electrical wiring', 'DB board upgrades', 'Fencing & palisade walls', 'Automated gates'],
    image: '/images/IMG-20260215-WA0042.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-surface-900 border-t border-white/[0.04]">
      <div className="container">
        <div className="max-w-xl mb-16">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            What We Do
          </span>
          <h2 className="heading-lg mb-4">
            Comprehensive construction across <span className="text-copper">every trade</span>
          </h2>
          <p className="subtitle">
            No matter the scope, we have the skills, the team, and the track record to deliver exceptional results on time and on budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {services.map((service) => (
            <div
              key={service.key}
              className="group relative bg-surface-900 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-surface/85" />
              </div>

              <div className="relative z-10 p-8 lg:p-10">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-6 group-hover:border-copper/50 transition-colors duration-500">
                  <span className="text-copper text-sm font-bold">{service.key === 'roofing' ? '01' : service.key === 'structural' ? '02' : service.key === 'carpentry' ? '03' : service.key === 'windows-doors' ? '04' : service.key === 'finishing' ? '05' : '06'}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-copper-light transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-500">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-white/30 group-hover:text-white/50 transition-colors duration-500">
                      <span className="w-1 h-1 bg-copper/60 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs font-medium text-white/30 group-hover:text-copper transition-colors duration-500 uppercase tracking-[0.1em]"
                >
                  View Projects
                  <ArrowRight className="w-3 h-3" strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
