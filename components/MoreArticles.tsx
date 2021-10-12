import { ArticleT } from '../types/index';
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/solid';
import { RichText } from 'prismic-reactjs';


type Props = { articles: ArticleT[] }

const MoreArticles = ({ articles }: Props) => {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Mes articles</h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Découvrez d'autres articles de Bocage Air Lines
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {articles.map((article, i) => (
            <div key={RichText.asText(article.data.title)} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              {/* <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={post.imageUrl} alt="" />
              </div> */}
              {i < 3 && <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}
                  <a href={article.uid} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{RichText.asText(article.data.title)}</p>
                    <p className="mt-3 text-base text-gray-500">{RichText.asText(article.data.description)}</p>
                  </a>
                </div>
                <div className="mt-2">
                  <Link href={`/${article.uid}`}>
                    <a className="flex items-center font-bold text-indigo-600 uppercase ">
                      lire plus
                  <ChevronRightIcon className="w-5 h-5" />
                    </a>
                  </Link>
                </div>

              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoreArticles
