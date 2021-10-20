import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ArticleT } from "../types"
import ArticleCard from './ArticleCard';
import Button from "./Button";

type Props = {
  posts: ArticleT[]
}

const Blog = ({ posts }: Props) => {
  const { asPath } = useRouter();

  return (
    <div className={`relative px-4 pt-16 pb-20  sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 ${asPath === "/" ? "bg-gray-50" : "bg-white" }`}>
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Actualités</h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Retrouvez les images de mes vols et les dernières actualités sur l'ULM à Nantes dans les Pays de la Loire
          </p>
        </div>
        <div className="flex flex-wrap justify-center mx-auto gap-5 mt-12">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>

        {asPath === "/" && <div className="flex justify-center mt-12">
          
          <Button><Link href="/actualites">Voir toutes les actualités</Link></Button>
          
        </div>}
      </div>
    </div>
  )
};

export default Blog;
