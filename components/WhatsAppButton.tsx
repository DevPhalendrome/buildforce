'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27677715045"
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 border border-white/15 bg-surface/90 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-copper hover:bg-copper/10 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
    </a>
  )
}
