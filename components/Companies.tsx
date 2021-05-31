import { RichText } from "prismic-reactjs"
import { ImageT, PartnerT } from "../types"

type Props = {
  partners: PartnerT
}

const Companies = ({ partners }: Props) => {


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {RichText.asText(partners.primary["partners-p"])}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {partners.items.map(({ partner_logo }) =>
            <div key={partner_logo.url} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src={partner_logo.url}
                alt={partner_logo.alt ? partner_logo.alt : "logo partenaire"}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Companies
