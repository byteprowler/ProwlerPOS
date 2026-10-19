'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import SectionHeader from '@/components/shared/SectionHeader'
import FeatureCard from '@/components/shared/FeatureCard'
import { FEATURE_CATEGORIES } from '@/lib/landing-data'
import { CheckCircle2 } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import Link from 'next/link'

export default function FeaturesPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen pt-32 pb-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <SectionHeader
          badge="Features"
          title="Everything you need in one simple POS."
          subtitle="Checkout, table orders, kitchen screen, stock, payments, and business reports — explained in plain language."
          align="center"
        />

        {/* Feature Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-32 mt-20"
        >
          {FEATURE_CATEGORIES.map((category, idx) => (
            <div key={category.category} className="scroll-mt-32">
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-[var(--foreground)] text-white flex items-center justify-center shadow-2xl shadow-black/20">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl sm:text-4xl font-black text-[var(--foreground)] tracking-tighter uppercase">
                    {category.category}
                  </h2>
                </div>
                <div className="hidden sm:block h-px flex-1 bg-slate-200" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.features.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    title={feature.title}
                    desc={feature.desc}
                    icon={<CheckCircle2 size={18} strokeWidth={3} />}
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 sm:mt-40 bg-[var(--foreground)] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tighter">Want to see it for your business?</h3>
            <p className="text-lg text-white/40 mb-12 font-medium max-w-xl mx-auto">Book a demo and we will walk through orders, payments, and reports with you.</p>
            <div className="flex justify-center">
              <MagneticButton strength={20}>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--primary)] text-white font-black text-sm rounded-2xl hover:bg-[var(--primary-hover)] transition-all shadow-2xl shadow-[var(--primary)]/30 uppercase tracking-[0.2em]"
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
