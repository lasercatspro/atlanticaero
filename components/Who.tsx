import { RichText, RichTextBlock } from "prismic-reactjs";
import { WhoT } from "../types/index";
import ContactDialog from "./ContactDialog";
import Image from "next/image";
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/solid';
import React, { useState } from "react";
import Social from "./Social";

type Props = {
  title: RichTextBlock[];
  who: WhoT;
  buttonText: string;
};

const Who = ({ title, who }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { image, bio, name, role } = who.primary;
  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {RichText.asText(title)}
            </h2>
            <div className="mt-5 text-lg text-indigo-500">
              <Link className="flex items-center font-bold uppercase " href="/qui-suis-je">
                lire plus
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <Image
                      className="object-cover rounded-lg shadow-lg"
                      src={image.url}
                      alt={image.alt ? image.alt : "Pablo Bell"}
                      layout="responsive"
                      width={image.dimensions.width}
                      height={image.dimensions.height}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{name}</h3>
                        <p className="text-indigo-600">{role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{RichText.asText(bio)}</p>
                      </div>
                      <ul className="flex space-x-5">
                        {who.items.map(item => <li>
                          <Social social={item.social} link={item.link} />
                        </li>)}
                      </ul>
                      <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Contactez-moi !
                      </button>
                      <ContactDialog isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
