import CaseStudiesPage from '@/components/landing/CaseStudiesPage'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Case Studies - Beelio Technologies',
  description: 'Real-world impact stories showcasing how Beelio Technologies transforms communities across Africa through innovative digital infrastructure solutions.',
}

export default function CaseStudies() {
  return (
    <main>
      <Navbar />
      <CaseStudiesPage />
    </main>
  )
}
