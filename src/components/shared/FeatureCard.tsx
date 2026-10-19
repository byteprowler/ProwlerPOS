'use client'

import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  desc: string
  accent?: string
}

export default function FeatureCard({ icon, title, desc, accent }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, boxShadow: '0 32px 64px -16px rgba(0,0,0,0.08)' }}
      className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-slate-100 transition-all duration-500 group flex flex-col h-full"
    >
      <div className="relative z-10 flex flex-col h-full">
        {icon && (
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[var(--primary)]/20"
            style={{ 
              background: accent ? `${accent}15` : 'rgba(36, 107, 245, 0.05)',
              color: accent || 'var(--primary)'
            }}
          >
            {icon}
          </div>
        )}
        <h3 className="text-xl font-black text-[var(--foreground)] mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors">{title}</h3>
        <p className="text-sm text-[var(--muted)] font-medium leading-relaxed">{desc}</p>
        
        {/* Subtle accent indicator */}
        <div className="mt-8 w-8 h-1 bg-slate-50 group-hover:w-full group-hover:bg-[var(--primary)]/10 transition-all duration-700 rounded-full" />
      </div>
    </motion.div>
  )
}
