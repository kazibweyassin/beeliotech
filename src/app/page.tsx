import HeroSection from '@/components/landing/HeroSection'
import AboutSection from '@/components/landing/AboutSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import CybersecuritySection from '@/components/landing/CybersecuritySection'
import SoftwareDevelopmentSection from '@/components/landing/SoftwareDevelopmentSection'
import IndustriesSection from '@/components/landing/IndustriesSection'
import CaseStudiesSection from '@/components/landing/CaseStudiesSection'
import PartnersSection from '@/components/landing/PartnersSection'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CybersecuritySection />
      <SoftwareDevelopmentSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
