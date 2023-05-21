import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../components/Cards";


const Home = () => {
  const [more, setMore] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:3000/jobs");
    const data = await res.json();
    if (res.status === 200) {
      setJobs(data);
    }
  };
  const handleMore = () => {
    setMore(more === true ? false : true);
  };
  console.log(jobs);
  return (
    <div className=" pt-[97px] pb-[62px] md:pt-[145px] md:pb-[100px] bg-[#f2f2f2] dark:bg-[#121721]">
      <div className="container mx-auto">
        <div className="grid gap-[49px] md:gap-x-[11px] md:gap-y-[49px] lg:gap-x-[30px] lg:gap-y-[65px]  md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {jobs.length > 0 &&
            more &&
            jobs.map((job) => <Cards key={job.id} {...job}></Cards>)}
          {jobs.length > 0 &&
            !more &&
            jobs
              .slice(0, 3)
              .map((job) => <Cards key={job.id} {...job}></Cards>)}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleMore}
            className=" px-[30px] py-4 bg-[#5964E0] hover:bg-[#939BF4] rounded-[5px] font-bold text-base leading-5 text-center text-white  mt-[72px]"
          >
            {more ? "Hidden More" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
