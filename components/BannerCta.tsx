import React from "react";
import ContactButton from "./ContactButton";
import Cta from "./Cta";

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
          <Cta>Reservez votre vol</Cta>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <ContactButton className=" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" >Prenons rendez-vous</ContactButton>
        </div>

      </div>
    </div>
  </div>
  )
}