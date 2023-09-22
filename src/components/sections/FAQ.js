import React from "react";
import faqGuy from "public/images/faq_guy.png";
import Image from "next/image";
import grayStar from "public/gray_star.svg";
import purpleStar from "public/purple_star.svg";
import whiteStar from "public/white_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";
import Accordian from "../Accordian";

export default function FAQ() {
  return (
    <section className="min-h-screen    pb-16 lg:py-10 2xl:py-20 flex flex-col-reverse lg:flex-row-reverse lg:items-center  lg:-10  relative overflow-hidden  border-b border-b-[#ffffff18] overflow-x-hidden">
      <div
        data-aos="zoom-out"
        data-aos-delay="100"
        className="bg-ble-500  h-1/2 container mx-auto flex items-center lg:h-full lg:w-1/2 justify-center relative "
      >
        <div className=" bg-green300 lg:h-[100vh] pt-10 px-4  ">
          <Image
            src={faqGuy}
            width={700}
            height={700}
            alt="Judges"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
          />
        </div>
        <div className="absolute  top-14 left-[45%] w-3 lg:w-5 lg:right-96 lg:top-20">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute  top-[43%] left-[23%] w-2 lg:w-5 lg:left-48 lg:top-[30%]">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute  top-[60%] left-[10%] w-2.5 lg:w-6 lg:right-[40%] lg:top-[60%]">
          <Star s={grayStar} h={32} w={26} />
        </div>
        <div className="absolute  -bottom-[2%] right-[22%] w-4 lg:w-5 lg:right-[25%] lg:bottom-[0%]">
          <Star s={whiteStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-rd-300 h-1/2 relative mt-4 lg:h-full lg:w-1/2 lg:flex flex-col lg:items-center justify-center lg:px-20  pt-10 pb-10">
        <h2
          data-aos="flip-up"
          data-aos-delay="100"
          className="clash text-xl lg:text-[32px] lg:w-10/12 lg:px-7 font-bold text-center place-self-center lg:text-start lg:place-self-start bg-green-00"
        >
          <span className="block">Frequently Asked </span>
          <span className="text-purple block lg:mt-4">Question</span>
        </h2>
        <div className=" lg:mt-5 flex flex-col w-fll lg:items-start">
          <div className="mt-3 lg:w-11/12 md:flex justify-center bggreen-300 place-self-center   px-8 lg:px-0">
            <p className="text-center md:w-2/3 lg:w-full  bg-ed-600 text-xs  lg:px-1 2xl:px-0 leading-[27.5px] lg:text-start lg:text-sm">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </p>
          </div>
          <div className="w-full px-7 mt-10 flex flex-col space-y-4">
            <Accordian
              question={
                "Can I work on a project I started before the hackathon?"
              }
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores. "
              }
            />
            <Accordian
              question={"What happens if I need help during the hackathon?"}
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores."
              }
            />
            <Accordian
              question={"What happens if I don't have an idea for a project?"}
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores. Lorem ipsum  dolor sit amet consectetur, adipisicing elit.Ratione, asperiores."
              }
            />
            <Accordian
              question={"Can I join a team or do I have to come with one?"}
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores."
              }
            />
            <Accordian
              question={"What happens after the hackathon ends"}
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores."
              }
            />
            <Accordian
              question={"What happens after the hackathon ends"}
              answer={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Ratione, asperiores."
              }
            />
          </div>
        </div>
        <div className="absolute left-10 top-6 w-4 lg:-top-[5%] lg:left-[10%] lg:w-7">
          <Star s={blueStar} h={32} w={26} />
        </div>
      </div>
    </section>
  );
}
