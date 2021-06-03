import { Client } from "../prismic-config";
import Layout from '../components/Layout';
import { ArticleT } from '../types/index';
import { RichText } from 'prismic-reactjs';
import { BlogJsonLd, BreadcrumbJsonLd } from 'next-seo';
import { useRouter } from "next/router";
import { getAllArticles } from "../lib/prismicApi";
import { MoreArticles, ContactButton } from "../components";

export async function getStaticPaths() {
  const document = await getAllArticles()

  const paths = document.results.map((page) => ({ params: { id: page.uid } }));
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const document = await Client.getByUID("article", params.id, {});
  const articles = await (await getAllArticles()).results
  return {
    props: { document, articles },
  };
}

export default function Article({ document, articles }: { document: ArticleT, articles: ArticleT[] }) {
  const { asPath } = useRouter()
  const data: ArticleT["data"] = document.data

  console.log(document)

  const filteredArticles = articles.filter(article => article.id !== document.id)

  console.log(filteredArticles)

  return <Layout imageUrl={data.image.url && data.image.url} title={RichText.asText(data.title)} description={RichText.asText(data.description) ? RichText.asText(data.description) : RichText.asText(data.title)}>

    {/* JSON-LD */}
    <BlogJsonLd
      url={`https://bocageairlines.fr${asPath}`}
      title={RichText.asText(data.title)}
      images={[
        data.image.url ? data.image.url : ''
      ]}
      datePublished={document.first_publication_date}
      dateModified={document.last_publication_date}
      authorName='Pablo Bell'
      description={RichText.asText(data.description)}
    />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: RichText.asText(data.title),
          item: `https://bocageairlines.fr${asPath}`,
        },
      ]}
    />

    {/* CONTENT */}
    <div className="max-w-3xl px-4 py-16 mx-auto text-black bg-white sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {RichText.asText(data.title)}
        </h1>
        {data.image.url && <div className="mt-12">
          <img
            className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src={data.image.url}
            alt={data.image.alt ? data.image.alt : RichText.asText(data.title)}
          />
        </div>}

        {/* <p className="text-base font-medium leading-6 text-gray-500">
          <Date dateString={data.last_publication_date} />
        </p> */}
      </div>
      <br />
      <div className="pt-12 mx-auto prose lg:prose-lg">
        <RichText render={data.text} />
      </div>
    </div>

    <div className="bg-indigo-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Prêt à vous envolez ?</span>
          <span className="block text-indigo-600">Contactez-moi</span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <ContactButton className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Réservez votre vol
            </ContactButton>
          </div>
        </div>
      </div>
    </div>

    <MoreArticles articles={filteredArticles} />




  </Layout>;
}
