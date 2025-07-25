import HeroSection from '@/components/landing/HeroSection'
import AboutSection from '@/components/landing/AboutSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import CybersecuritySection from '@/components/landing/CybersecuritySection'
import SoftwareDevelopmentSection from '@/components/landing/SoftwareDevelopmentSection'
import IndustriesSection from '@/components/landing/IndustriesSection'
import CaseStudiesSection from '@/components/landing/CaseStudiesSection'
import PartnersSection from '@/components/landing/PartnersSection'
import CareersSection from '@/components/landing/CareersSection'
import ContactSection from '@/components/landing/ContactSection'
import Footer from '@/components/landing/Footer'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'

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
      <CareersSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
