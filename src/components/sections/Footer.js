import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import insta from "public/icons/mdi_instagram.svg";
import x from "public/icons/x_icon.svg";
import fb from "public/icons/fb.svg";
import linkedIn from "public/icons/linkedIn.svg";
import phone from "public/icons/phone.svg";
import location from "public/icons/location.svg";
import Image from "next/image";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";

export default function Footer() {
  return (
    <section className="bg-darkerBlue pb-10 relative ">
      <div className="container md:flex justify-between items-start mx-auto px-16 pt-12">
        <div data-aos="flip-left" className="">
          <Logo />
          <div className="mt-4 ">
            <p className="text-xs pr-4 max-w-sm leading-5">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="text-xs mt-7">
            <Link href="#">Terms of Use</Link>{" "}
            <span className="text-purple text-base">|</span>{" "}
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
        <div
          data-aos="flip-left"
          //   data-aos-delay="300"
          className="bg-red-30 mt-10 md:mt-0"
        >
          <h4 className="text-purple text-sm">Useful Links</h4>
          <div className="text-xs mt-2 flex flex-col space-y-2">
            <div>
              <Link href="/#intro">Overview</Link>
            </div>
            <div>
              <Link href="/#timeline">Timeline</Link>{" "}
            </div>
            <div>
              <Link href="/#faq">FAQs</Link>
            </div>
            <div>
              <Link href="/register">Register</Link>{" "}
            </div>
          </div>
          <div className="flex items-end space-x-3">
            <div className="text-xs text-purple">Follow us</div>
            <div className="text-xs text-purple flex space-x-3 items-center">
              <Link href="#">
                <div
                  data-aos="zoom-in"
                  // data-aos-delay="500"
                  className=""
                >
                  <Image
                    src={insta}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-6 object-contain "
                  />
                </div>
              </Link>
              <Link href="#">
                <div
                  data-aos="zoom-in"
                  // data-aos-delay="500"
                  className=""
                >
                  <Image
                    src={x}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-[21px] object-contain "
                  />
                </div>
              </Link>
              <Link href="#">
                <div
                  data-aos="zoom-in"
                  // data-aos-delay="500"
                  className=""
                >
                  <Image
                    src={fb}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-[12px] object-contain "
                  />
                </div>
              </Link>
              <Link href="#">
                <div data-aos="zoom-in" className="">
                  <Image
                    src={linkedIn}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-[24px] object-contain "
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          //   data-aos-delay="500"
          className="mt-10 md:mt-0"
        >
          <h4 className="text-purple font-semibold text-sm">Contact Us</h4>
          <div className="text-xs mt-2 flex flex-col space-y-3">
            <Link href="tel:+23467981819">
              <div className="flex space-x-3  mt-1">
                <div
                  data-aos="zoom-in"
                  // data-aos-delay="500"
                  className=""
                >
                  <Image
                    src={phone}
                    width={700}
                    height={700}
                    alt="Judges"
                    // onClick={handleImageClick}
                    className=" object-center w-[12px] object-contain "
                  />
                </div>
                <span>+234 679 81819</span>
              </div>
            </Link>

            <div className="flex mt-3 space-x-3">
              <div
                data-aos="zoom-in"
                // data-aos-delay="500"
                className=""
              >
                <Image
                  src={location}
                  width={700}
                  height={700}
                  alt="Judges"
                  // onClick={handleImageClick}
                  className=" object-center w-[12px] object-contain "
                />
              </div>
              <span className="w-24">
                27,Alara Street Yaba 100012 Lagos State
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="flip-down"
        // data-aos-delay="200"
        className="container mx-auto mt-12 bg-red0"
      >
        <p className="text-xs text-center">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>

      {/* stars */}
      <div className="absolute left-40 bottom-[10%] w-2 lg:bottom-[20%] lg:left-[50%] lg:w-4">
        <Star s={purpleStar} h={32} w={26} />
      </div>
      <div className="absolute right-[90%] top-[8%] w-2.5 lg:top-[80%] lg:right-[10%] lg:w-2">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="absolute left-80 top-[70%] w-2 lg:top-[20%] lg:left-[5%] lg:w-3">
        <Star s={whiteStar} h={32} w={26} />
      </div>
      <div className="absolute right-40 top-[40%] w-2.5 lg:top-[15%] lg:right-[25%] lg:w-4">
        <Star s={grayStar} h={32} w={26} />
      </div>
    </section>
  );
}
