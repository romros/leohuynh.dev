import { PageSeo } from 'components/SEO'
import { ScrollTopButton } from '~/components/ScrollTopButton'
import ToC from '~/components/ToC'
import { useTranslation } from 'next-i18next'

export function ResumeLayout({ children, toc }) {
  const { t } = useTranslation('common')

  let description = t('resume_description')

  return (
    <>
      <PageSeo
        title={`${t('menu_curriculum')} - ${t('siteMetadata.fullName')} - ${description}`}
        description={`${t('menu_curriculum')} - ${t('siteMetadata.fullName')} - ${description}`}
      />
      <ScrollTopButton />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 transition-all">
        <header className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 transition-colors">
            {t('menu_curriculum')}
          </h1>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-main gap-4 max-w-screen-xl mx-auto  p-3 md:p-8 md:pr-0 bg-gray-100 dark:bg-gray-900 transition-colors m-5 rounded-md shadow-lg">
          <ToC toc={toc} />
          <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-300 leading-6 space-y-5 prose dark:prose-dark md:p-5 md:pr-0 md:border-l md:border-gray-300 dark:md:border-gray-600 table-auto border-collapse bg-gray-100 transition-colors">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default ResumeLayout
