import React from "react";
import glow from "public/Purple-Lens-Flare-PNG.png";
import Image from "next/image";

export default function Glow() {
  return (
    <>
      <div className=" lg:block opacity-[100%] mix-blend-hard-light">
        <Image
          src={glow}
          width={500}
          height={500}
          alt="glow"
          // onClick={handleImageClick}
          className=" object-center w-[350px] lg:w-[600px] 2xl:w-[800px]"
        />
      </div>
    </>
  );
}
