'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, floatingCard } from '@/lib/animations'
import { CheckCircle2, Target } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import ProductImagePreview from '@/components/shared/ProductImagePreview'
import Link from 'next/link'

const FEATURES = [
  'See what sold today',
  'Spot your best items',
  'Know how customers paid',
  'Simple end-of-day totals',
]

export default function ReportsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-4">
              Business reports
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
              Know what is happening <br className="hidden sm:block" />{" "}in your business.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] leading-relaxed mb-10 font-medium">
              See what was sold, how much money came in, which items sold best, and how your business performed for the day.
            </motion.p>
            
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 mb-10 sm:mb-12">
              {FEATURES.map((f, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{f}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-8">
              <MagneticButton strength={20}>
                <Link
                  href="/book-demo"
                  className="px-8 py-4 bg-[var(--foreground)] text-white font-black text-sm rounded-2xl shadow-xl hover:bg-black transition-all block"
                >
                  Book Demo
                </Link>
              </MagneticButton>
              <div className="flex items-center gap-2 text-sm font-black text-[var(--muted)] uppercase tracking-widest">
                <Target size={18} className="text-[var(--primary)]" />
                <span>Clear numbers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Dashboard Mockup */}
          <div className="relative">
            <ProductImagePreview 
              src="/images/Prowler-reports-preview.svg" 
              alt="ProwlerPOS business reports" 
            />
            {/* 
              OLD MOCKUP CODE COMMENTED OUT BELOW
            */}
            {/*
            <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-slate-100 p-8 sm:p-10 relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 border-b border-slate-50 pb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Today&apos;s Revenue</span>
                  </div>
                  <div className="text-5xl font-black text-[var(--foreground)] tracking-tighter">$4,289.50</div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-emerald-600 font-black text-xs bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                  <TrendingUp size={14} />
                  <span>+14.2%</span>
                </div>
              </div>
              
              // Bar Chart
              <div className="h-56 flex items-end gap-3 sm:gap-5 justify-between px-2">
                {bars.map((height, i) => (
                  <div key={i} className="w-full relative group flex flex-col justify-end h-full">
                    // Tooltip on hover
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-white text-[10px] font-black py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mb-1 shadow-xl">
                      ${(height * 45).toLocaleString()}
                    </div>
                    
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${height}%` } : {}}
                      transition={{ 
                        duration: 1, 
                        delay: i * 0.1, 
                        ease: [0.33, 1, 0.68, 1] 
                      }}
                      className={`w-full rounded-t-xl transition-all duration-300 relative overflow-hidden ${
                        i === bars.length - 1 
                        ? 'bg-[var(--primary)] shadow-[0_10px_20px_-5px_rgba(36,107,245,0.4)]' 
                        : 'bg-slate-100 group-hover:bg-slate-200'
                      }`}
                    >
                      // Animated gradient for active bar
                      {i === bars.length - 1 && (
                        <motion.div 
                          animate={{ y: ['0%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-full w-full opacity-30"
                        />
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-6 px-1 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
            
            // Floating Stats Card 1
            <motion.div 
              variants={floatingCard}
              animate="animate"
              className="absolute -top-10 -right-6 bg-[var(--foreground)] text-white p-5 rounded-3xl shadow-2xl border border-slate-800 z-20 min-w-[160px] hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center">
                  <Activity size={16} strokeWidth={2.5} />
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</div>
              </div>
              <div className="text-xl font-black mb-1">Peak Hour</div>
              <div className="text-[10px] font-bold text-[var(--primary)] uppercase">12:30 PM - 2:00 PM</div>
            </motion.div>
 
            // Floating Stats Card 2
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 z-20 min-w-[200px] hidden md:block"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <PieChart size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Best Seller</div>
                  <div className="text-base font-black text-slate-900 mt-0.5">Truffle Burger</div>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={inView ? { width: '84%' } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-indigo-500" 
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase">
                <span>Popularity</span>
                <span className="text-indigo-600">84%</span>
              </div>
            </motion.div>
            */}
          </div>

        </div>
      </div>
    </section>
  )
}
