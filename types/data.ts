export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
}

export interface Article {
  category: 'article' | 'inproceedings' // Afegit basant-nos en el sinònim "category" que hem discutit abans
  author: string[]
  year: string
  month?: string
  pages?: string
  title: string
  volume?: string
  journal?: string
  doi?: string
  roleDescription: string
  abstract?: string
}
