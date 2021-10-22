import { RichText } from "prismic-reactjs"
import React, { useState } from "react"
import { Button } from "."
import { htmlSerializer } from "../prismic-config"
import { ArticleT, ProductItemI } from "../types"
import Image from "next/image";
import BannerCta from "./BannerCta"
import Link from "next/link"

type Props = {
  data: ArticleT["data"]
}

export default function Post({ data }: Props) {

  const products = data?.body?.length !== 0 && data?.body?.find(slice => slice.slice_type === "produits")
    ?.items
    ?.map((product: ProductItemI) => product)


  return (
    <>
      < div className="max-w-3xl px-4 py-16 mx-auto text-black bg-white sm:px-6 " >
        <div className="text-center">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {RichText.asText(data?.title)}
          </h1>
          {data?.image?.url && (
            <div className="mt-12 overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
              <Image
                // className="w-full "
                priority
                layout="responsive"
                src={data?.image.url}
                alt={
                  data?.image.alt
                    ? data?.image.alt
                    : RichText.asText(data?.title)
                }
                width={data?.image.dimensions.width}
                height={data?.image.dimensions.height}
              />
            </div>
          )}
        </div>
        <br />
        <div className="pt-12 mx-auto prose lg:prose-lg">
          <RichText render={data?.text} htmlSerializer={htmlSerializer} />
          {products && products?.length !== 0 && products.map((el) => <div key={RichText.asText(el.product)}>
            {el.product && <RichText render={el?.product} htmlSerializer={htmlSerializer} />}
            {el.product_description && <RichText render={el?.product_description} htmlSerializer={htmlSerializer} />}
            {el.link?.url && <Button>
              <Link href={el.link.url}>
                <span className="product">
                  acheter
                </span>
              </Link>
            </Button>}

          </div>)}
        </div>
      </div >

      <BannerCta />
    </>
  )
}