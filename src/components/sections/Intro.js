import React from "react";
import bigIdea from "public/images/big idea mobile.png";
import bigIdeaDesktop from "public/images/The big idea.png";
import Image from "next/image";
import primaryStar from "public/primaryStar.svg";
import purpleStar from "public/purple_star.svg";
import Star from "../Star";
import Glow from "../Glow";

export default function Intro() {
  return (
    <section className="min-h-screen h-screen lg:min-h-[60vh] lg:h-[60vh] pb-20 lg:py-10 2xl:py-20 flex flex-col lg:flex-row lg:items-center px- lg:-10  relative overflow-hidden  border-b border-b-[#ffffff18] ">
      <div className="bg-ble-500 h-1/2 py-8 container mx-auto flex items-center lg:h-full lg:w-1/2 justify-center relative">
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className="  h-full lg:hidden "
        >
          <Image
            src={bigIdea}
            width={700}
            height={700}
            alt="Hack Guy"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="700"
          className="  h-full b-green-300 hidden lg:block"
        >
          <Image
            src={bigIdeaDesktop}
            width={700}
            height={700}
            alt="Hack Guy"
            // onClick={handleImageClick}
            className=" object-center h-full  place-self-end w-full block bg-re-300 object-contain "
          />
        </div>
        <div className="absolute left-4 top-36 w-3 lg:w-4 lg:left-32 lg:top-28">
          <Star s={primaryStar} h={32} w={26} />
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="10"
        className="bg-red300 h-1/2 relative py-4 lg:h-full lg:w-1/2 lg:flex flex-col  justify-center"
      >
        <h2 className="clash text-xl lg:text-[32px] lg:w-9/12 font-bold text-center place-self-center lg:text-start bg-green300">
          <span className="block">Introduction to getlinked tech</span>
          <span className="text-purple block lg:mt-4">tech Hackathon 1.0</span>
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
        <div className="absolute right-5 top-6 w-2 lg:top-20 lg:right-20 lg:w-6">
          <Star s={purpleStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-ed-800 absolute lg:hidden -bottom-[220px] -left-12 ">
        <Glow />
      </div>
    </section>
  );
}