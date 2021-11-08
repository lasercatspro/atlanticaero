import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Client } from '../prismic-config';
import { AppContext } from '../utils/appContext';
import { landingT, SliceT, WhoT } from '../types';


function MyApp({ Component, pageProps, data }: AppProps & { data: landingT }) {
  const slices: landingT["body"] = data.body
  const who = slices.find((el: SliceT) => el.slice_type === "qui-suis-je__") as WhoT

  return (
    <AppContext.Provider value={{ socials: who.items }}>
      <Component {...pageProps} />
    </AppContext.Provider >
  );

}
export default MyApp

MyApp.getInitialProps = async () => {
  const document = await Client.getSingle("landing", { fetchLinks: "article.image" })
  return { data: document.data };
};

