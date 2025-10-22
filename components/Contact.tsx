'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Send, Instagram, Camera, Target, Palette, Users } from 'lucide-react'
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

  const services = [
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
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

      // For now, we'll simulate the email sending
      // Uncomment the lines below once you have EmailJS set up
      
      // await emailjs.send(serviceId, templateId, {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   phone: formData.phone,
      //   service: formData.service,
      //   message: formData.message,
      //   to_email: 'hello@dubaisocialstudio.com' // Your email
      // }, publicKey)

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000))
      
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

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-cream-50/50 text-base"
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
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-cream-50/50 text-base"
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-cream-50/50 text-base"
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
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-chocolate-600 focus:border-transparent transition-all duration-300 bg-cream-50/50 text-base"
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-chocolate-600 mb-6">
                Get in touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-cream-200/50">
                    <Mail className="text-chocolate-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate-600 mb-1 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">hello@dubaisocialstudio.com</p>
                    <p className="text-xs sm:text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-cream-200/50">
                    <MapPin className="text-chocolate-600" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-chocolate-600 mb-1 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Dubai, United Arab Emirates</p>
                    <p className="text-xs sm:text-sm text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-cream-200/50">
              <h4 className="font-semibold text-chocolate-600 mb-4 text-base sm:text-lg">Follow us</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/dubaisocialstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-chocolate-600 hover:text-chocolate-700 transition-colors bg-cream-50 rounded-full px-3 sm:px-4 py-2 active:scale-95"
                >
                  <Instagram size={18} />
                  <span className="font-medium text-sm sm:text-base">@dubaisocialstudio</span>
                </a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-cream-50 rounded-2xl p-4 sm:p-6 shadow-2xl border border-cream-200/50">
              <h4 className="font-semibold mb-3 text-base sm:text-lg text-chocolate-600">Quick Response Guarantee</h4>
              <p className="text-xs sm:text-sm text-chocolate-600/80 leading-relaxed">
                We understand the importance of timely communication. Expect a response within 24 hours, 
                and for urgent projects, we're just a phone call away.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
