import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Buildforce for a free consultation on your construction project. We respond within 24 hours.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface pt-20">
      <div className="border-b border-white/[0.04] bg-surface-900">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            Contact Us
          </span>
          <h1 className="heading-lg mb-3">
            Let&apos;s discuss your{' '}
            <span className="text-copper">next project</span>
          </h1>
          <p className="subtitle">
            We&apos;re ready to discuss your project. Reach out to our team for a free consultation and quote.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
