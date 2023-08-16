import { siteMetadata } from '~/data/siteMetadata'
import { DevIcon } from './DevIcon'
import { Link } from './Link'
import { useTranslation } from 'next-i18next'

export function BuiltWith() {
  const { t } = useTranslation('common')

  return (
    <div className="flex items-center space-x-1">
      <span className="mr-1 text-gray-500 dark:text-gray-400">{t('buildWith.built_with')}</span>
      <div className="flex space-x-1.5">
        <Link href="https://nextjs.org?ref=romanroset.dev">
          <DevIcon type="NextJS" className="h-5 w-5" />
        </Link>
        <Link href="https://tailwindcss.com?ref=romanroset.dev">
          <DevIcon type="TailwindCSS" className="h-5 w-5" />
        </Link>
        <Link href="https://www.prisma.io?ref=romanroset.dev">
          <DevIcon type="Prisma" className="h-5 w-5" />
        </Link>
        <Link href="https://www.typescriptlang.org?ref=romanroset.dev">
          <DevIcon type="Typescript" className="h-5 w-5" />
        </Link>
        <Link href="https://umami.is?ref=romanroset.dev" className="pl-px">
          <DevIcon type="Umami" className="h-5 w-5" />
        </Link>
      </div>
      <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
      <Link
        href={siteMetadata.siteRepo}
        className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
      >
        <span data-umami-event="view-source">{t('buildWith.view_source')}</span>
      </Link>
    </div>
  )
}
