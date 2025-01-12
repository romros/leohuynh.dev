import { PageSeo } from 'components/SEO'
import { SnippetLayout } from '~/layouts/SnippetLayout'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import type { SnippetFrontMatter } from '~/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({ locale }: { locale: string }) {
  let snippets = getAllFilesFrontMatter(`${locale}/snippets`)
  return {
    props: { snippets, ...(await serverSideTranslations(locale, ['common'])) },
  }
}

export default function Snippet({ snippets }: { snippets: SnippetFrontMatter[] }) {
  const { t } = useTranslation('common')
  let description = t('menu_receptes_2')
  return (
    <>
      <PageSeo
        title={`Snippets - ${t('siteMetadata_author')} - ${t('siteMetadata_title')}`}
        description={description}
      />
      <SnippetLayout snippets={snippets} description={description} />
    </>
  )
}
