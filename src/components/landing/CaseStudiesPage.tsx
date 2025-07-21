'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'shopug-ecommerce-platform',
      title: 'E-commerce Platform for African Marketplace',
      client: 'ShopUG Digital Marketplace',
      category: 'E-commerce & Web Development',
      location: 'Kampala, Uganda',
      duration: '6 months',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      challenge: 'Local retailers struggled to reach online customers, with no unified platform connecting Ugandan businesses to digital commerce opportunities.',
      solution: 'Built a comprehensive e-commerce platform with React/Next.js frontend, Node.js backend, and integrated mobile payment systems.',
      results: [
        { metric: '200+', description: 'Local businesses onboarded' },
        { metric: '15K+', description: 'Active monthly users' },
        { metric: '35%', description: 'Increase in seller revenues' },
        { metric: '98.5%', description: 'Platform uptime achieved' }
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Mobile Money API'],
      impact: 'Enabled digital transformation for 200+ local businesses, creating 500+ new jobs and facilitating $2M+ in online transactions.',
      testimonial: {
        quote: "Beelio's platform launched us into the digital age. Our online sales now represent 60% of our total revenue.",
        author: 'David Nsubuga',
        position: 'Founder, ShopUG Digital Marketplace'
      }
    },
    {
      id: 'ecobank-mobile-banking',
      title: 'Mobile Banking App for Financial Inclusion',
      client: 'EcoBank Kenya - Digital Innovation Division',
      category: 'FinTech & Mobile Development',
      location: 'Nairobi, Kenya',
      duration: '8 months',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      challenge: 'Rural communities lacked access to banking services, with 65% of the population remaining unbanked due to distance and traditional banking barriers.',
      solution: 'Developed a Flutter-based mobile banking app with offline capabilities, biometric authentication, and integration with local mobile money services.',
      results: [
        { metric: '50K+', description: 'New bank accounts opened' },
        { metric: '60%', description: 'Increase in user engagement' },
        { metric: '40%', description: 'Reduction in transaction costs' },
        { metric: '99.2%', description: 'App reliability score' }
      ],
      technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'Biometric Auth', 'Mobile Money API'],
      impact: 'Expanded financial inclusion for 50K+ previously unbanked individuals, facilitating $5M+ in rural transactions and supporting 200+ small businesses.',
      testimonial: {
        quote: "This app brought banking to our doorstep. Now I can send money to my children and save for the future without traveling to town.",
        author: 'Sarah Wanjiku',
        position: 'Head of Digital Innovation, EcoBank Kenya'
      }
    },
    {
      id: 'rwanda-erp-system',
      title: 'Custom ERP System for Agricultural Cooperative',
      client: 'Rwanda Coffee Cooperative',
      category: 'Enterprise Software & Cloud Solutions',
      location: 'Kigali, Rwanda',
      duration: '5 months',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80',
      challenge: 'Coffee cooperative struggled with manual inventory tracking, farmer payments, and quality control processes affecting 1,200+ member farmers.',
      solution: 'Built a comprehensive cloud-based ERP system with inventory management, automated payments, and quality tracking dashboard.',
      results: [
        { metric: '1,200+', description: 'Farmers connected to the system' },
        { metric: '45%', description: 'Improvement in operational efficiency' },
        { metric: '30%', description: 'Reduction in processing time' },
        { metric: '25%', description: 'Increase in farmer satisfaction' }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS Cloud', 'Payment Gateway'],
      impact: 'Streamlined operations for Rwanda\'s largest coffee cooperative, increased farmer incomes by 20%, and improved coffee quality standards.',
      testimonial: {
        quote: "Beelio\'s ERP system revolutionized how we manage our cooperative. Our farmers now get paid faster and we can track quality at every step.",
        author: 'Emmanuel Kayongo',
        position: 'Operations Director, Rwanda Coffee Cooperative'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Real-world software development success stories showcasing how Beelio Technologies empowers 
              African businesses through innovative digital solutions and custom software platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {study.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {study.duration} • {study.year}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                              <div className="text-sm text-gray-600">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">Client Testimonial</h4>
                        <blockquote className="text-gray-600 italic mb-3">
                          &quot;{study.testimonial.quote}&quot;
                        </blockquote>
                        <cite className="text-sm font-medium text-gray-900 not-italic">
                          {study.testimonial.author}, {study.testimonial.position}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Impact Section */}
                <div className="bg-gray-50 p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Impact & Outcomes</h3>
                      <p className="text-gray-600 mb-6">{study.impact}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Project Highlights</h4>
                      <div className="space-y-2">
                        {['Successfully deployed on schedule', 'Exceeded performance targets', 'High user adoption rate', 'Sustainable long-term impact'].map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the growing list of organizations transforming their operations with Beelio Technologies. 
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Solutions
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
