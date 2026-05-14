'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-[0.1em] mb-2">
            Full Name <span className="text-copper">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-copper/60 transition-colors placeholder:text-white/15"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-[0.1em] mb-2">
            Email <span className="text-copper">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-copper/60 transition-colors placeholder:text-white/15"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-[0.1em] mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-copper/60 transition-colors placeholder:text-white/15"
            placeholder="(0)XX XXX XXXX"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 uppercase tracking-[0.1em] mb-2">
            Service Required <span className="text-copper">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-copper/60 transition-colors"
          >
            <option value="" className="bg-surface-900">Select a service</option>
            <option value="Roofing" className="bg-surface-900">Roofing</option>
            <option value="Structural Work" className="bg-surface-900">Structural Work</option>
            <option value="Carpentry" className="bg-surface-900">Carpentry</option>
            <option value="Windows and Doors" className="bg-surface-900">Windows & Doors</option>
            <option value="Finishing" className="bg-surface-900">Finishing</option>
            <option value="Electrical and Fencing" className="bg-surface-900">Electrical & Fencing</option>
            <option value="Flooring and Paving" className="bg-surface-900">Flooring & Paving</option>
            <option value="Multiple" className="bg-surface-900">Multiple Services</option>
            <option value="Other" className="bg-surface-900">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-white/40 uppercase tracking-[0.1em] mb-2">
          Project Details <span className="text-copper">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-transparent border border-white/[0.08] text-white text-sm focus:outline-none focus:border-copper/60 transition-colors placeholder:text-white/15 resize-none"
          placeholder="Describe your project, location, and any relevant details"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 border border-copper/30 bg-copper/5 text-copper text-sm">
          Thank you! Your quote request has been received. We&apos;ll contact you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 border border-red-500/30 bg-red-500/5 text-red-400 text-sm">
          Something went wrong. Please try again or email us directly at info@phalendrone.com.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-copper text-black text-sm font-semibold hover:bg-copper-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          'Sending...'
        ) : (
          <>
            Send Quote Request
            <Send className="w-4 h-4" strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  )
}
