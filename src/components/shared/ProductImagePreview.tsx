'use client'

import { motion } from 'framer-motion'
import { scaleIn, fadeUp } from '@/lib/animations'

interface ProductImagePreviewProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function ProductImagePreview({ 
  src, 
  alt, 
  className = '', 
  priority = false 
}: ProductImagePreviewProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={`relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.12)] border border-slate-100 bg-white group ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          loading={priority ? 'eager' : 'lazy'}
        />
      </motion.div>
      
      {/* Subtle overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Decorative floating dots/blobs behind (optional, can be added via parent if needed) */}
    </motion.div>
  )
}
