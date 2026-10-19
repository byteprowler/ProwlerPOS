import HeroSection from '@/components/landing/HeroSection'
import ProductModulesSection from '@/components/landing/ProductModulesSection'
import POSSystemSection from '@/components/landing/POSSystemSection'
import WaiterAppSection from '@/components/landing/WaiterAppSection'
import KDSSection from '@/components/landing/KDSSection'
import ProductStory from '@/components/landing/ProductStory'
import ReportsSection from '@/components/landing/ReportsSection'
import BusinessTypesSection from '@/components/landing/BusinessTypesSection'
import PricingSection from '@/components/landing/PricingSection'
import CTASection from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProductModulesSection />
      <POSSystemSection />
      <WaiterAppSection />
      <KDSSection />
      <ProductStory />
      <ReportsSection />
      <BusinessTypesSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}
