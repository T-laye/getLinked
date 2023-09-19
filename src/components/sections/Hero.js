import React from "react";
import Glow from "../Glow";
import Curved from "../Curved_line";

export default function Hero() {
  return (
    <div className="container mx-auto  bg-ed-400 h-[85vh] relative">
      <div className="bg-red-00 absolute -top-[130px] left-[130px]">
        <Glow />
      </div>
      <div className="bg-red-00 absolute top-[50px] -right-20">
        <Glow />
      </div>
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
      <div className="flex">
        <div className="lg:w-1/2">text</div>
        <div className="lg:w-1/2">image</div>
      </div>
    </div>
  );
}
