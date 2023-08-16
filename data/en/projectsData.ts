import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'elteu.cat',
    description:
      'The portal where you can find digital agents offering services in Catalan. I collaborated on the data model structure, integration of components, and the backend.',
    imgSrc: '/static/images/elkitcat.jpg',
    url: 'https://elkit.cat',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Fibroline',
    description:
      'Self-administered cognitive behavioral treatment app. I fully developed the first version of the app.',
    imgSrc: '/static/images/fibroline.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.welltech.fibrolineseniorfree',
    builtWith: ['java', 'android studio', 'firebase', 'google play'],
  },
  {
    type: 'work',
    title: 'Painometer',
    description:
      'Painometer is a smartphone application used to measure, store, graphically visualize, and email a set of pain intensity measurements. I developed the app for Android.',
    imgSrc: '/static/images/painometer.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.algos.painometerv3&hl=es&gl=US',
    builtWith: [
      'java',
      'android studio',
      'firebase',
      'google play',
      'jquery',
      'bootstrap',
      'html',
      'css',
    ],
  },

  {
    type: 'work',
    title: 'Calma tu ansiedad',
    description:
      'Calm Your Anxiety - WELLTECH is an application for managing anxiety issues, designed to improve the quality of life for individuals dealing with problems like stress. I developed the app for Android.',
    imgSrc: '/static/images/calma.jpg',
    url: 'https://play.google.com/store/apps/details?id=welltech.es.calmatuansiedad',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Dormir WellTech',
    description:
      'Sleep WELLTECH is an application for managing sleep problems, created to enhance the quality of life for those experiencing issues like insomnia.',
    imgSrc: '/static/images/dormir.jpg',
    url: 'https://play.google.com/store/apps/details?id=es.dormirwelltech',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },

  {
    type: 'self',
    title: 'Sitio web personal',
    imgSrc: '/static/images/romanroset_light_dev.jpg',
    description:
      'Personal website showcasing my projects, articles, and professional experience. I extensively worked on the code, building upon a Next.js and Tailwind project. I integrated translation capabilities and added layouts for displaying articles and the resume.',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Umami', 'i18n', 'Vercel'],
    url: 'https://github.com/romros/romanroset.dev',
  },
]
