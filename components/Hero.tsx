'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Instagram, Camera, Palette } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-warm-100 relative overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo positioned between header and headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <img 
                src="/LOGO.png" 
                alt="Dubai Social Studio" 
                className="mx-auto h-16 md:h-20 lg:h-24 w-auto"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-chocolate-600 mb-8 leading-tight"
            >
              We make your brand look as good as it deserves
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              In today's world, your Instagram is your storefront, the first impression your clients get. We create content that elevates brands to their next level with modern, elegant, and visually consistent storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get Started
                <ArrowRight size={20} />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Our Work
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-12 mt-16 pt-12 border-t border-cream-200 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">Brands Elevated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chocolate-600">2</div>
                <div className="text-sm text-gray-600 mt-1">Creative Minds</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  )
}
