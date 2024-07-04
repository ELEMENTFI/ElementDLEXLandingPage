import { included, not_included, outstanding } from "assets/icons/icons";
import { logo, uniswap_v2, uniswap_v3 } from "assets/images/images";

const packages = [
  {
    tag: "LOWER",
    title: "Uniswap V2",
    image: uniswap_v2,
    features: [
      {
        title: "No Concentrated Liquidity",
        isIncluded: false,
      },
      {
        title: "Utilizes fixed percentage fees",
        isIncluded: true,
      },
      {
        title: "Provides liquidity for broader exposure price ranges",
        isIncluded: true,
      },
      {
        title: "Utilizes Fungible Tokens with no precision",
        isIncluded: true,
      },
      {
        title: "Lower capital efficiency",
        isIncluded: true,
      },
      {
        title: "No Leveraged Liquidity",
        isIncluded: false,
      },
    ],
  },
  {
    tag: "JUST GOOD",
    title: "Uniswap V3",
    image: uniswap_v3,
    features: [
      {
        title: "Offers liquidity between specific price ranges",
        isIncluded: true,
      },
      {
        title: "Implements dynamic fee control",
        isIncluded: true,
      },
      {
        title: "Provides liquidity between price ranges",
        isIncluded: true,
      },
      {
        title: "Implements Non Fungible Tokens with more precision",
        isIncluded: true,
      },
      {
        title: "Higher capital efficiency",
        isIncluded: true,
      },
      {
        title: "No Leveraged Liquidity",
        isIncluded: false,
      },
    ],
  },
  {
    tag: "OUTSTANDING",
    title: "Element",
    image: logo,
    features: [
      {
        title: "Utilizes Dual Purpose Pools for leverage",
        isIncluded: true,
      },
      {
        title: "Utilizes fees for trading and lending",
        isIncluded: true,
      },
      {
        title: "Offers enhanced capital efficiency",
        isIncluded: true,
      },
      {
        title: "Utilizes proportional debt tokens",
        isIncluded: true,
      },
      {
        title: "Increases capital efficiency",
        isIncluded: true,
      },
      {
        title: "Allows leveraged liquidity",
        isIncluded: true,
      },
    ],
  },
];

export const Packages = () => {
  return (
    <div
      data-aos="fade-up"
      className="grid bigTablet:grid-cols-2 midDestop:grid-cols-3 gap-5 myContainer bigTablet:mt-10 midDestop:mt-0"
    >
      {packages.map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-themeGray-700 border ${
              item.tag === "OUTSTANDING"
                ? "border-themeLightPurple"
                : "border-white/50"
            } rounded-2xl p-5 bigDesktop:p-8`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`${
                    item.tag === "OUTSTANDING"
                      ? "text-themeLightPurple"
                      : "text-themeGray-500"
                  } font-semibold`}
                >
                  {item.tag}
                </p>
                <p className="mt-5 font-bold text-2xl bigDesktop:text-3xl">
                  {item.title}
                </p>
              </div>
              <img
                data-aos="flip-left"
                data-aos-duration="1500"
                src={item.image}
                className="w-20"
                alt="logo"
              />
            </div>
            <div className="mt-5">
              {item.features.map((feature, index) => {
                return (
                  <div key={index} className="flex gap-3 py-3">
                    {item.tag === "OUTSTANDING" ? (
                      <img src={outstanding} className="w-5" alt="check" />
                    ) : feature.isIncluded ? (
                      <img src={included} className="w-5" alt="check" />
                    ) : (
                      <img src={not_included} className="w-5" alt="cross" />
                    )}
                    <p className="font-light text-sm">{feature.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
