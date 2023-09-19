import Image from "next/image";
import React from "react";
import logo from "public/logo.svg";
import Link from "next/link";

export default function Logo({ height, width }) {
  return (
    <Link href="/">
      <div>
        <Image
          src={logo}
          alt="getLinked"
          height={height}
          width={width}
          priority
        />
      </div>
    </Link>
  );
}
