import React from "react";

export default function MobileTimes({ topic, content, date, number }) {
  return (
    <div className="mb-6 flex">
      <div className="flex flex-col space-y-1 border-l-[2px] pl-4  border-purple relative">
        <div className=" h-7 w-7 rounded-full flex flex-col justify-center items-center absolute -bottom-2 -left-[15px] -z-9 bg-darkBlue">
          <div
            data-aos="zoom-in"
            data-aos-delay="0"
            className="h-5 w-5  primary-bg rounded-full text-xs font-bold flex items-center justify-center"
          >
            {number}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="400"
          className="flex  flex-col space-y-1 "
        >
          <h3 className="text-purple text-xs font-bold ">{topic}</h3>
          <p className="text-xs ">{content}</p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex  flex-col "
        >
          <h3 className="text-purple text-xs font-bold ">{date}</h3>
        </div>
      </div>
    </div>
  );
}
