import {
  advance_strategy,
  boost,
  database,
  management,
  payment,
  strategy,
} from "assets/images/images";
import "./solutions.css";

const solutions = [
  {
    title: "Enhanced Capital Efficiency",
    data: [
      {
        image: payment,
        title: "Double Dipping",
        description:
          "Market makers can now earn both lending fees and swap fees simultaneously on all their provided liquidity.",
      },
      {
        image: boost,
        title: "Yield Boost",
        description:
          "Lending liquidity unlocks a lucrative new income stream for market makers by catering to the demand for positive gamma (convexity) or impermanent loss protection.",
      },
    ],
  },
  {
    title: "Unmatched Utility",
    data: [
      {
        image: strategy,
        title: "Strategic Flexibility",
        description:
          "The ability to mint/borrow liquidity and deposit/borrow any two tokens within a single protocol opens doors to a vast array of trading strategies.",
      },
      {
        image: advance_strategy,
        title: "Advanced Strategies Made Easy",
        description:
          "Market makers can leverage their liquidity to employ sophisticated strategies like delta-neutral and concentrated liquidity with greater ease",
      },
    ],
  },
  {
    title: "Empowering Autonomy",
    data: [
      {
        image: database,
        title: "Oracle Independence",
        description:
          "Element DLEX's unique design eliminates the need for oracles, enabling permissionless creation of lending markets for any two token pairings.",
      },
      {
        image: management,
        title: "Risk Management",
        description:
          "By removing oracle reliance, Element DLEX allows users to short any token and earn yield on any asset, effectively hedging against unforeseen risks.",
      },
    ],
  },
];

export const Solutions = () => {
  return (
    <div data-aos="fade-up" className="-mt-16 bigTablet:mt-0 bigTablet:pt-32">
      <p className="text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl text-center font-bold">
        A Unified DLEX Solution
      </p>
      <div className="mt-10 myContainer tablet:!py-32 !py-8 bg-themeDarkBlack curved-section mb-10">
        <div className="tablet:mt-10">
          {solutions.map((solution, index) => {
            return (
              <div className="flex" key={index}>
                <div className="hidden tablet:flex flex-col items-center">
                  <div
                    className={`bg-gradient-to-br from-[#d591ff] via-[#919cff] to-[#91ebff] w-8 h-8 rounded-full border-2 border-white`}
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                  ></div>
                  <div
                    className="border-l-4 border-white h-full"
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="800"
                  ></div>
                </div>
                <div className="w-full tablet:-mt-1">
                  <p className="font-semibold pb-3 mt-6 tablet:pb-0 tablet:mt-0 tablet:text-xl bigTablet:text-2xl midDestop:text-3xl tablet:ml-7">
                    {solution.title}
                  </p>
                  <div className="grid midDestop:grid-cols-2 gap-5 bigTablet:p-10">
                    {solution.data.map((data, ind) => {
                      return (
                        <div
                          data-aos="flip-left"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="1200"
                          key={ind}
                          className="border border-themePurple rounded-2xl p-5 tablet:py-10 tablet:px-10 bg-gradient-to-tl to-40% via-themePurple/30 from-themePurple/80 to-themeDarkBlack"
                        >
                          <img
                            src={data.image}
                            alt="payment"
                            className="-ml-10 -mt-10 w-32"
                          />
                          <p className="text-themePurple font-bold text-lg tablet:text-2xl">
                            {data.title}
                          </p>
                          <p className="mt-4 font-light">{data.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
