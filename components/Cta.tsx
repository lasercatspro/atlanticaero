import Link from "next/link";
import React from "react";

type Props = {
  children?: React.ReactNode;
}

export default function Cta({children}: Props) {
  return (
    <>
      <Link href="https://bocageairlines.sumup.link/">
        <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {children ? children : "Prenez votre envol"}
        </a>
      </Link>
    </>

  )
}