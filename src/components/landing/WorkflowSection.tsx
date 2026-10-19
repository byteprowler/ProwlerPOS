'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, scaleIn } from '@/lib/animations'
import { WORKFLOW_STEPS } from '@/lib/landing-data'
import { Smartphone, ChefHat, ArrowRight, Monitor } from 'lucide-react'

const ICON_MAP: Record<string, any> = {
  waiter: Smartphone,
  pos: Monitor,
  kds: ChefHat,
}

export default function WorkflowSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 bg-[var(--foreground)] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          className="text-center mb-24"
        >
          <motion.span variants={fadeUp} className="text-[var(--primary)] font-black text-xs tracking-[0.3em] uppercase mb-4 block">How orders move</motion.span>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-[1.1] sm:leading-tight">
            From the table <br className="hidden sm:block" />{" "}to the <span className="text-[var(--primary)]">kitchen screen</span>.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
            Staff take the order once, the kitchen sees it right away, and everyone works from the same list.
          </motion.p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-white/5 hidden md:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]"
              initial={{ width: '0%', opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
            />
            {/* Moving Glow Dot */}
            <motion.div 
              animate={{ 
                left: ['0%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear",
                times: [0, 0.5, 1]
              }}
              className="absolute top-1/2 -translate-y-1/2 w-20 h-4 bg-[var(--primary)] blur-md rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {WORKFLOW_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.id]
              return (
                <motion.div 
                  key={step.id}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-3xl ${step.bgColor} ${step.borderColor} border backdrop-blur-sm flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl`}>
                    <Icon 
                      size={32} 
                      strokeWidth={2.5} 
                      style={{ color: step.iconColor === 'var(--primary)' ? 'var(--primary)' : 'var(--foreground)' }} 
                    />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white text-[var(--foreground)] rounded-full flex items-center justify-center text-xs font-black shadow-lg border border-slate-100">
                      {step.step}
                    </div>
                  </div>

                  <motion.h3 variants={fadeUp} className="text-xl font-black mb-4 tracking-tight">{step.title}</motion.h3>
                  <motion.p variants={fadeUp} className="text-slate-400 text-sm leading-relaxed font-medium px-4">
                    {step.desc}
                  </motion.p>
                  
                  {/* Mobile Arrow */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="md:hidden mt-8 text-white/20">
                      <ArrowRight className="rotate-90" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
