import Head from "next/head";
import { NavBar, Footer } from "./index";
import { useRouter } from "next/router";
import { WhoItemI } from "../types";

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
            <link rel="canonical" href={`https://bocageairlines.fr${asPath}`} />

            {/* favicon */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

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
            {/* JSON LD */}
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
