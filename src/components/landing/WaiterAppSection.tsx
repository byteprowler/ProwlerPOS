'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { staggerContainer, fadeUp, slideInRight, scaleIn, buttonTap } from '@/lib/animations'
import { Smartphone, LayoutGrid, PlusCircle, Send, CheckCircle2, Map, Users2, Clock, SmartphoneIcon } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import ProductImagePreview from '@/components/shared/ProductImagePreview'
import Link from 'next/link'

const FEATURES = [
  { text: 'Table ordering from any device', icon: Smartphone },
  { text: 'Add modifiers and special notes', icon: PlusCircle },
  { text: 'Send orders directly to kitchen', icon: Send },
  { text: 'Track order status live', icon: Clock },
  { text: 'Fewer mistakes, faster service', icon: CheckCircle2 },
]

/* 
  WaiterAppMockup REPLACED WITH GENERATED IMAGE ASSET
function WaiterAppMockup() {
  ...
}
*/

export default function WaiterAppSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="waiter-app" ref={ref} className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-4">
              Waiter app
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
              Take table orders <br className="hidden sm:block" />{" "}without running around.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] leading-relaxed mb-10 font-medium">
              Waiters can take orders from the table and send them straight to the kitchen. This reduces mistakes, saves time, and helps customers get served faster.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 mb-10 sm:mb-12">
              {FEATURES.map((f, i) => (
                <motion.div key={i} variants={slideInRight} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[var(--foreground)] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-colors">
                    <f.icon size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{f.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8">
              <MagneticButton strength={20}>
                <Link
                  href="/book-demo"
                  className="px-8 py-4 bg-[var(--primary)] text-white font-black text-sm rounded-2xl shadow-xl shadow-[var(--primary)]/20 hover:bg-[var(--primary-hover)] transition-all block"
                >
                  Book Demo
                </Link>
              </MagneticButton>
              <Link href="/waiter" className="text-sm font-black text-[var(--muted)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">
                See Features →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: mockup */}
          <div className="relative order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 right-4 sm:-top-6 sm:-right-6 z-10 inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 uppercase tracking-widest"
            >
              <SmartphoneIcon size={14} className="text-[var(--primary)]" />
              Live Waiter App
            </motion.div>
            <ProductImagePreview 
              src="/images/Prowler-waiter-app.svg" 
              alt="ProwlerPOS Waiter App" 
              className="max-w-[320px] mx-auto"
            />
            {/* 
              WaiterAppMockup replaced with image
              <WaiterAppMockup /> 
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
