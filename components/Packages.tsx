'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Check, Star, Zap, Crown } from 'lucide-react'

export default function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Set default scroll position to Premium package (index 1)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 // Card width (w-80 = 320px)
      const gap = 16 // Gap between cards
      const totalCardWidth = cardWidth + gap
      const premiumIndex = 1 // Premium is at index 1
      scrollContainerRef.current.scrollLeft = premiumIndex * totalCardWidth
    }
  }, [])

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: 'AED 2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      icon: Star,
      features: [
        '4 Reels per month',
        '10 Photos per month',
        'Basic content calendar',
        'Content planning & strategy',
        'Brand guidelines consultation',
        'Email support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'AED 4,500',
      period: '/month',
      description: 'Complete Instagram management',
      icon: Crown,
      features: [
        '8 Reels per month',
        '20 Photos per month',
        'Full Instagram management',
        'Weekly content uploads',
        'Daily stories creation',
        'Copywriting & captions',
        'Content calendar & scheduling',
        'Analytics & performance reports',
        'Priority support',
        'Monthly strategy calls'
      ]
    },
    {
      id: 'custom',
      name: 'Custom',
      price: 'Let\'s Talk',
      period: '',
      description: 'Tailored solutions for unique needs',
      icon: Zap,
      features: [
        'Custom content volume',
        'Custom content strategy',
        'Multi-platform management',
        'Video production',
        'Photography sessions',
        'Brand partnerships',
        'Campaign management',
        'Dedicated account manager',
        'Priority support',
        'Custom reporting'
      ]
    }
  ]

  return (
    <section id="packages" className="section-padding bg-gradient-to-br from-cream-50 to-warm-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-chocolate-600 mb-4 px-4">
            Choose Your Package
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Flexible packages designed to grow with your business. From getting started to full-scale management.
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll container */}
        <div className="md:hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon
              return (
                <div
                  key={pkg.id}
                  className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 w-80 flex-shrink-0 snap-center"
                >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 rounded-xl bg-cream-50">
                      <IconComponent size={20} className="text-chocolate-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-chocolate-600 text-center mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
                    {pkg.description}
                  </p>

                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl sm:text-3xl font-bold text-chocolate-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.15) + (featureIndex * 0.05) }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex items-start gap-2"
                      >
                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Scroll to contact form
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                      
                      // Map package to correct service ID
                      const serviceMapping = {
                        'starter': 'starter',      // Starter → Starter Package
                        'premium': 'premium',     // Premium → Premium Package  
                        'custom': 'custom'        // Custom → Custom Package
                      }
                      
                      // Pre-fill the service field in the contact form
                      setTimeout(() => {
                        const serviceSelect = document.getElementById('service') as HTMLSelectElement
                        if (serviceSelect) {
                          serviceSelect.value = serviceMapping[pkg.id as keyof typeof serviceMapping]
                          // Trigger change event to update form state
                          serviceSelect.dispatchEvent(new Event('change', { bubbles: true }))
                        }
                      }, 500) // Small delay to ensure form is visible
                    }}
                    className="w-full bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base mt-auto"
                  >
                    {pkg.id === 'custom' ? 'Get Custom Quote' : 'Get Started'}
                  </motion.button>
                </div>
              </div>
            )
          })}
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:max-w-5xl md:mx-auto">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2 rounded-xl bg-cream-50">
                      <IconComponent size={20} className="text-chocolate-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-chocolate-600 text-center mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
                    {pkg.description}
                  </p>

                  <div className="text-center mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl sm:text-3xl font-bold text-chocolate-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        {pkg.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.15) + (featureIndex * 0.05) }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex items-start gap-2"
                      >
                        <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // Scroll to contact form
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                      
                      // Map package to correct service ID
                      const serviceMapping = {
                        'starter': 'starter',      // Starter → Starter Package
                        'premium': 'premium',     // Premium → Premium Package  
                        'custom': 'custom'        // Custom → Custom Package
                      }
                      
                      // Pre-fill the service field in the contact form
                      setTimeout(() => {
                        const serviceSelect = document.getElementById('service') as HTMLSelectElement
                        if (serviceSelect) {
                          serviceSelect.value = serviceMapping[pkg.id as keyof typeof serviceMapping]
                          // Trigger change event to update form state
                          serviceSelect.dispatchEvent(new Event('change', { bubbles: true }))
                        }
                      }, 500) // Small delay to ensure form is visible
                    }}
                    className="w-full bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base mt-auto"
                  >
                    {pkg.id === 'custom' ? 'Get Custom Quote' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 max-w-3xl mx-auto">
            <h3 className="text-base sm:text-lg font-serif font-bold text-chocolate-600 mb-3">
              All Packages Include
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" />
                <span>Brand consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" />
                <span>Content strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" />
                <span>High-quality visuals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-green-500" />
                <span>Professional editing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}