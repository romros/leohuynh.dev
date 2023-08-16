import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'elteu.cat',
    description: `Las herramientas de upselling y potenciación de conversiones construidas para apoyar el tema Minimog.`,
    imgSrc: '/static/images/foxkit.jpg',
    url: 'https://apps.shopify.com/foxkit?ref=leohuynh.dev',
    builtWith: ['Koa.js', 'JWT', 'MongoDB', 'Polaris'],
  },
  {
    type: 'work',
    title: 'Fibroline',
    description: `El primer constructor de sitios web promovido por Hydrogen y potenciado por IA. Weaverse es un canal de ventas de Shopify que te permite crear un sitio web en minutos sin necesidad de programación.`,
    imgSrc: '/static/images/weaverse-hydrogen.jpg',
    url: 'https://www.weaverse.io?ref=leohuynh.dev',
    builtWith: ['Remix', 'Prisma', 'Tailwind', 'OpenAI'],
  },
  {
    type: 'work',
    title: 'Painometer',
    description:
      'El primer tema impulsado por Hydrogen para Shopify. Pilot es un tema de Shopify que te permite construir una tienda virtual extremadamente rápida con todas las ventajas de Hydrogen.',
    imgSrc: '/static/images/weaverse-pilot.jpg',
    repo: 'weaverse/pilot',
    url: 'https://pilot.weaverse.io/',
    builtWith: ['Hydrogen', 'Remix', 'Tailwind', 'Headless UI'],
  },
  {
    type: 'work',
    title: 'Dormir Welltech',
    description: `La próxima generación del tema Shopify con mayor conversión y extensibilidad (mejor vendido semanalmente y tendencia top en la categoría eCommerce de Themeforest).`,
    imgSrc: '/static/images/minimog.jpg',
    url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968?ref=leohuynh.dev',
    builtWith: ['Theme-kit', 'Liquid', 'Webpack', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'Calma tu ansiedad - WellTech',
    description: `Las herramientas de upselling y potenciación de conversiones construidas para apoyar el tema Minimog.`,
    imgSrc: '/static/images/foxkit.jpg',
    url: 'https://apps.shopify.com/foxkit?ref=leohuynh.dev',
    builtWith: ['Koa.js', 'JWT', 'MongoDB', 'Polaris'],
  },

  {
    type: 'self',
    title: 'Sitio web personal',
    imgSrc: '/static/images/leoblog.jpg',
    repo: 'leohuynh.dev',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
]
