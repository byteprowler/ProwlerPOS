'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import Link from 'next/link'
import { fadeUp, staggerContainer, blurReveal, scaleIn } from '@/lib/animations'
import MagneticButton from '@/components/animations/MagneticButton'
import FloatingCard from '@/components/animations/FloatingCard'
import { Utensils, Coffee, ShoppingBag, Store, Package, CheckCircle2, Zap, Clock, TrendingUp } from 'lucide-react'
import ProductImagePreview from '@/components/shared/ProductImagePreview'

function StatusBadge({ icon: Icon, text, className = '', delay = 0 }: { icon: any, text: string, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-30 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100 text-[10px] font-bold text-[var(--foreground)] uppercase tracking-wider ${className}`}
    >
      <div className="w-4 h-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
        <Icon size={10} strokeWidth={3} />
      </div>
      <span>{text}</span>
    </motion.div>
  )
}

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 })

  const rotateX = useTransform(springY, [-300, 300], [5, -5])
  const rotateY = useTransform(springX, [-300, 300], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      mouseX.set(moveX)
      mouseY.set(moveY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Animated Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: ['-5%', '5%', '-5%'], 
            y: ['-5%', '5%', '-5%'],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[var(--primary)]/10 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            x: ['5%', '-5%', '5%'], 
            y: ['5%', '-5%', '5%'],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[var(--secondary)]/15 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div 
              variants={scaleIn} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-bold text-xs tracking-widest uppercase mb-8 shadow-sm"
            >
              <Zap size={14} className="fill-[var(--primary)]" />
              <span>The Next Generation POS</span>
            </motion.div>
            
            <motion.h1
              variants={blurReveal}
              className="mb-8 max-w-3xl text-4xl font-black leading-[1.1] sm:leading-[1.02] tracking-tight text-[var(--foreground)] sm:text-6xl md:text-7xl"
            >
              Run your restaurant or store with one{" "}
              <span className="text-[var(--primary)]">simple POS.</span>
            </motion.h1>
            
            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-2xl text-lg leading-8 text-neutral-700"
            >
              ProwlerPOS helps restaurants, cafés, supermarkets, marts, and stores take orders, accept payments, and see daily sales reports from one easy system.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <MagneticButton strength={25} className="w-full sm:w-auto">
                <Link
                  href="/book-demo"
                  className="px-10 py-5 bg-[var(--primary)] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[var(--primary)]/20 hover:bg-[var(--primary-hover)] transition-all block text-center w-full sm:w-auto"
                >
                  Book Demo
                </Link>
              </MagneticButton>
              <MagneticButton strength={15} className="w-full sm:w-auto">
                <Link
                  href="/pricing"
                  className="px-10 py-5 bg-white text-[var(--foreground)] font-bold text-lg rounded-2xl shadow-md border border-[var(--border)] hover:bg-slate-50 transition-all block text-center w-full sm:w-auto"
                >
                  View Pricing
                </Link>
              </MagneticButton>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                    className="w-11 h-11 rounded-full border-2 border-[var(--background)] bg-slate-200 overflow-hidden shadow-lg cursor-pointer"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm font-semibold text-[var(--muted)]">
                Built for <span className="text-[var(--foreground)] font-black text-base">busy</span> businesses of all types
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Product Preview Image */}
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative hidden md:block perspective-[1000px] preserve-3d"
          >
            <ProductImagePreview 
              src="/images/prowler-hero-preview.svg" 
              alt="ProwlerPOS Ecosystem Preview" 
              priority={true}
              className="z-20"
            />
            
            {/* Background Glow behind the image */}
            <div className="absolute -inset-10 bg-[var(--primary)]/5 blur-[80px] rounded-full -z-10" />
          </motion.div>

          {/* 
            CARD MOCKUPS REPLACED WITH GENERATED IMAGE ASSETS FOR NOW
            Legacy manual card-based mockups are preserved here for reference but hidden in production.
          */}
          {/*
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative h-[550px] lg:h-[650px] hidden md:block perspective-[1000px] preserve-3d"
          >
            <StatusBadge icon={CheckCircle2} text="Order Success" className="top-[5%] left-[10%]" delay={1.2} />
            <StatusBadge icon={Clock} text="Prep Time: 4m" className="top-[45%] right-[0%]" delay={1.5} />
            <StatusBadge icon={TrendingUp} text="+12% Growth" className="bottom-[10%] left-[0%]" delay={1.8} />

            // Main POS Mockup
            <FloatingCard delay={0} className="absolute top-[12%] right-[8%] w-[420px] z-20">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-6 border border-slate-100/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[var(--primary)] animate-pulse" />
                    <div className="font-black text-sm text-[var(--foreground)] uppercase tracking-widest">Interface 01</div>
                  </div>
                  <div className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full font-black">SYNCED</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 flex flex-col items-center justify-center group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                    <Pizza size={24} className="text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold">Pizza</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 flex flex-col items-center justify-center group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                    <Coffee size={24} className="text-amber-700 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold">Coffee</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 flex flex-col items-center justify-center group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                    <Beer size={24} className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold">Drinks</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 text-center border border-slate-100 flex flex-col items-center justify-center group cursor-pointer hover:bg-white hover:shadow-md transition-all">
                    <Utensils size={24} className="text-rose-500 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold">Mains</p>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[var(--foreground)] text-white p-4 rounded-2xl flex justify-between font-black items-center cursor-pointer shadow-lg"
                >
                  <span className="text-sm">CHECKOUT</span>
                  <span className="text-xl">$48.00</span>
                </motion.div>
              </motion.div>
            </FloatingCard>

            // Waiter Tablet Mockup
            <FloatingCard delay={1.5} className="absolute top-[42%] left-[-2%] w-[260px] z-30">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] p-5 border border-slate-100/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="font-black text-sm text-[var(--foreground)]">TABLE 12</div>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] opacity-30" />
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-[11px] text-slate-500 font-bold p-2.5 bg-slate-50 rounded-xl"><span>2x Burger</span><span>$24.00</span></div>
                  <div className="flex justify-between text-[11px] text-slate-500 font-bold p-2.5 bg-slate-50 rounded-xl"><span>1x Soda</span><span>$4.00</span></div>
                </div>
                <button className="w-full bg-[var(--primary)] text-white text-[10px] font-black py-3 rounded-xl uppercase tracking-widest shadow-lg shadow-[var(--primary)]/20">Send Order</button>
              </motion.div>
            </FloatingCard>

            // KDS Ticket Mockup
            <FloatingCard delay={3} className="absolute bottom-[8%] right-[15%] w-[240px] z-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-[#fffef0] rounded-2xl shadow-xl p-5 border border-amber-100/50 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-amber-200" />
                <div className="flex items-center justify-between mb-4">
                  <div className="font-black text-amber-900 text-sm">#1084</div>
                  <div className="text-[10px] font-black text-white bg-amber-500 px-2 py-0.5 rounded-md shadow-sm">05:22</div>
                </div>
                <div className="border-t border-dashed border-amber-200 my-3" />
                <ul className="text-xs space-y-2.5 font-bold text-amber-900">
                  <li className="flex gap-2"><span>1x</span><span>Truffle Pasta</span></li>
                  <li className="flex gap-2 text-amber-600/70 pl-4 text-[10px] font-semibold italic">+ Extra Parmesan</li>
                  <li className="flex gap-2"><span>2x</span><span>House Salad</span></li>
                </ul>
              </motion.div>
            </FloatingCard>
          </motion.div>
          */}
          
        </div>
      </div>
    </section>
  )
}
