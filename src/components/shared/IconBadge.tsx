'use client'

import { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  color?: 'primary' | 'secondary' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function IconBadge({ 
  icon: Icon, 
  color = 'primary', 
  size = 'md',
  className = '' 
}: IconBadgeProps) {
  const colorStyles = {
    primary: 'bg-[var(--primary)]/10 text-[var(--primary)]',
    secondary: 'bg-[var(--secondary)]/10 text-[var(--secondary)]',
    dark: 'bg-[var(--foreground)]/10 text-[var(--foreground)]',
  }

  const sizeStyles = {
    sm: 'p-2 rounded-lg',
    md: 'p-3 rounded-xl',
    lg: 'p-4 rounded-2xl',
  }

  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  }

  return (
    <div className={`inline-flex items-center justify-center ${colorStyles[color]} ${sizeStyles[size]} ${className}`}>
      <Icon size={iconSizes[size]} strokeWidth={2.5} />
    </div>
  )
}
