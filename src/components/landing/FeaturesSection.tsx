'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Zap, Cpu, Cog, Brain, Shield, ArrowRight } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Smart Energy Monitoring',
      description: 'Advanced IoT-powered energy management systems that optimize consumption, reduce waste, and enable renewable energy integration for communities and businesses.',
      features: ['Real-time monitoring', 'Predictive analytics', 'Solar integration', 'Grid optimization'],
      color: 'bg-yellow-500',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'IoT Infrastructure',
      description: 'Comprehensive IoT ecosystems that connect devices, sensors, and systems to create intelligent networks for smart cities and rural communities.',
      features: ['Sensor networks', 'Edge computing', 'Connectivity solutions', 'Data analytics'],
      color: 'bg-blue-500',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Enterprise-grade cybersecurity frameworks protecting critical infrastructure, data, and digital assets across African organizations and communities.',
      features: ['Threat detection & response', 'Data encryption', 'Security auditing', 'Compliance management'],
      color: 'bg-red-500',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: Cog,
      title: 'Automation Software',
      description: 'Custom automation platforms that streamline operations, reduce manual work, and improve efficiency across various industries and applications.',
      features: ['Process automation', 'Workflow optimization', 'System integration', 'Performance monitoring'],
      color: 'bg-green-500',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: Brain,
      title: 'Custom AI Platforms',
      description: 'Tailored artificial intelligence solutions that solve specific challenges in agriculture, healthcare, finance, and urban planning across Africa.',
      features: ['Machine learning', 'Data processing', 'Predictive models', 'Decision support'],
      color: 'bg-purple-500',
      gradient: 'from-purple-400 to-pink-500'
    }
  ]

  return (
    <section className="py-24 bg-gray-50" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital infrastructure solutions designed to transform communities 
            and accelerate development across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute inset-[1px] bg-white rounded-2xl" />
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how our solutions can address your specific challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
