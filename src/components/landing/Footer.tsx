'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import BeelioLogo from '@/components/BeelioLogo'

export default function Footer() {
  const navigation = {
    solutions: [
      { name: 'Smart Energy Monitoring', href: '#solutions' },
      { name: 'IoT Infrastructure', href: '#solutions' },
      { name: 'Automation Software', href: '#software-development' },
      { name: 'Custom AI Platforms', href: '#software-development' },
    ],
    industries: [
      { name: 'Energy & Utilities', href: '#industries' },
      { name: 'Transport & Mobility', href: '#industries' },
      { name: 'Urban Infrastructure', href: '#industries' },
      { name: 'Government & Institutions', href: '#industries' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#contact' },
      { name: 'News & Updates', href: '#case-studies' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Documentation', href: '#software-development' },
      { name: 'API Reference', href: '#software-development' },
      { name: 'Support Center', href: '#contact' },
      { name: 'Partner Program', href: '#contact' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/beelio-technologies' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/beelio_tech' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/beelio-technologies' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/beelio_technologies' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center">
                  <BeelioLogo size="lg" theme="dark" />
                </Link>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Building smart digital infrastructure solutions that transform 
                  communities and accelerate development across Africa and beyond.
                </p>
                
                {/* Contact Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>beeliotechnologies@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>+256 786 367 460</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Kampala, Uganda</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6">
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <span className="sr-only">{social.name}</span>
                        <social.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Industries</h3>
              <ul className="space-y-3">
                {navigation.industries.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-12"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
              <p className="mt-2 text-gray-300">
                Get the latest news about our innovations and industry insights.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:flex lg:items-center">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 min-w-0 flex-1"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-300">
              <p>&copy; 2024 Beelio Technologies Ltd, Kampala Uganda. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
