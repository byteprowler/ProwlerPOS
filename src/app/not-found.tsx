'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { fadeUp, staggerContainer } from '@/lib/animations'
import MagneticButton from '@/components/animations/MagneticButton'
import { useEffect, useState } from 'react';
import { Home, MessageCircle } from 'lucide-react';

function InteractiveTicket() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      className="relative w-full max-w-sm mx-auto h-[400px] perspective-[1000px] flex items-center justify-center cursor-pointer hover-target hidden sm:flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-[280px] bg-white rounded-xl shadow-2xl p-6 relative border border-slate-200"
      >
        {/* Jagged receipt edge top */}
        <div className="absolute -top-1 left-0 right-0 h-2 bg-white" style={{ clipPath: 'polygon(0 100%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)' }} />

        {/* Ticket Content */}
        <div className="text-center mb-6 pt-2">
          <h2 className="text-xl font-black text-[var(--foreground)] tracking-tight uppercase">ProwlerPOS</h2>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em] mt-2">ORDER #404-NOT-FOUND</p>
        </div>

        <div className="space-y-4 font-mono text-sm border-t border-dashed border-slate-200 pt-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-bold text-[var(--foreground)]">1x Requested Page</div>
              <div className="text-[10px] text-slate-500">URL missing from menu</div>
            </div>
            <div className="font-bold line-through text-slate-400">$0.00</div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <div className="font-bold text-[var(--foreground)]">1x Broken Link</div>
              <div className="text-[10px] text-slate-500">System check failed</div>
            </div>
            <div className="font-bold line-through text-slate-400">$0.00</div>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-4 mt-2">
          <div className="flex justify-between font-black text-lg text-[var(--foreground)]">
            <span>TOTAL</span>
            <span>$0.00</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <svg width="180" height="40" viewBox="0 0 180 40" fill="none">
            {/* Fake barcode lines */}
            {Array.from({ length: 30 }).map((_, i) => (
              <rect key={i} x={i * 6} y="0" width={Math.random() > 0.5 ? 2 : 4} height="40" fill="var(--foreground)" />
            ))}
          </svg>
        </div>
          <p className="text-[10px] text-slate-400 font-mono mt-2">HEAD BACK TO THE HOME PAGE</p>

        {/* Jagged receipt edge bottom */}
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-white" style={{ clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)' }} />
      </motion.div>
    </div>
  )
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center relative overflow-hidden px-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{ x: ['-20%', '20%', '-20%'], y: ['-20%', '20%', '-20%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-[var(--primary)]/10 blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{ x: ['20%', '-20%', '20%'], y: ['20%', '-20%', '20%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-[var(--secondary)]/10 blur-[100px] pointer-events-none"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* Left: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left"
        >
          <motion.div variants={fadeUp} className="inline-block px-5 py-2 rounded-full bg-[var(--primary)] border border-[var(--primary)]/20 text-white font-black text-[10px] tracking-widest uppercase mb-10 shadow-2xl">
            Error 404
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-3xl sm:text-6xl md:text-7xl font-black text-[var(--foreground)] tracking-tight leading-[1.1] sm:leading-tight mb-6">
            Looks like this page got misplaced.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-slate-500 mb-10 font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
            We couldn't find the page you were looking for. Let's get you back to the system.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <MagneticButton strength={20} className="w-full sm:w-auto">
              <Link
                href="/"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-[var(--primary)] text-white font-black text-base rounded-2xl shadow-2xl shadow-[var(--primary)]/30 hover:bg-[var(--primary-hover)] transition-all block text-center w-full sm:w-auto"
              >
                <Home size={16} strokeWidth={3}/>
                Return Home
              </Link>
            </MagneticButton>
            <MagneticButton strength={10} className="w-full sm:w-auto">
              <Link
                href="/book-demo"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-[var(--foreground)] font-black text-base rounded-2xl shadow-md border border-slate-200 hover:bg-slate-50 transition-colors block text-center w-full sm:w-auto"
              >
                <MessageCircle size={24} strokeWidth={3}/>
                Book Demo
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right: Interactive 3D Receipt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center items-center w-full max-w-md"
        >
          {mounted && <InteractiveTicket />}
        </motion.div>
      </div>
    </div>
  )
}