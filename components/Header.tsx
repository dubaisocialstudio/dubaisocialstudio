'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when at top
      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsScrolled(false)
        setShowScrollTop(false)
      } else {
        setIsScrolled(true)
        setShowScrollTop(currentScrollY > 300)
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="fixed top-0 w-full z-50 border-b border-cream-200/50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/LOGO.png" 
              alt="Dubai Social Studio" 
              className="h-6 w-auto group-hover:opacity-80 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-chocolate-600 transition-all duration-300 font-medium rounded-full hover:bg-cream-50 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-chocolate-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-cream-200">
              <Link
                href="#contact"
                className="bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-cream-200/50"
              >
                Book Consultation
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-2xl hover:bg-cream-100 transition-all duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-chocolate-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-chocolate-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute top-4 left-0 w-6 h-0.5 bg-chocolate-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 border-t border-cream-200/50 bg-white/95 backdrop-blur-md"
            >
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-chocolate-600 hover:bg-cream-50 transition-all duration-300 font-medium rounded-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navigation.length * 0.1 }}
                className="pt-4 mt-4 border-t border-cream-200/50"
              >
                <Link
                  href="#contact"
                  className="block w-full bg-cream-50 hover:bg-cream-100 text-chocolate-600 px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-center shadow-lg border border-cream-200/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </motion.div>
            </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-chocolate-600 to-chocolate-700 hover:from-chocolate-700 hover:to-chocolate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
