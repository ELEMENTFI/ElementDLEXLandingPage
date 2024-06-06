import { included_green } from "assets/icons/icons";
import { lending_exchange } from "assets/images/images";

export const Independence = () => {
  return (
    <div className="myContainer -mt-40" data-aos="fade-up">
      <div className="grid midDestop:grid-cols-2 mt-20 gap-10 bg-themeGray-800 rounded-2xl px-5 py-5 bigTablet:px-14 bigTablet:py-14 z-10">
        <div className="pr-5">
          <p className="tablet:text-2xl bigTablet:text-3xl font-bold">
            Independence
          </p>
          <div className="flex flex-col gap-5 mt-5 bigTablet:mt-8">
            {[
              "Short any asset",
              "Enables earning yield on less common liabilities",
              "Creating pools without requiring an oracle for permission",
              "Carefully crafted to operate effectively in illiquid markets, devoid of arbitrage opportunities",
            ].map((value, index) => {
              return (
                <div key={index} className="flex items-start gap-3">
                  <img
                    src={included_green}
                    alt="check"
                    className="w-5 bigTablet:w-auto"
                  />
                  <p className="text-sm bigTablet:text-lg">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
        <img
        data-aos="zoom-in-left"
        data-aos-duration="1200"
        src={lending_exchange} alt="exchange" width={350} />
      </div>
    </div>
  );
};
