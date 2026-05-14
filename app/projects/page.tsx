'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const allProjects = [
    { src: '/images/IMG-20260215-WA0000.jpg', alt: 'Premium construction work', category: 'Structural' },
    { src: '/images/IMG-20260215-WA0001.jpg', alt: 'Structural installation detail', category: 'Structural' },
    { src: '/images/IMG-20260215-WA0002.jpg', alt: 'Finishing carpentry work', category: 'Carpentry' },
    { src: '/images/IMG-20260215-WA0003.jpg', alt: 'Professional electrical setup', category: 'Electrical' },
    { src: '/images/IMG-20260215-WA0004.jpg', alt: 'Custom window installation', category: 'Windows' },
    { src: '/images/IMG-20260215-WA0005.jpg', alt: 'Floor preparation and alignment', category: 'Flooring' },
    { src: '/images/IMG-20260215-WA0006.jpg', alt: 'Structural framework assembly', category: 'Structural' },
    { src: '/images/IMG-20260215-WA0007.jpg', alt: 'Roofing project completion', category: 'Roofing' },
    { src: '/images/IMG-20260215-WA0008.jpg', alt: 'Commercial construction site', category: 'Commercial' },
    { src: '/images/IMG-20260215-WA0009.jpg', alt: 'Residential renovation project', category: 'Residential' },
    { src: '/images/IMG-20260215-WA0010.jpg', alt: 'Exterior finishing work', category: 'Finishing' },
    { src: '/images/IMG-20260215-WA0011.jpg', alt: 'Interior installation detail', category: 'Interior' },
    { src: '/images/IMG-20260215-WA0023.jpg', alt: 'Premium project showcase', category: 'Featured' },
    { src: '/images/IMG-20260215-WA0025.jpg', alt: 'Construction detail work', category: 'Detail' },
    { src: '/images/IMG-20260215-WA0026.jpg', alt: 'Advanced framing techniques', category: 'Carpentry' },
    { src: '/images/IMG-20260215-WA0027.jpg', alt: 'Professional installation process', category: 'Installation' },
    { src: '/images/IMG-20260215-WA0028.jpg', alt: 'Completed project showcase', category: 'Completed' },
  ]

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? allProjects.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allProjects.length)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="section-padding bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container-max">
          <h1 className="text-5xl font-bold text-dark mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 mb-2">Browse our complete portfolio of construction and installation work across South Africa.</p>
          <p className="text-lg text-gray-500">{allProjects.length}+ documented projects completed</p>
        </div>
      </div>

      {/* Projects Grid - Simple, no animations */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group bg-gray-100"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index < 6}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="section-padding bg-dark text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">17+</p>
              <p className="text-gray-400">Featured Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">500+</p>
              <p className="text-gray-400">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">20+</p>
              <p className="text-gray-400">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-51 bg-white/20 hover:bg-white/40 p-2 rounded transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-4xl max-h-96">
              <Image
                src={allProjects[selectedImage].src}
                alt={allProjects[selectedImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="bg-black/50 p-4 flex items-center justify-between">
            {/* Info */}
            <div className="text-white text-sm flex-1">
              <p className="font-semibold">{allProjects[selectedImage].alt}</p>
              <p className="text-gray-300">{allProjects[selectedImage].category}</p>
              <p className="text-gray-400 text-xs mt-1">{selectedImage + 1} of {allProjects.length}</p>
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="bg-accent hover:bg-accent/80 text-white p-2 rounded transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-accent hover:bg-accent/80 text-white p-2 rounded transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
