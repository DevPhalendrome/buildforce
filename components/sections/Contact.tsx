'use client'

import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact-form" className="section-padding bg-[#080808]">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#B87333]" />Contact Us<span className="w-6 h-px bg-[#B87333]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Ready to start your project? Get in touch with our team for a free consultation and quote.</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}