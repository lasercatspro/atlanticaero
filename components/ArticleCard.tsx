import { RichText } from "prismic-reactjs"
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/solid';
import { ArticleT } from "../types"

type Props = {
  post: ArticleT
}

const ArticleCard = ({ post }: Props) => {
  return (
    <div key={RichText.asText(post.data.title)} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48" src={post.data.image.url} alt={post.data.image.alt ? post.data.image.alt : RichText.asText(post.data.title)} />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">

          <a href={post.uid} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{RichText.asText(post.data.title)}</p>
            <p className="mt-3 text-base text-gray-500">{RichText.asText(post.data.description)}</p>
          </a>
        </div>
        <div className="mt-4">
          <Link href={`/${post.uid}`}>
            <a className="flex items-center font-bold text-indigo-600 uppercase ">
              lire plus
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </Link>
        </div>
        {/* <div className="flex items-center mt-6">
        <div className="flex-shrink-0">
          <a href={post.author.href}>
            <span className="sr-only">{post.author.name}</span>
            <img className="w-10 h-10 rounded-full" src={post.author.imageUrl} alt="" />
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href={post.author.href} className="hover:underline">
              {post.author.name}
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime={post.datetime}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </div> */}

      </div>
    </div>

  )
}

export default ArticleCard