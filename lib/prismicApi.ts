import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";

// const client = Client()


export const getAllArticles = () => {
  return Client.query(
    [Prismic.Predicates.at("document.type", "article")],
    { pageSize: 1000 }
  );
}

export const getArticlesFromTag = (tag:string) => {
  return Client
    .query(Prismic.Predicates.at('document.tags', [tag]), {
      orderings: '[my.post.data_debut]'
    })
    .then((res:any) => res.results)
}