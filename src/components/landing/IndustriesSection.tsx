'use client'

import { motion } from 'framer-motion'
import { Building2, Truck, MapPin, Shield } from 'lucide-react'

export default function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: 'Healthcare Technology',
      description: 'Digital health solutions including patient management systems, telemedicine platforms, and health data analytics for medical facilities.',
      projects: '3+ Projects',
      highlight: 'Electronic health records for clinics',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
    },
    {
      icon: Truck,
      title: 'Education Technology',
      description: 'School management systems, student portals, and educational platforms that enhance learning experiences in Uganda.',
      projects: '2+ Systems',
      highlight: 'Student information systems',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: MapPin,
      title: 'E-commerce & Business',
      description: 'Online business platforms, inventory management systems, and digital storefronts for local Ugandan businesses.',
      projects: '4+ Websites',
      highlight: 'Online stores with mobile payments',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: Shield,
      title: 'Small Business Solutions',
      description: 'Custom software solutions for small enterprises including CRM systems, point-of-sale applications, and business automation.',
      projects: '5+ Solutions',
      highlight: 'Business management software',
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
            Specializing in software solutions for healthcare, education, e-commerce, and small businesses 
            across Uganda with a focus on practical, affordable technology.
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
            <h3 className="text-3xl font-bold text-center mb-12">Our Growing Impact in Uganda</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">14+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">6+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Users Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2024</div>
                <div className="text-gray-300">Year Founded</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
