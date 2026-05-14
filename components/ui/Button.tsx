import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'disabled'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  [key: string]: any
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded transition-all duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: disabled
      ? 'btn-disabled'
      : 'btn-primary hover:bg-accent/90 active:scale-95',
    secondary: disabled
      ? 'btn-disabled'
      : 'btn-secondary hover:bg-gray-700 active:scale-95',
    disabled: 'btn-disabled opacity-50 cursor-not-allowed'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[disabled ? 'disabled' : variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
