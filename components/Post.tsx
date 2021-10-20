import { RichText } from "prismic-reactjs"
import React from "react"
import { ContactButton } from "."
import { htmlSerializer } from "../prismic-config"
import { ArticleT } from "../types"
import Image from "next/image";

type Props = {
  data: ArticleT["data"]
}

export default function Post({ data }: Props) {
  return (
    <>
      < div className="max-w-3xl px-4 py-16 mx-auto text-black bg-white sm:px-6 " >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {RichText.asText(data.title)}
          </h1>
          {data.image.url && (
            <div className="mt-12 overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
              <Image
                // className="w-full "
                priority
                layout="responsive"
                src={data.image.url}
                alt={
                  data.image.alt
                    ? data.image.alt
                    : RichText.asText(data.title)
                }
                width={data.image.dimensions.width}
                height={data.image.dimensions.height}
              />
            </div>
          )}
        </div>
        <br />
        <div className="pt-12 mx-auto prose lg:prose-lg">
          <RichText render={data.text} htmlSerializer={htmlSerializer} />
        </div>
      </div >

      <div className="bg-indigo-50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Prêt à vous envolez ?</span>
            <span className="block text-indigo-600">Contactez-moi</span>
          </h2>
          <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <ContactButton className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Réservez votre vol
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}