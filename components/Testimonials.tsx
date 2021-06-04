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
          <ul className="space-y-12 lg:w-auto sm:grid sm:grid-cols-2 sm:items-start sm:gap-x-8 sm:gap-y-12 sm:space-y-0">
            {testimonials.items.map((testimonial, i) => (
              <li key={testimonial.name}>
                <div className="flex space-x-4 lg:space-y-4 h-36 lg:h-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                  {/* image */}
                  <div className="w-24 h-24 lg:w-auto lg:h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <Image
                      layout="responsive"
                      width={testimonial.image.dimensions.width}
                      height={testimonial.image.dimensions.height}

                      className="object-contain rounded-lg shadow-lg lg:object-cover"
                      src={testimonial.image.url}
                      alt={
                        testimonial.image.alt
                          ? testimonial.image.alt
                          : `on a volé ensemble ${i.toString()}`
                      }
                    />
                  </div>
                  {/* textes */}
                  <div className="w-9/12 sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{testimonial.name}</h3>
                        <p className="text-indigo-600 ">
                          {RichText.asText(testimonial["people-desc"])}
                        </p>
                        <QuoteIcon />

                      </div>
                      <div className="hidden text-lg lg:block">
                        <p className="text-gray-500">
                          {RichText.asText(testimonial.testimonial)}
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
                {/* au dessous de lg on passe le texte sous la photo et le nom */}
                <div className="block text-lg lg:hidden">
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
