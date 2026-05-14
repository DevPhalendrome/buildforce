import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  [key: string]: any
}

export default function Card({
  children,
  className = '',
  hover = true,
  ...props
}: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-gray-100 p-6'
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow' : ''

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
