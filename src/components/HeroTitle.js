import React from "react";
import bulb from "public/lightBulb.png";
import fire from "public/fire.png";
import chain from "public/chain.png";
import Image from "next/image";
import Button from "./Button";
// import writeup from "public/images/Title.svg";

export default function HeroTitle() {
  return (
    <div>
      <div className="clash w-full mt-10 lg:mt-0 flex flex-col lg:items-start center items-center lg:block bgpink-500">
        <h1 className="text-[32px] max-[295px]:text-[28px]  sm:text-[60px] xl:text-[80px] 2xl:text-8xl font-bold whitespace-nowrap">
          getlinked Te
          <span className="relative">
            c
            <span className="bg-blue300 h-[24px] sm:h-[56px] xl:h-[73px]  absolute  z-[90] -top-[86%] 2xl:-top-[60%] right-2 ">
              <Image
                src={bulb}
                width={700}
                height={700}
                alt="bulb"
                // onClick={handleImageClick}
                className=" object-center h-full place-self-end  inline-block bg-re-300 object-contain "
              />
            </span>
            h
          </span>
        </h1>
        <h1 className="text-[32px] max-[295px]:text-[28px] sm:text-[60px] xl:text-[80px] 2xl:text-8xl -mt-3 lg:-mt-8 2xl:mt-2 z-[90] font-bold whitespace-nowrap relative -ml-10 sm:-ml-16 lg:ml-0">
          Hackathon <span className="text-purple">1.0</span>
          <span className="bg-green300 w-8 bottom-2 sm:w-[60px] lg:h-[60px] xl:h-[86px] xl:w-[86px] 2xl:bottom-1 absolute lg:bottom-4 ">
            <Image
              src={chain}
              width={700}
              height={700}
              alt="bulb"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-full  object-contain "
            />
          </span>
          <span className="bg-green300 w-6 sm:w-[52px] lg:h-[52px] xl:h-[58px] xl:w-[58px] absolute bottom-3 ml-8 lg:bottom-6 xl:bottom-8 2xl:bottom-4 sm:ml-14 xl:ml-[85px]">
            <Image
              src={fire}
              width={700}
              height={700}
              alt="bulb"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-full  object-contain "
            />
          </span>
        </h1>
      </div>
      <div className=" xl:w-11/12 ">
        <p className="sm:text-lg 2xl:text-2xl  z-[90] lg:mb-10 text-xs text-center lg:text-start px-12 lg:p-0 mb-6">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <div className="flex justify-center lg:justify-start  ">
          <Button />
        </div>
        <div className="unica text-[48px] lg:text-[64px] mt-3 lg:mt-5 2xl:mt-20 flex space-x-2.5 justify-center lg:justify-start">
          <span>
            00<span className="text-sm">H</span>
          </span>
          <span>
            00<span className="text-sm">M</span>
          </span>
          <span>
            00<span className="text-sm">S</span>
          </span>
        </div>
      </div>
    </div>
  );
}
