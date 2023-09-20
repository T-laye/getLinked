import React from "react";
import Glow from "../Glow";
import Curved from "../Curved_line";
import hackGuy from "public/images/hackathon_guy.png";
import metric from "public/images/metric.png";
import globe from "public/images/glass_globe.svg";
import writeup from "public/images/Title.svg";
import Image from "next/image";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="container  mx-auto lg:pl-14  bg-red400  ">
      <div className="text-center lg:text-end mt-6 mb-7">
        <p className="italic font-bold text-base  lg:text-[26px]">
          Igniting a Revolution in{" "}
          <span className="relative">
            HR Innovation{" "}
            <span className="absolute -bottom-3 right-1">
              {" "}
              <Curved />
            </span>{" "}
          </span>
        </p>
      </div>

{/* Desktop View */}

      <div className="flex h-full items-end ">
        <div className="bg-red-00 absolute z-30 -top-10 -right-[120px]">
          <Glow />
        </div>
        <div className="hidden w-[45%] bg-blu-300 absolute lg:flex flex-col z-50  left-[7%] top-[14%]  justify-end ">
          <Image
            src={writeup}
            width={700}
            height={700}
            alt="Hack Guy"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
          />
          <div className="text-xl max-w-[720px] place-self-end flex flex-col bg-rd-300 mt-2 px-1">
            <p className="w-4/5">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="mt-8">
              <Button />
            </div>
          </div>
          <div className="unica text-[64px] mt-6">
            <span>
              00<span className="text-sm">H</span>
            </span>{" "}
            <span>
              00<span className="text-sm">M</span>
            </span>{" "}
            <span>
              00<span className="text-sm">S</span>
            </span>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:h-[95%]">
          <div className="globe animate-pulse mix-blend-hard-light h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 flex justify-end ">
            <Image
              src={globe}
              width={700}
              height={700}
              alt="Hack Guy"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
            />
          </div>
          <div
            style={{
              filter: "grayscale(100%)",
            }}
            className=" h-[88%] bg-blue300 absolute  z-10  right-0 flex  justify-end  "
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
          <div className=" h-[85%] bg-blue300 absolute  z-0  right-0 flex justify-end ">
            <Image
              src={metric}
              width={700}
              height={700}
              alt="Hack Guy"
              // onClick={handleImageClick}
              className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
