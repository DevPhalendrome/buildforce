'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  const galleryImages = [
    { src: '/images/IMG-20260215-WA0000.jpg', alt: 'Roofing project' },
    { src: '/images/IMG-20260215-WA0006.jpg', alt: 'Structural work' },
    { src: '/images/IMG-20260215-WA0035.jpg', alt: 'Carpentry project' },
    { src: '/images/IMG-20260215-WA0015.jpg', alt: 'Finishing work' },
    { src: '/images/IMG-20260215-WA0190.jpg', alt: 'Construction project' },
    { src: '/images/IMG-20260215-WA0138.jpg', alt: 'Flooring and paving' },
  ]

  return (
    <section id="gallery" className="section-padding bg-[#080808]">
      <div className="container-max">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#B87333]" />Our Work<span className="w-6 h-px bg-[#B87333]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-2">A showcase of our finest construction and installation projects</p>
          <Link href="/projects" className="inline-flex items-center gap-1 text-[#B87333] hover:text-[#CD8F4A] font-semibold text-sm mt-2 transition">
            View all 161 projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden group bg-[#141414]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}