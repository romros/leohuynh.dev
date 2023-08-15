import React from 'react'
import Image from 'next/image'

type HandwritingWithImageProps = {
  message: string
  handwrittingFont: string
  imagePath: string
  width: number
  height: number
}

const HandwritingWithImage: React.FC<HandwritingWithImageProps> = ({
  message,
  handwrittingFont,
  imagePath,
  width,
  height,
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col overflow-hidden transition-all duration-200 ease-out dark:bg-gray-900">
        <div className="flex justify-start md:justify-end items-center">
          <p className={`prose prose-lg text-3xl ml-5 dark:prose-dark ${handwrittingFont}`}>
            {message}

            <div className="md:hidden md:relative w-80 h-48 ">
              <Image
                src={imagePath}
                width={width}
                height={height}
                alt="Image Description"
                objectFit="fit"
                className="top-0 left-0"
              />
            </div>
          </p>
          <div className="hidden md:block md:relative w-[58rem] h-48 md:w-[19rem] md:h-[13rem] lg:w-[24rem] lg:h-[12rem] ">
            <Image
              src={imagePath}
              width={width}
              height={height}
              alt="Image Description"
              objectFit="fit"
              className="absolute top-0 left-0"
            />
          </div>
        </div>
        <span className="h-0.5 shadow-2xl bg-gradient-to-r from-slate-50 via-slate-400 to-gray-900"></span>
      </div>
    </div>
  )
}

export default HandwritingWithImage
