'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { staggerContainer, fadeUp, slideInRight, buttonTap, scaleIn } from '@/lib/animations'
import { CheckCircle2, ShoppingCart, CreditCard, Receipt, BarChart3, Users, Zap, LayoutDashboard } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import ProductImagePreview from '@/components/shared/ProductImagePreview'
import Link from 'next/link'

const FEATURES = [
  { text: 'Quick checkout your team can learn fast', icon: Zap },
  { text: 'Items and categories you set up once', icon: Receipt },
  { text: 'Discounts, taxes, and simple promos', icon: CreditCard },
  { text: 'Customer names when you want them', icon: Users },
  { text: 'Cash, card, and split payments', icon: CreditCard },
  { text: 'End-of-day sales you can trust', icon: BarChart3 },
]

/* 
  POSTerminalMockup REPLACED WITH GENERATED IMAGE ASSET
function POSTerminalMockup() {
  const [cartCount, setCartCount] = useState(2)
  const [isPaid, setIsPaid] = useState(false)
  
  const itemGrid = [
    'Espresso', 'Cappuccino', 'Latte', 
    'Americano', 'Croissant', 'Toast', 
    'Salad', 'Burger', 'Fries'
  ]

  const handlePay = () => {
    setIsPaid(true)
    setTimeout(() => setIsPaid(false), 3000)
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden relative"
    >
      <AnimatePresence>
        {isPaid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
              className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-4"
            >
              <CheckCircle2 size={32} />
            </motion.div>
            <h4 className="text-xl font-black text-slate-900">Payment Successful</h4>
            <p className="text-sm text-slate-500">Receipt sent to customer</p>
          </motion.div>
        )}
      </AnimatePresence>

      // Top bar
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-50 bg-slate-50/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <span className="ml-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">ProwlerPOS Interface</span>
      </div>

      <div className="flex flex-col md:flex-row">
        // Item grid
        <div className="flex-1 p-5 grid grid-cols-3 gap-3 border-r border-slate-50">
          {itemGrid.map((item, i) => (
            <motion.div
              key={item}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                boxShadow: '0 10px 15px -3px rgba(36, 107, 245, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCartCount(prev => prev + 1)}
              className={`aspect-square rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 p-2 border border-slate-100 ${
                i === 4 ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 border-transparent' : 'bg-slate-50 text-slate-700'
              }`}
            >
              <span className={`text-[10px] font-bold leading-tight`}>
                {item}
              </span>
              {(i === 4 || i === 0) && <span className={`text-[8px] mt-1 opacity-70`}>$4.50</span>}
            </motion.div>
          ))}
        </div>

        // Order panel
        <div className="w-full md:w-48 p-5 flex flex-col bg-slate-50/30">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Order</div>
            <div className="relative">
              <ShoppingCart size={14} className="text-slate-400" />
              <motion.span 
                key={cartCount}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--primary)] text-white text-[8px] font-black rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            </div>
          </div>
          
          <div className="flex-1 space-y-3 mb-6">
            {[
              { name: 'Double Smash Burger', price: '$14.50' },
              { name: 'Truffle Fries', price: '$6.50' },
            ].map((item) => (
              <div key={item.name} className="flex justify-between items-start gap-2">
                <span className="text-[11px] font-bold text-slate-700 leading-tight">{item.name}</span>
                <span className="text-[11px] font-black text-slate-900 flex-shrink-0">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 mb-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-400">Total</span>
              <span className="text-xl font-black text-slate-900">$21.00</span>
            </div>
          </div>

          <motion.button
            variants={buttonTap}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={handlePay}
            className="w-full py-3.5 bg-[var(--primary)] text-white font-black text-[10px] rounded-xl uppercase tracking-widest shadow-lg shadow-[var(--primary)]/25 flex items-center justify-center gap-2"
          >
            <CreditCard size={12} />
            <span>Pay Now</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
*/

export default function POSSystemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pos-system" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: mockup */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 left-4 sm:-top-6 sm:-left-6 z-10 inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 uppercase tracking-widest"
            >
              <LayoutDashboard size={14} className="text-[var(--primary)]" />
              POS screen
            </motion.div>
            <ProductImagePreview 
              src="/images/Prowler-pos-interface.svg" 
              alt="ProwlerPOS Interface" 
            />
            {/* 
              POSTerminalMockup replaced with image
              <POSTerminalMockup /> 
            */}
          </div>

          {/* Right: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-4">
              Point of sale
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
              Make checkout <br className="hidden sm:block" />{" "}faster and easier.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] leading-relaxed mb-10 font-medium">
              Add items, apply discounts, collect payments, print receipts, and keep sales records without stress. ProwlerPOS helps your staff serve customers faster at the counter.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-8 mb-10 sm:mb-12">
              {FEATURES.map((f, i) => (
                <motion.div key={i} variants={slideInRight} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
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
                  className="px-8 py-4 bg-[var(--foreground)] text-white font-black text-sm rounded-2xl shadow-xl hover:bg-black transition-all block"
                >
                  Book Demo
                </Link>
              </MagneticButton>
              <Link href="/pos" className="text-sm font-black text-[var(--muted)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">
                See Features →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
