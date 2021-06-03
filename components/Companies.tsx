import { RichText } from "prismic-reactjs";
import { ImageT, PartnerT } from "../types";
import Image from "next/image";

type Props = {
  partners: PartnerT;
};

const Companies = ({ partners }: Props) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {RichText.asText(partners.primary["partners-p"])}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {partners.items.map(({ partner_logo }) => (
            <div
              key={partner_logo.url}
              className="col-span-1 flex justify-center py-3 px-3 md:py-8 md:px-8 "
            >
              <div className=" relative h-12 w-24 md:h-24 md:w-36">
                <Image
                  className="object-contain object-center text-gray-300 "
                  layout="fill"
                  // width={partner_logo.dimensions.width}
                  // height={partner_logo.dimensions.height}
                  src={partner_logo.url}
                  alt={partner_logo.alt ? partner_logo.alt : "logo partenaire"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
