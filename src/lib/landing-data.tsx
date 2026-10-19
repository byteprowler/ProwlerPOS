import React from 'react'
import { 
  Receipt, Package, Users, ChefHat, BarChart, 
  Zap, ShoppingCart, Tag, User, CreditCard, Printer, Archive,
  LayoutGrid, Plus, Settings, Send, Radio, CheckCircle, 
  Ticket, LayoutList, FileText, RefreshCcw, Ban,
  TrendingUp, Coffee, ShoppingBag, Truck, Beer, Croissant, Store
} from 'lucide-react'

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'POS System', href: '/pos' },
  { label: 'Waiter App', href: '/waiter' },
  { label: 'Kitchen Display', href: '/kds' },
  { label: 'Reports', href: '/reports' },
  { label: 'Pricing', href: '/pricing' },
]

// ─── Features page ────────────────────────────────────────────────────────────

export const FEATURE_CATEGORIES = [
  {
    category: 'POS & checkout',
    icon: <Receipt />,
    features: [
      { title: 'Quick checkout', desc: 'Ring up sales with a clear screen so cashiers can move the line quickly.' },
      { title: 'Ways to pay', desc: 'Take cash, card, or mobile pay. Split a bill across more than one payment type when you need to.' },
      { title: 'Discounts', desc: 'Apply a percent or dollar discount to one item or the whole sale.' },
      { title: 'Taxes', desc: 'Set tax rules that match how your store or restaurant sells.' },
      { title: 'Receipts', desc: 'Print a receipt or send one by email with your business name on it.' },
      { title: 'Cash drawer', desc: 'Open and close shifts with simple totals so you can track cash in and out.' },
    ],
  },
  {
    category: 'Products & stock',
    icon: <Package />,
    features: [
      { title: 'Product list', desc: 'Add menu items or retail products with prices, photos, and codes.' },
      { title: 'Categories', desc: 'Group items so staff can find them fast at checkout.' },
      { title: 'Options & add-ons', desc: 'Offer sizes, sides, colors, or cooking notes on the items you sell.' },
      { title: 'Stock levels', desc: 'See what is running low and get alerts before you run out.' },
    ],
  },
  {
    category: 'Customers & staff',
    icon: <Users />,
    features: [
      { title: 'Customer notes', desc: 'Save names and order history so regulars feel remembered.' },
      { title: 'Staff access', desc: 'Give each role the right access — cashier, server, manager, or owner.' },
      { title: 'Clock in / out', desc: 'Let staff sign in from the same devices you already use.' },
    ],
  },
  {
    category: 'Orders & kitchen',
    icon: <ChefHat />,
    features: [
      { title: 'Kitchen screen', desc: 'Show orders on a screen in the kitchen instead of only on paper.' },
      { title: 'Orders from phones or tablets', desc: 'Staff can take orders away from the counter and send them straight to the kitchen.' },
      { title: 'Order status', desc: 'See what is new, cooking, and ready so everyone stays on the same page.' },
    ],
  },
  {
    category: 'Daily reports',
    icon: <BarChart />,
    features: [
      { title: 'Daily sales', desc: 'See totals for the day, week, or month without digging through spreadsheets.' },
      { title: 'What sells best', desc: 'Spot your top items so you can order and plan with confidence.' },
      { title: 'Payments & discounts', desc: 'Review how customers paid and how much you discounted.' },
      { title: 'Stock movement', desc: 'Understand how inventory moved over time.' },
    ],
  },
]

// ─── POS page features ────────────────────────────────────────────────────────

export const POS_FEATURES = [
  { icon: <Zap />, title: 'Quick sales', desc: 'Add items to the sale with taps or clicks so checkout stays smooth at busy times.' },
  { icon: <ShoppingCart />, title: 'Simple cart', desc: 'Change quantities, fix mistakes, and see the total update as you go.' },
  { icon: <Tag />, title: 'Discounts', desc: 'Apply store offers or a one-off discount before you take payment.' },
  { icon: <User />, title: 'Customers', desc: 'Look up a customer or attach the sale to a name for next time.' },
  { icon: <CreditCard />, title: 'Payments', desc: 'Accept the payment types your customers expect, including split checks when needed.' },
  { icon: <Printer />, title: 'Receipts', desc: 'Print or email receipts with the details your accountant expects.' },
  { icon: <Archive />, title: 'Shift summaries', desc: 'Close the day with clear totals for cash and card.' },
]

