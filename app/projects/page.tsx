'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ProjectImage {
  src: string
  category: string
}

function pad(n: number): string { return String(n).padStart(4, '0') }

function range(start: number, end: number, skip?: number[]): string[] {
  const result: string[] = []
  for (let i = start; i <= end; i++) {
    if (!skip || !skip.includes(i)) result.push(`WA${pad(i)}`)
  }
  return result
}

const categories: Record<string, string[]> = {
  roofing: range(0, 7),
  'windows-doors': ['WA0008', 'WA0009', ...range(32, 34), 'WA0040'],
  finishing: [...range(10, 15), ...range(25, 26), ...range(28, 31)],
  structural: [...range(16, 18), 'WA0050', 'WA0051'],
  carpentry: [...range(35, 39), 'WA0041', ...range(47, 49), 'WA0116'],
  'electrical-fencing': ['WA0027', ...range(42, 46)],
  'flooring-paving': ['WA0138', 'WA0141', 'WA0142', 'WA0144', 'WA0145', 'WA0152', 'WA0155', ...range(159, 161)],
  general: ['WA0023', ...range(52, 81), ...range(162, 174), ...range(176, 187), ...range(190, 194), ...range(196, 238)],
}

const categoryLabels: Record<string, string> = {
  roofing: 'Roofing',
  'windows-doors': 'Windows & Doors',
  finishing: 'Finishing',
  structural: 'Structural',
  carpentry: 'Carpentry',
  'electrical-fencing': 'Electrical & Fencing',
  'flooring-paving': 'Flooring & Paving',
  general: 'General',
}

const allProjects: ProjectImage[] = []
for (const [key, files] of Object.entries(categories)) {
  for (const file of files) {
    allProjects.push({ src: `/images/IMG-20260215-${file}.jpg`, category: categoryLabels[key] })
  }
}

const filterLabels = [
  { key: 'all', label: 'All Projects' },
  { key: 'roofing', label: 'Roofing' },
  { key: 'structural', label: 'Structural' },
  { key: 'carpentry', label: 'Carpentry' },
  { key: 'windows-doors', label: 'Windows & Doors' },
  { key: 'finishing', label: 'Finishing' },
  { key: 'electrical-fencing', label: 'Electrical & Fencing' },
  { key: 'flooring-paving', label: 'Flooring & Paving' },
  { key: 'general', label: 'General' },
]

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === categoryLabels[activeFilter])

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filtered.length - 1 : selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filtered.length)
    }
  }

  return (
    <div className="min-h-screen bg-[#080808]">
      <div className="section-padding bg-[#0D0D0D] border-b border-white/5">
        <div className="container-max">
          <div className="inline-flex items-center gap-2 text-[#B87333] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-[#B87333]" />Our Portfolio<span className="w-6 h-px bg-[#B87333]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">All Projects</h1>
          <p className="text-gray-400">Browse our complete portfolio of {allProjects.length} construction and installation projects across South Africa.</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="flex gap-2 flex-wrap mb-8">
            {filterLabels.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 text-xs font-semibold rounded-full border transition ${
                  activeFilter === f.key
                    ? 'bg-[#B87333] text-white border-[#B87333]'
                    : 'bg-[#141414] text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group bg-[#141414]"
              >
                <Image
                  src={project.src}
                  alt={project.category}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-[#B87333] px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            Showing {filtered.length} of {allProjects.length} projects
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-51 bg-white/10 hover:bg-white/20 p-2 rounded transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={filtered[selectedImage].src}
                alt={filtered[selectedImage].category}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="bg-black/50 p-4 flex items-center justify-between">
            <div className="text-white text-sm flex-1">
              <p className="font-semibold">{filtered[selectedImage].category}</p>
              <p className="text-gray-400 text-xs mt-0.5">{selectedImage + 1} of {filtered.length}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="bg-[#B87333] hover:bg-[#9A622A] text-white p-2 rounded transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="bg-[#B87333] hover:bg-[#9A622A] text-white p-2 rounded transition-colors"
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