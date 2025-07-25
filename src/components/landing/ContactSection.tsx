'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'consultation'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Method 1: Try EmailJS if configured
      const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (emailjsUserId && emailjsServiceId && emailjsTemplateId && 
          emailjsUserId !== 'your_emailjs_user_id_here') {
        
        // Initialize EmailJS
        emailjs.init(emailjsUserId)
        
        // Send email via EmailJS
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || 'Not provided',
            service: formData.service,
            message: formData.message,
            to_email: 'beeliotechnologies@gmail.com'
          }
        )
        
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'consultation'
        })
        return
      }

      // Method 2: Fallback to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Open mailto link as fallback
        if (result.mailtoLink) {
          window.open(result.mailtoLink)
        }
        
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'consultation'
        })
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      
      // Final fallback: Direct mailto link
      const mailtoLink = `mailto:beeliotechnologies@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\n\nMessage:\n${formData.message}`)}`
      window.open(mailtoLink)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'beeliotechnologies@gmail.com',
      details2: 'info@beelio.tech',


      subdetails: 'General inquiries & support'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+256 786 367 460',
      subdetails: 'Available 24/7'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Kampala, Uganda',
      subdetails: 'Rubaga Road'
    }
  ]

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your infrastructure? Get in touch with our team to discuss 
            your project requirements and discover how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="consultation">Free Consultation</option>
                  <option value="website">Website Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="school-management">Cyber Security Solutions</option>
                  <option value="hospital-management">AI & ML Solutions</option>
                  <option value="ecommerce">System Design Solutions</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">Message sent successfully! We&apos;ll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <span className="text-red-800">Failed to send message. Please try again or email us directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center group ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Send className={`mr-2 h-5 w-5 transition-transform ${
                  isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'
                }`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                let href = '#'
                if (info.title === 'Email Us') {
                  href = 'mailto:beeliotechnologies@gmail.com'
                } else if (info.title === 'Call Us') {
                  href = 'tel:+256786367460'
                }
                
                return (
                  <a 
                    key={index} 
                    href={href}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group cursor-pointer block"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-lg flex items-center justify-center transition-all">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.details}</p>
                      {info.subdetails && (
                        <p className="text-gray-500 text-sm">{info.subdetails}</p>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Schedule Call CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 mr-3" />
                <h4 className="text-xl font-bold">Schedule a Call</h4>
              </div>
              <p className="mb-6 opacity-90">
                Prefer to talk directly? Schedule a free 30-minute consultation 
                with our technical team to discuss your project.
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
                Book Consultation
              </button>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
