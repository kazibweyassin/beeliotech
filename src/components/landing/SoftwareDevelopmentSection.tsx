'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Database, Globe, Smartphone, Cloud, Zap } from 'lucide-react'

export default function SoftwareDevelopmentSection() {
  const developmentServices = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating accessible digital platforms that connect African businesses to global opportunities",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "CMS Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Mobile-first solutions designed for Africa's growing smartphone ecosystem",
      features: ["React Native", "Flutter", "Native iOS/Android", "Offline-First Design"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Building scalable infrastructure that grows with African businesses and communities",
      features: ["AWS & Azure", "Serverless Architecture", "Microservices", "DevOps & CI/CD"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust systems that power the digital transformation of developing regions",
      features: ["RESTful APIs", "GraphQL", "Database Design", "Real-time Systems"]
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Flutter", category: "Mobile" }
  ]

  const stats = [
    { number: "8+", label: "Projects Delivered" },
    { number: "6+", label: "Happy Clients" },
    { number: "2024", label: "Founded" },
    { number: "24/7", label: "Support Available" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50" id="software-development">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <Code className="h-4 w-4 mr-2" />
            Software Development Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom Software Solutions
            <span className="block text-blue-600">Built for Your Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering African businesses and communities through innovative software solutions. 
            Our mission is to bridge the digital divide and accelerate technological transformation across developing regions.
          </p>
        </motion.div>

        {/* Development Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {developmentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <Zap className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building the future of Africa with cutting-edge technologies and scalable solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-sm font-semibold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-blue-600 uppercase tracking-wide">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Building Trust Through Innovation
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Every project brings us closer to our vision of a digitally empowered Africa
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Vision into Reality?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in building the digital infrastructure that will power Africa&apos;s next chapter of growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Your Journey
              </motion.button>
            </Link>
            <Link href="/case-studies">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
              >
                Our Vision
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
