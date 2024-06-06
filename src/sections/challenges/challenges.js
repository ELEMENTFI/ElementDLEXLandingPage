import {
  approval,
  challenges_blue_planet,
  challenges_dark_planet,
  challenges_left_dots,
  challenges_light_planet,
  challenges_purple_planet,
  challenges_right_dots,
  flash_loan,
  vulnerability,
} from "assets/images/images";

const challenges = [
  {
    image: flash_loan,
    title: "Flash Loan Hurdle",
    description:
      "Flash loans, DLEX's fast-paced borrowing tool, hold immense potential. However, they're locked behind a technical wall. Understanding code and complex DLEX protocols is crucial to using them. This barrier excludes most users and hinders broader participation in the exciting world of decentralized finance.",
  },
  {
    image: approval,
    title: "Approval Overload",
    description:
      "DLEX's power comes with complexity. Switching between protocols for tasks like lending or borrowing creates friction. Multiple approvals slow things down, hindering user experience and limiting wider adoption within the DLEX ecosystem.",
  },
  {
    image: vulnerability,
    title: "Increased Vulnerability",
    description:
      "More DLEX apps (dApps) mean more security risks. Each dApp connection creates attack points for hackers. With wider dApp use, users face a growing threat landscape, demanding extra caution and vigilance to protect their DLEX assets and transactions.",
  },
];

export const Challenges = () => {
  return (
    <div>
      <div>
        <div className="relative hidden tablet:block blinking">
          <img
            src={challenges_purple_planet}
            alt="planet"
            className="absolute right-0 top-28 w-24"
          />
        </div>
        <div className="mb-5 bigTablet:mb-0 px-3 pt-10 bigTablet:pt-20">
          <p className="font-bold text-2xl bigTablet:text-3xl midDestop:text-4xl desktop:text-5xl bigDesktop:text-6xl text-center">
            Challenges of Traditional DLEX
          </p>
          <div className="mt-3 -pt-5 flex justify-center">
            <p className="text-center font-light text-sm desktop:text-base bigDesktop:text-xl px-3 tablet:px-0 w-full bigTablet:w-3/4">
              Current DLEX suffers from a complex user experience that limits
              its accessibility. Here's how Element DLEX aims to change that:
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative hidden tablet:block blinking"
        >
          <img
            src={challenges_light_planet}
            alt="planet"
            className="absolute top-96 -z-[5] w-40"
          />
        </div>
        <div className="relative hidden tablet:block blinking">
          <img
            src={challenges_blue_planet}
            alt="planet"
            className="absolute right-0 top-[1000px] -z-[5] w-40"
          />
        </div>
        <div className="relative hidden tablet:block blinking">
          <img
            src={challenges_dark_planet}
            alt="planet"
            className="absolute top-[1200px]"
          />
        </div>
        <img
          src={challenges_left_dots}
          alt="dots"
          className="absolute -z-10 blinking"
        />
        <div className="relative -z-10 blinking">
          <img
            src={challenges_right_dots}
            alt="dots"
            className="absolute top-[900px] right-0"
          />
        </div>
      </div>
      <div data-aos="fade-up" className="myContainer bigTablet:-mt-10">
        {challenges.map((challenge, index) => {
          return (
            <div
              key={index}
              className={`${
                index % 2 && "flex-row-reverse"
              } midDestop:flex items-center desktop:gap-5 midDestop:-mb-48`}
            >
              <div>
                <p className="font-bold text-xl bigTablet:text-3xl midDestop:text-4xl">
                  {challenge.title}
                </p>
                <p className="font-light text-sm desktop:text-base mt-4 leading-7">
                  {challenge.description}
                </p>
              </div>
              <img
                data-aos-duration="1200"
                data-aos="zoom-in-left"
                src={challenge.image}
                alt={challenge.title}
                width={600}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
