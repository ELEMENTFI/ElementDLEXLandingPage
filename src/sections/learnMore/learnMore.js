import {
  docs_cover,
  roadmap_cover,
  tokenomics_cover,
} from "assets/images/images";
import "./learnMore.css";
import { right_arrow } from "assets/icons/icons";

const learnMore = [
  {
    image: tokenomics_cover,
    title: "Tokenomics",
    description:
      "For more information regarding Element DLEX tokenomics (including emissions, vesting), click here.",
  },
  {
    image: docs_cover,
    title: "Docs",
    description:
      "Our documents contain everything you need to know about Element DLEX, as well as some technical support.",
  },
  {
    image: roadmap_cover,
    title: "Roadmap",
    description:
      "For more information on progress, and to understand Element DLEX’s goals and vision, check out the roadmap.",
  },
];

export const LearnMore = () => {
  return (
    <div
      data-aos="fade-up"
      className="curved-section-learn-more myContainer !py-10 mt-10 bigDesktop:mt-28"
    >
      <p className="text-center text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl font-bold">
        Learn More
      </p>
      <div className="grid bigTablet:grid-cols-2 midDestop:grid-cols-3 gap-5 bigTablet:mt-8 mt-5">
        {learnMore.map((item, index) => {
          return (
            <div
              key={index}
              className="border border-[#453c6d] rounded-xl"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
            >
              <div className="h-[270px] bigDesktop:h-[320px]">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <p className="font-bold text-xl">{item.title}</p>
                  <img src={right_arrow} alt="click" />
                </div>
                <p className="text-themeGray-400 mt-3">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
