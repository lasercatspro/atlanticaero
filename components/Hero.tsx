import { ImageT } from "../types";
import Image from "next/image";
import React from "react";
import Cta from "./Cta";

type Props = {
  title: string;
  headline: string;
  image: ImageT;
};

const Hero = ({ title, headline, image }: Props) => {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{title}</span>{" "}
              {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {headline}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Cta />
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            layout="fill" // ici fill car pas de bord, on prend l'espace de droite
            priority
            // width={image.dimensions.width}
            // height={image.dimensions.height}
            objectFit="cover"
            className="absolute inset-0 w-full h-full"
            src={image.url}
            alt={image.alt ? image.alt : "volez, avec aerobocage"}
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
