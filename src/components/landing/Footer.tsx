'use client'

import { motion } from 'framer-motion'

const FOOTER_LINKS = {
  Product: ['POS System', 'Waiter App', 'Kitchen Display', 'Reports', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Support: ['Help Center', 'Documentation', 'Status', 'Privacy Policy', 'Terms of Service'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#b5f23d] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="7" height="7" rx="1.5" fill="#0f172a" />
                  <rect x="10" y="1" width="7" height="7" rx="1.5" fill="#0f172a" />
                  <rect x="1" y="10" width="7" height="7" rx="1.5" fill="#0f172a" />
                  <rect x="10" y="10" width="7" height="7" rx="1.5" fill="#0f172a" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">ProwlerPOS</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              One simple POS for restaurants, cafés, supermarkets, and stores — checkout, table orders, kitchen screen, and daily sales reports.
            </p>
            <div className="flex items-center gap-3">
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#b5f23d] hover:text-[#0f172a] flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <rect width="14" height="14" rx="3" fillOpacity="0" />
                    <path d="M2 2h4l2 3-2 3H2V2zM8 8h4v4H8V8z" opacity="0.7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Prowler. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/30">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
