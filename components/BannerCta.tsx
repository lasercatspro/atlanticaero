import React from "react";
import { ContactButton } from ".";

export default function BannerCta() {
  return (
    <div className="bg-indigo-50">
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Prêt à vous envolez ?</span>
        <span className="block text-indigo-600">Contactez-moi</span>
      </h2>
      <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <ContactButton className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Réservez votre vol
          </ContactButton>
        </div>
      </div>
    </div>
  </div>
  )
}