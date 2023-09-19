import React from "react";
import Glow from "../Glow";
import Curved from "../Curved_line";
import hackGuy from "public/images/hackathon_guy.png";
import metric from "public/images/metric.png";
import globe from "public/images/glass_globe.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto  bg-ed-400 h-[85vh] ">
      <div className="text-end mt-6">
        <p className="italic font-bold text-[26px]">
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
      <div className="flex h-full items-end">
        <div className="bg-red-00 absolute z-30 -top-10 -right-[120px]">
          <Glow />
        </div>
        <div className="lg:w-1/2">text</div>
        <div className="lg:w-1/2 h-[95%]">
          <div className="globe animate-pulse h-[85%] bg-blue300 absolute  z-40 opacity-80 right-10 flex justify-end ">
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
