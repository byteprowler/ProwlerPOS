'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 250 }
  const springX = useSpring(ringX, springConfig)
  const springY = useSpring(ringY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isSelectable = target.closest('button, a, .hover-target, [role="button"]')
      setIsHovering(!!isSelectable)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Glow Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          backgroundColor: isHovering ? 'rgba(36, 107, 245, 0.15)' : 'rgba(36, 107, 245, 0.05)',
          borderColor: isHovering ? 'rgba(36, 107, 245, 0.5)' : 'rgba(36, 107, 245, 0.2)',
        }}
        className="fixed rounded-full border border-[var(--primary)] pointer-events-none transition-colors duration-300"
      />
      
      {/* Center Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        className="fixed w-1.5 h-1.5 bg-[var(--primary)] rounded-full pointer-events-none shadow-[0_0_10px_rgba(36,107,245,0.8)]"
      />
    </div>
  )
}
