'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-cream-50 to-warm-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-chocolate-600 mb-8">
              About Dubai Social Studio
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              At Dubai Social Studio, we create content that elevates brands to their next level. 
              In today's world, your Instagram is your storefront — the first impression your clients get. 
              That's why every detail matters: the light, the tone, the aesthetic, and the story you tell through each post.
            </p>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              We help businesses build an image that truly connects — modern, elegant, and visually consistent — 
              so that their online presence reflects the quality of what they offer.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-cream-200/50">
                <div className="w-12 h-12 bg-cream-50 rounded-2xl flex items-center justify-center shadow-lg border border-cream-200/50">
                  <Users className="text-chocolate-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium text-lg">We're a creative duo based in Dubai</span>
              </div>
              
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-cream-200/50">
                <div className="w-12 h-12 bg-cream-50 rounded-2xl flex items-center justify-center shadow-lg border border-cream-200/50">
                  <Heart className="text-chocolate-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium text-lg">Passionate about transforming ideas into visuals</span>
              </div>
              
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-cream-200/50">
                <div className="w-12 h-12 bg-cream-50 rounded-2xl flex items-center justify-center shadow-lg border border-cream-200/50">
                  <MapPin className="text-chocolate-600" size={20} />
                </div>
                <span className="text-gray-700 font-medium text-lg">Serving brands across Dubai and beyond</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-cream-200/50">
              <h3 className="text-2xl font-semibold text-chocolate-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 italic text-lg leading-relaxed">
                "We make your brand look as good as it deserves. Every piece of content we create is designed to attract, inspire, and grow your business."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
