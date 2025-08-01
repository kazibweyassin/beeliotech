'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote, Star } from 'lucide-react'

export default function PartnersSection() {
  const testimonials = [
    {
      quote: "Beelio Technologies developed our complete e-commerce platform from scratch. Their expertise in React and Node.js helped us launch 40% faster than expected, and the system handles our growing traffic seamlessly.",
      author: "Waiswa Abdallah",
      role: "CTO",
      company: "kwiqify Digital Marketplace",
      rating: 5,
      image: ""
    },
    {
      quote: "The mobile banking app they built for us has revolutionized how our customers interact with our services. The Flutter-based solution works perfectly across all devices and has increased user engagement by 60%.",
      author: "Sarah Wanjiku",
      role: "Head of Digital Innovation",
      company: "EcoBank Kenya",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      quote: "Their custom ERP system streamlined our entire business operations. The cloud-based solution they developed has improved our efficiency by 45% and reduced operational costs significantly.",
      author: "Emmanuel Kayongo",
      role: "Operations Director",
      company: "Vizzar Jobs",
      rating: 5,
      image: ""
    }
  ]

  const partners = [
    { name: 'Microsoft Africa', logo: '/api/placeholder/150/60' },
    { name: 'Google Cloud', logo: '/api/placeholder/150/60' },
    { name: 'Amazon Web Services', logo: '/api/placeholder/150/60' },
    { name: 'Digital Ocean', logo: '/api/placeholder/150/60' },
    { name: 'Vercel', logo: '/api/placeholder/150/60' },
    { name: 'MongoDB', logo: '/api/placeholder/150/60' },
    { name: 'Stripe', logo: '/api/placeholder/150/60' },
    { name: 'GitHub', logo: '/api/placeholder/150/60' }
  ]

  return (
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Stories */}
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
            Hear from our partners and clients about how Beelio Technologies 
            has transformed their operations and communities.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-200" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-blue-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Trusted by Leading Organizations
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <div className="text-gray-400 group-hover:text-blue-600 font-semibold text-sm text-center">
                    {partner.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Network of Partners
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of Africa&apos;s digital transformation. Let&apos;s build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Become a Partner
              </button>
              <Link
                href="/case-studies"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
