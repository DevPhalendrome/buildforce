'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Send to form endpoint (Formspree or custom API)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        <p className="text-gray-600 mb-8">
          Have a project in mind? Contact us today for a free consultation and competitive quote.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+27 XX XXX XXXX</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">info@phalendroneworks.co.za</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">South Africa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              placeholder="+27 XXX XXX XXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
            >
              <option value="">Select a service</option>
              <option value="Structural Works">Structural Works</option>
              <option value="Carpentry">Carpentry & Framing</option>
              <option value="Windows & Doors">Windows & Doors</option>
              <option value="Electrical">Electrical & Fencing</option>
              <option value="Plumbing">Plumbing & Gas</option>
              <option value="Flooring">Flooring & Paving</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 bg-green-100 text-green-700 rounded-lg">
              ✓ Thank you! We&apos;ll be in touch soon.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
              ✗ Something went wrong. Please try again.
            </div>
          )}

          <Button type="submit" disabled={status === 'loading'} className="w-full">
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  )
}
