'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Dropdown from '@/components/shared/Dropdown'
import { Calendar as CalendarIcon, Clock, Users, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Globe, Phone, Mail, User, Building2, MessageSquare, ArrowLeft } from 'lucide-react'
import MagneticButton from '@/components/animations/MagneticButton'
import Link from 'next/link'

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'Restaurant',
    teamSize: '1-10 staff',
    message: '',
  })
  
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  
  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedTime) return
    
    setSubmitted(true)
    // In a real app, you would send formData and selectedTime/Date to your backend here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const timeSlots = [
    '09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ]

  // Calendar Logic
  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    return day === 0 ? 6 : day - 1 // Make Monday 0, Sunday 6
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()

  const prevMonthDates = Array.from({ length: firstDay }, (_, i) => prevMonthDays - firstDay + i + 1)
  const currentMonthDates = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  
  const totalGridCells = firstDay + daysInMonth > 35 ? 42 : 35
  const nextMonthDates = Array.from({ length: totalGridCells - (firstDay + daysInMonth) }, (_, i) => i + 1)

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()
  }

  const isSelected = (day: number) => {
    return day === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear()
  }

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
    setSelectedTime(null) 
  }

  const monthYearString = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  if (submitted) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} strokeWidth={2.5} />
          </div>
          <h2 className="text-3xl font-black text-[var(--foreground)] tracking-tight mb-4">Thanks — you are all set.</h2>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
            We received your ProwlerPOS demo request. Someone from our team will follow up at{' '}
            <span className="text-[var(--foreground)] font-bold">{formData.email}</span> to confirm the time.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black text-[var(--primary)] uppercase tracking-widest hover:gap-3 transition-all">
            <ArrowLeft size={14} strokeWidth={3} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9FAFB]">
      {/* Left Column - Form */}
      <div className="w-full lg:w-1/2 px-6 py-20 lg:py-32 sm:px-12 lg:px-24 flex flex-col justify-center relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--primary)]/5 opacity-30 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full mx-auto relative z-10"
        >
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary)] text-white text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-xl shadow-[var(--primary)]/20">
              <Globe size={12} />
              <span>Book a demo</span>
            </div>
            <h1 className="text-3xl sm:text-6xl font-black text-[var(--foreground)] tracking-tighter leading-[1.1] sm:leading-[0.95] mb-8">
              Book a ProwlerPOS demo
            </h1>
            <p className="text-lg text-[var(--muted)] font-medium max-w-md leading-relaxed">
              ProwlerPOS helps restaurants, cafés, supermarkets, and stores take orders, accept payments, and see sales reports from one easy system.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all text-sm font-bold text-[var(--foreground)]"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all text-sm font-bold text-[var(--foreground)]"
                  placeholder="john@business.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
              <div className="relative">
                <Phone size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all text-sm font-bold text-[var(--foreground)]"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Name</label>
              <div className="relative">
                <Building2 size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all text-sm font-bold text-[var(--foreground)]"
                  placeholder="Your Business Name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Business Type</label>
              <Dropdown
                options={['Restaurant', 'Café', 'Bar / Lounge', 'Supermarket', 'Marts', 'Store', 'Shop', 'Other']}
                value={formData.businessType}
                onChange={(val) => setFormData(prev => ({ ...prev, businessType: val }))}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Team Size</label>
              <Dropdown
                options={['1-10 staff', '11-50 staff', '51-100 staff', '100+ staff']}
                value={formData.teamSize}
                onChange={(val) => setFormData(prev => ({ ...prev, teamSize: val }))}
              />
            </div>

            <div className="sm:col-span-2 space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">What do you want to see?</label>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-5 top-6 text-slate-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:bg-white transition-all text-sm font-bold text-[var(--foreground)] resize-none"
                  placeholder="Tell us what you would like to see…"
                />
              </div>
            </div>

            <div className="sm:col-span-2 pt-4">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
                By scheduling, you agree to our <span className="text-[var(--primary)] cursor-pointer">Terms</span> and <span className="text-[var(--primary)] cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Right Column - Scheduler UI */}
      <div className="w-full lg:w-1/2 bg-[#F9FAFB] px-4 py-20 lg:py-32 sm:px-8 lg:px-16 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-[480px] relative z-10"
        >
          <div className="mb-6 flex items-center justify-between px-4">
            <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">Pick a time</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase">Calendar open</span>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-[0_64px_120px_-24px_rgba(0,0,0,0.1)] p-8 sm:p-10 border border-slate-100">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-[var(--foreground)] tracking-tighter uppercase">{monthYearString}</h3>
              <div className="flex gap-2">
                <button 
                  onClick={handlePrevMonth}
                  className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[var(--primary)] hover:border-[var(--primary)]/20 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={handleNextMonth}
                  className="w-10 h-10 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[var(--primary)] hover:border-[var(--primary)]/20 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="mb-10">
              <div className="grid grid-cols-7 gap-2 mb-4 text-center">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={`${day}-${i}`} className="text-[10px] font-black text-slate-300 uppercase">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2 text-center">
                {prevMonthDates.map(day => (
                  <div key={`prev-${day}`} className="py-3 text-slate-100 font-black text-sm">{day}</div>
                ))}
                
                {currentMonthDates.map(day => (
                  <button 
                    key={`curr-${day}`}
                    onClick={() => handleDateClick(day)}
                    className={`py-3 w-full rounded-xl transition-all duration-300 text-sm font-black relative group ${
                      isSelected(day)
                        ? 'bg-[var(--primary)] text-white shadow-xl shadow-[var(--primary)]/30'
                        : isToday(day)
                          ? 'bg-slate-50 text-[var(--primary)]'
                          : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {day}
                    {!isSelected(day) && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--primary)] opacity-0 group-hover:opacity-100" />
                    )}
                  </button>
                ))}
                
                {nextMonthDates.map(day => (
                   <div key={`next-${day}`} className="py-3 text-slate-100 font-black text-sm">{day}</div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="pt-10 border-t border-slate-50">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-black text-[var(--foreground)] uppercase tracking-widest flex items-center gap-2">
                  <Clock size={14} className="text-[var(--primary)]" />
                  <span>Slots for {selectedDate.getDate()} {monthYearString.split(' ')[0]}</span>
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 px-4 text-xs font-black uppercase tracking-widest rounded-2xl border transition-all duration-300 ${
                      selectedTime === time 
                        ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-xl shadow-[var(--primary)]/20' 
                        : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <MagneticButton strength={20}>
                <button 
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!selectedTime}
                  className={`w-full py-5 px-5 font-black rounded-2xl transition-all text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 ${
                    selectedTime 
                      ? 'bg-[var(--foreground)] text-white shadow-2xl hover:bg-black' 
                      : 'bg-slate-100 text-slate-300 cursor-not-allowed'
                  }`}
                >
                  <span>Book Demo</span>
                  <ArrowRight size={16} />
                </button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

