import Image from "next/image";
import React from "react";
import trophy from "public/images/award.png";
import silver from "public/images/silver_medal.png";
import bronze from "public/images/bronze_medal.svg";
import gold from "public/images/gold_medal.svg";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import Star from "../Star";

export default function Reward() {
  return (
    <section className="min-h-sceen bg-image overflow-hidden  pb-28 relative">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center lg:items-end">
          <h2
            // data-aos="fade-up"
            data-aos-delay=""
            className="clash text-xl lg:text-[32px] bg-green lg:w-1/2 lg:text-start font-bold text-center mt-14"
          >
            <span className="block">Prizes and </span>
            <span className="text-purple block ">Rewards</span>
          </h2>
          <div
            // data-aos="fade-up"
            data-aos-delay=""
            className="w-3/4 lg:w-1/2 flex max-lg:justify-center items-start bg-blu-900"
          >
            <p className="text-xs text-center lg:w-1/2 mt-2  lg:text-start">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row bg-geen-400 ">
          <div className="bg-ed-300 lg:w-1/2 lg:px-8">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="  h-full  lg:h-[48x] flex w-full justify-center bg-geen-300 "
            >
              <Image
                src={trophy}
                width={700}
                height={700}
                alt="trophy"
                // onClick={handleImageClick}
                className=" object-center max-lg:w-3/5 h-full place-self-end w-full inline-block bg-re-300 object-contain "
              />
            </div>
          </div>
          <div className="flex items-center bg-slat-700 lg:w-2/3  justify-center space-x-5 lg:mt-60 mt-28">
            <div
              data-aos="flip-right"
              data-aos-delay="100"
              className="border border-purple relative h-[126px] w-[91px] lg:h-[296px] lg:w-[212px]  rounded-lg shrink-0 bg-[#D434FE1F]"
            >
              <div className="  h-[77px] flex w-[76px] lg:w-[179px] lg:h-[180px] justify-center bg-geen-300 absolute left-1.5 -top-[30%] lg:left-4">
                <Image
                  src={silver}
                  width={700}
                  height={700}
                  alt="trophy"
                  // onClick={handleImageClick}
                  className=" object-center h-full  w-full  object-contain "
                />
              </div>
              <div className="flex justify-center items-center pt-6 lg:pt-16 h-full">
                <p className="text-center font-semibold text-xs lg:text-2xl">
                  <span className=" lg:text-4xl">2nd</span> <br /> Runner <br />{" "}
                  <span className="text-sm font-bold lg:text-[32px] lg:mt-4 lg:block text-center text-purple">
                    N300,000
                  </span>{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="300"
              className="border border-[#903AFF] relative h-[147px] w-[90px] lg:h-[347px] lg:w-[212px] rounded-lg shrink-0 bg-[#903aff1f]"
            >
              <div className="  h-[126px] flex w-[126px] lg:w-[296px] lg:h-[296px] justify-center bg-geen-300 absolute -right-5  -top-[50%] lg:-top-[45%] lg:-right-11">
                <Image
                  src={gold}
                  width={700}
                  height={700}
                  alt="trophy"
                  // onClick={handleImageClick}
                  className=" object-center h-full  w-fll  object-contain "
                />
              </div>
              <div className="flex justify-center items-center pt-10 lg:pt-28 h-full">
                <p className="text-center font-semibold text-xs lg:text-2xl">
                  <span className=" lg:text-4xl">1st</span> <br /> Runner <br />{" "}
                  <span className="text-sm font-bold text-center lg:mt-8 lg:block lg:text-[32px] text-royalBlue">
                    N400,000
                  </span>{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="flip-right"
              data-aos-delay="500"
              className="border border-purple relative h-[126px] w-[90px] lg:h-[296px] lg:w-[212px] rounded-lg shrink-0 bg-[#D434FE1F]"
            >
              <div className="  h-[77px] flex w-[76px] lg:w-[179px] lg:h-[180px] justify-center bg-geen-300 absolute left-1.5 -top-[30%] lg:left-4">
                <Image
                  src={bronze}
                  width={700}
                  height={700}
                  alt="trophy"
                  // onClick={handleImageClick}
                  className=" object-center h-full  w-fll  object-contain "
                />
              </div>
              <div className="flex justify-center items-center pt-6 lg:pt-16 h-full">
                <p className="text-center font-semibold text-xs lg:text-2xl">
                  <span className=" lg:text-4xl">3rd</span> <br /> Runner <br />{" "}
                  <span className="text-sm font-bold lg:text-[32px] lg:mt-4 lg:block text-center text-purple">
                    N150,000
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-14 top-10 w-2 lg:top-20 lg:left-48 lg:w-4">
        <Star s={purpleStar} h={32} w={26} />
      </div>
      <div className="absolute right-28 top-20 w-2.5 lg:top-28 lg:right-[31%] lg:w-4">
        <Star s={purpleStar} h={32} w={26} />
      </div>
      <div className="absolute left-14 bottom-96 w-3 lg:bottom-40 lg:left-64 lg:w-3">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="absolute right-16 bottom-80 w-2.5 lg:top-40 lg:right-24 lg:w-4">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="absolute right-36 bottom-10 w-2.5 lg:bottom-20 lg:right-72 lg:w-4">
        <Star s={grayStar} h={32} w={26} />
      </div>
    </section>
  );
}
