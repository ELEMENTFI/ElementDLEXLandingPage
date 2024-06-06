import { chat, discord, twitter_white } from "assets/icons/icons";
import "./footer.css";
import { footer_left_shadow, footer_right_shadow } from "assets/images/images";

export const Footer = () => {
  return (
    <>
      <div className="relative">
        <img
          src={footer_left_shadow}
          alt="shadow"
          className="absolute left-0 top-0"
        />
      </div>
      <div className="relative hidden midDestop:block">
        <img
          src={footer_right_shadow}
          alt="shadow"
          className="absolute right-0 top-20"
        />
      </div>
      <div className="myContainer" data-aos="fade-up">
        <div className="footer-cover border midDestop:border-r midDestop:border-l-0 midDestop:border-t-0 midDestop:border-b-0 border-white/30 rounded-2xl py-10 px-5 midDestop:px-0 midDestop:py-14 bg-[#171717] grid midDestop:grid-cols-2 gap-5 items-center">
          <div className="flex justify-center">
            <div className="hidden midDestop:flex flex-col inner-footer-shadow gap-2 font-bold text-xl tablet:text-2xl bigTablet:text-3xl midDestop:text-5xl">
              <p>Meet the</p>
              <p>worldwide</p>
              <p>community</p>
            </div>
            <div className="flex midDestop:hidden flex-col inner-footer-shadow gap-2 font-bold text-xl tablet:text-2xl bigTablet:text-3xl midDestop:text-4xl">
              <p>Meet the worldwide community</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 z-10">
            <div className="flex items-start gap-6">
              <img src={chat} alt="chat" />
              <div>
                <a
                  href="https://t.me/ElementDeFi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline bigTablet:no-underline text-xl hover:underline"
                >
                  Community chat
                </a>
                <p className="text-themeGray-400 midDestop:w-96 mt-2">
                  Ask general questions and chat with the worldwide community on
                  Telegram.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img src={twitter_white} alt="chat" />
              <div>
                <a
                  href="https://twitter.com/ElementDeFi"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline bigTablet:no-underline text-xl hover:underline"
                >
                  Twitter
                </a>
                <p className="text-themeGray-400 midDestop:w-96 midDestoptext-lg mt-2">
                  Follow @ElementDLEX to get the latest news and updates from across
                  the ecosystem.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img src={discord} alt="chat" />
              <div>
                <a
                  href="https://discord.gg/2yUzbJCYgG"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline bigTablet:no-underline text-xl hover:underline"
                >
                  Discord
                </a>
                <p className="text-themeGray-400 midDestop:w-96 midDestoptext-lg mt-2">
                  Follow @ElementDLEX to get the updates from the team.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-12 mb-6 text-themeGray-200">
          Copyright © 2024 Element DLEX
        </p>
      </div>
    </>
  );
};
