import React from "react";

const DetailsFooter = ({ job }) => {
  return (
    <div className="mt-[64px] bg-white dark:bg-[#19202D] py-[25px]">
      <div className="container mx-auto px-5">
        <div className="hidden md:block lg:block">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h3 className=" font-bold text-xl leading-6 dark:text-white text-[#19202D] mb-3">
                {job.position}
              </h3>
              <span className=" font-normal text-base leading-6 text-[#6e8098] dark:text-[#9DAEC2]">
                So Digital Inc.
              </span>
            </div>
            <button className="px-[30px] py-4 bg-[#5964E0] hover:bg-[#939BF4] rounded-[5px] font-bold text-base leading-5 text-center text-white">
              Apply Now
            </button>
          </div>
        </div>

        <button className="w-full px-[30px] md:hidden lg:hidden py-4 bg-[#5964E0] hover:bg-[#939BF4] rounded-[5px] font-bold text-base leading-5 text-center text-white">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default DetailsFooter;
