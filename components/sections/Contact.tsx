'use client'

import { Mail, Phone, MessageCircle, Building2 } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(0)67 771 5045', href: 'tel:+27677715045' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+27 67 771 5045', href: 'https://wa.me/27677715045' },
  { icon: Mail, label: 'Email', value: 'info@phalendrone.com', href: 'mailto:info@phalendrone.com' },
  { icon: Building2, label: 'Registration', value: 'Phalendrome Works (PTY) LTD', subtitle: 'Reg. No. 9451732512' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-surface-900 border-t border-white/[0.04]">
      <div className="container">
        <div className="max-w-xl mb-16">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            Contact Us
          </span>
          <h2 className="heading-lg mb-4">
            Let&apos;s discuss your{' '}
            <span className="text-copper">next project</span>
          </h2>
          <p className="subtitle">
            Ready to start your project? Get in touch with our team for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-px">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const Component = item.href ? 'a' : 'div'
              const hrefProps = item.href
                ? {
                    href: item.href,
                    target: item.href.startsWith('http') ? '_blank' : undefined,
                    rel: item.href.startsWith('http') ? 'noopener' : undefined,
                  }
                : {}

              return (
                <Component
                  key={i}
                  {...hrefProps}
                  className="card-hover block p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-copper" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-[0.1em] mb-1">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                      {item.subtitle && (
                        <p className="text-xs text-white/30 mt-0.5">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                </Component>
              )
            })}
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
