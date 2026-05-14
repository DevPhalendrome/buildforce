export interface ProjectImage {
  src: string
  category: string
}

function pad(n: number): string {
  return String(n).padStart(4, '0')
}

function range(start: number, end: number, skip?: number[]): string[] {
  const result: string[] = []
  for (let i = start; i <= end; i++) {
    if (!skip || !skip.includes(i)) result.push(`WA${pad(i)}`)
  }
  return result
}

export const projectCategories: Record<string, string[]> = {
  roofing: range(0, 7),
  'windows-doors': ['WA0008', 'WA0009', ...range(32, 34), 'WA0040'],
  finishing: [...range(10, 15), ...range(25, 26), ...range(28, 31)],
  structural: [...range(16, 18), 'WA0050', 'WA0051'],
  carpentry: [...range(35, 39), 'WA0041', ...range(47, 49), 'WA0116'],
  'electrical-fencing': ['WA0027', ...range(42, 46)],
  'flooring-paving': [ 'WA0138', 'WA0141', 'WA0142', 'WA0144', 'WA0145', 'WA0152', 'WA0155', ...range(159, 161)],
  general: ['WA0023', ...range(52, 81), ...range(162, 174), ...range(176, 187), ...range(190, 194), ...range(196, 238)],
}

export const categoryLabels: Record<string, string> = {
  roofing: 'Roofing',
  'windows-doors': 'Windows & Doors',
  finishing: 'Finishing',
  structural: 'Structural Work',
  carpentry: 'Carpentry',
  'electrical-fencing': 'Electrical & Fencing',
  'flooring-paving': 'Flooring & Paving',
  general: 'General',
}

export const categoryPaths: Record<string, string> = {
  roofing: '/images/IMG-20260215-WA0000.jpg',
  'windows-doors': '/images/IMG-20260215-WA0008.jpg',
  finishing: '/images/IMG-20260215-WA0010.jpg',
  structural: '/images/IMG-20260215-WA0016.jpg',
  carpentry: '/images/IMG-20260215-WA0035.jpg',
  'electrical-fencing': '/images/IMG-20260215-WA0027.jpg',
  'flooring-paving': '/images/IMG-20260215-WA0138.jpg',
  general: '/images/IMG-20260215-WA0190.jpg',
}

export const allProjects: ProjectImage[] = []
for (const [key, files] of Object.entries(projectCategories)) {
  for (const file of files) {
    allProjects.push({
      src: `/images/IMG-20260215-${file}.jpg`,
      category: categoryLabels[key],
    })
  }
}

export const filterOptions = [
  { key: 'all', label: 'All Projects' },
  { key: 'roofing', label: 'Roofing' },
  { key: 'structural', label: 'Structural' },
  { key: 'carpentry', label: 'Carpentry' },
  { key: 'windows-doors', label: 'Windows & Doors' },
  { key: 'finishing', label: 'Finishing' },
  { key: 'electrical-fencing', label: 'Electrical & Fencing' },
  { key: 'flooring-paving', label: 'Flooring & Paving' },
  { key: 'general', label: 'General' },
] as const
