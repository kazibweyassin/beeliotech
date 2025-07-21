'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

export default function CaseStudiesSection() {
  const featuredCases = [
    {
      id: 'uganda-solar-grid',
      title: 'Smart Solar Microgrid Implementation',
      location: 'Gulu District, Uganda',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Deployed intelligent solar microgrids serving 5,200 households in rural Uganda with 99.2% uptime.',
      results: ['5,200 households connected', '85% reduction in energy costs', '40% increase in local business revenue'],
      category: 'Energy & Utilities'
    },
    {
      id: 'ghana-cybersecurity-shield',
      title: 'National Cybersecurity Infrastructure',
      location: 'Accra, Ghana',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Implemented comprehensive cybersecurity framework protecting 50+ government agencies and critical infrastructure.',
      results: ['50+ agencies protected', '99.9% threat detection rate', '0 successful breaches'],
      category: 'Cybersecurity'
    },
    {
      id: 'kenya-transport-optimization',
      title: 'AI-Powered Traffic Management',
      location: 'Nairobi, Kenya',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'AI-driven traffic optimization reducing commute times by 45% and saving $800K daily in economic losses.',
      results: ['45% reduction in commute time', '$800K daily economic savings', '25% decrease in carbon emissions'],
      category: 'Transport & Mobility'
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
            Real-world transformations showcasing how our digital infrastructure solutions 
            create lasting impact across African communities.
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
