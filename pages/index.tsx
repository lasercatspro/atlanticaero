import { Client } from '../prismic-config'
import { Companies, Features, Hero, Who, HighlightedArticle, Testimonials,  Layout } from '../components';
import { RichText } from 'prismic-reactjs';
import { ArticleT, FeatureT, HighlightedArticleT, landingT, PartnerT, SliceT, TestimonialT } from '../types';
import { WhoT } from '../types/index';
import generateSitemap from '../lib/sitemap';
import { getArticlesFromTag } from '../lib/prismicApi';
import Blog from '../components/Blog';

export async function getStaticProps() {

  const document = await Client.getSingle("landing", { fetchLinks: "article.image" })
  const news = await getArticlesFromTag("actualités")


  generateSitemap();

  return {
    props: { document, news },
    revalidate: 10,
  }
}

export default function Home(props: any) {
  const news: ArticleT[] = props.news
  const data: landingT = props.document.data
  const slices: landingT["body"] = data.body
  const partners = slices.find((el: SliceT) => el.slice_type === "partenaires") as PartnerT
  const features = props.document.data.body.filter((el: any) => el.slice_type === "feature") as FeatureT[]
  const who = slices.find((el: SliceT) => el.slice_type === "qui-suis-je__") as WhoT
  const highlightedArticle = slices.find((el: SliceT) => el.slice_type === "article_special") as HighlightedArticleT
  const testimonials = slices.find((el: SliceT) => el.slice_type === "clients_heureux") as TestimonialT

  console.log(news)

  return (
    <Layout imageUrl={data["hero-image"].url} title={RichText.asText(data["hero-p"])} description={RichText.asText(data["hero-headline"])}>
      <Hero title={RichText.asText(data["hero-p"])} headline={RichText.asText(data["hero-headline"])} image={data["hero-image"]} />
      {partners && <Companies partners={partners} />}
      {features && <Features title={RichText.asText(data["features-title"])} subtitle={RichText.asText(data["features-subtitle"])} features={features} />}
      {who && <Who buttonText={data['whoami-contact-button-text']} title={data['whoami-title']} who={who} />}
      {news && <Blog posts={news} />}

      {highlightedArticle && <HighlightedArticle article={highlightedArticle} />}
      <Testimonials testimonials={testimonials} />
    </Layout>
  )
}

