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
  title: 'Dubai Social Studio - Content Creation & Brand Aesthetic',
  description: 'We create content that elevates brands to their next level. Content creation, Instagram strategy, brand aesthetic & storytelling in Dubai.',
  keywords: 'Dubai social media, content creation, Instagram strategy, brand aesthetic, UGC content, Dubai creative agency',
  authors: [{ name: 'Dubai Social Studio' }],
  openGraph: {
    title: 'Dubai Social Studio - Content Creation & Brand Aesthetic',
    description: 'We make your brand look as good as it deserves. Content creation, strategy & aesthetic storytelling in Dubai.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
