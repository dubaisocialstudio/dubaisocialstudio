'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Instagram,
  Mail,
  Users
} from 'lucide-react'

const UGCProfile = () => {

  // Creator data
  const creator = {
    name: "Lorena Roman",
    username: "@lorenarsan",
    stats: {
      followers: "103.2K",
      engagement: "4.2%",
      reach: "1.1M",
      impressions: "70.7K"
    }
  }

  // Portfolio photos
  const posts = [
    { id: 1, type: 'post', thumbnail: "/images/lorena-portfolio/1.JPG", title: "Brand Collaboration" },
    { id: 2, type: 'post', thumbnail: "/images/lorena-portfolio/2.JPG", title: "Content Creation" },
    { id: 3, type: 'post', thumbnail: "/images/lorena-portfolio/3.JPG", title: "UGC Content" },
    { id: 6, type: 'post', thumbnail: "/images/lorena-portfolio/6.JPG", title: "Travel Content" },
    { id: 7, type: 'post', thumbnail: "/images/lorena-portfolio/7.JPG", title: "Lifestyle Content" }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 via-yellow-100 to-pink-50" style={{
      background: 'linear-gradient(to bottom, #fefce8 0%, #fef3c7 20%, #fef3c7 35%, #fce7f3 100%)'
    }}>

      {/* Hero Section */}
      <div className="relative h-screen sm:h-screen md:h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-bottom bg-no-repeat md:bg-bottom" style={{
        backgroundImage: "url('/images/lorena-hero/LORENAHERO.JPG')"
      }}>
        {/* Photo overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        
        
        {/* Content - Bottom Third */}
        <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-4 pb-4 sm:pb-6 md:pb-16 lg:pb-24">
          {/* Name with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-2 md:space-y-4"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                color: '#fef3c7',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              {creator.name}
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                color: '#fef3c7',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              UGC Creator
            </motion.p>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>


      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Services Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I create authentic content that connects with your audience and drives real results
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "UGC Content",
                description: "I leverage authentic content created by users to build trust and engagement with your audience, enhancing brand credibility and reach.",
                features: ["Authenticity", "Engagement", "Trust", "Community Building", "Brand Advocacy", "Organic Reach"]
              },
              {
                number: "02", 
                title: "Photography",
                description: "I capture high-quality images that tell your brand's story, evoke emotions, and create a lasting impression on your audience.",
                features: ["High-Quality Images", "Brand Storytelling", "Visual Appeal", "Emotional Connection", "Professional Photography", "Creative Direction"]
              },
              {
                number: "03",
                title: "Short-Form Video", 
                description: "I produce engaging short-form videos that capture attention quickly, convey your message effectively, and drive social media engagement.",
                features: ["Engaging Content", "Quick Attention", "Effective Messaging", "Social Media Engagement", "Video Production", "Creative Storytelling"]
              },
              {
                number: "04",
                title: "Content Strategy",
                description: "I create social strategies to maximize reach, engagement, and conversions through data-driven insights and creative execution.",
                features: ["Research & Insights", "Purpose, Mission, Vision", "Value Propositions", "Brand Voice", "Verbal Identity", "Personality Traits"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:shadow-xl hover:bg-white/80 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4 group-hover:text-pink-100 transition-colors">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Recent work and collaborations
            </motion.p>
          </motion.div>


          {/* Content Grid */}
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 mt-16 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
            <p className="text-gray-600">Real results for real brands</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: creator.stats.followers, label: "Followers" },
              { value: creator.stats.engagement, label: "Engagement Rate" },
              { value: creator.stats.reach, label: "Monthly Reach" },
              { value: creator.stats.impressions, label: "Monthly Impressions" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-4xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Me Section */}
        <motion.div 
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/20 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4 text-center"
          >
            Why me?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg md:text-xl leading-relaxed text-center"
            style={{ color: '#6b7280' }}
          >
            <p>
              My experience focuses on creating authentic and relatable content that truly connects with the audience. Nowadays, people want to see the real side behind the screen, and that's exactly what I deliver.
            </p>
            
            <p>
              I create content about lifestyle, fashion, beauty, and everyday moments, always paying attention to every detail, because I'm a perfectionist with my work.
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-white/20 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's work together!</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">Ready to create authentic content that drives results?</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Social Links - Icon Only */}
            <motion.div 
              className="flex justify-center space-x-6 md:space-x-8 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:lorenaromansanchez@gmail.com"
                className="group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-14 h-14 md:w-16 md:h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-300 touch-manipulation"
                >
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="https://instagram.com/lorenarsan"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="w-14 h-14 md:w-16 md:h-16 border-2 border-gray-300 rounded-2xl flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-50 transition-all duration-300 touch-manipulation"
                >
                  <Instagram className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </motion.div>
              </motion.a>
            </motion.div>

            {/* CTA Button */}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center py-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Created by{' '}
            <a 
              href="/#contact" 
              className="text-gray-900 hover:text-gray-700 font-semibold transition-colors duration-300"
            >
              Dubai Social Studio
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Do you want a UGC profile?{' '}
            <a 
              href="/?service=ugc-profile#contact" 
              className="text-gray-700 hover:text-gray-900 font-medium underline transition-colors duration-300"
            >
              Click here
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default UGCProfile
