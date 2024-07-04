import { enhance_shadow, full_planet } from "assets/images/images";

const enhancedCapitalEfficiency = [
  {
    title: "Maximized Efficiency",
    description:
      "Element's Dual Purpose Pools combine trading and lending in one pool, allowing assets to earn both trading and lending fees simultaneously.",
  },
  {
    title: "Fee Optimization",
    description:
      "Element eliminates fee inefficiencies by offering full trading and lending fee benefits to liquidity providers in Dual Purpose Pools.",
  },
  {
    title: "Strong Incentives",
    description:
      "By combining trading and lending functionalities, Element provides robust incentives for liquidity providers, enabling meaningful shorts of any asset.",
  },
  {
    title: "Asset Protection",
    description:
      "Element addresses the risk of asset depletion by implementing mechanisms to handle asset exhaustion scenarios, ensuring liquidity is maintained.",
  },
  {
    title: "Risk Mitigation",
    description:
      "Element introduces timelocks to prevent oracle manipulation and flash loan exploits, safeguarding the platform from price manipulation risks.",
  },
];

export const EnhancedCapitalEfficiency = () => {
  return (
    <div data-aos="fade-up" className="bg-themeDarkBlack py-5 bigTablet:pt-28">
      <div className="relative z-10 mt-2 flex flex-col gap-1 bigTablet:gap-3 text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl text-center font-bold">
        Capital Efficiency Enhanced
      </div>
      <div className="relative">
        <img src={enhance_shadow} alt="shadow" className="absolute right-0" />
      </div>
      <div className="static bigTablet:mt-28 grid bigTablet:grid-cols-2">
        <div>
          <img
            src={full_planet}
            alt="planet"
            className="-mt-52 w-full hidden bigTablet:block blinking"
          />
        </div>
        <div className="flex flex-col gap-5 myContainer bigTablet:!pl-0">
          {enhancedCapitalEfficiency.map((item, index) => {
            return (
              <div
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1200"
                key={index}
                className="bigTablet:p-8 p-5 border border-[#E4B9FF] bg-[#1a1a1b] rounded-2xl"
              >
                <p className="font-bold bigTablet:text-2xl text-lg">
                  {item.title}
                </p>
                <p className="font-light mt-3">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
