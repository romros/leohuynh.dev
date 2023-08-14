import Image from 'next/image'
import React from 'react'
import { ProfileCardInfo } from './ProfileInfo'

export function ProfileStaticCard() {
  return (
    <div className="mb-8">
      <div className="flex flex-col overflow-hidden bg-white transition-all duration-200 ease-out dark:bg-gray-950">
        <div className="flex justify-start md:justify-end items-center">
          <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 relative">
            <Image
              src="/static/images/logo.png"
              alt="Roman Roset"
              layout="fill"
              objectFit="contain"
              className="mb-8 absolute top-0 left-0"
            />
          </div>
        </div>
        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  )
}
