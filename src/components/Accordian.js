import React, { useState } from "react";

export default function Accordian({ question, answer }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      data-aos="flip-down"
      data-aos-delay="100"
      onClick={handleOpen}
      className="border-b border-b-purple pb-2"
    >
      <div className="flex items-center w-full justify-between text-xs lg:text-sm">
        <p className="w-5/6 h-fit bg-reen-500">{question}</p>
        <div className="text-2xl w-1/3 text-purple text-end">
          {open ? "-" : "+"}
        </div>
      </div>
      <div className={`${open ? "h-fit" : "h-0"} duration-150 overflow-hidden`}>
        <p
          className={`${
            open ? "translate-y-0 " : " -translate-y-full"
          } mt-1 text-sm text-purple font-semibold duration-150`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
