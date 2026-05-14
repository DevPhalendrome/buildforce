'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

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
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="p-6 rounded-lg border border-white/5 bg-[#141414]">
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-[#B87333] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white text-sm">Phone</p>
              <a href="tel:+27677715045" className="text-gray-400 hover:text-[#B87333] transition text-sm">(0)67 771 5045</a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-white/5 bg-[#141414]">
          <div className="flex items-start gap-4">
            <MessageCircle className="w-5 h-5 text-[#B87333] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white text-sm">WhatsApp</p>
              <a href="https://wa.me/27677715045" target="_blank" rel="noopener" className="text-gray-400 hover:text-[#B87333] transition text-sm">+27 67 771 5045</a>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-white/5 bg-[#141414]">
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-[#B87333] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white text-sm">Email</p>
              <a href="mailto:info@phalendrone.com" className="text-gray-400 hover:text-[#B87333] transition text-sm">info@phalendrone.com</a>
              <p className="text-gray-600 text-xs mt-0.5">phalendrome@outlook.com</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-white/5 bg-[#141414]">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#B87333] flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white text-sm">Registration</p>
              <p className="text-gray-400 text-sm">Phalendrome Works (PTY) LTD</p>
              <p className="text-gray-600 text-xs mt-0.5">Reg. No. 9451732512</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333]/30 transition placeholder-gray-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333]/30 transition placeholder-gray-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333]/30 transition placeholder-gray-600"
              placeholder="(0)XX XXX XXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Service Required</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333]/30 transition"
            >
              <option value="">Select a service</option>
              <option value="Roofing">Roofing</option>
              <option value="Structural Work">Structural Work</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Windows and Doors">Windows and Doors</option>
              <option value="Finishing">Finishing</option>
              <option value="Electrical and Fencing">Electrical and Fencing</option>
              <option value="Flooring and Paving">Flooring and Paving</option>
              <option value="Multiple">Multiple Services</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Project Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#141414] text-white text-sm focus:outline-none focus:border-[#B87333] focus:ring-1 focus:ring-[#B87333]/30 transition placeholder-gray-600 resize-none"
              placeholder="Describe your project, location, and any relevant details"
            />
          </div>

          {status === 'success' && (
            <div className="p-4 rounded-lg bg-[#B87333]/15 border border-[#B87333]/30 text-[#CD8F4A] text-sm">
              Thank you! Your quote request has been received. We will contact you shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 text-red-400 text-sm">
              Something went wrong. Please try again or email us directly at info@phalendrone.com.
            </div>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3.5 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            {status === 'loading' ? 'Sending...' : 'Send Quote Request'}
          </button>
        </form>
      </div>
    </div>
  )
}