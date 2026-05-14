'use client'

import Link from 'next/link'
import Img from '@/lib/img'
import { ArrowRight } from 'lucide-react'

const featured = [
  { src: '/images/IMG-20260215-WA0000.jpg', label: 'Roofing', cols: 2, rows: 2 },
  { src: '/images/IMG-20260215-WA0006.jpg', label: 'Roofing' },
  { src: '/images/IMG-20260215-WA0035.jpg', label: 'Carpentry' },
  { src: '/images/IMG-20260215-WA0015.jpg', label: 'Finishing' },
  { src: '/images/IMG-20260215-WA0138.jpg', label: 'Flooring & Paving', cols: 2 },
  { src: '/images/IMG-20260215-WA0008.jpg', label: 'Windows & Doors' },
  { src: '/images/IMG-20260215-WA0042.jpg', label: 'Electrical & Fencing' },
  { src: '/images/IMG-20260215-WA0190.jpg', label: 'General' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-surface-900 border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="label flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-copper" />
              Our Work
            </span>
            <h2 className="heading-lg mb-4">
              Recent <span className="text-copper">Projects</span>
            </h2>
            <p className="subtitle">
              A showcase of our finest construction and installation projects across South Africa.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors duration-300 flex-shrink-0"
          >
            View All 161 Projects
            <ArrowRight className="w-3 h-3" strokeWidth={2} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
          {featured.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{
                gridColumn: img.cols ? `span ${img.cols}` : undefined,
                gridRow: img.rows ? `span ${img.rows}` : undefined,
                aspectRatio: img.cols === 2 && img.rows === 2 ? '1' : img.cols === 2 ? '2/1' : '1/1',
              }}
            >
              <Img
                src={img.src}
                alt={img.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-medium text-white/80">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
