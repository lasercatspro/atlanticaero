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
  items: { partner_logo: ImageT }[]
}

export interface FeatureT extends SliceT {
  items: {
    icon: string
    p: RichTextBlock[]
    title: RichTextBlock[]
  }[]
  primary: {
    description: RichTextBlock[]
    title: RichTextBlock[]
  }
}