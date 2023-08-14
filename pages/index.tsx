import Image from 'next/image'
import { PageSeo } from 'components/SEO'
import { Heading } from '~/components/homepage/Heading'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import EmailButton from '~/components/homepage/EmailButton'

export async function getStaticProps({ locale }) {
  const posts = getAllFilesFrontMatter(`${locale}/blog`)
  const translations = await serverSideTranslations(locale, ['common'])

  return {
    props: {
      posts,
      ...translations,
    },
  }
}

export default function Home({ posts }) {
  const { t } = useTranslation('common')

  return (
    <>
      <PageSeo title={t('siteMetadata.title')} description={t('siteMetadata.description')} />
      <div className="md:pt-6 xl:grid xl:grid-cols-3 space-y-16 md:space-y-5">
        <div className="md:pr-8 xl:col-span-2 space-y-16 md:space-y-0">
          <Heading />
          <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            <p className="text-neutral xl:leading-loose">
              Professional amb més de 20 anys en tecnologia, expert en tecnologies frontend i
              backend, amb experiència liderant processos, gestionant projectes tecnològics i
              desenvolupant solucions de programari en startups, fundacions privades, institucions
              educatives i centres de recerca.
            </p>
            <p className="mt-8 text-neutral xl:leading-loose">
              Actualment treballo a la Fundacio .cat{' '}
            </p>
          </div>
        </div>
        <div className="mt-16 pb-6 h-full flex flex-col items-center justify-start">
          <EmailButton email="roman.roset@email.com" />
        </div>
      </div>
    </>
  )
}
