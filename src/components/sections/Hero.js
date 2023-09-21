import React from "react";
import Glow from "../Glow";
import Curved from "../Curved_line";
import hackGuy from "public/images/hackathon_guy.png";
import metric from "public/images/metric.png";
import globe from "public/images/glass_globe.svg";
import writeup from "public/images/Title.svg";
import Image from "next/image";
import Button from "../Button";
import HeroTitle from "../HeroTitle";
import Star from "../Star";
import whiteStar from "public/white_star.svg";
import grayStar from "public/gray_star.svg";
import Typewriter from "typewriter-effect";
import glow from "public/Purple-Lens-Flare-PNG.png";

export default function Hero() {
  return (
    <section className="h-[vh] max-h-[92vh] lg:h-[87vh] lg:min-h-[87vh] relative border-b border-b-[#ffffff18] overflow-hidden ">
      <div className="text-center lg:text-end mt-6 mb-7 lg:px-14">
        <div
          data-aos="fade-down"
          className="italic font-bold text-base sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl relative"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Igniting a Revolution in HR Innovation")
                .callFunction(() => {})
                .pauseFor(2500)
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
          <span
            data-aos="fade-right"
            data-aos-delay="2000"
            className="absolute lg:-bottom-4 -bottom-2 right-8 lg:right-1 2xl:right-8"
          >
            <Curved />
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-full container mx-auto lg:px-10">
        <div className="bg-red600 w-full lg:w-1/2 h-fit lg:h-full flex items-center justify-center lg:pb-16">
          <HeroTitle />
        </div>

        {/* Mobile Image */}
        <div className="bg-blue400 max-w[600px] w-[100vw] lg:w-1/2 lg:h-full min-h-[50%] relative flex justify-center pt-10">
          <div
            style={{
              filter: "grayscale(100%)",
            }}
            data-aos="zoom-in"
            data-aos-delay="50"
            className="lg:hidden h-full bg-blu-300 w-full  flex  justify-center place-self-center mx-auto itemdss "
          >
            <Image
              src={hackGuy}
              width={800}
              height={800}
              alt="Hack Guy"
              // onClick={handleImageClick}
              className=" object-center h-full bg-reen-900 w-full  object-contain"
            />
          </div>
          <div
            data-aos="zoom-out"
            data-aos-delay="500"
            className="globe animate-pulse mix-blend-hard-light h-[75%] bg-blue300 absolute  z-40 opacity-80 right-8 top-11 lg:hidden flex justify-end "
          >
            <Image
              src={globe}
              width={700}
              height={700}
              alt="Hack Guy"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
            />
          </div>
          <div className="bg-ed-800 absolute  -top-12 mix-blend-hard-light bg-blend-hard-light opacity-70 -right-16  lg:-top-[15%] lg:left-[40%]">
            {/* <Glow /> */}
          </div>
        </div>
      </div>
      {/* Desktop Image */}
      <div
        style={{
          filter: "grayscale(100%)",
        }}
        data-aos="zoom-in"
        className="hidden h-[88%] bg-blue300 absolute  z-10 bottom-0 right-0 lg:flex  justify-end  "
      >
        <Image
          src={hackGuy}
          width={700}
          height={700}
          alt="Hack Guy"
          // onClick={handleImageClick}
          className=" object-center h-full place-self-end w-fit inline-block object-contain filter-grayscale"
        />
      </div>
      <div
        data-aos="zoom-out"
        data-aos-delay="500"
        className="globe hidden animate-pulse mix-blend-hard-light h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 bottom-0 lg:flex justify-end "
      >
        <Image
          src={globe}
          width={700}
          height={700}
          alt="Hack Guy"
          // onClick={handleImageClick}
          className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
        />
      </div>
      <div className=" h-[85%] bg-blue300 absolute bottom-0 z-0  right-0 hidden lg:flex justify-end ">
        <Image
          src={metric}
          width={700}
          height={700}
          alt="Hack Guy"
          // onClick={handleImageClick}
          className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
        />
      </div>
      <div className="bg-red-00 mix-blend-hard-light bg-blend-hard-light absolute hidden lg:block  z-10  -top-12 -right-32 ">
        <Glow />
      </div>
      <div className="bg-red-00 mix-blend-hard-light bg-blend-hard-light absolute lg:hidden  z-10  bottom-20 -right-10 ">
        <Glow />
      </div>
      <div className=" absolute  mix-blend-hard-light bg-blend-hard-light -z-10 lg:hidden  top-4 -left-14 ">
        <div className=" lg:block opacity-[%] mix-blend-hard-light bg-blend-hard-light">
          <Image
            src={glow}
            width={500}
            height={500}
            alt="glow"
            // onClick={handleImageClick}
            className=" object-center w-[350px] lg:w-[600px] 2xl:w-[800px]"
          />
        </div>
      </div>
      <div className="absolute lg:left-[15%] lg:w-7 lg:top-[8%] left-28 top-20 w-3">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="absolute lg:right-[35%] lg:w-7 lg:top-[18%] right-8 top-20 w-2">
        <Star s={grayStar} h={32} w={26} />
      </div>
      <div className="absolute lg:left-[40%] lg:w-7  lg:bottom-[20%] right-20 top-[275px] w-1.5">
        <Star s={grayStar} h={32} w={26} />
      </div>
    </section>
  );
}
