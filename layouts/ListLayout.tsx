import { useState } from 'react'
import { Pagination } from '~/components/Pagination'
import { PostListItem } from '~/components/PostListItem'
import { PostsSearch } from '~/components/PostsSearch'
import type { ListLayoutProps } from '~/types'
import { useTranslation } from 'next-i18next'

export function ListLayout(props: ListLayoutProps) {
  let { posts, title, initialDisplayPosts = [], pagination } = props
  let [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = posts.filter((frontMatter) => {
    let searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  let displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const { t } = useTranslation('common') // utilitza 'common' si els teus strings estan a common.ts o canvia-ho pel nom adequat
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-4 pb-12 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{t('blog.intro')}</p>
          <PostsSearch onChange={setSearchValue} />
        </div>
        <ul className="space-y-10 py-12">
          {!filteredBlogPosts.length && t('blog.noPosts')}
          {displayPosts.map((frontMatter) => (
            <PostListItem key={frontMatter.slug} frontMatter={frontMatter} />
          ))}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default ListLayout
