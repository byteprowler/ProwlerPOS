import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/animations/CustomCursor'
import PageTransition from '@/components/animations/PageTransition'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })

export const metadata: Metadata = {
  title: 'ProwlerPOS — One simple POS for restaurants and stores',
  description:
    'ProwlerPOS helps restaurants, cafés, supermarkets, and stores take orders, accept payments, send food orders to the kitchen, and see daily sales reports from one easy system.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-full antialiased bg-[var(--background)] text-[var(--foreground)] font-sans">
        <CustomCursor />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
