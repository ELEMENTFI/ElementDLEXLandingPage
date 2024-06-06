import React, { useEffect, useState } from "react";
import {
  amm_puzzle,
  lending_puzzle,
  lending_result,
  oracle_puzzle,
} from "assets/images/images";
import "./animation.css";

export const Animation = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 1700);
  });
  return (
    <div>
      <div
        className={`${
          isVisible ? "lending_result_appears" : "lending_result_disappears"
        } relative z-10`}
      >
        <div className="absolute z-10 w-64 left-7 top-2 lending_result">
          <div className="absolute w-full h-full flex justify-center items-center">
            <p className="text-center font-semibold">
              Oracle Free <br /> Lending
            </p>
          </div>
          <img src={lending_result} alt="free_landing" className="" />
        </div>
      </div>
      <img
        src={oracle_puzzle}
        alt="oracle"
        className={`${
          isVisible ? "oracle_puzzle_close" : "oracle_puzzle_open"
        } w-60 relative left-8`}
      />
      <div className="relative">
        <img
          src={lending_puzzle}
          alt="lending"
          className={`${
            isVisible ? "lending_puzzle_close" : "lending_puzzle_open"
          } absolute w-60`}
        />
      </div>
      <div className="relative">
        <div
          className={`${
            isVisible ? "amm_puzzle_close" : "amm_puzzle_open"
          } absolute w-[165px]`}
        >
          <div className="absolute top-24 left-14">
            <p className="text-[#0C0C0E] font-bold text-lg">AMM</p>
          </div>
          <img src={amm_puzzle} alt="amm" />
        </div>
      </div>
    </div>
  );
};
