import React from "react";
import judges from "public/images/judging_illustration.png";
import Image from "next/image";
import grayStar from "public/gray_star.svg";
import purpleStar from "public/purple_star.svg";
import whiteStar from "public/white_star.svg";
import Star from "../Star";
import Glow from "../Glow";
import KeyAttribute from "../KeyAttribute";
import Button from "../Button";
import Accordian from "../Accordian";

export default function FAQ() {
  return (
    <section className="min-h-screen    pb-16 lg:py-10 2xl:py-20 flex flex-col-reverse lg:flex-row lg:items-center  lg:-10  relative overflow-hidden  border-b border-b-[#ffffff18] ">
      <div className="bg-ble-500  h-1/2 container mx-auto flex items-center lg:h-full lg:w-1/2 justify-center relative">
        <div className=" bg-green300 lg:h-[70vh] pt-10 px-4  ">
          <Image
            src={judges}
            width={700}
            height={700}
            alt="Judges"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
          />
        </div>
        <div className="absolute  top-6 w-4 lg:w-6 lg:left-72 lg:-top-20">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute  bottom-36 right-40 w-3 lg:w-5 lg:right-[40%] lg:top-28">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-red300 h-1/2 relative mt-4 lg:h-full lg:w-1/2 lg:flex flex-col items-center justify-center lg:items-start pt-10 pb-10">
        <h2 className="clash text-xl lg:text-[32px] lg:w-9/12 font-bold text-center place-self-center lg:text-start lg:place-self-start bg-green300">
          <span className="block">Frequently Asked </span>
          <span className="text-purple block lg:mt-4">Question</span>
        </h2>
        <div className=" lg:mt-5 flex flex-col w-fll lg:items-start">
          <div className="mt-3 lg:w-9/12 md:flex justify-center bggreen-300 place-self-center   px-8 lg:px-0">
            <p className="text-center md:w-2/3 lg:w-full  bg-red300 text-xs  lg:px-0 leading-[27.5px] lg:text-start">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
          </div>
          <div className="w-full px-9 mt-10">
            <Accordian />
          </div>
        </div>
        <div className="absolute right-16 bottom-6 w-3 lg:bottom-[10%] lg:-left-[10%] lg:w-6">
          <Star s={whiteStar} h={32} w={26} />
        </div>
      </div>
      {/* <div className="bg-ed-800 absolute bottom-10 -z-10 -right-48 lg:-right-[10%] lg:-bottom-[30%] ">
        <Glow />
      </div>
      <div className="bg-ed-800 absolute top-24 -z-10 -left-[10%] lg:left-[0%] lg:top-[30%] ">
        <Glow />
      </div>
      <div className="bg-ed-800 absolute top-24 hidden lg:block -z-10  lg:-right-[30%] lg:-top-[40%] ">
        <Glow />
      </div> */}
    </section>
  );
}
