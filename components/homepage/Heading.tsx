import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import LocationPin from '~/icons/locationPin.svg'

export function Heading() {
  const { t } = useTranslation('common')

  const commonClasses = 'inline-block subpixel-antialiased'
  const commonBigTextClasses = 'text-6xl md:text-8xl lg:text-9xl'
  const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl ${commonClasses}`
  const tailwindClassWeb = `${commonBigTextClasses} ${commonClasses}`
  const tailwindClassDeveloper = `text-2xl md:text-3xl lg:text-4xl     ${commonClasses}`

  return (
    <>
      <div className="grid grid-cols-1 gap-4 max-w-2xl">
        <div className="mb-8   flex items-center text-gray-700 dark:text-gray-200">
          <LocationPin className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
          <p className="px-2">Barcelona, Catalunya</p>
        </div>
        <h1 className={`mb-5 font-bold font-poppins ${tailwindClassName}`}>Roman Roset</h1>
        <div className="grid grid-cols-2 gap-4">
          <h1 className={`mb-5 font-bold font-poppins ${tailwindClassWeb}`}>Tech Lead</h1>
          <div className="flex justify-center items-center md:justify-end md:items-end">
            <Image
              src={'/static/images/logo.png'}
              alt={t('avatarDescription')}
              height={250} // Reduït a la meitat
              width={250} // Reduït a la meitat
              className="shadow-profile_img mb-8"
              style={{
                objectPosition: '100% 0%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
        <h1 className={`mb-5 font-bold font-poppins ${tailwindClassDeveloper}`}>
          IT project and process manager <br />
          Full Stack Developer <br />
          <span>Senior Software Engineer</span>
        </h1>
      </div>
    </>
  )
}

// <EmailOptions />
// <h1 className="text-neutral-900 dark:text-neutral-200">
//   {t('introduction')} <span className="font-medium">{t('name')}</span> - {t('description')}
//   <span className="hidden font-medium">{t('location')}</span>
//   <span className="absolute ml-1.5 inline-flex pt-[3px]">
//     <Twemoji emoji="flag-vietnam" />
//   </span>
// </h1>
