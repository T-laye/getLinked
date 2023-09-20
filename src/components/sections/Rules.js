import React from "react";
import ruleLady from "public/images/rule_lady.png";
import Image from "next/image";
import whiteStar from "public/white_star.svg";
import grayStar from "public/gray_star.svg";
import Star from "../Star";
import Glow from "../Glow";

export default function Rules() {
  return (
    <section className="max-h-screen h-screen lg:min-h-[60vh] lg:h-[55vh] lg:p  flex flex-col lg:flex-row-reverse lg:items-center px- lg:-10  relative overflow-hidden  border-b border-b-[#ffffff18] ">
      <div className="bg-ble-500 h-1/2 container mx-auto flex items-center lg:h-full lg:w-1/2 justify-center relative">
        <div className="  h-full flex w-full justify-center bg-geen-300 ">
          <Image
            src={ruleLady}
            width={700}
            height={700}
            alt="Hack Guy"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-full inline-block bg-re-300 object-contain "
          />
        </div>
        <div className="absolute left-8 top-54 w-3 lg:w-6 lg:-left-5 lg:bottom-20">
          <Star s={whiteStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-red300 h-1/2 relative lg:h-full lg:w-1/2 lg:flex flex-col  justify-center">
        <h2 className="clash text-xl lg:text-[32px] lg:w-9/12 font-bold text-center place-self-center lg:text-start bg-green300">
          <span className="block">Rules and </span>
          <span className="text-purple block lg:mt-4">Guidelines</span>
        </h2>
        <div className="mt-3 lg:w-9/12 md:flex justify-center bggreen-300 place-self-center   px-8 lg:px-0">
          <p className="text-center md:w-2/3 lg:w-full  bg-red300 text-sm px-2 lg:px-0 leading-[27.5px] lg:text-start">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </div>

        <div className="absolute right-10  top-10 w-4 lg:top-20 lg:right-52 lg:w-5">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
      <div className="absolute left-28 lg:hidden bottom-10 w-3 ">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="bg-ed-800 absolute -top-20 mix-blend-hard-light -z-10 lg:left-12 -left-12 ">
        <Glow />
      </div>
      <div className="bg-ed-800 absolute bottom-64 -right-36 lg:-right-80 lg:-bottom-60 -z-10">
        <Glow />
      </div>
    </section>
  );
}
