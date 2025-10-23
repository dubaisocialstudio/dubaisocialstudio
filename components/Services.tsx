'use client'

import { motion, useInView } from 'framer-motion'
import { Camera, Target, Palette, Users, Monitor, Code } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'Photo & video content tailored to your brand. We capture the essence of your business through aesthetic, high-quality visuals that engage your audience.',
      features: ['Professional Photography', 'Video Production', 'Brand-Specific Content', 'High-Quality Visuals']
    },
    {
      icon: Target,
      title: 'Instagram & Social Media Strategy',
      description: 'We help businesses plan, optimize, and elevate their social presence, turning Instagram into a powerful tool to attract clients.',
      features: ['Content Planning', 'Growth Strategy', 'Engagement Optimization', 'Analytics & Insights']
    },
    {
      icon: Palette,
      title: 'Brand Aesthetic & Storytelling',
      description: 'Every detail matters. We create a cohesive visual identity that tells your story, enhances your brand image, and leaves a lasting impression.',
      features: ['Visual Identity', 'Brand Guidelines', 'Storytelling Strategy', 'Cohesive Design']
    },
    {
      icon: Users,
      title: 'UGC & Lifestyle Content',
      description: 'Authentic, relatable, and creative content for brands that want to connect with their audience naturally and stand out in a crowded market.',
      features: ['User-Generated Content', 'Lifestyle Photography', 'Authentic Storytelling', 'Market Differentiation']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Modern, responsive websites that reflect your brand identity and provide an exceptional user experience across all devices.',
      features: ['Responsive Design', 'Brand Integration', 'User Experience', 'Modern Aesthetics']
    },
    {
      icon: Code,
      title: 'Personal Software Creation',
      description: 'Custom software solutions tailored to your specific needs, from web applications to mobile apps that streamline your business processes.',
      features: ['Custom Development', 'Web Applications', 'Mobile Apps', 'Business Solutions']
    }
  ]

  // Auto-scroll functionality for desktop
  useEffect(() => {
    if (typeof window === 'undefined') return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (services.length - 2) // -2 because we show 3 cards at a time
        return nextIndex
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [services.length])

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 400 // Approximate card width + gap
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-chocolate-600 mb-4 px-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We offer comprehensive solutions to elevate your brand's online presence and create content that truly connects with your audience.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll container */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 w-80 flex-shrink-0 snap-center"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-cream-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="text-chocolate-600" size={20} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-chocolate-600 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-chocolate-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Auto-scrolling carousel */}
        <div className="hidden md:block">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-cream-200/50 active:scale-95 flex-shrink-0 w-96"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-cream-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-cream-200/50"
                >
                  <service.icon className="text-chocolate-600" size={24} />
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-chocolate-600 mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 bg-cream-50 rounded-full px-4 py-2 border border-cream-200/50">
                      <div className="w-2 h-2 bg-chocolate-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: services.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-chocolate-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a href="#contact" className="bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-block text-base sm:text-lg">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
