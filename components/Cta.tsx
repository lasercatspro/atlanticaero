import Link from "next/link";
import React, { useContext } from "react";
import { AppContext } from "../utils/appContext";

type Props = {
  children?: React.ReactNode;
  small?: boolean
}

export default function Cta({ children, small }: Props) {
  const ctxProps = useContext(AppContext);

  return (
    <>
      <Link className={`inline-flex items-center justify-center text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${small ? "px-4 py-2" : "px-8 py-3 md:text-lg md:py-4 md:px-10 w-full "}`} href="https://bocageairlines.sumup.link/">
        {ctxProps?.cta ? ctxProps.cta : "Prenez votre envol"}
      </Link>
    </>

  )
}