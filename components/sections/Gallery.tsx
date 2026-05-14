'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Gallery - show only 6 featured images to keep homepage fast
  const galleryImages = [
    { src: '/images/IMG-20260215-WA0000.jpg', alt: 'Premium construction work' },
    { src: '/images/IMG-20260215-WA0002.jpg', alt: 'Finishing carpentry work' },
    { src: '/images/IMG-20260215-WA0006.jpg', alt: 'Structural framework assembly' },
    { src: '/images/IMG-20260215-WA0009.jpg', alt: 'Residential renovation project' },
    { src: '/images/IMG-20260215-WA0023.jpg', alt: 'Premium project showcase' },
    { src: '/images/IMG-20260215-WA0028.jpg', alt: 'Completed project showcase' },
  ]

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            A showcase of our finest construction and installation projects
          </p>
          <Link href="/projects" className="inline-block text-accent hover:text-secondary font-semibold mt-2 transition">
            View all 24+ projects →
          </Link>
        </div>

        {/* Gallery Grid - 6 images only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group bg-gray-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative w-full max-w-4xl max-h-96"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
