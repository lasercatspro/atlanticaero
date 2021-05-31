import Head from 'next/head'
import { Companies, Features, Hero, Who, Plane, Testimonials, Footer, Layout } from '../components';


export default function Home() {
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
