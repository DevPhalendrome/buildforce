'use client'

import Img from '@/lib/img'
import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { allProjects, filterOptions, categoryLabels } from '@/lib/projects'

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filtered =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === categoryLabels[activeFilter])

  const handlePrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1)
    }
  }, [selectedIndex, filtered.length])

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filtered.length)
    }
  }, [selectedIndex, filtered.length])

  return (
    <div className="min-h-screen bg-surface pt-20">
      <div className="border-b border-white/[0.04] bg-surface-900">
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <span className="label flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            Our Portfolio
          </span>
          <h1 className="heading-lg mb-3">
            All <span className="text-copper">Projects</span>
          </h1>
          <p className="subtitle">
            Browse our complete portfolio of {allProjects.length} construction and installation projects across South Africa.
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex gap-2 flex-wrap mb-10">
          {filterOptions.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] border transition-all duration-300 ${
                activeFilter === f.key
                  ? 'bg-copper text-black border-copper'
                  : 'bg-transparent text-white/40 border-white/[0.08] hover:text-white hover:border-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {filtered.map((project, index) => (
            <button
              key={project.src}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-[4/3] overflow-hidden group bg-surface text-left"
            >
              <Img
                src={project.src}
                alt={project.category}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-medium text-white/80 bg-copper px-2.5 py-1">
                  {project.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="text-xs text-white/20">
            Showing {filtered.length} of {allProjects.length} projects
          </span>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-surface/98 flex flex-col"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6">
            <div className="text-white text-sm">
              <span className="font-medium">{filtered[selectedIndex].category}</span>
              <span className="text-white/40 ml-3">
                {selectedIndex + 1} / {filtered.length}
              </span>
            </div>
            <button
              onClick={() => setSelectedIndex(null)}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center p-4 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Img
                src={filtered[selectedIndex].src}
                alt={filtered[selectedIndex].category}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 sm:px-6 pb-4 sm:pb-6">
            <div />
            <div className="flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevious() }}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-copper/60 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext() }}
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-copper/60 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
