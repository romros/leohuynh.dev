import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { MapPin } from 'lucide-react'

export function Heading() {
  const [isAnimated1, setIsAnimated1] = useState(true)
  const [isAnimated2, setIsAnimated2] = useState(false)
  const [isAnimated3, setIsAnimated3] = useState(false)

  useEffect(() => {
    let timeoutIds = []

    const addTimeout = (callback, delay) => {
      timeoutIds.push(setTimeout(callback, delay))
    }

    const cycleAnimations = () => {
      let delay = 0
      actions.forEach((action) => {
        addTimeout(action, delay)
        delay += 1500
      })
    }

    const actions = [
      () => setIsAnimated2(true),
      () => setIsAnimated1(false),
      () => setIsAnimated3(true),
      () => setIsAnimated2(false),
      () => setIsAnimated1(true),
      () => setIsAnimated3(false),
      cycleAnimations,
    ]

    cycleAnimations()

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id))
    }
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl text-gray-600 dark:text-gray-400  ">
      <LocationInfo />
      <NameHeader isAnimated1={isAnimated1} />
      <RoleImages isAnimated2={isAnimated2} isAnimated3={isAnimated3} />
      <RolesHeader />
    </div>
  )
}

const LocationInfo = () => (
  <div className="mb-0 flex items-center text-gray-700 dark:text-gray-200">
    <MapPin className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
    <p className="px-2">Barcelona, Catalunya</p>
  </div>
)

const NameHeader = ({ isAnimated1 }) => (
  <h1 className="mb-0 font-bold font-poppins">
    <span
      className={`text-3xl md:text-4xl lg:text-5xl inline-block subpixel-antialiased 
      ${isAnimated1 && 'name-gradient'}`}
    >
      Roman Roset
    </span>
  </h1>
)

const RoleImages = ({ isAnimated2, isAnimated3 }) => (
  <div className="grid grid-cols-2 gap-4">
    <h1 className="mb-5 font-bold font-poppins">
      <span
        className={`text-6xl md:text-6xl lg:text-7xl inline-block subpixel-antialiased ${
          isAnimated2 && 'first-word-gradient'
        }`}
      >
        {' '}
        Senior Backend{' '}
      </span>
      <br />
      <span
        className={`text-3xl md:text-3xl lg:text-4xl inline-block subpixel-antialiased ${
          isAnimated3 && 'second-word-gradient'
        }`}
      >
        {' '}
        Developer{' '}
      </span>
    </h1>
    <div className="flex justify-start md:justify-end items-center">
      <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 relative">
        <Image
          src="/static/images/logo.png"
          alt="Roman Roset"
          layout="fill"
          objectFit="cover"
          className="shadow-profile_img mb-8 absolute top-0 left-0"
        />
      </div>
    </div>
  </div>
)

const RolesHeader = () => {
  const { t } = useTranslation('common')

  return (
    <h1 className="mb-6 md:mb-12 font-bold font-poppins text-2xl md:text-3xl lg:text-4xl inline-block subpixel-antialiased">
      {t('intro.projectManager')}
      <br />
      {t('intro.fullstackdev')}
      <br />
      {t('intro.seniordev')}
    </h1>
  )
}
