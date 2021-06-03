import { RichText } from "prismic-reactjs";
import { Icons } from "./index";
import { FeatureT, FeatureItemT } from "../types/index";
import Image from "next/image";

type titleProps = {
  title: string;
  description: string;
};

const FeatureTitle = ({ title, description }: titleProps) => {
  return (
    <>
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-lg text-gray-500">{description}</p>
    </>
  );
};

type itemProps = {
  item: FeatureItemT;
};

const FeatureItem = ({ item }: itemProps) => {
  return (
    <div className="relative">
      <dt>
        <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
          <Icons icon={item.icon} className="w-6 h-6" ariaHidden={true} />
        </div>
        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
          {RichText.asText(item.title)}
        </p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">
        {RichText.asText(item.p)}
      </dd>
    </div>
  );
};

type Props = {
  title: string;
  subtitle: string;
  features: FeatureT[];
};

const Features = ({ title, subtitle, features }: Props) => {
  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
            {subtitle}
          </p>
        </div>

        {features.map((feature, i) => (
          <>
            {/* si i === pair le texte est à gauche */}
            <div key={+RichText.asText(feature.primary.title) + i}>
              {i % 2 === 0 ? (
                <>
                  <svg
                    className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={784}
                      fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
                    />
                  </svg>

                  <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                      <FeatureTitle
                        title={RichText.asText(feature.primary.title)}
                        description={RichText.asText(
                          feature.primary.description
                        )}
                      />

                      <dl className="mt-10 space-y-10">
                        {feature.items.map((item) => (
                          <FeatureItem
                            item={item}
                            key={RichText.asText(item.title)}
                          />
                        ))}
                      </dl>
                    </div>

                    <div
                      className="relative mt-10 -mx-4 lg:mt-0"
                      aria-hidden="true"
                    >
                      <svg
                        className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                        width={784}
                        height={404}
                        fill="none"
                        viewBox="0 0 784 404"
                      >
                        <defs>
                          <pattern
                            id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                          >
                            <rect
                              x={0}
                              y={0}
                              width={4}
                              height={4}
                              className="text-gray-200"
                              fill="currentColor"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width={784}
                          height={404}
                          fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                        />
                      </svg>
                      <div className="relative mx-auto w-4/5 shadow-2xl rounded-3xl overflow-hidden">
                        <Image
                          height={feature.primary.image.dimensions.height}
                          width={feature.primary.image.dimensions.width}
                          layout="responsive"
                          src={feature.primary.image.url}
                          alt={
                            feature.primary.image.alt
                              ? feature.primary.image.alt
                              : "devenez pilote"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <svg
                    className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={784}
                      fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                    />
                  </svg>

                  <div className="relative mt-12 sm:mt-16 lg:mt-24">
                    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                      <div className="lg:col-start-2">
                        <FeatureTitle
                          title={RichText.asText(feature.primary.title)}
                          description={RichText.asText(
                            feature.primary.description
                          )}
                        />

                        <dl className="mt-10 space-y-10">
                          {feature.items.map((item) => (
                            <FeatureItem
                              item={item}
                              key={RichText.asText(item.title)}
                            />
                          ))}
                        </dl>
                      </div>

                      <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                        <svg
                          className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                          width={784}
                          height={404}
                          fill="none"
                          viewBox="0 0 784 404"
                          aria-hidden="true"
                        >
                          <defs>
                            <pattern
                              id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                              x={0}
                              y={0}
                              width={20}
                              height={20}
                              patternUnits="userSpaceOnUse"
                            >
                              <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                className="text-gray-200"
                                fill="currentColor"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width={784}
                            height={404}
                            fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                          />
                        </svg>
                        <div className="relative mx-auto w-4/5 shadow-2xl rounded-3xl overflow-hidden">
                          <Image
                            height={feature.primary.image.dimensions.height}
                            width={feature.primary.image.dimensions.width}
                            layout="responsive"
                            src={feature.primary.image.url}
                            alt={
                              feature.primary.image.alt
                                ? feature.primary.image.alt
                                : "baptême de l'air"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Features;
