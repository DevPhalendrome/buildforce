import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://buildforce.co.za'),
  title: {
    default: 'Buildforce | Premium Construction Services South Africa',
    template: '%s | Buildforce',
  },
  description: 'Premium construction services across 18+ trades in South Africa. Roofing, structural work, carpentry, finishing, electrical, and more. Backed by Phalendrome Works.',
  keywords: [
    'construction', 'roofing', 'carpentry', 'structural',
    'building services', 'south africa', 'phalendrome',
    'buildforce', 'construction company south africa',
  ],
  authors: [{ name: 'Phalendrome Works' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Buildforce',
    title: 'Buildforce | Premium Construction Services South Africa',
    description: 'Premium construction services across 18+ trades. Backed by Phalendrome Works.',
    images: [
      {
        url: '/images/IMG-20260215-WA0190.jpg',
        width: 1200,
        height: 630,
        alt: 'Buildforce Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildforce | Premium Construction Services',
    description: 'Premium construction services across 18+ trades in South Africa.',
    images: ['/images/IMG-20260215-WA0190.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
