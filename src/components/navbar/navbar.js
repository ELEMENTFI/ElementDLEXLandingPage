import { useEffect, useState } from "react";
import { cross, mail, menu, paper, twitter } from "assets/icons/icons";
import { logo } from "assets/images/images";
import { ThemeButton } from "components/components";
import "./navbar.css";

const MobNavNar = ({ scrollY }) => {
  const [showOptions, setShowOptions] = useState("headerClose");
  const handleOptions = () => {
    if (showOptions === "headerClose") {
      setShowOptions("headerOpen");
    } else {
      setShowOptions("headerClose");
    }
  };
  return (
    <div
      className={`${
        scrollY > 50 || (showOptions === "headerOpen" && "bg-themeBlack")
      } block bigTablet:hidden z-30`}
    >
      <div className="flex justify-between items-center myContainer">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" width={50} />
          <p className="text-white font-bold text-xl tablet:text-2xl">
            ELEMENT
          </p>
        </div>
        <img
          src={showOptions === "headerOpen" ? cross : menu}
          className="cursor-pointer"
          onClick={handleOptions}
          alt="icon"
          width={30}
        />
      </div>
      <div
        className={`${showOptions} absolute flex flex-col items-center justify-center w-full gap-4 bg-themeBlack overflow-hidden`}
      >
        <a href="https://t.me/ElementDeFi" target="_blank" rel="noreferrer">
          <img src={paper} alt="paper" />
        </a>
        <a href="https://t.me/ElementDeFi" target="_blank" rel="noreferrer">
          <img src={mail} alt="mail" />
        </a>
        <a
          href="https://twitter.com/ElementDeFi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <ThemeButton text={"Launch App"} /> {/*mobile*/}
      </div>
    </div>
  );
};

export const Navbar = ({ isOpen }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <MobNavNar scrollY={scrollY} />
      <div
        className={`${
          scrollY > 50 && "bg-themeBlack"
        } myContainer !px-10 hidden bigTablet:flex z-10 items-center justify-between`}
      >
        {isOpen ? (
          <div></div>
        ) : (
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" />
            <p className="text-white font-bold text-2xl">ELEMENT</p>
          </div>
        )}
        <div className="flex items-center gap-3 h-16">
          <a href="https://t.me/ElementDeFi" target="_blank" rel="noreferrer">
            <img src={paper} alt="paper" width={40} />
          </a>
          <a href="https://t.me/ElementDeFi" target="_blank" rel="noreferrer">
            <img src={mail} alt="mail" width={40} />
          </a>
          <a
            href="https://twitter.com/ElementDeFi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" width={40} />
          </a>
          <ThemeButton text={"Launch App"} />
        </div>
      </div>
    </>
  );
};
