import Prismic from "@prismicio/client";
import { Client } from "../prismic-config";
import Layout from '../components/Layout';
import { ArticleT } from '../types/index';
import { Date } from '../components';
import { RichText } from 'prismic-reactjs';

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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const document = await Client.getByUID("article", params.id, {});
  // const data: ArticleT = document.data
  return {
    props: { document },
  };
}

export default function Article({ document }: { document: ArticleT }) {
  const data: ArticleT["data"] = document.data
  console.log("data XXXXXXXX data");

  console.log(data);
  return <Layout>
    <div className="max-w-3xl px-4 py-16 mx-auto text-black bg-white sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {RichText.asText(data.title)}
        </h1>
        {/* <p className="text-base font-medium leading-6 text-gray-500">
          <Date dateString={data.last_publication_date} />
        </p> */}
      </div>
      <br />
      <div className="pt-12 mx-auto prose lg:prose-lg">
        <RichText render={data.text} />
      </div>
    </div>
  </Layout>;
}
