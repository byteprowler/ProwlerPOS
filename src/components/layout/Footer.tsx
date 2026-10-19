'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/landing-data'
import { staggerContainer, fadeUp } from '@/lib/animations'
import ScrollBaseAnimation from '@/components/ui/scroll-text-marque'
import { ArrowUpRight, Globe, ShieldCheck } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa' 
import MagneticButton from '@/components/animations/MagneticButton'

export default function Footer() {
  return (
    <footer className="relative bg-[var(--foreground)] text-white overflow-hidden pt-20 sm:pt-40">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-footer Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <div className="border-y border-white/5 py-20 flex flex-col gap-10">
            <ScrollBaseAnimation
              baseVelocity={-1}
              clasname="text-4xl md:text-9xl font-black tracking-tighter uppercase text-white/5 flex gap-20"
            >
              One POS • Orders • Payments • Kitchen screen • Reports • ProwlerPOS
            </ScrollBaseAnimation>
            <ScrollBaseAnimation
              baseVelocity={1}
              clasname="text-4xl md:text-9xl font-black tracking-tighter uppercase text-[var(--primary)]/10 flex gap-20"
            >
              Restaurants • Cafés • Supermarkets • Retail • Book a demo • Talk to us
            </ScrollBaseAnimation>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-20 mb-20 sm:mb-40"
        >
          {/* Brand & Mission */}
          <motion.div variants={fadeUp} className="space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-2xl shadow-[var(--primary)]/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Globe size={24} className="text-white" />
              </div>
              <span className="font-black text-3xl tracking-tighter text-white">ProwlerPOS</span>
            </Link>
            <p className="text-sm text-slate-400 font-bold leading-relaxed max-w-xs uppercase tracking-widest">
              One simple POS for restaurants, cafés, supermarkets, marts, and stores. Manage sales, orders, payments, receipts, staff, and daily reports from one easy system.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaLinkedin, label: 'LinkedIn' },
                { icon: FaInstagram, label: 'Instagram' }
              ].map((social) => (
                <motion.a
                  key={social.label} 
                  href="#" 
                  aria-label={social.label}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/5"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div variants={fadeUp} className="lg:justify-self-center">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-12">Product</h4>
            <ul className="space-y-6">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm font-black text-slate-400 hover:text-white transition-all flex items-center gap-3 group uppercase tracking-widest">
                    <span>{l.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div variants={fadeUp}>
            <div className="bg-white/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 border border-white/5 relative overflow-hidden group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left h-full">
                <p className="text-3xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                  Ready to see it <br className="hidden sm:block" /> in action?
                </p>
                <p className="text-sm text-slate-400 font-bold leading-relaxed mb-10 max-w-[280px] sm:max-w-none">
                  We’ll show you how ProwlerPOS can fit your business, whether you run a restaurant, café, supermarket, mart, or store.
                </p>
                <div className="mt-auto w-full">
                  <MagneticButton strength={15} className="w-full sm:w-auto">
                    <Link href="/book-demo" className="flex items-center justify-center py-5 px-10 bg-white text-[var(--foreground)] font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-[var(--primary)] hover:text-white transition-all shadow-2xl w-full sm:w-auto">
                      Book Demo
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={fadeUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Prowler. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.3em]">Privacy</Link>
              <Link href="#" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.3em]">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              Service status: OK
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
