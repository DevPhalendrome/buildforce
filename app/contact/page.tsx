import ContactForm from '@/components/ContactForm'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Contact Us | Phalendrone Works',
  description: 'Get in touch with Phalendrone Works for a free consultation on your construction project.',
}

export default function ContactPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-16">
          <SectionHeader
            title="Contact Us"
            subtitle="We're ready to discuss your project. Reach out to our team for a free consultation and quote."
          />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
