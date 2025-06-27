import Prismic from "@prismicio/client";
import { Elements } from "prismic-reactjs";
import Image from "next/image"
// Update your-repo-name with the name of your repository.
const apiEndpoint = "https://atlanticaero.prismic.io/api/v2";
export const Client = Prismic.client(apiEndpoint);

export const LinkResolver = (doc: any) => {
  if (doc.isBroken) {
    return "/not-found";
  }
  if (doc.type === "home") {
    return "/";
  }
  if (doc.type === "article") {
    return "/" + doc.uid;
  }
  return "/";
};

export const htmlSerializer = function (
  type: any,
  element: any,
  content: any,
  children: any,
  key: any
) {
  var props = {};
  switch (type) {
    case Elements.image:
      const props = {
        dimensions: element.dimensions,
        src: element.url,
        alt: element.alt || "",
      };
      // return React.createElement('img', propsWithUniqueKey(props, key));
      return (
        <div className="mt-12 overflow-hidden rounded-lg shadow-xl">
          <Image
            // className="w-full "
            priority
            layout="responsive"
            src={props.src}
            alt={props.alt}
            width={props.dimensions.width}
            height={props.dimensions.height}
          />
        </div>
      );

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
