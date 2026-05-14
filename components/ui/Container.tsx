import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export default function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div className={`container-max ${className}`} {...props}>
      {children}
    </div>
  )
}
