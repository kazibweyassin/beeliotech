'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Clock, Users, ArrowRight, Briefcase, Code, Palette, BarChart } from 'lucide-react'

export default function CareersSection() {
  const jobOpenings = [
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      icon: Code,
      description: 'Build beautiful and responsive user interfaces using React, Next.js, and modern web technologies.',
      requirements: [
        '2+ years experience with React/Next.js',
        'Strong knowledge of HTML, CSS, JavaScript',
        'Experience with Tailwind CSS or similar',
        'Understanding of responsive design principles'
      ],
      posted: '2 days ago'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      icon: Palette,
      description: 'Design intuitive user experiences for web and mobile applications that serve African communities.',
      requirements: [
        'Portfolio showcasing UI/UX design work',
        'Proficiency in Figma or similar design tools',
        'Understanding of user-centered design principles',
        'Experience with mobile-first design'
      ],
      posted: '5 days ago'
    },
    {
      id: 'business-development',
      title: 'Business Development Associate',
      department: 'Sales',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      icon: BarChart,
      description: 'Help grow our client base by identifying opportunities and building relationships with local businesses.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Strong communication and presentation skills',
        'Understanding of local Uganda business landscape',
        'Fluency in English and local languages'
      ],
      posted: '1 week ago'
    }
  ]

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Fair compensation based on experience and market rates'
    },
    {
      title: 'Learning & Growth',
      description: 'Access to online courses and professional development opportunities'
    },
    {
      title: 'Flexible Schedule',
      description: 'Hybrid work options and flexible hours to maintain work-life balance'
    },
    {
      title: 'Health Coverage',
      description: 'Medical insurance coverage for you and your dependents'
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities and company outings'
    },
    {
      title: 'Modern Equipment',
      description: 'Latest laptops and tools needed to do your best work'
    }
  ]

  return (
    <section className="py-24 bg-white" id="careers">
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
            <Briefcase className="h-4 w-4 mr-2" />
            Join Our Team
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Build the Future of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              African Tech
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a passionate team of innovators working to transform Uganda&apos;s digital landscape. 
            We&apos;re looking for talented individuals who want to make a real impact.
          </p>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <job.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Key Requirements:</h5>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Posted {job.posted}</span>
                  <Link
                    href={`mailto:beeliotechnologies@gmail.com?subject=Application for ${job.title}&body=Hi Beelio Technologies Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my application details below.%0D%0A%0D%0AThank you for your consideration.`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                  >
                    Apply Now
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Don&apos;t See Your Role?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented people to join our growing team. 
            Send us your resume and tell us how you&apos;d like to contribute to our mission.
          </p>
          <Link
            href="mailto:careers@beeliotechnologies.com?subject=General Application - Beelio Technologies&body=Hi Beelio Technologies Team,%0D%0A%0D%0AI am interested in joining your team. Please find my resume attached and let me know about any suitable opportunities.%0D%0A%0D%0AThank you!"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            Send Us Your Resume
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
