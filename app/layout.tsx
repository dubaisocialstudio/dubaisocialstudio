import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Dubai Social Studio - Content Creation & Brand Aesthetic | Dubai Creative Agency',
  description: 'We create content that elevates brands to their next level. Professional content creation, Instagram strategy, brand aesthetic & storytelling in Dubai. Part of Triller Media L.L.C-FZ.',
  keywords: 'Dubai social media, content creation, Instagram strategy, brand aesthetic, UGC content, Dubai creative agency, social media management, brand storytelling, content marketing, Dubai marketing agency, Triller Media',
  authors: [{ name: 'Dubai Social Studio' }],
  creator: 'Dubai Social Studio',
  publisher: 'Triller Media L.L.C-FZ',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dubai Social Studio - Content Creation & Brand Aesthetic',
    description: 'We make your brand look as good as it deserves. Content creation, strategy & aesthetic storytelling in Dubai.',
    type: 'website',
    locale: 'en_US',
    url: 'https://dubaisocialstudio.com',
    siteName: 'Dubai Social Studio',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Dubai Social Studio - Content Creation & Brand Aesthetic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Social Studio - Content Creation & Brand Aesthetic',
    description: 'We make your brand look as good as it deserves. Content creation, strategy & aesthetic storytelling in Dubai.',
    images: ['/LOGO.png'],
  },
  alternates: {
    canonical: 'https://dubaisocialstudio.com',
  },
  category: 'marketing',
  classification: 'Business',
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.2048;55.2708',
    'ICBM': '25.2048, 55.2708',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dubai Social Studio",
    "alternateName": "Dubai Social Studio - Content Creation & Brand Aesthetic",
    "description": "We create content that elevates brands to their next level. Professional content creation, Instagram strategy, brand aesthetic & storytelling in Dubai.",
    "url": "https://dubaisocialstudio.com",
    "logo": "https://dubaisocialstudio.com/LOGO.png",
    "image": "https://dubaisocialstudio.com/LOGO.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Triller Media L.L.C-FZ"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Content Creation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "Photo & video content tailored to your brand"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instagram & Social Media Strategy",
            "description": "We help businesses plan, optimize, and elevate their social presence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Aesthetic & Storytelling",
            "description": "Create a cohesive visual identity that tells your story"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UGC & Lifestyle Content",
            "description": "Authentic, relatable, and creative content for brands"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Design",
            "description": "Modern, responsive websites that reflect your brand identity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Software Creation",
            "description": "Custom software solutions tailored to your specific needs"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/dubaisocialstudio"
    ]
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  )
}
