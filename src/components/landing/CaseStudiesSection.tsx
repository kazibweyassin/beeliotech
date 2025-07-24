'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

export default function CaseStudiesSection() {
  const featuredCases = [
    {
      id: 'local-clinic-management',
      title: 'Local Clinic Management System',
      location: 'Nakawa Health Center III',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Simple patient record system for a local health center to digitize paper-based patient files and appointment scheduling.',
      results: ['120+ patients registered', '40% faster patient check-in', 'Digital records for 3 departments'],
      category: 'Healthcare'
    },
    {
      id: 'primary-school-portal',
      title: 'Primary School Student Portal',
      location: 'St. Mary\'s Primary School, Entebbe',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Basic web portal for parents to view their children\'s grades, attendance, and school announcements.',
      results: ['180 students tracked', '70% parent adoption rate', '50% reduction in phone calls to school'],
      category: 'Education'
    },
    {
      id: 'local-business-website',
      title: 'E-commerce Website for Local Business',
      location: 'Kampala Fashion Store',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Modern responsive website with online catalog and WhatsApp integration for a local clothing business.',
      results: ['200+ products listed', '30% increase in inquiries', 'Mobile-friendly design'],
      category: 'E-commerce'
    }
  ]

  return (
    <section className="py-24 bg-gray-50" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Small but impactful digital solutions helping local businesses, schools, and health centers 
            in Uganda embrace technology and improve their daily operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{caseStudy.location}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{caseStudy.year}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="space-y-2 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {result}
                    </div>
                  ))}
                </div>

                <Link
                  href={`/case-studies#${caseStudy.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/link"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
