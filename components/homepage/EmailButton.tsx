import copy from 'copy-to-clipboard'
import React, { useState } from 'react'
import Dropdown from '~/icons/dropdown.svg'

interface EmailButtonProps {
  email?: string
}

const EmailButton: React.FC<EmailButtonProps> = ({ email = 'roman.roset@email.com' }) => {
  const [successMessage, setSuccessMessage] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()
    copy(email)
    setSuccessMessage(true)
    setTimeout(() => {
      setSuccessMessage(false)
      setDropdownOpen(false) // Tanco el menú desplegable després de 2 segons
    }, 2000)
  }

  return (
    <div className="relative inline-block text-left">
      <div className="min-w-[180px]">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="font-medium border dark:border-gray-400 text-gray-700 hover:bg-gray-200 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
        dark:text-gray-200 dark:hover:bg-gray-700  dark:hover:text-white"
          type="button"
        >
          {email.toUpperCase()}
          <Dropdown className="w-2.5 h-2.5 ml-2.5" />
        </button>

        {dropdownOpen && (
          <div
            className="w-full origin-top-right absolute right-0 mt-0  rounded-lg shadow bg-white ring-1 ring-black ring-opacity-5 z-50 divide-y divide-gray-100 
          dark:divide-gray-600 dark:ring-gray-800 dark:ring-opacity-5 dark:ring-1 dark:bg-gray-700 dark:ring-offset-2 dark:ring-offset-gray-700"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full">
              <li>
                <a
                  className="flex ml-auto gap-2 px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="mailto:{email}"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setDropdownOpen(false)} // Tanco el menú desplegable al fer clic
                >
                  <svg {...commonSVGProps}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Open in email client
                </a>
              </li>
              <li>
                <button
                  className="flex ml-auto gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={clickHandler}
                >
                  <svg {...commonSVGProps}>
                    {successMessage ? (
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    ) : (
                      <>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      </>
                    )}
                  </svg>
                  {successMessage ? 'Copied!' : 'Copy email'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

const commonSVGProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  className: 'h-4 w-4',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeLinecap: 'round' as 'round',
  strokeLinejoin: 'round' as 'round',
  strokeWidth: 2,
}

export default EmailButton
