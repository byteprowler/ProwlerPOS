'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import MagneticButton from '@/components/animations/MagneticButton'
import { Rocket, Calendar, CheckCircle2 } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cta" ref={ref} className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative bg-[var(--foreground)] rounded-[2rem] sm:rounded-[3rem] overflow-hidden px-6 py-16 sm:px-16 sm:py-24 text-center shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] border border-white/5"
        >
          {/* Animated background blobs */}
          <motion.div
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--primary)]/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 60, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[var(--primary)] text-xs font-black uppercase tracking-[0.3em] mb-8">
                <Rocket size={14} />
                <span>We are here to help</span>
              </motion.div>
              
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 sm:mb-8 leading-[1.1] sm:leading-[0.95]">
                Ready to run sales, orders, and reports <br className="hidden sm:block" />{" "}
                <span className="text-[var(--primary)]">from one simple system?</span>
              </motion.h2>
              
              <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/40 max-w-2xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed">
                Book a short demo and we will show you how ProwlerPOS fits your restaurant, café, supermarket, or store.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <MagneticButton strength={20} className="w-full sm:w-auto">
                  <Link
                    href="/book-demo"
                    className="flex items-center justify-center gap-2 px-10 py-5 bg-[var(--primary)] text-white font-black text-base rounded-2xl shadow-2xl shadow-[var(--primary)]/40 hover:bg-[var(--primary-hover)] transition-all uppercase tracking-widest w-full sm:w-auto"
                  >
                    <Calendar size={18} />
                    <span>Book Demo</span>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={15} className="w-full sm:w-auto">
                  <Link
                    href="/features"
                    className="flex items-center justify-center gap-2 px-10 py-5 bg-white/5 text-white font-black text-base rounded-2xl border border-white/10 hover:bg-white/10 transition-all uppercase tracking-widest backdrop-blur-sm w-full sm:w-auto"
                  >
                    <span>See Features</span>
                  </Link>
                </MagneticButton>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Works on tablets and PCs you already own</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Friendly onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <span>Built for busy teams</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
