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

export default function Hero() {
  return (
    // <div className="container  mx-auto lg:pl-14  bg-red400  ">
    //   <div className="text-center lg:text-end mt-6 mb-7">
    //     <p className="italic font-bold text-base  lg:text-[26px]">
    //       Igniting a Revolution in{" "}
    //       <span className="relative">
    //         HR Innovation{" "}
    //         <span className="absolute -bottom-3 right-1">
    //           {" "}
    //           <Curved />
    //         </span>{" "}
    //       </span>
    //     </p>
    //   </div>

    //   <div className="flex h-full items-end ">
    //     <div className="bg-red-00 absolute z-30 -top-10 -right-[120px]">
    //       <Glow />
    //     </div>
    //     <div className="hidden w-[45%] bg-blu-300 absolute lg:flex flex-col z-50  left-[7%] top-[14%]  justify-end ">
    //       <Image
    //         src={writeup}
    //         width={700}
    //         height={700}
    //         alt="Hack Guy"
    //         // onClick={handleImageClick}
    //         className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
    //       />
    //       <div className="text-xl max-w-[720px] place-self-end flex flex-col bg-rd-300 mt-2 px-1">
    //         <p className="w-4/5">
    //           Participate in getlinked tech Hackathon 2023 stand a chance to win
    //           a Big prize
    //         </p>
    //         <div className="mt-8">
    //           <Button />
    //         </div>
    //       </div>
    //       <div className="unica text-[64px] mt-6">
    //         <span>
    //           00<span className="text-sm">H</span>
    //         </span>{" "}
    //         <span>
    //           00<span className="text-sm">M</span>
    //         </span>{" "}
    //         <span>
    //           00<span className="text-sm">S</span>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="hidden lg:block lg:w-1/2 lg:h-[95%]">
    //       <div className="globe animate-pulse mix-blend-hard-light h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 flex justify-end ">
    //         <Image
    //           src={globe}
    //           width={700}
    //           height={700}
    //           alt="Hack Guy"
    //           // onClick={handleImageClick}
    //           className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
    //         />
    //       </div>
    //       <div
    //         style={{
    //           filter: "grayscale(100%)",
    //         }}
    //         className=" h-[88%] bg-blue300 absolute  z-10  right-0 flex  justify-end  "
    //       >
    //         <Image
    //           src={hackGuy}
    //           width={700}
    //           height={700}
    //           alt="Hack Guy"
    //           // onClick={handleImageClick}
    //           className=" object-center h-full place-self-end w-fit inline-block object-contain filter-grayscale"
    //         />
    //       </div>
    //       <div className=" h-[85%] bg-blue300 absolute  z-0  right-0 flex justify-end ">
    //         <Image
    //           src={metric}
    //           width={700}
    //           height={700}
    //           alt="Hack Guy"
    //           // onClick={handleImageClick}
    //           className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="h-[vh] max-h-[92vh] lg:h-[87vh] lg:min-h-[87vh] relative border-b border-b-[#ffffff18] overflow-hidden">
      <div className="text-center lg:text-end mt-6 mb-7 lg:px-14">
        <p className="italic font-bold text-base lg:text-2xl xl:text-4xl 2xl:text-5xl">
          Igniting a Revolution in
          <span className="relative">
            HR Innovation
            <span className="absolute -bottom-3 right-1">
              <Curved />
            </span>
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row h-full container mx-auto lg:px-10">
        <div className="bg-red600 w-full lg:w-1/2 h-fit lg:h-full flex items-center justify-center lg:pb-16">
          <HeroTitle />
        </div>

        {/* Mobile Image */}
        <div className="bg-blue400 max-w[600px] w-[100vw] lg:w-1/2 lg:h-full min-h-[50%] relative flex justify-center">
          <div
            style={{
              filter: "grayscale(100%)",
            }}
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
          <div className="globe animate-pulse mix-blend-hard-light h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 top-0 lg:hidden flex justify-end ">
            <Image
              src={globe}
              width={700}
              height={700}
              alt="Hack Guy"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
            />
          </div>
          <div className="bg-ed-800 absolute lg:hidden -top-20 -right-20  lg:-top-[15%] lg:left-[15%]">
            <Glow />
          </div>
        </div>
      </div>
      {/* Desktop Image */}
      <div
        style={{
          filter: "grayscale(100%)",
        }}
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
      <div className="globe hidden animate-pulse mix-blend-hard-light h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 bottom-0 lg:flex justify-end ">
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
      <div className="bg-red-00 absolute opacity-50  -z-10  top-1 -left-10 lg:-top-20 lg:-right-[150px]">
        <Glow />
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
