'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Founder, Luxe Beauty Dubai',
      content: 'Dubai Social Studio transformed our Instagram presence completely. Our engagement increased by 300% and we\'re now attracting the right clientele. Their attention to detail and aesthetic vision is unmatched.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Mohammed Al-Rashid',
      role: 'Owner, Desert Rose Restaurant',
      content: 'Working with Dubai Social Studio was a game-changer for our restaurant. They captured the essence of our brand perfectly and created content that truly represents our quality and atmosphere.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emma Thompson',
      role: 'CEO, Wellness Hub Dubai',
      content: 'The team at Dubai Social Studio understood our vision from day one. They created a cohesive brand aesthetic that elevated our entire online presence. Highly recommend their services!',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-warm-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-chocolate-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Dubai Social Studio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-chocolate-600 mb-4 opacity-60" />
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-chocolate-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-chocolate-600">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
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
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-chocolate-600 mb-4">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the growing list of satisfied clients who have transformed their online presence with Dubai Social Studio.
            </p>
            <a href="#contact" className="btn-primary">
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
