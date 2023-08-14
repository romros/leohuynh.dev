import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LocationPin from '~/icons/locationPin.svg'

export function Heading() {
  const { t } = useTranslation('common')

  const [isAnimated1, setIsAnimated1] = useState(true)
  const [isAnimated2, setIsAnimated2] = useState(false)
  const [isAnimated3, setIsAnimated3] = useState(false)

  useEffect(() => {
    let timeoutIds = [] // To store the IDs of the timeouts

    const cycleAnimations = () => {
      timeoutIds.push(
        setTimeout(() => {
          setIsAnimated2(true)
          timeoutIds.push(
            setTimeout(() => {
              setIsAnimated1(false)
              timeoutIds.push(
                setTimeout(() => {
                  setIsAnimated3(true)
                  timeoutIds.push(
                    setTimeout(() => {
                      setIsAnimated2(false)
                      timeoutIds.push(
                        setTimeout(() => {
                          setIsAnimated1(true)
                          timeoutIds.push(
                            setTimeout(() => {
                              setIsAnimated3(false)
                              timeoutIds.push(setTimeout(cycleAnimations, 2000)) // Recurse after the full cycle.
                            }, 2000)
                          )
                        }, 2000)
                      )
                    }, 2000)
                  )
                }, 2000)
              )
            }, 2000)
          )
        })
      )
    }

    cycleAnimations() // Kick off the animation cycle

    return () => {
      // Clean up all timeouts that we created
      timeoutIds.forEach((id) => clearTimeout(id))
    }
  }, [])

  const commonClasses = 'inline-block subpixel-antialiased'
  const commonBigTextClasses = 'text-5xl md:text-7xl lg:text-9xl'
  const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl  ${commonClasses} ${
    isAnimated1 && 'name-gradient'
  }`
  const tailwindClassTech = `${commonBigTextClasses} ${commonClasses} ${
    isAnimated2 && 'first-word-gradient'
  }`
  const tailwindClassLead = `${commonBigTextClasses} ${commonClasses} ${
    isAnimated3 && 'second-word-gradient'
  }`
  const tailwindClassDeveloper = `text-2xl md:text-3xl lg:text-4xl ${commonClasses}}`

  return (
    <>
      <div className="grid grid-cols-1 gap-4 max-w-2xl">
        <div className="mb-0   flex items-center text-gray-700 dark:text-gray-200">
          <LocationPin className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          <p className="px-2">Barcelona, Catalunya</p>
        </div>
        <h1 className="mb-0 font-bold font-poppins">
          <span className={tailwindClassName}> Roman Roset</span>
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <h1 className={`mb-5 font-bold font-poppins`}>
            <span className={tailwindClassTech}> Tech </span>
            <br></br>
            <span className={tailwindClassLead}> Lead </span>
          </h1>
          <div className="flex justify-center items-center md:justify-end md:items-end">
            <Image
              src={'/static/images/logo.png'}
              alt={t('avatarDescription')}
              height={240} // Reduït a la meitat
              width={240} // Reduït a la meitat
              className="shadow-profile_img mb-8"
              style={{
                objectPosition: '100% 0%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <h1 className={`mb-4 font-bold font-poppins ${tailwindClassDeveloper}`}>
          IT project and process manager <br />
          Full Stack Developer <br />
          <span>Senior Software Engineer</span>
        </h1>
      </div>
    </>
  )
}
