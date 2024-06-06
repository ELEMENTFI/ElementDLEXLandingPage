import { PieChart } from "./pieChart";
import {
  capital_efficiency_dark_planet,
  capital_efficiency_dark_planet_2,
  capital_efficiency_dark_planet_3,
  capital_efficiency_left_dots,
  capital_efficiency_right_dots,
  capital_efficiency_setting,
  capital_efficiency_shadow,
} from "assets/images/images";

const uniswap_v2_data = [
  {
    id: "Unused USDC",
    value: 41,
  },
  {
    id: "Used for Swap",
    value: 15,
  },
  {
    id: "Unused ETH",
    value: 44,
  },
];
const element_data = [
  {
    id: "Unused USDC",
    value: 8,
  },
  {
    id: "Borrowed USDC",
    value: 33,
  },
  {
    id: "Swap & Borrowed",
    value: 15,
  },
  {
    id: "Borrowed ETH",
    value: 36,
  },
  {
    id: "Unused ETH",
    value: 8,
  },
];

export const CapitalEfficiency = () => {
  return (
    <div data-aos="fade-up" className="pt-10 bigTablet:pt-28">
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_dark_planet}
          alt="planet"
          className="absolute right-0 -top-[350px] z-10 w-20 desktop:w-auto"
        />
      </div>
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_right_dots}
          alt="dots"
          className="absolute right-0 -top-[350px] w-20 desktop:w-auto"
        />
      </div>
      <p className="text-center text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl font-bold">
        Enhanced Capital Efficiency
      </p>
      <div className="flex justify-center">
        <p className="text-xs bigTablet:text-base bigDesktop:text-xl z-10 text-center mt-2 bigTablet:mt-5 font-light px-3 bigTablet:px-0 bigTablet:w-3/4">
          Achieving a 20% boost in capital efficiency safely with the
          introduction of lending yield, minimizing compounded impermanent loss
          risk
        </p>
      </div>
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_left_dots}
          alt="dots"
          className="absolute left-0 -top-[350px] w-20 desktop:w-auto"
        />
      </div>
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_dark_planet_2}
          alt="planet"
          className="absolute left-0 -top-[150px] w-20 desktop:w-auto"
        />
      </div>
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_setting}
          alt="settings"
          className="absolute left-0 top-[150px] w-20 desktop:w-auto"
        />
      </div>
      <div className="relative hidden tablet:block blinking">
        <img
          src={capital_efficiency_dark_planet_3}
          alt="settings"
          className="absolute right-0 top-[620px] w-20 desktop:w-auto"
        />
      </div>
      <div className="relative hidden desktop:block blinking">
        <img
          src={capital_efficiency_shadow}
          alt="settings"
          className="absolute right-0 top-[450px] w-20 desktop:w-auto"
        />
      </div>
      <div className="grid midDestop:grid-cols-2 gap-10 mt-5 myContainer !pb-0">
        <div className="bg-themeGray-800 rounded-2xl bigTablet:pt-10 z-10">
          <p className="text-center text-xl tablet:text-2xl bigTablet:text-3xl font-bold">
            Uniswap V2 one year <br /> asset utilization
          </p>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1200"
            className="mt-10 !text-black hidden midDestop:block midDestop:h-[330px] desktop:h-[350px]"
          >
            <PieChart
              data={uniswap_v2_data}
              colors={["#D591FF", "#91FFBB", "#919CFF"]}
              fontSize={16}
            />
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1200"
            className="mt-10 !text-black h-[240px] block midDestop:hidden"
          >
            <PieChart
              data={uniswap_v2_data}
              colors={["#D591FF", "#91FFBB", "#919CFF"]}
              fontSize={12}
            />
          </div>
        </div>
        <div className="bg-themeGray-800 rounded-2xl bigTablet:pt-10 z-10">
          <p className="text-center text-xl tablet:text-2xl bigTablet:text-3xl font-bold">
            <span className="text-gradient">Element DLEX</span> one year <br />{" "}
            asset utilization
          </p>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1200"
            className="mt-10 !text-black hidden midDestop:block midDestop:h-[330px] desktop:h-[350px]"
          >
            <PieChart
              data={element_data}
              colors={["#9EA9FF", "#91FFBB", "#91FFBB", "#91FFBB", "#D591FF"]}
              fontSize={16}
            />
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1200"
            className="mt-10 !text-black h-[240px] block midDestop:hidden"
          >
            <PieChart
              data={element_data}
              colors={["#9EA9FF", "#91FFBB", "#91FFBB", "#91FFBB", "#D591FF"]}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
