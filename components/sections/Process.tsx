'use client'

import { ClipboardList, HardHat, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Free Consultation & Quote',
    description: 'Tell us about your project. We visit the site, understand your needs, and provide a clear, no-obligation quote with full transparency.',
  },
  {
    icon: HardHat,
    title: 'Expert Execution',
    description: 'Our skilled team gets to work. We coordinate all trades, maintain strict safety protocols, and keep you updated every step of the way.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Handover',
    description: 'We finish on time and on budget. Every detail is inspected, and we don\'t hand over until you\'re completely satisfied.',
  },
]

export default function Process() {
  return (
    <section className="section border-t border-white/[0.04]">
      <div className="container">
        <div className="max-w-xl mb-16">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            How It Works
          </span>
          <h2 className="heading-lg mb-4">
            From concept to completion,{' '}
            <span className="text-copper">we handle it all</span>
          </h2>
          <p className="subtitle">
            A simple, transparent process designed to give you peace of mind from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.04]">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="bg-surface p-10 lg:p-12">
                <div className="w-12 h-12 border border-copper/30 flex items-center justify-center mb-8">
                  <Icon className="w-5 h-5 text-copper" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-medium text-copper uppercase tracking-[0.15em] mb-3">
                  Step {i + 1}
                </p>
                <h3 className="text-lg font-bold text-white mb-4">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
