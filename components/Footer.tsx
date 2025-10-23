import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cream-50 text-chocolate-600 border-t border-cream-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/LOGO.png" 
                alt="Dubai Social Studio" 
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
            
            <p className="text-chocolate-600/80 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              We create content that elevates brands to their next level. 
              Making your brand look as good as it deserves through modern, elegant, and visually consistent storytelling.
            </p>
            
            <div className="text-chocolate-600/70 text-xs sm:text-sm mb-4 sm:mb-6">
              <p>Dubai Social Studio is a division of</p>
              <p className="font-semibold text-chocolate-600">Triller Media L.L.C-FZ</p>
              <p>Registered in Dubai, UAE</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/dubaisocialstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-chocolate-600/10 rounded-lg flex items-center justify-center hover:bg-chocolate-600/20 transition-colors active:scale-95"
              >
                <Instagram size={18} className="text-chocolate-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-chocolate-600 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-chocolate-600/80 hover:text-chocolate-600 transition-colors text-sm sm:text-base block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-chocolate-600/80 hover:text-chocolate-600 transition-colors text-sm sm:text-base block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#packages" className="text-chocolate-600/80 hover:text-chocolate-600 transition-colors text-sm sm:text-base block py-1">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-chocolate-600/80 hover:text-chocolate-600 transition-colors text-sm sm:text-base block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-chocolate-600 text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">Content Creation</span>
              </li>
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">Instagram Strategy</span>
              </li>
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">Brand Aesthetic</span>
              </li>
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">UGC & Lifestyle</span>
              </li>
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">Web Design</span>
              </li>
              <li>
                <span className="text-chocolate-600/80 text-sm sm:text-base block py-1">Software Creation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
