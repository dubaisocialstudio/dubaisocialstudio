'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, MapPin, Send, Instagram, Camera, Target, Palette, Users, Monitor } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Handle URL parameters for auto-filling form
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const service = urlParams.get('service')
      if (service) {
        setFormData(prev => ({ ...prev, service }))
      }
      
      // Also handle hash navigation to contact section
      if (window.location.hash === '#contact') {
        // Scroll to contact section
        setTimeout(() => {
          const contactSection = document.getElementById('contact')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [])

  const services = [
    { id: 'starter', label: 'Starter Package (4 Reels, 10 Photos)', icon: Camera },
    { id: 'premium', label: 'Premium Package (8 Reels, 20 Photos)', icon: Target },
    { id: 'website', label: 'Website Design Package (AED 5,000)', icon: Monitor },
    { id: 'custom', label: 'Custom Package', icon: Palette },
    { id: 'ugc-profile', label: 'UGC Profile Creation', icon: Users },
    { id: 'content', label: 'Content Creation', icon: Camera },
    { id: 'strategy', label: 'Instagram & Social Media Strategy', icon: Target },
    { id: 'brand', label: 'Brand Aesthetic & Storytelling', icon: Palette },
    { id: 'ugc', label: 'UGC & Lifestyle Content', icon: Users },
    { id: 'all', label: 'All Services', icon: Camera }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceId = 'service_vzcusbp'
      const templateId = 'template_c1sg6wk'
      const publicKey = 'pJFpZTDds26mieMbG'

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'hello@dubaisocialstudio.com'
      }, publicKey)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-chocolate-600 mb-4 px-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Ready to elevate your brand? Get in touch with us to discuss your project and how we can help you create content that truly connects.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-cream-200/50">
              <h3 className="text-xl sm:text-2xl font-semibold text-chocolate-600 mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-white text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-white text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-white text-base"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-white text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 resize-none text-base"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base sm:text-lg ${
                    isSubmitting 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-cream-50 hover:bg-cream-100 text-chocolate-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-500"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl text-green-700 text-center"
                  >
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-center"
                  >
                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
