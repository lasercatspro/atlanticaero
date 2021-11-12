import React from "react";
import { landingT, WhoItemI } from "../types";

export const AppContext = React.createContext<null | {socials: WhoItemI[], cta: landingT["cta"]} >(null);