import { Link } from "react-router-dom";
import React from "react";

const Cards = ({
  id,
  company,
  logo,
  postedAt,
  contract,
  location,
  position,
  logoBackground,
}) => {
  return (
    <Link to={`/details/${id}`}>
      {""}
      <div className="px-8 pt-[48px] pb-8 bg-white rounded-[6px] w-[350px] dark:bg-[#19202D] relative">
        <div
          style={{ backgroundColor: `${logoBackground}` }}
          className="w-[50px] h-[50px]  absolute -top-[25px] flex justify-center items-center rounded-[15px]"
        >
          <img src={logo} className="" />
        </div>
        <div className="flex gap-2">
          <span className="font-normal text-base leading-5 text-[#6e8098] ">
            {postedAt}
          </span>
          .
          <span className="font-normal text-base leading-5 text-[#6e8098] ">
            {contract}
          </span>
        </div>
        <h1 className="my-4 font-bold text-xl leading-6 dark:text-white text-[#19202D]">
          {position}
        </h1>
        <span className="font-normal text-base leading-5 text-[#6e8098]">
          {company}
        </span>
        <h3 className="font-bold text-sm leading-4 text-[#5964e0] mt-[44px] cursor-pointer">
          {location}
        </h3>
      </div>
    </Link>
  );
};

export default Cards;
