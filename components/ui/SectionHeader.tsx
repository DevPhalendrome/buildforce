'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = ''
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  const maxWidthClass = align === 'center' ? 'max-w-2xl mx-auto' : ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${alignStyles[align]} ${maxWidthClass} ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  )
}
