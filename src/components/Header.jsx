import React from "react";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
// import Bg from "../assets/header-bg.png";

const Header = () => {
  const [circle, setCircle] = useState(false);
  const handleMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    setCircle(circle === true ? false : true);
  };

  return (
    <div className="bakcground pt-[44px] pb-[84px]">
      <div className="container mx-auto flex justify-between items-center px-5">
        <h1 className="text-white">devjobs</h1>
        <div className="cursor-pointer flex gap-4 items-center">
          <FaSun className="text-white"></FaSun>
          <div
            onClick={handleMode}
            className="w-[48px] h-[24px] bg-white rounded-[12px] dark:bg-[#19202D]"
          >
            {!circle && (
              <div className=" w-4 h-4 bg-[#5964E0] rounded-[50%] translate-y-1 translate-x-1"></div>
            )}
            {circle && (
              <div className="  w-4 h-4 bg-[#5964E0] rounded-[50%] translate-y-1 translate-x-7"></div>
            )}
          </div>
          <FaMoon className="text-white"></FaMoon>
        </div>
      </div>
    </div>
  );
};

export default Header;
