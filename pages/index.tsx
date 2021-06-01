import { Client } from '../prismic-config'
import { Companies, Features, Hero, Who, Plane, Testimonials, Footer, Layout } from '../components';
import { RichText } from 'prismic-reactjs';
import { FeatureT, landingT, PartnerT, SliceT } from '../types';
import { WhoT } from '../types/index';

export async function getStaticProps() {
  const document = await Client.getSingle("landing", {})
  return {
    props: { document },
  }
}


export default function Home(props: any) {
  const data: landingT = props.document.data
  const slices: landingT["body"] = data.body
  const partners = slices.find((el: SliceT) => el.slice_type === "partenaires") as PartnerT
  const features = props.document.data.body.filter((el: any) => el.slice_type === "feature") as FeatureT[]
  const who = slices.find((el: SliceT) => el.slice_type === "qui-suis-je__") as WhoT



  console.log("data data data")
  console.log(data)
  // console.log("slices slices slices")
  // console.log(slices)
  console.log("who who who")
  console.log(who)

  return (
    <Layout>
      <Hero title={RichText.asText(data["hero-p"])} headline={RichText.asText(data["hero-headline"])} image={data["hero-image"]} />
      {partners && <Companies partners={partners} />}
      {features && <Features title={RichText.asText(data["features-title"])} subtitle={RichText.asText(data["features-subtitle"])} features={features} />}
      {who && <Who buttonText={data['whoami-contact-button-text']} title={data['whoami-title']} who={who} />}
      <Plane />
      <Testimonials />
      <Footer />
    </Layout>
  )
}
