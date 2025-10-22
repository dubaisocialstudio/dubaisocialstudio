'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { Camera, Target, Palette, Users, Eye } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filters = [
    { id: 'all', label: 'All Work', icon: Eye },
    { id: 'content', label: 'Content Creation', icon: Camera },
    { id: 'strategy', label: 'Social Strategy', icon: Target },
    { id: 'brand', label: 'Brand Aesthetic', icon: Palette },
    { id: 'ugc', label: 'UGC & Lifestyle', icon: Users },
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'content',
      title: 'Luxury Restaurant Brand',
      description: 'Complete visual identity and content creation for a high-end Dubai restaurant',
      image: '/api/placeholder/400/300',
      tags: ['Photography', 'Brand Identity', 'Social Media']
    },
    {
      id: 2,
      category: 'strategy',
      title: 'Fashion Boutique Growth',
      description: 'Instagram strategy that increased followers by 300% in 6 months',
      image: '/api/placeholder/400/300',
      tags: ['Strategy', 'Growth', 'Engagement']
    },
    {
      id: 3,
      category: 'brand',
      title: 'Wellness Center Aesthetic',
      description: 'Cohesive brand aesthetic and storytelling for a wellness brand',
      image: '/api/placeholder/400/300',
      tags: ['Brand Design', 'Aesthetic', 'Storytelling']
    },
    {
      id: 4,
      category: 'ugc',
      title: 'Lifestyle Brand Campaign',
      description: 'Authentic UGC content that increased brand engagement by 250%',
      image: '/api/placeholder/400/300',
      tags: ['UGC', 'Lifestyle', 'Authentic']
    },
    {
      id: 5,
      category: 'content',
      title: 'Tech Startup Launch',
      description: 'Complete content strategy and creation for a Dubai tech startup',
      image: '/api/placeholder/400/300',
      tags: ['Content Creation', 'Launch', 'Tech']
    },
    {
      id: 6,
      category: 'brand',
      title: 'Beauty Brand Transformation',
      description: 'Visual identity overhaul that elevated brand perception',
      image: '/api/placeholder/400/300',
      tags: ['Brand Identity', 'Transformation', 'Beauty']
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-600 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped brands elevate their online presence and create content that truly connects with their audience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-chocolate-600 text-white shadow-lg'
                  : 'bg-cream-100 text-chocolate-600 hover:bg-chocolate-600 hover:text-white'
              }`}
            >
              <filter.icon size={18} />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-cream-200/50">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-cream-50 to-warm-100 flex items-center justify-center relative overflow-hidden border border-cream-200/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cream-200/30"></div>
                  <div className="text-center text-chocolate-600 relative z-10">
                    <Camera size={48} className="mx-auto mb-2 opacity-80" />
                    <p className="text-sm opacity-80 font-medium">Portfolio Image</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-chocolate-600 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-cream-50 text-chocolate-600 text-sm rounded-full font-medium shadow-sm border border-cream-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-8 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
