'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { staggerContainer, fadeUp, slideInRight, scaleIn, buttonTap } from '@/lib/animations'
import { ChefHat, Monitor, Ticket, Clock, CheckCircle2, AlertCircle, Play, ArrowRight, MonitorPlay } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import ProductImagePreview from '@/components/shared/ProductImagePreview'
import Link from 'next/link'

const FEATURES = [
  { text: 'New orders show up right away', icon: Ticket },
  { text: 'New, cooking, and ready in plain columns', icon: Play },
  { text: 'Special notes stay easy to read', icon: AlertCircle },
  { text: 'Bump urgent tickets to the top', icon: Clock },
  { text: 'Less paper on the line', icon: CheckCircle2 },
]

const TICKETS_DATA = [
  {
    id: '#882',
    table: 'T4',
    time: '08:12',
    status: 'new',
    items: [
      { name: '1x Classic Burger', mod: '— No Onions, Extra Cheese' },
      { name: '2x Caesar Salad', mod: null },
    ],
  },
  {
    id: '#883',
    table: 'T2',
    time: '06:45',
    status: 'preparing',
    items: [
      { name: '1x Ribeye Steak', mod: '— Medium Rare' },
      { name: '2x Truffle Fries', mod: null },
    ],
  },
  {
    id: '#879',
    table: 'T6',
    time: '02:10',
    status: 'ready',
    items: [
      { name: '3x Pasta Carbonara', mod: null },
    ],
  },
]

const statusConfig: Record<string, { label: string; timerBg: string; timerText: string; border: string; dot: string; glow: string }> = {
  new: { label: 'New', timerBg: 'bg-rose-500', timerText: 'text-white', border: 'border-rose-500/30', dot: 'bg-rose-500', glow: 'shadow-rose-500/20' },
  preparing: { label: 'Preparing', timerBg: 'bg-amber-400', timerText: 'text-slate-900', border: 'border-amber-500/30', dot: 'bg-amber-400', glow: 'shadow-amber-500/20' },
  ready: { label: 'Ready', timerBg: 'bg-[var(--primary)]', timerText: 'text-white', border: 'border-[var(--primary)]/30', dot: 'bg-[var(--primary)]', glow: 'shadow-[var(--primary)]/20' },
}

/* 
  KDSDisplayMockup REPLACED WITH GENERATED IMAGE ASSET
function KDSDisplayMockup() {
  const [tickets, setTickets] = useState(TICKETS_DATA)
  
  // Simulated ticket movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTickets(prev => {
        const next = [...prev]
        const firstNew = next.find(t => t.status === 'new')
        if (firstNew) {
          firstNew.status = 'preparing'
        } else {
          // Reset for demo purposes if all are prep/ready
          return TICKETS_DATA.map(t => ({...t}))
        }
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-[var(--foreground)] rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] overflow-hidden border border-white/5"
    >
      // <div className="flex items-center justify-between px-6 py-5 bg-white/5 border-b border-white/5">
      //   <div className="flex items-center gap-3">
      //     <div className="w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white shadow-lg shadow-[var(--primary)]/20">
      //       <Monitor size={18} strokeWidth={2.5} />
      //     </div>
      //     <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">KDS Dashboard</span>
      //   </div>
      //   <div className="flex items-center gap-4">
      //     <div className="flex items-center gap-2">
      //       <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      //       <span className="text-[10px] font-bold text-white/40 uppercase">System Live</span>
      //     </div>
      //   </div>
      // </div>

      //    <div className="p-6">
      //   <div className="grid grid-cols-3 gap-4 h-[320px]">
      //     <AnimatePresence mode="popLayout">
      //       {tickets.map((ticket, i) => {
      //         const cfg = statusConfig[ticket.status]
//               return (
//                 <motion.div
//                   key={ticket.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 0.8, x: 20 }}
//                   whileHover={{ 
//                     y: -8, 
//                     boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
//                     borderColor: 'rgba(255,255,255,0.2)'
//                   }}
//                   className={`bg-white/5 rounded-2xl p-4 border ${cfg.border} backdrop-blur-sm transition-colors duration-300 relative group cursor-pointer h-fit`}
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <div className="text-xs font-black text-white tracking-widest">{ticket.id}</div>
//                       <div className="text-[9px] font-bold text-white/30 uppercase mt-1">Table {ticket.table}</div>
//                     </div>
//                     <div className={`${cfg.timerBg} ${cfg.timerText} text-[9px] font-black px-2 py-1 rounded-lg shadow-lg ${cfg.glow}`}>
//                       {ticket.time}
//                     </div>
//                   </div>
                  
//                   <div className="space-y-3 mb-5 min-h-[60px]">
//                     {ticket.items.map((item, idx) => (
//                       <div key={idx} className="group-hover:translate-x-1 transition-transform duration-300">
//                         <div className="text-[11px] font-bold text-white/90">{item.name}</div>
//                         {item.mod && <div className="text-[9px] font-bold text-white/30 italic mt-0.5">{item.mod}</div>}
//                       </div>
//                     ))}
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
//                     <div className="flex items-center gap-2">
//                       <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot} shadow-[0_0_8px] shadow-inherit`} />
//                       <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{cfg.label}</span>
//                     </div>
//                     <ArrowRight size={10} className="text-white/20 group-hover:text-white/60 transition-colors" />
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       { Footer / Stats}
//       <div className="flex items-center justify-between px-6 py-5 bg-black/20 border-t border-white/5">
//         <div className="flex gap-8">
//           {[
//             { val: '04', label: 'In Prep', color: 'text-amber-400' },
//             { val: '12', label: 'Done', color: 'text-[var(--primary)]' },
//           ].map((stat, i) => (
//             <div key={i} className="flex items-baseline gap-2">
//               <span className={`text-sm font-black ${stat.color}`}>{stat.val}</span>
//               <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{stat.label}</span>
//             </div>
//           ))}
//         </div>
//         <div className="text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">ProwlerPOS KDS v2.0</div>
//       </div>
//     </motion.div>
//   )
// }
*/

export default function KDSSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="kds" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={fadeUp} className="text-xs font-black uppercase tracking-[0.2em] text-[var(--primary)] mb-4">
              Kitchen screen
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-[var(--foreground)] leading-[1.1] tracking-tight mb-6">
              Let the kitchen know <br className="hidden sm:block" />{" "}what to prepare.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[var(--muted)] leading-relaxed mb-10 font-medium">
              The kitchen screen shows new orders as soon as they are sent. Cooks can see what to prepare, what is still pending, and what is ready to serve.
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
                  className="px-8 py-4 bg-[var(--foreground)] text-white font-black text-sm rounded-2xl shadow-xl hover:bg-black transition-all block"
                >
                  Book Demo
                </Link>
              </MagneticButton>
              <Link href="/kds" className="flex items-center gap-2 text-sm font-black text-[var(--muted)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">
                <ChefHat size={18} className="text-[var(--primary)]" />
                <span>Kitchen display →</span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 right-4 sm:-top-6 sm:-right-6 z-10 inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 uppercase tracking-widest"
            >
              <MonitorPlay size={14} className="text-[var(--primary)]" />
              Kitchen Display Interface
            </motion.div>
            <ProductImagePreview 
              src="/images/Prowler-kds-preview.svg" 
              alt="ProwlerPOS Kitchen Display" 
            />
            {/* 
              KDSDisplayMockup replaced with image
              <KDSDisplayMockup /> 
            */}
            
            {/* Floating Accents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Orders stay organized</div>
                  <div className="text-[10px] font-bold text-emerald-600 uppercase">Everyone sees the same queue</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
