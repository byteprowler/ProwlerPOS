'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  UserPlus, 
  ChefHat, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  Clock,
  ArrowDown
} from 'lucide-react'

const StoryStep = ({ 
  index, 
  icon: Icon, 
  title, 
  description, 
  active = false, 
  isLast = false 
}: { 
  index: number, 
  icon: any, 
  title: string, 
  description: string, 
  active?: boolean,
  isLast?: boolean
}) => {
  return (
    <div className="relative flex items-start gap-4 sm:gap-8 mb-16 sm:mb-20 last:mb-0">
      {/* Icon & Connector */}
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] sm:rounded-[1.5rem] flex items-center justify-center relative z-10 transition-colors duration-500 ${
            active ? 'bg-[var(--primary)] text-white shadow-2xl shadow-[var(--primary)]/30' : 'bg-slate-50 text-slate-400 border border-slate-100'
          }`}
        >
          <Icon size={20} className="sm:size-6" strokeWidth={2.5} />
          {active && (
            <motion.div 
              layoutId="active-glow"
              className="absolute inset-0 rounded-[1rem] sm:rounded-[1.5rem] bg-[var(--primary)] blur-xl opacity-30 -z-10"
            />
          )}
        </motion.div>
        
        {!isLast && (
          <div className="w-0.5 h-full min-h-[100px] bg-slate-100 relative">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 w-full bg-[var(--primary)]/30 transition-all duration-1000"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pt-2"
      >
        <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Step 0{index + 1}</div>
        <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-2 sm:mb-3 transition-colors duration-500 ${active ? 'text-[var(--foreground)]' : 'text-slate-400'}`}>
          {title}
        </h3>
        <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-sm">
          {description}
        </p>

        {/* Visual Preview Placeholder */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
        >
          {index === 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500"><CheckCircle2 size={16} /></div>
                  <span className="text-xs font-bold text-slate-700">Truffle Burger</span>
                </div>
                <span className="text-xs font-black text-slate-400">$18.00</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-[var(--primary)] uppercase tracking-widest pl-2">
                <Clock size={12} />
                <span>Just Started</span>
              </div>
            </div>
          )}
          {index === 1 && (
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden"><img src="https://i.pravatar.cc/100?img=32" alt="Waiter" /></div>
                <div>
                  <p className="text-xs font-black text-[var(--foreground)]">Waiter app</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sending to kitchen…</p>
                </div>
              </div>
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-2 bg-slate-50 rounded-full overflow-hidden"
              >
                <motion.div 
                  animate={{ left: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"
                />
              </motion.div>
            </div>
          )}
          {index === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="h-1 w-full bg-slate-100 rounded-full" />
                <div className="h-1 w-2/3 bg-slate-100 rounded-full" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-emerald-50 p-3 rounded-xl border border-emerald-100 flex flex-col items-center justify-center text-emerald-600"
              >
                <ChefHat size={20} className="mb-1" />
                <span className="text-[10px] font-black uppercase">Ready</span>
              </motion.div>
            </div>
          )}
          {index === 3 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-[var(--primary)]" />
                <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Processing</span>
              </div>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="px-3 py-1 bg-emerald-500 text-white rounded-lg text-[9px] font-black uppercase tracking-widest"
              >
                Success
              </motion.div>
            </div>
          )}
          {index === 4 && (
            <div className="flex items-end gap-1 h-12">
              {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="flex-1 bg-[var(--primary)]/20 rounded-t-sm"
                />
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function ProductStory() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 200 })

  const steps = [
    {
      icon: UserPlus,
      title: 'Order starts',
      description: 'A customer orders at the counter or a table. Your staff enters items on the POS or the waiter app.'
    },
    {
      icon: Smartphone,
      title: 'Waiters send orders',
      description: 'In restaurants, waiters can take orders at the table and send them straight to the kitchen screen.'
    },
    {
      icon: ChefHat,
      title: 'Kitchen sees the ticket',
      description: 'If you serve food, cooks read the screen and move orders from new to cooking to ready.'
    },
    {
      icon: CreditCard,
      title: 'Take payment',
      description: 'When the sale is finished, checkout happens on the POS with the payment types you accept.'
    },
    {
      icon: BarChart3,
      title: 'Check the day',
      description: 'Owners and managers see what was sold, how much money came in, and how the business performed for the day.'
    }
  ]

  return (
    <section id="how-it-works" ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-bold text-xs tracking-widest uppercase mb-8">
              <span>How it works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] tracking-tight leading-tight mb-6 sm:mb-8">
              From order to payment <br /> in <span className="text-[var(--primary)]">plain steps</span>.
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-xl leading-relaxed">
              ProwlerPOS keeps sales, orders, and the kitchen on the same page. Your team spends less time chasing tickets and more time helping customers.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--foreground)] text-white font-black text-xs rounded-2xl hover:bg-black transition-all uppercase tracking-widest group shadow-2xl"
              >
                <span>Book Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Steps Animation */}
          <div className="relative">
            {steps.map((step, i) => (
              <StoryStep 
                key={i}
                index={i}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={i === steps.length - 1}
                active={true} // For simplicity, all visible are active in this vertical layout
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
