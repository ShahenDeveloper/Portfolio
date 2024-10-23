import React from "react";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/data";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 mx-8" id="testimonials">
      <h1 className="heading">
        My <span className="text-purple">Work experience</span>
      </h1>

      <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1  gap-10">
      {workExperience.map(({desc, id, thumbnail, title }) => (
        <Button
          key={id}
          borderRadius="1.7rem"
          duration={Math.floor(Math.random() * 10000 + 10000)}
          className="text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col items-center  p-3 py-6 md:p-5 lg:p-18 gap-3 ">
            <Image width={50} height={50} loading="eager" src={thumbnail} alt={title} className="lg:w-24 w-20" />
            <div className="lg:ms-5">
              <h1 className=" font-bold text-xl md:text-2xl ">
                {title}
              </h1>
              <p className=" text-white-100 mt-3 font-semibold">
                {desc}
              </p>
            </div>
          </div>
        </Button>
      ))}

</div>
    </div>
  );
};

export default Experience;
