'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/landing-data'
import { buttonTap, fadeUp } from '@/lib/animations'
import { Globe, Menu, X, ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-between px-6 h-16 transition-all duration-500 rounded-2xl ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]' 
            : 'bg-white border border-transparent'
        }`}>
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[var(--foreground)] rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:rotate-6 shadow-lg shadow-black/5 group-hover:shadow-[var(--primary)]/20">
              <Globe size={20} className="text-white" />
            </div>
            <span className="font-black text-xl text-[var(--foreground)] tracking-tighter uppercase">ProwlerPOS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="relative px-5 py-2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-[var(--primary)] transition-colors group"
              >
                <span className="relative z-10">{link.label}</span>
                <motion.div 
                  className="absolute inset-0 bg-slate-50 rounded-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="nav-hover"
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/login" className="text-[10px] font-black text-slate-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">
              Login
            </a>
            <MagneticButton strength={15}>
              <motion.a
                href="#cta"
                variants={buttonTap}
                whileHover="whileHover"
                whileTap="whileTap"
                className="px-6 py-2.5 text-[10px] font-black bg-[var(--primary)] text-white rounded-xl shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-hover)] transition-all uppercase tracking-widest flex items-center gap-2"
              >
                <span>Book Demo</span>
                <ArrowRight size={12} />
              </motion.a>
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-[var(--foreground)] transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 px-4 pt-4 lg:hidden"
          >
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl p-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-4 text-sm font-black text-slate-700 hover:bg-slate-50 rounded-2xl transition-all group"
                >
                  <span className="uppercase tracking-widest">{link.label}</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                </a>
              ))}
              <hr className="my-4 border-slate-50" />
              <div className="grid grid-cols-2 gap-4">
                <a href="/login" className="flex items-center justify-center py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Login
                </a>
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center py-4 text-[10px] font-black bg-[var(--primary)] text-white rounded-2xl uppercase tracking-widest shadow-xl shadow-[var(--primary)]/20"
                >
                  Book Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
