import React from "react";
import { WHiteButton } from "../../buttons";

const WorkWithUs = () => {
  return (
    <>
      <div className="w-full h-[700px]">
        <div className="bg-main w-full h-full">
          <div className="bg-secondary md:w-11/12 w-full h-full flex justify-center items-center">
            <div className="w-full md:w-2/5"></div>
            <div className="w-full md:w-2/5">
              <p className="uppercase text-white text-[12px] tracking-[2.4px] mb-8">
                Think we&apos;re a match made in word heaven?
              </p>
              <h2 className="uppercase text-white text-[50px] leading-[50px] tracking-[normal] mb-8">
                APPLY TO WORK WITH US!
              </h2>
              <p className="text-[15px] text-white font-montserrat font-normal leading-[28.5px] tracking-[0.375px] mb-8">
                It&apos;s casual, it&apos;s easy, and there are no strings
                attached (except for the ones holding up our sweatpants, because
                #TeamComfy all the way). What are you waiting for?!
              </p>
              <WHiteButton label={"Work With Us"} />
            </div>
            <div className="w-full md:w-1/5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
