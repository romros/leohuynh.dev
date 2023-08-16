import type { Project } from '~/types'

export let projectsData: Project[] = [
  {
    type: 'work',
    title: 'elteu.cat',
    description:
      'Plataforma donde encontrar agentes digitales que ofrecen servicios en catalán. Colaboré en la estructura del modelo de datos, la incorporación de componentes y el backend.',
    imgSrc: '/static/images/elkitcat.jpg',
    url: 'https://elkit.cat',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Fibroline',
    description:
      'Aplicación de tratamiento cognitivo conductual autoadministrado. Desarrollé por completo la primera versión de la app.',
    imgSrc: '/static/images/fibroline.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.welltech.fibrolineseniorfree',
    builtWith: ['java', 'android studio', 'firebase', 'google play'],
  },
  {
    type: 'work',
    title: 'Painometer',
    description:
      'Painometer es una aplicación para smartphones que sirve para medir, almacenar, visualizar gráficamente y enviar por correo electrónico un conjunto de medidas de intensidad del dolor. Desarrollé integramente la primera versión de la app para Android.',
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
      'Aplicación para manejar los problemas de ansiedad creada para mejorar la calidad de vida de las personas que sufren problemas como el estrés. Desarrollé la app para Android.',
    imgSrc: '/static/images/calma.jpg',
    url: 'https://play.google.com/store/apps/details?id=welltech.es.calmatuansiedad',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },
  {
    type: 'work',
    title: 'Dormir WellTech',
    description:
      'Dormir WELLTECH es una aplicación para manejar los problemas de sueño creada para mejorar la calidad de vida de las personas que sufren problemas como el insomnio. Desarrollé la app para Android.',
    imgSrc: '/static/images/dormir.jpg',
    url: 'https://play.google.com/store/apps/details?id=es.dormirwelltech',
    builtWith: ['Wordpress', 'Restful services', 'Zoho CRM'],
  },

  {
    type: 'self',
    title: 'Sitio web personal',
    imgSrc: '/static/images/romanroset_light_dev.jpg',
    description:
      'Sitio web personal para mostrar mis proyectos, artículos y experiencia profesional. Desarrollé gran parte del código a partir de un proyecto de Next.js y Tailwind. Añadí la parte de traducción y layouts para mostrar los artículos y el currículum.',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Umami', 'i18n', 'Vercel'],
    url: 'https://github.com/romros/romanroset.dev',
  },
]
