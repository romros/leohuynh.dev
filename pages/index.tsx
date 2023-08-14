import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PageSeo } from 'components/SEO'
import { Heading } from '~/components/homepage/Heading'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import EmailButton from '~/components/homepage/EmailButton'

export async function getStaticProps({ locale }) {
  let posts = getAllFilesFrontMatter(`${locale}/blog`)

  // Afegeix la traducció
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ['common'])), // Aquí estem assumint que el nom del teu fitxer de traducció és 'common'
    },
  }
}

export default function Home({ posts }) {
  const { t } = useTranslation('common') // utilitza 'common' si els teus strings estan a common.ts o canvia-ho pel nom adequat

  return (
    <>
      <PageSeo title={t('siteMetadata.title')} description={t('siteMetadata.description')} />
      <div className="space-y-16 md:my-4 md:space-y-5  md:pt-6 xl:grid xl:grid-cols-3">
        <div className="md:pr-8 xl:col-span-2">
          <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            <Heading />
            <p className="my-0 md:my-16 md:mt-8  md:mb-0 text-neutral xl:leading-loose">
              Professional amb més de 20 anys en tecnologia, expert en tecnologies frontend i
              backend, amb experiència liderant processos, gestionant projectes tecnològics i
              desenvolupant solucions de programari en startups, fundacions privades, institucions
              educatives i centres de recerca.
            </p>
            <p className="my-0 md:my-16 md:mt-8  md:mb-0 text-neutral xl:leading-loose">
              Actualment treballo a la Fundacio .cat{' '}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start h-full pb-6 mt-16">
          <EmailButton email="roman.roset@email.com" />
        </div>
      </div>
    </>
  )
}
