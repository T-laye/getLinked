import React from "react";
import glow from "public/Purple-Lens-Flare-PNG.png";
import Image from "next/image";

export default function Glow() {
  return (
    <>
      <div className="hidden lg:block opacity-[100%] mix-blend-hard-light">
        <Image
          src={glow}
          width={500}
          height={500}
          alt="glow"
          // onClick={handleImageClick}
          className=" object-center w-[600px]  "
        />
      </div>
      <div className="lg:hidden opacity-[100%] mix-blend-hard-light">
        <Image
          src={glow}
          width={500}
          height={500}
          alt="glow"
          // onClick={handleImageClick}
          className=" object-center w-[400px]  "
        />
      </div>
    </>
  );
}
