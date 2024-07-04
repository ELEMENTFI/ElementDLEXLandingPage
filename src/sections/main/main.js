import { main_cover, main_pattern_image } from "assets/images/images";
import { Navbar, Sidebar } from "components/components";
import { useState } from "react";
import { Animation } from "sections/capitalEfficiency/animation";

export const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="hidden bigTablet:block absolute bg-[#0c0b11] w-60 h-60 z-10 right-0"></div>
      <div className="bigTablet:block hidden absolute -right-72 top-36 z-20 blinking">
        <img src={main_pattern_image} alt="side_pattern" />
      </div>
      <div className="relative min-h-[85vh]">
        <div className="absolute w-full">
          <div className="flex flex-col justify-center gap-4 bigTablet:gap-6 midDestop:gap-10 desktop:gap-14 h-full">
            <Navbar isOpen={isOpen} />
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-col gap-3 text-xl tablet:text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl text-center font-bold">
              <p>Making Defi Accessible</p>
              <p>
                with <span className="text-gradient">Element</span>
              </p>
            </div>
            <div className="z-20 h-80 mr-16 tablet:mr-12 flex justify-center">
              <Animation />
            </div>
            <div className="flex justify-center">
              <p className="text-center font-light text-xs bigTablet:text-base bigDesktop:text-xl px-3 tablet:px-0 w-full tablet:w-3/4 midDestop:w-3/5 desktop:w-2/5">
                The first of its kind decentralized Lending Exchange (DLEX)
                platform dedicated to optimizing capital efficiency. As a
                pioneering and innovative solution, Element revolutionizes
                lending and exchange by maximizing returns and minimizing risk
                exposure.
              </p>
            </div>
          </div>
        </div>
        <img
          src={main_cover}
          alt="cover"
          className="h-[65vh] object-cover bigTablet:h-auto tablet:object-contain blinking"
        />
      </div>
    </div>
  );
};
