import { Client } from '../prismic-config'
import { Companies, Features, Hero, Who, Plane, Testimonials, Footer, Layout } from '../components';
import { useEffect } from 'react';

export async function getStaticProps() {
  const document = await Client.getSingle("landing", {})
  return {
    props: { document },
  }
}


export default function Home(props: any) {

  useEffect(() => {
    console.log(props.document)
  }, [])

  return (
    <Layout>
      <Hero />
      <Companies />
      <Features />
      <Who />
      <Plane />
      <Testimonials />
      <Footer />
    </Layout>
  )
}
