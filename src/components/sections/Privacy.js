import React from "react";
import tick from "public/icons/list tick.svg";
import privacy from "public/images/privacy_terms.svg";
import Image from "next/image";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";

export default function Privacy() {
  return (
    <section className="min-h-screen pb-24 pt-12">
      <div className="container mx-auto lg:flex relative">
        <div className="lg:w-1/2 lg:max-w-lg lg:mt-20 mx-auto">
          <div
            // data-aos="fade-up"
            data-aos-delay="1000"
            className="bg-red300 py-4  relative  "
          >
            <h2 className="clash text-xl lg:text-[32px] lg:w-9/12 font-bold text-center place-self-center lg:text-start bg-green300">
              <span className="block">Privacy Policy and</span>
              <span className="text-purple block lg:mt-4">Terms</span>
            </h2>
            <div className=" lg:w-9/12 md:flex lg:justify-start justify-center bggreen-300 place-self-center   px-8 lg:px-0">
              <p className="text-center text-xs  text-[#ffffff75] mt-2">
                Last updated on September 12, 2023
              </p>
            </div>
            <div className="flex justify-center lg:justify-start my-6 lg:px-0 px-10">
              <p className=" md:w-1/2 text-center lg:text-start lg:w-4/5 bg-red300 text-sm  leading-[27.5px] ">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>
            </div>
          </div>
          <div className="px-12 lg:px-0">
            <div className="border border-purple w-full  rounded-md px-4 lg:px-16 shrink-0 bg-[#d9d9d903]">
              <p className="mt-10 text-center lg:text-start  bg-red300 text-sm  lg:px-0 leading-[27.5px] ">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h4 className="text-purple text-sm font-bold mt-6">
                Licensing Policy
              </h4>
              <p className="text-xs mt-1">
                Here are terms of our Standard License:
              </p>

              <div className="mt-6 flex space-x-3">
                <div className=" w-4 min-h-fit h-4">
                  <Image
                    src={tick}
                    width={700}
                    height={700}
                    alt="trophy"
                    // onClick={handleImageClick}
                    className=" object-center h-full  w-full  object-contain "
                  />
                </div>
                <p className="w-full text-xs leading-5">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="mt-6 flex space-x-3">
                <div className=" w-4 min-h-fit h-4">
                  <Image
                    src={tick}
                    width={700}
                    height={700}
                    alt="trophy"
                    // onClick={handleImageClick}
                    className=" object-center h-full  w-full  object-contain "
                  />
                </div>
                <p className="w-full text-xs leading-5">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <div className="flex justify-center mt-10 my-12">
                <button className="btn--small lg:hidden primary-bg text-xs">
                  Read More
                </button>
                <button className="btn primary-bg hidden lg:block text-xs">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 ">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className=" bg-gree-300 flex justify-center md:mt-10  w-full pt-5 px-20 2xl:px-32 "
          >
            <Image
              src={privacy}
              width={700}
              height={700}
              alt="Judges"
              // onClick={handleImageClick}
              className=" object-center lg:w-full md:w-1/2 h-full place-self-center w-full inline-block bg-re-300 object-contain "
            />
          </div>
        </div>

        {/* stars */}
        <div className="absolute right-10 top-[95%] w-5 lg:top-[75%] lg:right-[6%] lg:w-6">
          <Star s={grayStar} h={32} w={26} />
        </div>
        <div className="absolute right-72 top-[78%] w-4 lg:top-[65%] lg:right-[30%] lg:w-3">
          <Star s={blueStar} h={32} w={26} />
        </div>
        <div className="absolute right-24 top-[75%] w-2.5 lg:top-[75%] lg:right-[38%] lg:w-4">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="absolute left-5 top-[55%] w-4 lg:-bottom-[10%] lg:left-24 lg:w-6">
          <Star s={blueStar} h={32} w={26} />
        </div>
        <div className="absolute left-32 top-[98%] w-2.5 lg:top-[20%] lg:left-[90%] lg:w-2">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="absolute left-10 top-[0%] w-2.5 lg:top-[20%] lg:left-[40%] lg:w-3">
          <Star s={blueStar} h={32} w={26} />
        </div>
        <div className="absolute left-40 top-[10%] w-2.5 lg:top-[15%] lg:left-[30%] lg:w-5">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
    </section>
  );
}
