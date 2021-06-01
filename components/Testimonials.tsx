import { TestimonialT } from "../types";
import { QuoteIcon } from "./index"
import { RichText } from 'prismic-reactjs';

type Props = {
  testimonials: TestimonialT
}

const Testimonials = ({testimonials}: Props) => {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{RichText.asText(testimonials.primary.title)}</h2>

          <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
            {testimonials.items.map((testimonial, i) => (
              <li key={testimonial.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="object-cover rounded-lg shadow-lg" src={testimonial.image.url} alt={testimonial.image.alt ? testimonial.image.alt : `on a volé ensemble ${i.toString()}` } />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{testimonial.name}</h3>
                        <QuoteIcon />
                        <p className="text-indigo-600">{RichText.asText(testimonial["people-desc"])}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{RichText.asText(testimonial.testimonial)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Testimonials
