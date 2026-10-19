'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import SectionHeader from '@/components/shared/SectionHeader'
import MagneticButton from '@/components/animations/MagneticButton'
import Link from 'next/link'
import { PRICING_PLANS } from '@/lib/landing-data'
import { Check, ChevronDown, Zap, ArrowRight, HelpCircle } from 'lucide-react'

const FAQS = [
  { q: 'Can I change plans later?', a: 'Yes. When pricing is available you can move between plans as your business grows. Book a demo and we will explain how that works.' },
  { q: 'Do you support more than one location?', a: 'We can walk through multi-location setups on a demo and recommend the best fit.' },
  { q: 'Is hardware included?', a: 'Hardware is usually bought separately. ProwlerPOS runs on common tablets and PCs many businesses already own.' },
  { q: 'How do I get started?', a: 'Book a demo. We will show you checkout, table orders, the kitchen screen, and reports, then help you pick the right plan.' },
]

export default function PricingPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-40 pb-40 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <SectionHeader
          badge="Pricing"
          title="Pricing for your business."
          subtitle="We build custom setups for restaurants, cafés, supermarkets, and stores. Book a demo to discuss the right plan for your business."
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="text-center text-sm font-bold text-[var(--muted)] max-w-2xl mx-auto mb-16"
        >
          Every plan below depends on your specific setup. We will explain costs clearly before you buy.
        </motion.p>

        {/* Pricing cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40"
        >
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={`relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border transition-all duration-500 flex flex-col h-full ${
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
                <p className="text-sm text-[var(--muted)] font-medium mb-8 leading-relaxed min-h-[3rem]">{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  {typeof plan.monthlyPrice === 'number' ? (
                    <>
                      <span className="text-5xl font-black text-[var(--foreground)] tracking-tighter">${plan.monthlyPrice}</span>
                      <span className="text-sm font-bold text-slate-400">/mo</span>
                    </>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-black text-[var(--foreground)] tracking-tight leading-tight">
                      {plan.monthlyPrice}
                    </span>
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
                  <span>{plan.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-[var(--foreground)] text-white flex items-center justify-center shadow-2xl">
                <HelpCircle size={32} />
              </div>
            </div>
            <h2 className="text-2xl sm:text-5xl font-black text-[var(--foreground)] mb-6 tracking-tighter uppercase">Frequently Asked Questions</h2>
            <p className="text-lg text-[var(--muted)] font-medium max-w-xl mx-auto">Straight answers about plans, hardware, and getting started.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5">
                  <button
                    className="w-full px-6 py-6 sm:px-10 sm:py-8 flex items-center justify-between text-left group"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className={`text-lg font-black tracking-tight transition-colors ${isOpen ? 'text-[var(--primary)]' : 'text-[var(--foreground)]'}`}>{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-8 sm:px-10 sm:pb-10 pt-0 text-base text-[var(--muted)] font-medium leading-relaxed border-t border-slate-50 mt-2 pt-8">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
