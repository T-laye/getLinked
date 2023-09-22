import React, { useState } from "react";
import Button from "./Button";
import hamMenu from "public/icons/menu.svg";
import close from "public/icons/cancel_btn.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <nav className="lg:flex items-center hidden w-7/12 ">
        <ul className="flex text-base b-slate-900  justify-between w-full items-center  bg-bue-500">
          <li>
            <Link href="/#timeline">Timeline</Link>
          </li>
          <li>
            <Link href="/#intro">Overview</Link>
          </li>
          <li>
            <a href="/#faq">FAQs</a>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
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
                <li>
                  <Link href="/#timeline">Timeline</Link>
                </li>
                <li>
                  <Link href="/#intro">Overview</Link>
                </li>
                <li>
                  <Link href="/#faq">FAQs</Link>
                </li>
                <li className="mb-7">
                  <Link href="/contact">Contact</Link>
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
