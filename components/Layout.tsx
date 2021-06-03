import Head from "next/head";
import { NavBar, Footer } from "./index";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
  noindex?: boolean;
};

const Layout = ({ children, title, description, imageUrl, noindex }: Props) => {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        {noindex ? (
          <meta name="robots" content="noindex" />
        ) : (
          <>
            <meta
              name="google-site-verification"
              content="O8Vd23A0efSu6meEncs2n0XgwUreSlC19wILIUvUeeM"
            />
            <title>{title} | Bocage AirLines</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={`https://bocageairlines.fr${asPath}`} />

            {/* facebook */}
            <meta property="og:title" content={title} />
            <meta
              property="og:url"
              content={`https://bocageairlines.fr${asPath}`}
            />
            <meta property="og:type" content="article" />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            <meta
              property="og:site_name"
              content="Bocage AirLines, apprenez à voler"
            />
            {/* twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@nytimesbits" />
            <meta name="twitter:creator" content="@nickbilton" />
            <meta
              property="og:url"
              content={`https://bocageairlines.fr${asPath}`}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}
          </>
        )}
      </Head>

      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
