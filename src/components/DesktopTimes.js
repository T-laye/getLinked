import React from "react";

export default function DesktopTimes({ date, topic, content, number }) {
  return (
    <>
      {number % 2 !== 0 && (
        <div className="bggray-400 mt-">
          <div className="bg-gren-300 flex items-center justify-center">
            <div className="bg-bue-400 w-1/2">
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                className="flex items-end flex-col pr-[86px] "
              >
                <h3 className="text-purple text-2xl font-bold text-end">
                  {topic}
                </h3>
                <p className="text-sm text-end w-4/5">{content}</p>
              </div>
            </div>
            <div className="bg-lie-400 w1/3 flex flex-col items-center ">
              <div className="w-1.5 h-12 bg-purple"></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="0"
                className="h-14 w-14 my-3 primary-bg rounded-full text-2xl font-bold flex items-center justify-center"
              >
                {number}
              </div>
              <div className="w-1.5 h-12 bg-purple"></div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="bg-orage-400 flex w-1/2 items-center pl-[86px]"
            >
              <h3 className="text-purple text-2xl font-bold text-end">
                {date}
              </h3>
            </div>
          </div>
        </div>
      )}
      {number % 2 === 0 && (
        <div className="bggray-400 mt-">
          <div className="bg-gren-300 flex items-center justify-center">
            <div className="bg-bue-400 w-1/2">
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                className="flex items-end flex-col pr-[86px] "
              >
                <h3 className="text-purple text-2xl font-bold text-end">
                  {date}
                </h3>
              </div>
            </div>
            <div className="bg-lie-400 w1/3 flex flex-col items-center ">
              <div className="w-1.5 h-12 bg-purple"></div>
              <div
                data-aos="zoom-in"
                data-aos-delay="0"
                className="h-14 w-14 my-3 primary-bg rounded-full text-2xl font-bold flex items-center justify-center"
              >
                {number}
              </div>
              {number !== 6 && <div className="w-1.5 h-12 bg-purple"></div>}
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="bg-orage-400 flex flex-col w-1/2 items-start pl-[86px]"
            >
              <h3 className="text-purple text-2xl font-bold text-start">
                {topic}
              </h3>
              <p className="text-sm text-start w-4/5">{content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
