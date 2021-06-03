import { Client } from "../prismic-config";
import Layout from "../components/Layout";
import { ArticleT } from "../types/index";
import { RichText, Elements } from "prismic-reactjs";
import { BlogJsonLd, BreadcrumbJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { getAllArticles } from "../lib/prismicApi";
import Image from "next/image";
import DefaultErrorPage from "next/error";

export async function getStaticPaths() {
  const document = await getAllArticles();

  const paths = document.results.map((page) => ({ params: { id: page.uid } }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const document = await Client.getByUID("article", params.id, {});

  return {
    props: { document: document ? document : null },
    revalidate: 60,
  };
}

export default function Article({
  document,
  error,
}: {
  document?: ArticleT;
  error: boolean;
}) {
  const { asPath, isFallback } = useRouter();

  if (!document) {
    return (
      <Layout title="404" description="404">
        <DefaultErrorPage statusCode={404} />
      </Layout>
    );
  } else {
    const data: ArticleT["data"] = document.data;

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
          url={`https://bocageairlines.fr${asPath}`}
          title={RichText.asText(data.title)}
          images={[data.image.url ? data.image.url : ""]}
          datePublished={data.first_publication_date}
          dateModified={data.last_publication_date}
          authorName="Pablo Bell"
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
        <div className="max-w-3xl px-4 py-16 mx-auto text-black bg-white sm:px-6 ">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {RichText.asText(data.title)}
            </h1>
            {data.image.url && (
              <div className="mt-12 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
                <Image
                  // className="w-full  "
                  priority
                  layout="responsive"
                  src={data.image.url}
                  alt={
                    data.image.alt
                      ? data.image.alt
                      : RichText.asText(data.title)
                  }
                  width={data.image.dimensions.width}
                  height={data.image.dimensions.height}
                />
              </div>
            )}

            {/* <p className="text-base font-medium leading-6 text-gray-500">
          <Date dateString={data.last_publication_date} />
        </p> */}
          </div>
          <br />
          <div className="pt-12 mx-auto prose lg:prose-lg">
            <RichText render={data.text} htmlSerializer={htmlSerializer} />
          </div>
        </div>
      </Layout>
    );
  }
}

const htmlSerializer = function (
  type: any,
  element: any,
  content: any,
  children: any,
  key: any
) {
  var props = {};
  switch (type) {
    case Elements.image:
      const props = {
        dimensions: element.dimensions,
        src: element.url,
        alt: element.alt || "",
      };
      // return React.createElement('img', propsWithUniqueKey(props, key));
      return (
        <div className="mt-12 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
          <Image
            // className="w-full  "
            priority
            layout="responsive"
            src={props.src}
            alt={props.alt}
            width={props.dimensions.width}
            height={props.dimensions.height}
          />
        </div>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
