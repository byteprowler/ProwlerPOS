'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import SectionHeader from '@/components/shared/SectionHeader'
import FeatureCard from '@/components/shared/FeatureCard'
import { POS_FEATURES } from '@/lib/landing-data'
import FloatingCard from '@/components/animations/FloatingCard'
import MagneticButton from '@/components/animations/MagneticButton'
import Link from 'next/link'
import { Receipt, Smartphone, CheckCircle2, ArrowRight, Monitor, AppWindow } from 'lucide-react'
import ProductImagePreview from '@/components/shared/ProductImagePreview'

/* 
  POSMockup REPLACED WITH GENERATED IMAGE ASSET
function POSMockup() {
  ...
}
*/

export default function POSPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen pt-40 pb-40 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <SectionHeader
          badge="POS"
          title="Checkout that works for restaurants and stores."
          subtitle="Add items, collect payments, and keep sales records from one screen. ProwlerPOS helps your team serve customers faster at the register."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center order-2 lg:order-1 relative"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -left-6 z-10 inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 uppercase tracking-widest"
            >
              <AppWindow size={14} className="text-[var(--primary)]" />
              POS screen
            </motion.div>
            <ProductImagePreview 
              src="/images/Prowler-pos-interface.svg" 
              alt="ProwlerPOS Interface" 
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate={inView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <motion.p variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
              At the register
            </motion.p>
            <motion.h3 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] tracking-tighter mb-10 leading-tight">
              Keep the line moving with fewer taps.
            </motion.h3>
            <div className="space-y-6">
              {POS_FEATURES.slice(0, 4).map((feature, i) => (
                <motion.div key={feature.title} variants={fadeUp} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[var(--foreground)] mb-2 tracking-tight">{feature.title}</h4>
                    <p className="text-base text-[var(--muted)] font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          className="mb-40"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h3 className="text-2xl sm:text-5xl font-black text-[var(--foreground)] tracking-tighter">
              More POS features in plain language
            </h3>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POS_FEATURES.map((feature) => (
              <FeatureCard 
                key={feature.title} 
                icon={feature.icon} 
                title={feature.title} 
                desc={feature.desc} 
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={inView ? { opacity: 1, scale: 1 } : {}} 
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="bg-[var(--foreground)] rounded-[3rem] p-12 sm:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-6xl font-black text-white mb-10 tracking-tighter">Want faster checkout for your team?</h3>
            <div className="flex justify-center">
              <MagneticButton strength={20}>
                <Link 
                  href="/book-demo" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--primary)] text-white font-black text-sm rounded-2xl hover:bg-[var(--primary-hover)] transition-all shadow-2xl shadow-[var(--primary)]/40 uppercase tracking-[0.2em]"
                >
                  Book Demo
                </Link>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
