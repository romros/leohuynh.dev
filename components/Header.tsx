import clsx from 'clsx'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { AnalyticsLink } from './AnalyticsLink'
import { Link } from './Link'
import { ThemeSwitcher } from './ThemeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import { headerNavLinks } from '~/data/headerNavLinks'

export function Header({ onToggleNav }: { onToggleNav: () => void }) {
  const { t } = useTranslation('common') // 'common' fa referència al fitxer common.json
  let router = useRouter()
  return (
    <header className="supports-backdrop-blur: bg-slate-50/95 sticky top-0 z-50 overflow-visible py-3 backdrop-blur dark:bg-gray-900/75">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Leo's Blog">
            <div className="flex items-center justify-between" data-umami-event="logo">
              <div className="mr-3 flex items-center justify-center">
                <NextImage
                  src="/static/images/logo.png"
                  alt="Roman Roset"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
            </div>
          </Link>
          <div className="hidden space-x-2 sm:block">
            {headerNavLinks.map((link) => (
              <Link key={link.titleKey} href={link.href}>
                <span
                  className={clsx(
                    'inline-block rounded px-2 py-1 font-medium text-gray-900 dark:text-gray-100 sm:px-3 sm:py-2',
                    router.pathname.startsWith(link.href)
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  )}
                  data-umami-event={`nav-${link.href.replace('/', '')}`}
                >
                  {t(link.titleKey)}{' '}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <AnalyticsLink />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            className="ml-2 mr-1 h-8 w-8 rounded sm:hidden"
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            data-umami-event="mobile-nav-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
