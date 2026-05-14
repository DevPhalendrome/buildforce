import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Buildforce | Professional Construction & Building Services | South Africa',
  description: 'Expert construction services spanning 18+ specialized trades. 250+ projects completed, 15+ years experience. Roofing, carpentry, structural, electrical, plumbing, finishing.',
  keywords: ['construction', 'roofing', 'carpentry', 'building services', 'south africa'],
  authors: [{ name: 'Phalendrone Works' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://buildforce.co.za',
    title: 'Buildforce | Professional Construction & Building Services',
    description: 'Expert construction services spanning 18+ specialized trades.',
    images: [{
      url: '/images/IMG-20260215-WA0190.jpg',
      width: 1200,
      height: 630,
      alt: 'Buildforce Construction Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildforce | Professional Construction & Building Services',
    description: 'Expert construction services spanning 18+ specialized trades.',
    images: ['/images/IMG-20260215-WA0190.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
