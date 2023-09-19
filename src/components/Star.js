import React from 'react'
import whiteStar from 'public/white_star.svg'
import purpleStar from 'public/purple_star.svg'
import grayStar from 'public/gray_star.svg'
import blueStar from 'public/blue_star.svg'
import Image from 'next/image'

export default function Star() {
  return (
    <div>
      <Image
        src={whiteStar}
        alt="getLinked"
        height={10}
        width={10}
        priority
      />
    </div>
  );
}
