import React from "react";
import success from "public/images/success.png";
import Image from "next/image";
import { useRouter } from "next/router";
import whiteStar from "public/white_star.svg";
import purpleStar from "public/primaryStar.svg";
import grayStar from "public/gray_star.svg";
import blueStar from "public/blue_star.svg";
import Glow from "@/components/Glow";
import Star from "@/components/Star";
import wink from "public/images/wink_emoji.svg";

export default function SuccessMessage() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

//   const [showSuccess, setSetShowSuccess] = useState(show)

//   const handleShowSuccess = ()=>{
//     setSetShowSuccess(!showSuccess)
//   }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen bg-[#150E28ED] flex justify-center items-center">
      <div className="border border-[#D434FE] rounded-md bg-[#FFFFFF03] py-8 w-4/5 max-w-[699px] relative">
        <div className="flex justify-center px-8">
          <div
            //   data-aos="zoom-in"
            className="w-11/12 lg:w-3/5 "
          >
            <Image
              src={success}
              width={700}
              height={700}
              alt="Success"
              // onClick={handleImageClick}
              className=" object-center w-full object-contain "
            />
          </div>
        </div>
        <div className="flex justify-center flex-col items-center mt-5">
          <h4
            // data-aos="flip-left"
            className="text-base lg:text[32px] lg:w-1/3 text-center font-semibold w-2/3"
          >
            Congratulations you have successfully Registered!
          </h4>
          <p
            // data-aos="flip-right"
            className="text-xs text-center lg:w-1/2 lg:text-sm font-medium w-3/4 mt-6 leading-5"
          >
            Yes, it was easy and you did it! check your mail box for next step{" "}
            <span
              //  data-aos="fade-left"
              className="inline-block w-4"
            >
              <Image
                src={wink}
                width={700}
                height={700}
                alt="Judges"
                // onClick={handleImageClick}
                className=" object-center w-full object-contain "
              />
            </span>
          </p>
        </div>
        <div
          //   data-aos="flip-down"
          data-aos-delay="100"
          className="flex justify-center mt-4 w-full bg-gren-300 lg:mb-5  place-self-center  "
        >
          <button
            onClick={goBack}
            type="submit"
            className="btn w-4/5 primary-bg text-base flex justify-center"
          >
            Back
          </button>
        </div>

        {/* stars */}
        <div className="absolute -right-2 -top-4 w-2 lg:-top-4 lg:-right-4 lg:w-4">
          <Star s={blueStar} h={32} w={26} />
        </div>
        <div className="absolute right-10 -bottom-10 w-2.5 lg:bottom-5 lg:right-10 lg:w-4">
          <Star s={purpleStar} h={32} w={26} />
        </div>
        <div className="absolute left-8 top-[35%] w-3 lg:top-[40%] lg:left-24 lg:w-4">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
    </div>
  );
}
