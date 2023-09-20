import Image from "next/image";
import React from "react";
import logo from "public/logo.svg";
import Link from "next/link";

export default function Logo({ height, width }) {
  return (
    <Link href="/">
      <div className="w-20 lg:w-32">
        <Image
          src={logo}
          alt="getLinked"
          height={height}
          width={width}
          priority
          className="h-full w-full"
        />
      </div>
    </Link>
  );
}
