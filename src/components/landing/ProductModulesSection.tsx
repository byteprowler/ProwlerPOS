'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import { Monitor, Smartphone, ChefHat, CheckCircle2, ArrowRight } from 'lucide-react'

const MODULES = [
  {
    id: 'pos',
    badge: 'Checkout',
    audience: 'For everyday sales and checkout.',
    title: 'POS System',
    desc: 'Ring up sales, take payments, print receipts, apply discounts, and keep clear sales records.',
    icon: Monitor,
    href: '/pos',
    ctaText: 'See POS System',
    ctaLabel: 'See POS System features',
    stats: [
      { val: 'Checkout', label: 'Fast sales' },
      { val: 'Receipts', label: 'Print anytime' },
    ],
  },
  {
    id: 'waiter',
    badge: 'Floor',
    audience: 'For table service businesses.',
    title: 'Waiter App',
    desc: 'Waiters can take orders from the table and send them straight to the kitchen, helping reduce mistakes and delays.',
    icon: Smartphone,
    href: '/waiter',
    ctaText: 'See Waiter App',
    ctaLabel: 'See Waiter App features',
    stats: [
      { val: 'Table Orders', label: 'Take orders fast' },
      { val: 'Send to Kitchen', label: 'No paper needed' },
    ],
  },
  {
    id: 'kds',
    badge: 'Kitchen',
    audience: 'For food preparation teams.',
    title: 'Kitchen Display',
    desc: 'Kitchen staff can see new orders, track what is being prepared, and mark orders when they are ready.',
    icon: ChefHat,
    href: '/kds',
    ctaText: 'See Kitchen Display',
    ctaLabel: 'See Kitchen Display features',
    stats: [
      { val: 'New Orders', label: 'Show instantly' },
      { val: 'Ready Orders', label: 'Ready to serve' },
    ],
  },
]

export default function ProductModulesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-24"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--foreground)] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <CheckCircle2 size={12} className="text-[var(--primary)]" />
            <span>One system</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-6 sm:mb-8 leading-tight">
            Tools for checkout, table orders, and kitchen teams
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            ProwlerPOS gives every business a simple way to manage sales and payments. Restaurants and cafés can also use the Waiter App and Kitchen Display to move food orders faster.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {MODULES.map((mod, i) => (
            <Link
              key={mod.id}
              href={mod.href}
              className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-[2rem] sm:rounded-[2.5rem]"
              aria-label={mod.ctaLabel}
            >
              <motion.div
                variants={scaleIn}
                whileHover={{
                  y: -12,
                  boxShadow: '0 40px 60px -15px rgba(0,0,0,0.1)'
                }}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 transition-all duration-500 relative flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[var(--primary)]/20 group-hover:-rotate-3">
                    <mod.icon size={28} strokeWidth={2.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors">
                    {mod.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[var(--foreground)] mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors">{mod.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-4">{mod.audience}</p>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-10 font-medium">{mod.desc}</p>

                <div className="mt-auto flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 border-t border-slate-50">
                    {mod.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-2xl font-black text-[var(--foreground)] leading-none">{s.val}</div>
                        <div className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-black text-[var(--primary)] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span>{mod.ctaText}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
