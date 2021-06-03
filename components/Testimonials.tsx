import { TestimonialT } from "../types";
import { QuoteIcon } from "./index";
import { RichText } from "prismic-reactjs";
import Image from "next/image";

type Props = {
  testimonials: TestimonialT;
};

const Testimonials = ({ testimonials }: Props) => {
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {RichText.asText(testimonials.primary.title)}
          </h2>
          <ul className="space-y-12 md:grid md:grid-cols-2 md:items-start md:gap-x-8 md:gap-y-12 md:space-y-0">
            {testimonials.items.map((testimonial, i) => (
              <li key={testimonial.name}>
                <div className="flex space-x-4 md:space-y-4 h-36 md:h-auto md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
                  {/* image */}
                  <div className="w-24 h-24 md:w-auto md:h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <Image
                      layout="responsive"
                      width={testimonial.image.dimensions.width}
                      height={testimonial.image.dimensions.height}

                      className="object-contain rounded-lg shadow-lg md:object-cover"
                      src={testimonial.image.url}
                      alt={
                        testimonial.image.alt
                          ? testimonial.image.alt
                          : `on a volé ensemble ${i.toString()}`
                      }
                    />
                  </div>
                  {/* textes */}
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{testimonial.name}</h3>
                        <QuoteIcon />
                        <p className="hidden text-indigo-600 md:block">
                          {RichText.asText(testimonial["people-desc"])}
                        </p>
                      </div>
                      <div className="hidden text-lg md:block">
                        <p className="text-gray-500">
                          {RichText.asText(testimonial.testimonial)}
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
                {/* au dessous de lg on passe le texte sous la photo et le nom */}
                <div className="block text-lg md:hidden">
                  <p className="hidden text-indigo-600 md:block">
                    {RichText.asText(testimonial["people-desc"])}
                  </p>
                  <p className="text-gray-500">
                    {RichText.asText(testimonial.testimonial)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
