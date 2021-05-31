import { Client } from '../prismic-config'
import { Companies, Features, Hero, Who, Plane, Testimonials, Footer, Layout } from '../components';
import { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { FeatureT, landingT, PartnerT, SliceT } from '../types';

export async function getStaticProps() {
  const document = await Client.getSingle("landing", {})
  return {
    props: { document },
  }
}


export default function Home(props: any) {
  const data: landingT = props.document.data
  const slices: landingT["body"] = data.body
  const partners = slices.find((el: SliceT ) => el.slice_type === "partenaires") as PartnerT;
  const features = props.document.data.body.filter((el: any) => el.slice_type === "feature");


  console.log("data data data")
  console.log(data)
  // console.log("slices slices slices")
  // console.log(slices)
  console.log("features features features")
  console.log(features)

  return (
    <Layout>
      <Hero title={RichText.asText(data["hero-p"])} headline={RichText.asText(data["hero-headline"])} image={data["hero-image"]} />
      {partners && <Companies partners={partners} />}
      <Features title={RichText.asText(data["features-title"])} subtitle={RichText.asText(data["features-subtitle"])} />
      <Who />
      <Plane />
      <Testimonials />
      <Footer />
    </Layout>
  )
}
