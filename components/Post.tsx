import { RichText } from "prismic-reactjs"
import React from "react"
import { ContactButton } from "."
import { htmlSerializer } from "../prismic-config"
import { ArticleT } from "../types"
import Image from "next/image";
import BannerCta from "./BannerCta"

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

      <BannerCta />
    </>
  )
}