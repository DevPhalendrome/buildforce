import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  background?: 'white' | 'gray' | 'dark'
  [key: string]: any
}

export default function Section({
  children,
  id,
  className = '',
  background = 'white',
  ...props
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-dark text-white'
  }

  return (
    <section
      id={id}
      className={`section-padding ${bgStyles[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
