'use client'

import ContactForm from '@/components/ContactForm'
import SectionHeader from '@/components/ui/SectionHeader'

export default function ContactSection() {
  return (
    <section id="contact-form" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-16">
          <SectionHeader
            title="Contact Us"
            subtitle="Ready to start your project? Get in touch with our team today."
          />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
