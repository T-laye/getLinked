import React from "react";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/purple_star.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Image from "next/image";

export default function Star({ s, h, w }) {
  return (
    <div className="w-full h-full glitter">
      <Image
        src={s}
        alt="getLinked"
        height={h}
        width={w}
        priority
        className={`w-full h-full`}
      />
    </div>
  );
}
