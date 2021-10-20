import { RichTextBlock } from "prismic-reactjs"

export type landingT = {
  body: SliceT[]
  ["features-subtitle"]: RichTextBlock[]
  ["features-title"]: RichTextBlock[]
  ["hero-headline"]: RichTextBlock[]
  ["hero-image"]: ImageT
  ["hero-p"]: RichTextBlock[]
  //whoami-contact-button-mail: null | string
  ["whoami-contact-button-text"]: string
  ["whoami-title"]: RichTextBlock[]
}

export type ImageT = {
  alt: null | string,
  copyright: null | string,
  dimensions: {
    height: number
    width: number
  }
  url: string
}

export type SliceT = {
  slice_type: string
  slice_label: null | string
}

export interface PartnerT extends SliceT {
  primary: {
    ["partners-p"]: RichTextBlock[]
  }
  items: {
    partner_logo: ImageT,
    logo_link?: {
      link_type: string
      target?: string
      url: string
    }
  }[]
}

export interface FeatureItemT {
  icon: "CurrencyEuroIcon" | "ShieldCheckIcon" | "AcademicCapIcon" | "MailIcon" | "UsersIcon" | "ScaleIcon" | "PaperAirplaneIcon"
  p: RichTextBlock[]
  title: RichTextBlock[]
}

export interface FeatureT extends SliceT {
  items: FeatureItemT[]
  primary: {
    description: RichTextBlock[]
    title: RichTextBlock[]
    image: ImageT
    "related-article"?: RelatedArticleT
  }
}

export interface WhoT extends SliceT {
  primary: {
    contact: string
    name: string
    role: string
    image: ImageT
    bio: RichTextBlock[]
  }
}

export interface RelatedArticleT {
  data: { image: ImageT }
  id: string
  isBroken: boolean
  lang: string
  link_type: string
  slug: string
  tags: string[]
  type: string
  uid: string
}

export interface HighlightedArticleT extends SliceT {
  primary: {
    "article-id": RelatedArticleT
    description: RichTextBlock[]
    headline: RichTextBlock[]
    image: ImageT
  }
}

export interface TestimonialItemT {
  image: ImageT
  name: string
  "people-desc": RichTextBlock[]
  testimonial: RichTextBlock[]
}
export interface TestimonialT extends SliceT {
  items: TestimonialItemT[]
  primary: {
    title: RichTextBlock[]
  }
}

export interface ArticleT {
  first_publication_date: string
  href: string
  id: string
  lang: string
  last_publication_date: string
  linked_documents: []
  slugs: string[]
  tags: string[]
  type: string
  uid: string
  data: {
    description: RichTextBlock[]
    image: ImageT
    text: RichTextBlock[]
    title: RichTextBlock[]
  }
}