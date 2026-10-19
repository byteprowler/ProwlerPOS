'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import SectionHeader from '@/components/shared/SectionHeader'
import FeatureCard from '@/components/shared/FeatureCard'
import { REPORTS_FEATURES } from '@/lib/landing-data'
import MagneticButton from '@/components/animations/MagneticButton'
import Link from 'next/link'
import { TrendingUp, ArrowUpRight, ArrowDownRight, BarChart3, PieChart, Activity, ArrowRight, LayoutDashboard } from 'lucide-react'
import ProductImagePreview from '@/components/shared/ProductImagePreview'

/* 
  ReportsMockup REPLACED WITH GENERATED IMAGE ASSET
function ReportsMockup({ inView }: { inView: boolean }) {
  ...
}
*/

export default function ReportsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen pt-40 pb-40 bg-[#F9FAFB] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <SectionHeader
          badge="Reports"
          title="See sales and payments without the spreadsheet."
          subtitle="See what was sold, how much money came in, and which items are doing well for the day."
          align="center"
        />

        <div className="mb-40 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 left-4 sm:-left-6 z-10 inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 uppercase tracking-widest"
          >
            <LayoutDashboard size={14} className="text-[var(--primary)]" />
            Today&apos;s snapshot
          </motion.div>
          <ProductImagePreview 
            src="/images/Prowler-reports-preview.svg" 
            alt="ProwlerPOS business reports" 
          />
        </div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate={inView ? 'visible' : 'hidden'} 
          className="mb-40"
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h3 className="text-3xl sm:text-5xl font-black text-[var(--foreground)] tracking-tighter uppercase">
              Reports that answer everyday questions
            </h3>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REPORTS_FEATURES.map((feature) => (
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
          className="bg-[var(--foreground)] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-6xl font-black text-white mb-10 tracking-tighter">Want clearer numbers at the end of the day?</h3>
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
