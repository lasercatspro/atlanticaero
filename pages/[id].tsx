import Prismic from "@prismicio/client";
import React, { useEffect } from "react";
import { Client } from "../prismic-config";

export async function getStaticPaths() {
  const document = await Client.query(
    [Prismic.Predicates.at("document.type", "article")],
    { pageSize: 1000 }
  );
  const paths = document.results.map((page) => ({ params: { id: page.uid } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const document = await Client.getByUID("article", params.id, {});
  return {
    props: { document },
  };
}

export default function Article({ document }) {
  useEffect(() => {
    console.log(document);
  }, []);
  return <div>le document</div>;
}
