'use client'

import { motion } from 'framer-motion'
import { floatingCard } from '@/lib/animations'

interface MockupCardProps {
  children: React.ReactNode
  dark?: boolean
  delay?: number
  className?: string
  floatY?: number
}

export default function MockupCard({
  children,
  dark = false,
  delay = 0,
  className = '',
  floatY = 12,
}: MockupCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -floatY, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`rounded-2xl shadow-2xl overflow-hidden ${
        dark ? 'bg-[#0f172a]' : 'bg-white border border-slate-100'
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
