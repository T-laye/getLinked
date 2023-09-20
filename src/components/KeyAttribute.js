import React from "react";

export default function KeyAttribute({ topic, content }) {
  return (
    <div
      data-aos="flip-up"
      data-aos-delay="100"
      className="mt-3 lg:w-9/12 md:flex justify-center w-fit  bg-gren-300 lg:place-self-start place-self-center   px-8 lg:px-0"
    >
      <p className="text-center     bg-red300 text-sm  lg:px-0 leading-[27.5px] lg:text-start">
        <span className="text-pink font-bold">{topic}</span>
        {content}
      </p>
    </div>
  );
}
