import { MDXLayoutRenderer } from '~/components/MDXComponents'
import { getFileBySlug } from '~/libs/mdx'
import type { MdxFileData } from '~/types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from './about.module.css'

export async function getStaticProps({ locale }: { params: { slug: string[] }; locale: string }) {
  let authorData = await getFileBySlug('authors', 'default', locale)
  return {
    props: { authorData, ...(await serverSideTranslations(locale, ['common'])) },
  }
}

export default function About({ authorData }: { authorData: MdxFileData }) {
  let { mdxSource, frontMatter } = authorData

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        handwrittingFont={styles.hijrnotesFont}
      />
    </>
  )
}
