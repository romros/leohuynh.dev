import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'elteu.cat',
    description: `El portal on trobar agents digitals que ofereixen serveis en català. Vaig col·laborar en l'estructura del model de dades, la incorporació de components i el backend.`,
    imgSrc: '/static/images/elkitcat.jpg',
    url: 'https://elkit.cat',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Fibroline',
    description:
      "App de tractament cognitiu conductural autoadministrat. Vaig desenvolupar completament la primera versió de l'app",
    imgSrc: '/static/images/fibroline.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.welltech.fibrolineseniorfree',
    builtWith: ['java', 'android studio', 'firebase', 'google play'],
  },
  {
    type: 'work',
    title: 'Painometer',
    description:
      "Painometer és una aplicació per a telèfons mòbils que serveix per mesurar, emmagatzemar, mostrar gràficament i enviar per correu electrònic un conjunt de mesures d'intensitat del dolor. Vaig desenvolupar l'app per a Android.",
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
      "Calma la teva ansietat - WELLTECH és una aplicació per gestionar els problemes d'ansietat creada per millorar la qualitat de vida de les persones que pateixen problemes com l'estrès. Vaig desenvolupar l'app per a Android.",
    imgSrc: '/static/images/calma.jpg',
    url: 'https://play.google.com/store/apps/details?id=welltech.es.calmatuansiedad',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Dormir WellTech',
    description:
      "Dormir WELLTECH és una aplicació per gestionar els problemes de son creada per millorar la qualitat de vida de les persones que pateixen problemes com l'insomni.",
    imgSrc: '/static/images/dormir.jpg',
    url: 'https://play.google.com/store/apps/details?id=es.dormirwelltech',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },

  {
    type: 'self',
    title: 'Sitio web personal',
    imgSrc: '/static/images/romanroset_light_dev.jpg',
    description:
      'Lloc web personal per mostrar els meus projectes, articles i experiència professional. Vaig desenvolupar bona part del codi a partir de un projecte de Next.js i Tailwind. Vaig afegir la part de traducció i afegir layouts per mostrar els artícles i el currículum.',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Umami', 'i18n', 'Vercel'],
    url: 'https://github.com/romros/romanroset.dev',
  },
]
