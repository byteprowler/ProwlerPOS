'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, fadeUp, scaleIn, buttonTap } from '@/lib/animations'
import { PRICING_PLANS } from '@/lib/landing-data'
import { Check, ArrowRight, Zap } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'

export default function PricingSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-24"
        >
          <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-4">Pricing</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-6xl font-black text-[var(--foreground)] tracking-tighter mb-8 leading-tight">
            Simple plans for growing businesses.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            Book a demo to talk through the right setup for your restaurant, café, supermarket, or store.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={`relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 border transition-all duration-500 flex flex-col h-full ${
                plan.highlight 
                  ? 'border-[var(--primary)] shadow-[0_48px_80px_-16px_rgba(36,107,245,0.15)] sm:scale-105 z-10' 
                  : 'border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-[var(--primary)]/20">
                  <Zap size={12} fill="white" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-black text-[var(--foreground)] mb-2 uppercase tracking-tighter">{plan.name}</h3>
                <p className="text-sm text-[var(--muted)] font-medium mb-8 leading-relaxed">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <>
                      <span className="text-4xl font-black text-[var(--foreground)]">${plan.monthlyPrice}</span>
                      <span className="text-sm font-bold text-slate-400">/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black text-[var(--foreground)] tracking-tighter">{plan.monthlyPrice}</span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'bg-slate-50 text-slate-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-slate-600 leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton strength={plan.highlight ? 20 : 10}>
                <Link
                  href={plan.ctaHref}
                  className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    plan.highlight 
                      ? 'bg-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30 hover:bg-[var(--primary-hover)]' 
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <motion.div 
                    variants={buttonTap}
                    initial="initial"
                    whileHover="whileHover"
                    whileTap="whileTap"
                    className="flex items-center gap-2"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-[10px] font-black text-slate-400 uppercase tracking-widest"
        >
          Need something custom?{' '}
          <Link href="/book-demo" className="text-[var(--primary)] hover:underline">
            Book a demo and we will help you choose
          </Link>
          .
        </motion.p>
      </div>
    </section>
  )
}
