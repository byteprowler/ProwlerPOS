'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  badgeStyle?: 'primary' | 'dark'
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  badgeStyle = 'primary',
}: SectionHeaderProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left'
  const maxW = align === 'center' ? 'max-w-3xl mx-auto' : ''
  const flexAlign = align === 'center' ? 'items-center' : 'items-start'

  const badgeClass =
    badgeStyle === 'primary'
      ? 'bg-[var(--primary)]/10 text-[var(--primary)]'
      : 'bg-[var(--foreground)] text-white'

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`${textAlign} ${flexAlign} flex flex-col mb-20`}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6 ${badgeClass}`}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-[clamp(2rem,8vw,3.5rem)] font-black text-[var(--foreground)] tracking-[-0.02em] leading-[1.1] mb-6 sm:mb-8 ${maxW}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-base sm:text-xl text-[var(--muted)] font-medium leading-relaxed ${maxW}`}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </motion.div>
  )
}
