'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'
import { UtensilsCrossed, ShoppingBag, Zap, Store, Truck, Beer, ChevronRight } from 'lucide-react'

const BUSINESS_TYPES = [
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: ShoppingBag, label: 'Stores' },
  { icon: Store, label: 'Supermarkets' },
  { icon: Zap, label: 'Cafés & Bakeries' },
  { icon: Beer, label: 'Bars & Lounges' },
  { icon: Truck, label: 'Food Trucks' },
  { icon: Store, label: 'Shops' },
]

export default function BusinessTypesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="business-types" ref={ref} className="py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-4">Who it is for</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] tracking-tighter mb-6">
            Built for busy places that serve food or sell goods
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you run a dining room, a shop floor, or a market aisle, ProwlerPOS speaks the same language as your staff and your customers.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 sm:gap-6"
        >
          {BUSINESS_TYPES.map((biz, i) => (
            <motion.div
              key={biz.label}
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--primary)',
                borderColor: 'var(--primary)',
                boxShadow: '0 20px 25px -5px rgba(36, 107, 245, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <biz.icon size={22} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-black text-slate-700 group-hover:text-white transition-colors whitespace-nowrap uppercase tracking-widest">
                {biz.label}
              </span>
              <ChevronRight size={14} className="text-slate-300 group-hover:text-white/50 group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 pt-12 border-t border-slate-200/60"
        >
          <p className="text-[10px] font-black text-slate-400 mb-8 uppercase tracking-[0.4em] text-center">Teams we love supporting</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale">
            {['Restaurants', 'Stores', 'Supermarkets', 'Cafés', 'Food trucks', 'Shops'].map((name) => (
              <span key={name} className="text-xs font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
