import Image from 'next/image'
import { PageSeo } from 'components/SEO'
import { Heading } from '~/components/homepage/Heading'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import XIcon from '~/icons/x.svg'
import { siteMetadata } from '~/data/siteMetadata'
import { Backpack, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import EmailButton from '~/components/homepage/EmailButton'
import SocialAccounts from '~/components/SocialAccounts'

export async function getStaticProps({ locale }) {
  const translations = await serverSideTranslations(locale, ['common'])

  return {
    props: {
      ...translations,
    },
  }
}

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSeo title={t('siteMetadata.title')} description={t('siteMetadata.description')} />
      <div className="md:pt-6 xl:grid xl:grid-cols-3 space-y-16 md:space-y-5">
        <div className="md:pr-8 xl:col-span-2 space-y-16 md:space-y-0">
          <Heading />
          <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            <p className="text-neutral xl:leading-loose">{t('intro.shortIntro1')}</p>
            <p className="mt-8 text-neutral xl:leading-loose">{t('intro.shortIntro2')} </p>
          </div>
        </div>
        <div className="mt-0 flex flex-col items-center justify-start space-y-4">
          <div className="mt-0 flex flex-col items-center justify-start space-y-4">
            <a
              href="https://www.credly.com/badges/b74a8a79-d07a-4c8c-86f1-4a34cf9d019b/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center"
              data-umami-event="spring_boot-go_to_certification"
            >
              <Image
                src="/static/images/spring_boot_certification.png" // Ruta al teu certificat
                alt="Spring Certified Professional 2023"
                width={200} // Ajusta aquestes dimensions segons les necessitats
                height={150}
                className="shadow-md"
              />
              <span className="mt-2 text-blue-600 hover:text-blue-800 transition duration-300">
                {t('intro.checkCertification')}
              </span>
            </a>
          </div>

          <EmailButton email="romanroset@proton.me" />
          <SocialAccounts
            showGithub={true}
            showTwitter={true}
            showMail={false}
            showFacebook={false}
            showYoutube={false}
            showLinkedin={false}
          />
        </div>
      </div>
    </>
  )
}
