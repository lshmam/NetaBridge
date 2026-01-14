import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { NetworkDashboard } from "@/components/network-dashboard"
import { IntegrationsSection } from "@/components/integrations-section"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BentoGrid } from "@/components/bento-grid"
import { DemandSupplyMatch } from "@/components/demand-supply-match"
import { NetworkSearch } from "@/components/network-search"
import { DealManagement } from "@/components/deal-management"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntegrationsSection />
        <FeaturesSection />
        <DealManagement />
        {/* <NetworkSearch /> */}
        {/* <DemandSupplyMatch /> */}
        {/* <BentoGrid /> */}
        {/* <NetworkDashboard /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

