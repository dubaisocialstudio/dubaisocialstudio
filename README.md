# Dubai Social Studio Website

A modern, elegant website for Dubai Social Studio - a creative content creation and brand aesthetic agency based in Dubai.

## Features

- **Modern Design**: Clean, minimalist layout with beige/cream/chocolate brown color scheme
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal performance and SEO
- **Contact Form**: Lead capture form with service selection
- **Portfolio Gallery**: Filterable showcase of work
- **Testimonials**: Social proof from satisfied clients

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── Portfolio.tsx        # Portfolio gallery
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
└── tailwind.config.js       # Tailwind configuration
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- **Cream**: `#FFF8DC`, `#F5F5DC`
- **Chocolate**: `#8B4513`, `#A0522D`
- **Warm**: `#FDF6E3`, `#F4E4BC`

### Content
Update the content in each component file to match your specific needs:
- Services in `components/Services.tsx`
- Portfolio items in `components/Portfolio.tsx`
- Testimonials in `components/Testimonials.tsx`
- Contact information in `components/Contact.tsx` and `components/Footer.tsx`

## Deployment

The site is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any static hosting service**

## Contact

For questions about this website, contact Dubai Social Studio at hello@dubaisocialstudio.com
