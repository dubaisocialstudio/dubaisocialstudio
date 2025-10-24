'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Eye,
  Star,
  CheckCircle,
  Camera,
  Video,
  Image as ImageIcon
} from 'lucide-react'

const UGCProfile = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const [selectedPost, setSelectedPost] = useState<any>(null)
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  // Sample UGC creator data
  const creator = {
    name: "Lorena Roman",
    username: "@lorenarsan",
    bio: "UGC Creator & Content Strategist | Helping brands tell their story through authentic content | Dubai-based",
    avatar: "/api/placeholder/150/150",
    cover: "/api/placeholder/800/300",
    verified: true,
    location: "Dubai, UAE",
    website: "lorenaugc.com",
    joinedDate: "January 2023",
    stats: {
      followers: "103.2K",
      following: "892",
      posts: "156",
      engagement: "4.2%",
      reach: "1.1M",
      impressions: "70.7K"
    },
    categories: ["Lifestyle", "Fashion", "Beauty", "Wellness", "Food", "Travel"],
    rates: {
      posts: "AED 800-1,200",
      reels: "AED 1,500-2,500", 
      stories: "AED 300-500",
      collaborations: "AED 2,000-5,000"
    }
  }

  // Portfolio photos
  const posts = [
    {
      id: 1,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/1.JPG",
      title: "Brand Collaboration",
      brand: "Lifestyle Brand",
      engagement: { likes: 1240, comments: 89, shares: 23 },
      date: "2 days ago",
      category: "Lifestyle"
    },
    {
      id: 2,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/2.JPG",
      title: "Content Creation",
      brand: "Fashion Brand",
      engagement: { likes: 892, comments: 45, shares: 12 },
      date: "5 days ago",
      category: "Fashion"
    },
    {
      id: 3,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/3.JPG",
      title: "UGC Content",
      brand: "Beauty Brand",
      engagement: { likes: 2103, comments: 156, shares: 67 },
      date: "1 week ago",
      category: "Beauty"
    },
    {
      id: 4,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/4.JPG",
      title: "Brand Partnership",
      brand: "Wellness Brand",
      engagement: { likes: 756, comments: 34, shares: 18 },
      date: "1 week ago",
      category: "Wellness"
    },
    {
      id: 5,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/5.JPG",
      title: "Content Strategy",
      brand: "Food Brand",
      engagement: { likes: 1890, comments: 98, shares: 45 },
      date: "2 weeks ago",
      category: "Food"
    },
    {
      id: 6,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/6.JPG",
      title: "Travel Content",
      brand: "Travel Brand",
      engagement: { likes: 3245, comments: 234, shares: 89 },
      date: "2 weeks ago",
      category: "Travel"
    },
    {
      id: 7,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/7.JPG",
      title: "Lifestyle Content",
      brand: "Lifestyle Brand",
      engagement: { likes: 1456, comments: 78, shares: 34 },
      date: "3 weeks ago",
      category: "Lifestyle"
    },
    {
      id: 8,
      type: 'post',
      thumbnail: "/images/lorena-portfolio/8.JPG",
      title: "Brand Campaign",
      brand: "Fashion Brand",
      engagement: { likes: 2789, comments: 123, shares: 56 },
      date: "3 weeks ago",
      category: "Fashion"
    }
  ]

  // Reels content
  const reels = [
    {
      id: 1,
      type: 'reel',
      thumbnail: "/images/lorena-reels/1.MOV",
      title: "UGC Reel Content",
      brand: "Brand Collaboration",
      engagement: { likes: 1890, comments: 98, shares: 45 },
      date: "3 days ago",
      category: "Lifestyle"
    },
    {
      id: 2,
      type: 'reel',
      thumbnail: "/images/lorena-reels/2.MOV",
      title: "Content Creation Reel",
      brand: "Fashion Brand",
      engagement: { likes: 2103, comments: 156, shares: 67 },
      date: "1 week ago",
      category: "Fashion"
    },
    {
      id: 3,
      type: 'reel',
      thumbnail: "/images/lorena-reels/3.MOV",
      title: "Brand Partnership Reel",
      brand: "Beauty Brand",
      engagement: { likes: 2567, comments: 189, shares: 78 },
      date: "2 weeks ago",
      category: "Beauty"
    },
    {
      id: 4,
      type: 'reel',
      thumbnail: "/images/lorena-reels/4.MOV",
      title: "Lifestyle Reel Content",
      brand: "Wellness Brand",
      engagement: { likes: 3124, comments: 234, shares: 89 },
      date: "3 weeks ago",
      category: "Wellness"
    }
  ]

  const highlights = [
    { id: 1, title: "Brand Collabs", thumbnail: "/api/placeholder/80/80", count: 12 },
    { id: 2, title: "Behind Scenes", thumbnail: "/api/placeholder/80/80", count: 8 },
    { id: 3, title: "Personal", thumbnail: "/api/placeholder/80/80", count: 15 },
    { id: 4, title: "Work Process", thumbnail: "/api/placeholder/80/80", count: 6 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 via-yellow-100 to-pink-50" style={{
      background: 'linear-gradient(to bottom, #fefce8 0%, #fef3c7 20%, #fef3c7 35%, #fce7f3 100%)'
    }}>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/images/lorena-hero/LORENAHERO.JPG')"
      }}>
        {/* Photo overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Instagram icon - inside pastel ball */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <a
            href="https://instagram.com/lorenarsan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Instagram className="w-8 h-8 text-white" />
          </a>
        </motion.div>
        
        {/* Animated background shapes */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-50"
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        />
        
        {/* Content - Bottom Third */}
        <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-4 pb-8 md:pb-16 lg:pb-24">
          {/* Name with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-2 md:space-y-4"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
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
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold"
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

          {/* Content Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-2">
              {[
                { id: 'posts', label: 'Posts', count: posts.length },
                { id: 'reels', label: 'Reels', count: reels.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className={`grid gap-6 ${activeTab === 'posts' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4'}`}>
            {(activeTab === 'posts' ? posts : reels).map((post, index) => (
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
                onClick={() => setSelectedPost(post)}
              >
                {activeTab === 'posts' ? (
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl mx-auto" style={{ width: '180px', height: '360px' }}>
                    <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                      <video 
                        src={post.thumbnail} 
                        className="w-full h-full object-cover cursor-pointer"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onClick={(e) => {
                          e.stopPropagation()
                          const video = e.target as HTMLVideoElement
                          if (playingVideo === post.id) {
                            video.pause()
                            setPlayingVideo(null)
                          } else {
                            // Pause all other videos
                            document.querySelectorAll('video').forEach(v => (v as HTMLVideoElement).pause())
                            video.play()
                            setPlayingVideo(post.id)
                          }
                        }}
                      />
                      {/* iPhone 17 Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full">
                        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full"></div>
                        <div className="absolute top-1.5 right-2 w-0.5 h-0.5 bg-gray-300 rounded-full"></div>
                      </div>
                      {/* iPhone 17 Action Button */}
                      <div className="absolute top-8 right-0.5 w-0.5 h-6 bg-gray-500 rounded-full"></div>
                      {/* iPhone 17 Volume Buttons */}
                      <div className="absolute top-16 right-0 w-0.5 h-4 bg-gray-500 rounded-full"></div>
                      <div className="absolute top-20 right-0 w-0.5 h-4 bg-gray-500 rounded-full"></div>
                      {/* iPhone 17 Power Button */}
                      <div className="absolute top-24 right-0 w-0.5 h-6 bg-gray-500 rounded-full"></div>
                      {/* iPhone 17 Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                )}
                
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
