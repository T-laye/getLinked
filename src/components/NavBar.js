import React, { useState } from "react";
import Button from "./Button";
import hamMenu from "public/icons/menu.svg";
import close from "public/icons/cancel_btn.svg";
import Image from "next/image";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
    console.log("iii");
  };

  return (
    <>
      <nav className="lg:flex items-center hidden w-7/12 ">
        <ul className="flex text-base b-slate-900  justify-between w-full items-center  bg-bue-500">
          <li>
            <a href="">Timeline</a>
          </li>
          <li>
            <a href="">Overview</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <Button />
        </ul>
      </nav>
      <nav className="lg:hidden">
        <div className=" lg:hidden ">
          <div onClick={handleNav} className=" w-[19px] cursor-pointer">
            <Image
              src={hamMenu}
              width={19}
              height={54}
              alt=" "
              // onClick={handleImageClick}
              className=" object-center w-full  object-contain "
            />
          </div>
          <div
            className={`${
              openNav ? "h-screen duration-500 " : "duration-500 h-0 "
            } bg-[#150E2895]  absolute z-[100] left-0 top-0  right-0`}
          >
            <div
              className={`${
                openNav
                  ? "translate-y-0 duration-500"
                  : "duration-500 -translate-y-full"
              } flex flex-col  bg-darkBlue h-[55vh]   px-10 pt-10`}
            >
              <div
                onClick={handleNav}
                className=" w-[23px] place-self-end mx-4"
              >
                <Image
                  src={close}
                  width={23}
                  height={23}
                  alt=" "
                  // onClick={handleImageClick}
                  className=" object-center w-full  object-contain "
                />
              </div>
              <ul className="flex flex-col text-base mt-14 bggray-800 justify-center place-self-center  w-full items-start  bg-bue-500 ">
                <li className="mb-5">
                  <a href="">Timeline</a>
                </li>
                <li className="mb-5">
                  <a href="">Overview</a>
                </li>
                <li className="mb-5">
                  <a href="">FAQs</a>
                </li>
                <li className="mb-7">
                  <a href="">Contact</a>
                </li>
                <li className="mt-">
                  <Button />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