// ─── Waiter page features ─────────────────────────────────────────────────────

export const WAITER_FEATURES = [
  { icon: <LayoutGrid />, title: 'Tables', desc: 'See your floor at a glance and know which tables need attention.' },
  { icon: <Plus />, title: 'Fast order entry', desc: 'Tap items from the menu and build the order without retyping.' },
  { icon: <Settings />, title: 'Special requests', desc: 'Add notes, allergies, or changes so the kitchen sees the full picture.' },
  { icon: <Send />, title: 'Send to the kitchen', desc: 'Fire the order as soon as it is confirmed — no extra trips.' },
  { icon: <Radio />, title: 'Order updates', desc: 'Servers can see when dishes are being made or ready to run.' },
  { icon: <CheckCircle />, title: 'Fewer mistakes', desc: 'Typed orders beat handwriting so the right dish reaches the right guest.' },
]

// ─── KDS page features ────────────────────────────────────────────────────────

export const KDS_FEATURES = [
  { icon: <Ticket />, title: 'Orders appear right away', desc: 'New tickets show up as soon as the front sends them.' },
  { icon: <LayoutList />, title: 'New, cooking, ready', desc: 'Move orders across simple columns so the whole line knows what is next.' },
  { icon: <FileText />, title: 'Notes stand out', desc: 'Allergies and special requests stay visible on every ticket.' },
  { icon: <Settings />, title: 'Add-ons are clear', desc: 'Modifiers and sides read plainly so nothing is missed.' },
  { icon: <RefreshCcw />, title: 'One tap to update', desc: 'Bump a ticket forward with a single tap when the step changes.' },
  { icon: <Ban />, title: 'Less paper', desc: 'Replace loose paper tickets with one screen everyone watches.' },
]

// ─── Reports page features ────────────────────────────────────────────────────

export const REPORTS_FEATURES = [
  { icon: <BarChart />, title: 'Sales totals', desc: 'See revenue and order counts for the range you pick.' },
  { icon: <ShoppingCart />, title: 'Top sellers', desc: 'Learn which items move the most by quantity and dollars.' },
  { icon: <Package />, title: 'Category view', desc: 'Compare food, drinks, retail groups, or any category you set up.' },
  { icon: <CreditCard />, title: 'How people paid', desc: 'Split card, cash, and other methods to match your bank deposits.' },
  { icon: <Tag />, title: 'Discounts', desc: 'Track how often you discount and how much it cost the day.' },
  { icon: <Receipt />, title: 'Taxes collected', desc: 'Pull numbers for filing without rebuilding them by hand.' },
  { icon: <Archive />, title: 'Drawer history', desc: 'Review expected cash against what was counted at close.' },
  { icon: <TrendingUp />, title: 'Trends over time', desc: 'Compare this week to last week to see what is changing.' },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: 'Starter',
    monthlyPrice: 'Pricing depends on your business setup',
    annualPrice: 'Pricing depends on your business setup',
    desc: 'Book a demo to discuss the right plan for your business.',
    cta: 'Book Demo',
    ctaHref: '/book-demo',
    highlight: false,
    features: [
      'Point of sale for checkout',
      'Daily sales records',
      'Product and menu setup',
      'Basic business reports',
      'Receipts customers can read',
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 'Pricing depends on your business setup',
    annualPrice: 'Pricing depends on your business setup',
    desc: 'Book a demo to discuss the right plan for your business.',
    cta: 'Book Demo',
    ctaHref: '/book-demo',
    highlight: true,
    features: [
      'More checkout devices',
      'Waiter app for table orders',
      'Kitchen screen for cooks',
      'Clear sales and payment reports',
      'Low-stock reminders',
      'Staff permissions you control',
    ],
  },
  {
    name: 'Business',
    monthlyPrice: 'Contact us for pricing',
    annualPrice: 'Contact us for pricing',
    desc: 'Book a demo to discuss the right plan for your business.',
    cta: 'Talk to Us',
    ctaHref: '/book-demo',
    highlight: false,
    features: [
      'Multiple locations',
      'More devices as you grow',
      'Help rolling out to your team',
      'A contact who knows your account',
    ],
  },
]

