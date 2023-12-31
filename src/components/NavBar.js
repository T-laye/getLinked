import React, { useState } from "react";
import Button from "./Button";
import hamMenu from "public/icons/menu.svg";
import close from "public/icons/cancel_btn.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar({ regPage }) {
  const [openNav, setOpenNav] = useState(false);
  const { asPath } = useRouter();
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  // console.log(asPath);

  return (
    <>
      {/* Desktop Nav bar */}
      <nav className="lg:flex items-center hidden w-7/12 ">
        <ul className="flex text-base b-slate-900   justify-between w-full items-center">
          <li className="link hover:font-bold duration-300">
            <Link href="/#overview">Overview</Link>
          </li>
          <li className="link hover:font-bold duration-300">
            <Link href="/#timeline">Timeline</Link>
          </li>

          <li className="link hover:font-bold duration-300">
            <Link href="/#faq">FAQs</Link>
          </li>
          <li
            className={`${
              asPath === "/contact" ? "primary font-semibold" : ""
            } link hover:font-bold duration-300`}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <Button regPage={regPage} />
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden ">
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
            onClick={handleNav}
            className={`${
              openNav
                ? "h-screen duration-500 fixed "
                : "duration-500 h-0 absolute"
            } bg-[#150E2895]   z-[100] left-0 top-0 bottom-0 right-0`}
          >
            <div
              className={`${
                openNav
                  ? "translate-y-0 duration-500 opacity-100"
                  : "duration-500 -translate-y-full opacity-0"
              } flex flex-col  bg-darkBlue h-[55vh]   px-10 pt-10`}
            >
              <div
                onClick={handleNav}
                className=" w-[23px] place-self-end mx-4 cursor-pointer"
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
              <ul className="flex flex-col space-y-2.5 text-base mt-14 bggray-800 justify-center place-self-center  w-full items-start ">
                <li className="link hover:font-bold duration-300">
                  <Link href="/#overview">Overview</Link>
                </li>
                <li className="link hover:font-bold duration-300">
                  <Link href="/#mobileTimeline">Timeline</Link>
                </li>
                <li className="link hover:font-bold duration-300">
                  <Link href="/#faq">FAQs</Link>
                </li>
                <li
                  className={`${
                    asPath === "/contact" ? "primary font-semibold" : ""
                  } link hover:font-bold duration-300`}
                >
                  <Link href="/contact">Contact</Link>
                </li>
                <div className=" pt-4 w-full">
                  <Button />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
