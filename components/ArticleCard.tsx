import { RichText, RichTextBlock } from "prismic-reactjs"
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ArticleT, ImageT } from "../types"
import Image from "next/image";

type Props = {
  image?: ImageT
  href: string
  title: RichTextBlock[]
  description?: RichTextBlock[]
  buttonText?: string
}

const ArticleCard = ({ image, href, buttonText, title, description }: Props) => {
  return (
    <div className="mx-2 sm:mx-6 my-2 w-72 flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-48">
        {image?.url && <Image
          layout="fill"
          className=""
          src={image?.url}
          alt={image?.alt ? image?.alt : RichText.asText(title)}
        />}
      </div>
      <Link className="flex flex-col justify-between flex-1 p-6 bg-white" href={href}>

        <div className="flex-1">

          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{RichText.asText(title)}</p>
            {description && <p className="mt-3 text-base text-gray-500 line-clamp-8">{RichText.asText(description)}</p>}
          </div>
        </div>
      </Link>

      {buttonText && <Link className={`inline-flex items-center justify-center text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-4 mb-6 px-4 py-2`} href="https://bocageairlines.sumup.link/">
        {buttonText}

      </Link>}


    </div >


  )
}

export default ArticleCard