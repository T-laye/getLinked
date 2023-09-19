import Image from 'next/image';
import React from 'react';
import logo from 'public/logo.svg';
import Link from 'next/link';

export default function Logo({ height, width }) {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          alt="getLinked"
          height={height}
          width={width}
          priority
        />
      </Link>
    </div>
  );
}
