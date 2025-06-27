import React from "react";
import { WhoItemI } from "../types";
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

import Link from "next/link";



type SocialIconProps = {
  social: WhoItemI["social"]
}

function SocialIcon({ social }: SocialIconProps) {
  switch (social) {
    case "instagram":
      return <GrInstagram size="1.3em" />
    case "facebook":
      return <FaFacebook size="1.3em" />
    case "google-my-business":
      return <FaGoogle size="1.3em" />
    case "linkedin":
      return <FaLinkedin size="1.3em" />
    case "twitter":
      return <FaTwitter size="1.3em" />
  }
}

type Props = {
  social: WhoItemI["social"]
  link: WhoItemI["link"]
}

export default function Social({ social, link }: Props) {
  return (
    <Link target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500" href={link} >
      <span className="sr-only">{social}</span>
      {<SocialIcon social={social} />}
    </Link>
  )
}