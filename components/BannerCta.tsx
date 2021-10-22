import React, { useState } from "react";
import ContactDialog from "./ContactDialog";
import Cta from "./Cta";

export default function BannerCta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-indigo-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Prêt à vous envolez ?</span>
          <span className="block text-indigo-600">Contactez-moi</span>
        </h2>
        <div className="flex space-y-2 flex-wrap mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="mr-3 inline-flex rounded-md shadow">
            <Cta>Reservez votre vol</Cta>
          </div>
          <div className="inline-flex rounded-md shadow">
            <button className=" inline-flex items-center justify-center px-4 py-2  border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" onClick={() => setIsOpen(true)} >contact</button>
          </div>

        </div>
      </div>
    </div>
  )
}