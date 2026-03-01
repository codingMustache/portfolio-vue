export interface Project {
  id: string
  order: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  status: 'Completed' | 'Active'
  year: number
  role: string
  links?: Link
  images?: string
}

interface Link {
  live?: string
  github?: string
}
