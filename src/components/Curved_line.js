import React from "react";
import line from "public/images/curved_line.svg";
import Image from "next/image";

export default function Curved() {
  return (
    <span className="  ">
      <Image
        src={line}
        width={100}
        height={100}
        alt="glow"
        // onClick={handleImageClick}
        className=" object-center w-[210px]  object-cove "
      />
    </span>
  );
}
