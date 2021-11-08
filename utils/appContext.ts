import React from "react";
import { WhoItemI, WhoT } from "../types";

export const AppContext = React.createContext<null | {socials: WhoItemI[]} >(null);