import React from "react";
import sponsors from "public/images/sponsors.png";
import Image from "next/image";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";

export default function Partners() {
  return (
    <section className="min-h-sceen overflow-hidden pb-24 relative border-b border-b-[#ffffff18] ">
      <div className="container mx-auto px-8 relative">
        <div className="flex flex-col items-center">
          <h2
            // data-aos="fade-up"
            data-aos-delay=""
            className="clash text-xl lg:text-[32px] bg-green lg:w-1/2  font-bold text-center mt-10"
          >
            {" "}
            Partners and Sponsors
          </h2>
          <div
            // data-aos="fade-up"
            data-aos-delay=""
            className="w-4/5 md:w-2/5 flex items-start bg-blu-900"
          >
            <p className="text-sm text-center mt-4  ">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-14">
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="  h-full  lg:h-[48x] flex w-full justify-center bg-geen-300 lg:px-6"
          >
            <Image
              src={sponsors}
              width={900}
              height={900}
              alt="trophy"
              // onClick={handleImageClick}
              className=" object-center h-full  w-full  object-contain "
            />
          </div>
        </div>
        {/* stars */}
        <div className="absolute right-44 bottom-2 w-2 lg:bottom-20 lg:right-[45%] lg:w-4">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="absolute right-[45%] top-[65%] w-2 lg:top-72 lg:right-[43%] lg:w-4">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute left-20 top-[55%] w-2 lg:top-36 lg:left-40 lg:w-4">
          <Star s={blueStar} h={32} w={26} />
        </div>
      </div>
    </section>
  );
}
