import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsFooter from "../components/DetailsFooter";

const Details = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    getJob();
  }, []);
  const getJob = async () => {
    const res = await fetch(`http://localhost:3000/jobs/${id}`);
    const data = await res.json();
    if (res.status === 200) {
      setJob(data);
    }
  };
  // console.log(job);

  return (
    <div className="bg-[#f2f2f2] dark:bg-[#121721]">
      <div className="container mx-auto">
        <div className="relative  md:w-[730px] mx-auto">
          <div className="relative md:absolute md:-top-10 text-center  bg-white dark:bg-[#19202D] pt-[49px] pb-8 flex items-center flex-col justify-center  md:flex-row md:justify-start md:w-[730px] md:h-[140px] md:mx-auto justify-items-center">
            <div
              style={{ backgroundColor: `${job.logoBackground}` }}
              className="w-[50px] h-[50px]  absolute -top-[25px] flex justify-center items-center rounded-[15px] mb-6 md:w-[140px] md:h-[140px] md:rounded-[0px_0px_0px_6px] md:top-0"
            >
              <img src={job.logo} className="" />
            </div>
            <div className="md:flex md:p-10 md:justify-between md:w-[590px] md:ml-[150px] md:items-center">
              <div>
                <h1 className="my-4 font-bold text-xl leading-6 dark:text-white text-[#19202D] md:inline">
                  {job.company}
                </h1>
                <span className="font-normal text-base leading-5 mt-3 mb-7 text-[#6e8098] block">
                  {job.company}.com
                </span>
              </div>

              <button className=" px-[30px] py-4 bg-[#5964E0] hover:bg-[#939BF4] rounded-[5px] font-bold text-base leading-5 text-center text-white">
                Company Site
              </button>
            </div>
          </div>
        </div>
        <div className=" pt-12 pb-12 md:pt-[148px] md:pb-[80px] ">
          <div className="md:w-[730px] p-12  mx-auto bg-white dark:bg-[#19202D]">
            <div className="flex gap-2">
              <span className="font-normal text-base leading-5 text-[#6e8098] ">
                {job.postedAt}
              </span>
              .
              <span className="font-normal text-base leading-5 text-[#6e8098] ">
                {job.contract}
              </span>
            </div>
            <div className="md:flex md:justify-between md:items-center">
              <div>
                <h1 className="my-4 font-bold text-xl leading-6 mt-[11px] dark:text-white text-[#19202D]">
                  {job.position}
                </h1>
                <h3 className="font-bold text-sm leading-4 text-[#5964e0] mt-[14px] cursor-pointer">
                  {job.location}
                </h3>
              </div>
              <button className=" px-[30px] py-4 bg-[#5964E0] hover:bg-[#939BF4] rounded-[5px] font-bold text-base leading-5 text-center text-white mt-[54px] md:mt-0">
                Apply Now
              </button>
            </div>
            <p className="mt-[44px] mb-[40px]  font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]">
              {job.description}
            </p>
            <span className="mb-[28px] my-4 font-bold text-xl leading-6 mt-[11px] dark:text-white text-[#19202D] ">
              requirements
            </span>
            <p className=" mt-3 mb-3 font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]">
              {job.requirements?.content}
            </p>

            {job.requirements?.items.map((j, index) => (
              <li
                key={index}
                className=" font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]"
              >
                {j}
              </li>
            ))}
            <div className="mt-5">
              <span className="mb-[28px] mt-8 my-4 font-bold text-xl leading-6 dark:text-white text-[#19202D] ">
                role
              </span>
              <p className=" mt-3 mb-3 font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]">
                {job.role?.content}
              </p>

              {job.role?.items.map((j, index) => (
                <li
                  key={index}
                  className=" font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]"
                >
                  {j}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailsFooter job={job}></DetailsFooter>
    </div>
  );
};

export default Details;
