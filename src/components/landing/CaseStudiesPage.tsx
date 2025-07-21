'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'uganda-solar-grid',
      title: 'Smart Solar Microgrid Implementation in Rural Uganda',
      client: 'Uganda Rural Electrification Agency',
      category: 'Energy & Utilities',
      location: 'Gulu District, Northern Uganda',
      duration: '18 months',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      challenge: 'Over 5,000 households in remote villages lacked reliable electricity access, hindering economic development and educational opportunities.',
      solution: 'Deployed an intelligent solar microgrid system with IoT monitoring, battery storage optimization, and mobile payment integration.',
      results: [
        { metric: '5,200', description: 'Households connected to reliable electricity' },
        { metric: '85%', description: 'Reduction in energy costs for users' },
        { metric: '40%', description: 'Increase in local business revenue' },
        { metric: '99.2%', description: 'System uptime achieved' }
      ],
      technologies: ['IoT Sensors', 'Solar PV Systems', 'Battery Management', 'Mobile Payment API'],
      impact: 'Enabled 24/7 electricity access for rural communities, supporting 200+ new small businesses and improving educational outcomes for 3,000+ students.',
      testimonial: {
        quote: "Beelio's smart microgrid has transformed our community. Children can now study at night, and our businesses operate around the clock.",
        author: 'Sarah Akello',
        position: 'Community Leader, Gulu District'
      }
    },
    {
      id: 'kenya-transport-optimization',
      title: 'AI-Powered Traffic Management System for Nairobi',
      client: 'Kenya Urban Roads Authority',
      category: 'Transport & Mobility',
      location: 'Nairobi, Kenya',
      duration: '12 months',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      challenge: 'Severe traffic congestion in Nairobi CBD was causing 3+ hour delays and significant economic losses estimated at $1.2M daily.',
      solution: 'Implemented AI-driven traffic optimization using real-time data from IoT sensors, cameras, and mobile GPS data.',
      results: [
        { metric: '45%', description: 'Reduction in average commute time' },
        { metric: '30%', description: 'Decrease in fuel consumption' },
        { metric: '60%', description: 'Improvement in traffic flow efficiency' },
        { metric: '$800K', description: 'Daily economic savings achieved' }
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'IoT Traffic Sensors', 'Real-time Analytics'],
      impact: 'Revolutionized urban mobility for 4.5M residents, reduced carbon emissions by 25%, and improved quality of life significantly.',
      testimonial: {
        quote: "The AI traffic system has made Nairobi streets more efficient than ever. Our commute times have been cut in half.",
        author: 'Dr. James Macharia',
        position: 'Transport Secretary, Nairobi County'
      }
    },
    {
      id: 'rwanda-digital-services',
      title: 'Digital Government Services Platform',
      client: 'Government of Rwanda',
      category: 'Government & Institutions',
      location: 'Kigali, Rwanda',
      duration: '24 months',
      year: '2022-2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80',
      challenge: 'Citizens faced long queues and bureaucratic delays for government services, with 70% of processes requiring physical visits.',
      solution: 'Built a comprehensive digital platform enabling online access to 150+ government services with blockchain verification.',
      results: [
        { metric: '150+', description: 'Government services digitized' },
        { metric: '90%', description: 'Reduction in processing time' },
        { metric: '2.8M', description: 'Citizens actively using the platform' },
        { metric: '95%', description: 'User satisfaction rate' }
      ],
      technologies: ['Blockchain', 'Digital Identity', 'Cloud Infrastructure', 'Mobile-First Design'],
      impact: 'Transformed citizen-government interaction, eliminated corruption in service delivery, and positioned Rwanda as a digital governance leader in Africa.',
      testimonial: {
        quote: "This platform has made government services accessible to every Rwandan. We've leapfrogged decades of traditional bureaucracy.",
        author: 'Hon. Paula Ingabire',
        position: 'Minister of ICT, Rwanda'
      }
    },
    {
      id: 'tanzania-smart-agriculture',
      title: 'Smart Agriculture IoT Network',
      client: 'Tanzania Agricultural Development Bank',
      category: 'Agriculture & Environment',
      location: 'Dodoma Region, Tanzania',
      duration: '15 months',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      challenge: 'Smallholder farmers experienced 40% crop losses due to unpredictable weather, poor irrigation, and lack of real-time agricultural data.',
      solution: 'Deployed comprehensive IoT sensor network for soil monitoring, weather prediction, and automated irrigation management.',
      results: [
        { metric: '8,500', description: 'Farmers benefiting from the system' },
        { metric: '65%', description: 'Increase in crop yields' },
        { metric: '50%', description: 'Reduction in water usage' },
        { metric: '80%', description: 'Decrease in crop losses' }
      ],
      technologies: ['Soil Sensors', 'Weather Stations', 'Satellite Data', 'Automated Irrigation'],
      impact: 'Enhanced food security for 50,000+ people, increased farmer incomes by 120%, and promoted sustainable farming practices.',
      testimonial: {
        quote: "The smart farming technology has doubled our harvest. We now farm with data, not just hope.",
        author: 'Mwalimu Juma',
        position: 'Farmer Cooperative Leader'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Real-world impact stories showcasing how Beelio Technologies transforms 
              communities across Africa through innovative digital infrastructure solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {study.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {study.duration} • {study.year}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{result.metric}</div>
                              <div className="text-sm text-gray-600">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">Client Testimonial</h4>
                        <blockquote className="text-gray-600 italic mb-3">
                          &quot;{study.testimonial.quote}&quot;
                        </blockquote>
                        <cite className="text-sm font-medium text-gray-900 not-italic">
                          {study.testimonial.author}, {study.testimonial.position}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Impact Section */}
                <div className="bg-gray-50 p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Impact & Outcomes</h3>
                      <p className="text-gray-600 mb-6">{study.impact}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Project Highlights</h4>
                      <div className="space-y-2">
                        {['Successfully deployed on schedule', 'Exceeded performance targets', 'High user adoption rate', 'Sustainable long-term impact'].map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join the growing list of organizations transforming their operations with Beelio Technologies. 
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Explore Solutions
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
