'use client'

import { motion } from 'framer-motion'
import { scaleTap } from '@/lib/animations'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-lg shadow-[var(--primary)]/20',
  secondary: 'bg-[var(--foreground)] text-white hover:bg-[var(--foreground)]/90 shadow-lg shadow-[var(--foreground)]/10',
  outline:   'border-2 border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white',
  ghost:     'text-[var(--brand-text-color)] hover:text-[var(--foreground)] hover:bg-[var(--background)]',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-bold rounded-xl transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <motion.div {...scaleTap} className="inline-block">
        <Link href={href} className={base}>{children}</Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...scaleTap}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </motion.button>
  )
}
