'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react'

export default function CybersecuritySection() {
  const securityServices = [
    {
      icon: Shield,
      title: 'Infrastructure Protection',
      description: 'Comprehensive security for critical infrastructure including power grids, water systems, and telecommunications networks.',
      features: ['Network security monitoring', 'Intrusion detection systems', 'Firewall management', '24/7 threat monitoring']
    },
    {
      icon: Lock,
      title: 'Data Security & Privacy',
      description: 'Advanced encryption and data protection solutions ensuring sensitive information remains secure across all digital platforms.',
      features: ['End-to-end encryption', 'Data loss prevention', 'Privacy compliance', 'Secure data storage']
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive threat detection and response systems powered by AI and machine learning for early threat identification.',
      features: ['Real-time threat analysis', 'Behavioral analytics', 'Incident response', 'Threat hunting']
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Comprehensive cybersecurity audits and risk assessments tailored for African organizations and infrastructure.',
      features: ['Security auditing', 'Vulnerability testing', 'Compliance reporting', 'Risk mitigation']
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Threat Detection Rate', icon: Shield },
    { value: '15min', label: 'Average Response Time', icon: AlertTriangle },
    { value: '500+', label: 'Organizations Protected', icon: Users },
    { value: '0', label: 'Successful Breaches', icon: CheckCircle }
  ]

  const industries = [
    'Financial Services',
    'Government Agencies',
    'Healthcare Systems',
    'Energy Infrastructure',
    'Telecommunications',
    'Education Institutions'
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white" id="cybersecurity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/20 border border-red-400/30 text-red-300 text-sm font-medium backdrop-blur-sm mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Cybersecurity Excellence
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Securing Africa&apos;s{' '}
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Protecting critical infrastructure and digital assets with world-class cybersecurity 
            solutions designed for the unique challenges facing African organizations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 border border-red-400/30 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {securityServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8">Industries We Protect</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-sm font-medium text-gray-300">{industry}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Threat Landscape */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-400/30 rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Africa&apos;s Cybersecurity Challenge</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">230%</div>
              <div className="text-gray-300">Increase in cyber attacks across Africa (2023)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">$4.2B</div>
              <div className="text-gray-300">Annual cost of cybercrime in Africa</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">85%</div>
              <div className="text-gray-300">Of organizations lack adequate protection</div>
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            As Africa rapidly digitizes, cybersecurity threats are growing exponentially. 
            Beelio Technologies provides the advanced protection needed to secure the continent&apos;s digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Security Assessment
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Security Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
