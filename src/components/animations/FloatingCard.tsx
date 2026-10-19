'use client'

import { motion } from 'framer-motion'
import { floatingCard } from '@/lib/animations'

interface FloatingCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FloatingCard({ children, delay = 0, className = '' }: FloatingCardProps) {
  return (
    <motion.div
      {...(floatingCard(delay) as any)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
