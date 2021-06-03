import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";

export const getAllArticles = () => {
  return Client.query(
    [Prismic.Predicates.at("document.type", "article")],
    { pageSize: 1000 }
  );
}