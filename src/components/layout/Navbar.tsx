'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/landing-data'
import MagneticButton from '@/components/animations/MagneticButton'
import { Globe, Menu, X, ArrowRight, User } from 'lucide-react'
import { buttonTap } from '@/lib/animations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 flex justify-center pointer-events-none"
      >
        <div className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 rounded-3xl ${scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200/50 py-3 px-6'
            : 'bg-white py-4 px-8 border border-slate-100 shadow-sm'
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[var(--foreground)] rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:rotate-6 shadow-lg shadow-black/5 group-hover:shadow-[var(--primary)]/20">
                <Globe size={20} className="text-white" />
              </div>
              <span className="font-black text-xl text-[var(--foreground)] tracking-tighter uppercase">ProwlerPOS</span>
            </Link>

            {/* Desktop Nav - Pill Style */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 border border-slate-100 rounded-2xl px-1.5 py-1.5 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-xl ${active ? 'text-[var(--primary)]' : 'text-slate-500 hover:text-[var(--foreground)]'
                      }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-xl border border-slate-200/40 shadow-sm -z-0"
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/login" className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">
                <User size={14} />
                <span>Login</span>
              </Link>
              <MagneticButton strength={15}>
                <motion.div variants={buttonTap} whileHover="whileHover" whileTap="whileTap">
                  <Link
                    href="/book-demo"
                    className="px-6 py-3 text-[10px] font-black bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--primary-hover)] transition-all shadow-xl shadow-[var(--primary)]/25 uppercase tracking-widest flex items-center gap-2"
                  >
                    <span>Book Demo</span>
                    <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </MagneticButton>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-[var(--foreground)] transition-colors pointer-events-auto"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-28 left-4 right-4 z-40 lg:hidden bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-[2.5rem] overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-6 py-4 text-sm font-black rounded-2xl transition-all group ${pathname === link.href ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                  <span className="uppercase tracking-widest">{link.label}</span>
                  <ArrowRight size={16} className={`transition-all ${pathname === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-50 grid grid-cols-2 gap-4">
                <Link href="/login" className="flex items-center justify-center py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Login</Link>
                <Link href="/book-demo" className="flex items-center justify-center py-4 text-[10px] font-black bg-[var(--primary)] text-white rounded-2xl uppercase tracking-widest shadow-xl shadow-[var(--primary)]/20">Book Demo</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}