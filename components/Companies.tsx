import { RichText } from "prismic-reactjs";
import { ImageT, PartnerT } from "../types";
import Image from "next/image";
import { LinkResolver } from "../prismic-config";

type Props = {
  partners: PartnerT;
};

const Companies = ({ partners }: Props) => {
  console.log(partners);

  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <p className="text-base font-semibold tracking-wider text-center text-gray-600 uppercase">
          {RichText.asText(partners.primary["partners-p"])}
        </p>
        <div className="flex flex-wrap justify-center mx-auto mt-6 lg:mt-8">
          {partners.items.map(({ partner_logo, logo_link }) => (
            <div
              key={partner_logo.url}
              className="px-3 py-3 mx-auto text-center md:py-8 md:px-8 "
            >
              <div className="relative w-24 h-12 md:h-24 md:w-36">
                {logo_link ? <a href={logo_link.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="object-contain object-center text-gray-300 "
                    layout="fill"
                    // width={partner_logo.dimensions.width}
                    // height={partner_logo.dimensions.height}
                    src={partner_logo.url}
                    alt={partner_logo.alt ? partner_logo.alt : "logo partenaire"}
                  />
                </a>
                  :
                  <Image
                    className="object-contain object-center text-gray-300 "
                    layout="fill"
                    // width={partner_logo.dimensions.width}
                    // height={partner_logo.dimensions.height}
                    src={partner_logo.url}
                    alt={partner_logo.alt ? partner_logo.alt : "logo partenaire"}
                  />}



              </div>
              {/* {link && <div className="font-semibold text-indigo-500"><RichText render={link} linkResolver={LinkResolver} /></div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
