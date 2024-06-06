import "./partners.css";

// const partners = [
//   {
//     name: "MasterMind",
//     logo: "https://www.elementswap.finance/static/media/mastermind.0ead4f95.png",
//   },
// ];

export const Partners = () => {
  return (
    <div data-aos="fade-up" className="py-10">
      <p className="text-center text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl font-bold">
        Our Partners & Investors
      </p>

      {/* If you want to make this section moveable, uncomment the line # 19 & 20 and comment out the line # 21 & 22. Also, make some duplicates of the logos' section. */}

      {/* <div className="scroll-container px-3 mt-14">
        <div className="scroll-content flex gap-20"> */}
      <div className="px-3 mt-6">
        <div className="flex items-center justify-center gap-20">
          <p className="font-semibold text-xl bigTablet:text-2xl">
            To Be Disclosed
          </p>
          {/* {partners.map((val, ind) => {
            return (
              <div key={ind} className="flex items-center gap-3">
                <img src={val.logo} alt="logo" width={50} />
                <p className="font-semibold">{val.name}</p>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};
