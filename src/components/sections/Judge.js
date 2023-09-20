import React from "react";
import judges from "public/images/judging_illustration.png";
import Image from "next/image";
import grayStar from "public/gray_star.svg";
import purpleStar from "public/purple_star.svg";
import whiteStar from "public/white_star.svg";
import Star from "../Star";
import Glow from "../Glow";
import KeyAttribute from "../KeyAttribute";
import Button from "../Button";

export default function Judge() {
  return (
    <section className="min-h-screen    pb-12 lg:py-10 2xl:py-20 flex flex-col lg:flex-row lg:items-center  lg:-10  relative overflow-hidden  border-b border-b-[#ffffff18] ">
      <div className="bg-ble-500  h-1/2 container mx-auto flex items-center lg:h-full lg:w-1/2 justify-center relative">
        <div
          data-aos="fade-right"
          data-aos-delay="500"
          className=" bg-green300 lg:h-[70vh] pt-10 px-4  "
        >
          <Image
            src={judges}
            width={700}
            height={700}
            alt="Judges"
            // onClick={handleImageClick}
            className=" object-center h-full place-self-end w-fit inline-block bg-re-300 object-contain "
          />
        </div>
        <div className="absolute  top-6 w-4 lg:w-6 lg:left-72 lg:-top-20">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute  bottom-36 right-40 w-3 lg:w-5 lg:right-[40%] lg:top-28">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-red300 h-1/2 relative mt-4 lg:h-full lg:w-1/2 lg:flex flex-col items-center justify-center lg:items-start pb-10">
        <h2 className="clash text-xl lg:text-[32px] lg:w-9/12 font-bold text-center place-self-center lg:text-start lg:place-self-start bg-green300">
          <span className="block">Judging Criteria </span>
          <span className="text-purple block lg:mt-4">Key attributes</span>
        </h2>
        <div className="bg-blu300 lg:mt-5 flex flex-col w-fll lg:items-start">
          <KeyAttribute
            topic={"Innovation and Creativity: "}
            content={
              "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."
            }
          />
          <KeyAttribute
            topic={"Functionality: "}
            content={
              "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
            }
          />
          <KeyAttribute
            topic={"Impact and Relevance: "}
            content={
              "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits."
            }
          />
          <KeyAttribute
            topic={"Technical Complexity: "}
            content={
              "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
            }
          />
          <KeyAttribute
            topic={"Adherence to Hackathon Rules: "}
            content={
              "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
            }
          />
          <div
            data-aos="flip-down"
            data-aos-delay="100"
            className="flex justify-center mt-6 lg:mt-10 lg:justify-start  bg-gren-300 lg:place-self-start place-self-center"
          >
            <button className="btn--small lg:hidden primary-bg text-xs">
              Read More
            </button>
            <button className="btn primary-bg hidden lg:block text-xs">
              Read More
            </button>
          </div>
        </div>
        <div className="absolute right-16 bottom-6 w-3 lg:bottom-[10%] lg:-left-[10%] lg:w-6">
          <Star s={whiteStar} h={32} w={26} />
        </div>
      </div>
      <div className="bg-ed-800 absolute bottom-10 -z-10 -right-48 lg:-right-[10%] lg:-bottom-[30%] ">
        <Glow />
      </div>
      <div className="bg-ed-800 absolute top-24 -z-10 -left-[10%] lg:left-[0%] lg:top-[30%] ">
        <Glow />
      </div>
      <div className="bg-ed-800 absolute top-24 hidden lg:block -z-10  lg:-right-[30%] lg:-top-[40%] ">
        <Glow />
      </div>
    </section>
  );
}
