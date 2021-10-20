import Layout from "../../components/Layout";
import { ArticleT } from "../../types/index";
import { RichText, Elements } from "prismic-reactjs";
import { BlogJsonLd, BreadcrumbJsonLd, ProductJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { getAllArticles, getArticlesFromTag } from "../../lib/prismicApi";
import { MoreArticles, ContactButton } from "../../components";
import Image from "next/image";
import DefaultErrorPage from "next/error";
import { Client } from "../../prismic-config";
import React from "react";
import Post from "../../components/Post";

export async function getStaticPaths() {
  const document = await getArticlesFromTag("actualités");


  const paths = document?.map((page:any) => ({ params: { id: page.uid } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const document = await Client.getByUID("article", params.id, {});
  const articles = (await getAllArticles()).results;

  return {
    props: {
      document: document ? document : null,
      articles: articles ? articles : null,
    },
    revalidate: 10,
  };
}

export default function Article({
  document,
  articles,
  error,
}: {
  document?: ArticleT;
  articles?: ArticleT[];
  error: boolean;
}) {
  const { asPath } = useRouter();
  if (!document) {
    return (
      <Layout title="404" description="404">
        <DefaultErrorPage statusCode={404} />
      </Layout>
    );
  } else {
    const data: ArticleT["data"] = document.data;
    const filteredArticles =
      articles?.filter((article) => article.id !== document.id) || [];

    return (
      <Layout
        imageUrl={data.image.url && data.image.url}
        title={RichText.asText(data.title)}
        description={
          RichText.asText(data.description)
            ? RichText.asText(data.description)
            : RichText.asText(data.title)
        }
      >
        {/* JSON-LD */}
        <BlogJsonLd
          url={`https://bocageairlines.fr/actualite/${asPath}`}
          title={RichText.asText(data.title)}
          images={[data.image.url ? data.image.url : ""]}
          datePublished={document.first_publication_date}
          dateModified={document.last_publication_date}
          authorName="Pablo Bell"
          description={RichText.asText(data.description)}
        />
        <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: RichText.asText(data.title),
              item: `https://bocageairlines.fr/actualite/${asPath}`,
            },
          ]}
        />
        <Post data={data} />
        <MoreArticles articles={filteredArticles} />

      </Layout>
    );
  }
}

