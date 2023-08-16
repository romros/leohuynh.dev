import { PageSeo } from 'components/SEO'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import ArticleItem from '~/components/articles/ArticleItem'

export async function getStaticProps({ locale }) {
  // Importa dinàmicament les dades basades en l'idioma actual
  const articlesDataModule = await import(`~/data/${locale}/articlesData.ts`)
  const articlesData = articlesDataModule.articlesData

  return {
    props: {
      articlesData,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Articles({ articlesData }) {
  const { t } = useTranslation('common')
  let description = t('articles.description')

  return (
    <>
      <PageSeo
        title={`${t('articles.title')} - ${t('siteMetadata.author')}`}
        description={description}
      />
      <div className={`min-h-screen py-12 dark:bg-gray-900 bg-slate-50`}>
        <div className="container mx-auto px-4">
          <header className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
              {t('articles.title')}
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{description}</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {articlesData.map((article, index) => (
              <ArticleItem key={index} article={article} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