// ─── Business types ───────────────────────────────────────────────────────────

export const BUSINESS_TYPES = [
  { label: 'Restaurants', icon: <Coffee /> },
  { label: 'Stores', icon: <ShoppingBag /> },
  { label: 'Supermarkets', icon: <ShoppingCart /> },
  { label: 'Cafés & Bakeries', icon: <Croissant /> },
  { label: 'Bars & Lounges', icon: <Beer /> },
  { label: 'Food Trucks', icon: <Truck /> },
  { label: 'Shops', icon: <Store /> },
  { label: 'Quick-Service', icon: <Zap /> },
]

// ─── Homepage modules (reference / future use) ─────────────────────────────

export const HOMEPAGE_MODULES = [
  {
    id: 'pos',
    badge: 'Checkout',
    badgeBg: 'var(--secondary)',
    badgeText: 'var(--foreground)',
    title: 'POS System',
    audience: 'For restaurants, supermarkets, marts, cafés, and stores.',
    desc: 'Ring up sales, take payments, print receipts, apply discounts, and keep clear sales records.',
    href: '/pos',
    stats: [
      { val: 'Checkout', label: 'Fast sales' },
      { val: 'Receipts', label: 'Print anytime' },
    ],
  },
  {
    id: 'waiter',
    badge: 'Floor',
    badgeBg: 'var(--foreground)',
    badgeText: '#ffffff',
    title: 'Waiter App',
    audience: 'For restaurants, cafés, lounges, and food businesses.',
    desc: 'Waiters can take orders from the table and send them straight to the kitchen, helping reduce mistakes and delays.',
    href: '/waiter',
    stats: [
      { val: 'Table Orders', label: 'Take orders fast' },
      { val: 'Send to Kitchen', label: 'No paper needed' },
    ],
  },
  {
    id: 'kds',
    badge: 'Kitchen',
    badgeBg: 'var(--primary)',
    badgeText: '#ffffff',
    title: 'Kitchen Display',
    audience: 'For businesses that prepare food.',
    desc: 'Kitchen staff can see new orders, track what is being prepared, and mark orders when they are ready.',
    href: '/kds',
    stats: [
      { val: 'New Orders', label: 'Show instantly' },
      { val: 'Ready Orders', label: 'Ready to serve' },
    ],
  },
]

// ─── How it works steps (reference / future use) ─────────────────────────────

export const WORKFLOW_STEPS = [
  {
    step: '01',
    id: 'order',
    title: 'Take the order',
    desc: 'Sell at the register or take table orders on a device. Everyone works from the same menu.',
    borderColor: 'border-[var(--primary)]/20',
    bgColor: 'bg-[var(--primary)]/10',
    iconColor: 'var(--primary)',
  },
  {
    step: '02',
    id: 'process',
    title: 'Cook and fulfill',
    desc: 'Send food orders to the kitchen screen. Stock can update as items sell.',
    borderColor: 'border-[var(--foreground)]/10',
    bgColor: 'bg-slate-50',
    iconColor: 'var(--foreground)',
  },
  {
    step: '03',
    id: 'finalize',
    title: 'Pay and review',
    desc: 'Collect payment, then see what sold, how customers paid, and how the day went.',
    borderColor: 'border-[var(--secondary)]/50',
    bgColor: 'bg-[var(--secondary)]/10',
    iconColor: 'var(--foreground)',
  },
]
