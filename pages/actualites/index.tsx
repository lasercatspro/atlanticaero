import Layout from "../../components/Layout";
import { ArticleT } from "../../types/index";
import { BreadcrumbJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { getArticlesFromTag } from "../../lib/prismicApi";
import Blog from "../../components/Blog";
import BannerCta from "../../components/BannerCta";

export async function getStaticProps() {
  const news = await getArticlesFromTag("actualités");

  return {
    props: {
      news: news ? news : null,
    },
    revalidate: 10,
  };
}

export default function Article({
  news,
}: {
  news?: ArticleT[];
}) {
  const { asPath } = useRouter();

  const title = "Toutes les actualités ULM à Nantes et dans les Pays de la Loire | Bocage Airlines"

  return (
    <Layout
      title={title}
      description="Retrouvez toutes les dernières actualités sur l'ULM à Nantes et dans les Pays de la Loire | Bocage Airlines"
    >
      {/* JSON-LD */}
      {/* <BlogJsonLd
          url={`https://bocageairlines.fr/actualite/${asPath}`}
          title={RichText.asText(data.title)}
          images={[data.image.url ? data.image.url : ""]}
          datePublished={document.first_publication_date}
          dateModified={document.last_publication_date}
          authorName="Pablo Bell"
          description={RichText.asText(data.description)}
        /> */}
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: title,
            item: `https://bocageairlines.fr/${asPath}`,
          },
        ]}
      />

      {news && <Blog posts={news} />}
      <BannerCta />
    </Layout>
  );

}