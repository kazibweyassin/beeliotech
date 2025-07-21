'use client'

import { motion } from 'framer-motion'
import { Building2, Truck, MapPin, Shield } from 'lucide-react'

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: 'Energy & Utilities',
      description: 'Smart grid management, renewable energy integration, and efficient distribution systems for sustainable power delivery.',
      projects: '150+ Projects',
      highlight: 'Solar microgrids in 50+ villages',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      icon: Truck,
      title: 'Transport & Mobility',
      description: 'Intelligent transportation systems, fleet management, and smart mobility solutions for urban and rural connectivity.',
      projects: '80+ Systems',
      highlight: 'Real-time traffic optimization',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: MapPin,
      title: 'Urban Infrastructure',
      description: 'Smart city solutions including waste management, water systems, and urban planning technologies for sustainable growth.',
      projects: '25+ Cities',
      highlight: 'Smart waste collection systems',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Shield,
      title: 'Government & Institutions',
      description: 'Digital governance platforms, public service automation, and institutional technology infrastructure for efficient operations.',
      projects: '40+ Institutions',
      highlight: 'Digital service delivery platforms',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80'
    }
  ]

  return (
    <section className="py-24 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Industries{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From energy infrastructure to smart cities, we deliver transformative 
            technology solutions across critical sectors driving Africa&apos;s development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-100 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-xl flex items-center justify-center transition-all duration-300">
                    <industry.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{industry.projects}</div>
                        <div className="text-sm text-gray-500">Completed</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{industry.highlight}</div>
                        <div className="text-xs text-gray-500">Key Achievement</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Impact Across Africa</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">295+</div>
                <div className="text-gray-300">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-gray-300">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
