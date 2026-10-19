import { Variants } from 'framer-motion'

// ─── Reusable Variants ───────────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.12, 
      delayChildren: 0.05 
    } 
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 20 },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)', 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  },
}

// ─── Interaction Variants ────────────────────────────────────────────────────

export const cardHover: Variants = {
  whileHover: { 
    y: -8, 
    scale: 1.02, 
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeOut' as const } 
  },
  whileTap: { scale: 0.98 },
}

export const buttonTap: Variants = {
  whileHover: { 
    scale: 1.03, 
    transition: { type: "spring" as const, stiffness: 400, damping: 10 } 
  },
  whileTap: { 
    scale: 0.96, 
    transition: { type: "spring" as const, stiffness: 400, damping: 10 } 
  },
}

export const scaleTap = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.96 },
}

// ─── Infinite Animations ─────────────────────────────────────────────────────

export const floatingCard = (delay = 0) => ({
  animate: {
    y: [0, -15, 0],
    transition: { 
      duration: 5, 
      repeat: Infinity, 
      ease: 'easeInOut' as const, 
      delay 
    },
  },
})

export const parallaxFloat = (delay = 0) => ({
  animate: {
    y: [0, -25, 0],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay
    }
  }
})

// Legacy support
export const cardHoverProps = cardHover
export const floatingAnimation = floatingCard