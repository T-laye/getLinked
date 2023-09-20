import React from "react";
import DesktopTimes from "../DesktopTimes";
import grayStar from "public/gray_star.svg";
import whiteStar from "public/white_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";

export default function Timeline() {
  return (
    <section className="min-h-screen h-sceen py-16 hidden lg:block">
      <div className="min-h-sreen container mx-auto b-red-300 h-full relative">
        <div className="flex flex-col items-center">
          <h2
            // data-aos="flip-up"
            // data-aos-delay="100"
            className="clash text-xl lg:text-[32px] font-bold text-center  bggreen-800"
          >
            Timeline
          </h2>
          <div className="lg:w-1/3 bg-red300">
            <p className="lg:text-sm leading-6 mt-4 text-center">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>
        </div>
        <div className="mt-24">
          <div className=" flex justify-end bg-emerald400 mr1 w-1/2">
            <div className="w-[5px] h-24 mx-uto bg-purple"></div>
          </div>
          <DesktopTimes
            topic={"Hackathon Announcement"}
            content={
              "The getlinked tech hackathon 1.0 is formally announced to the general public and teams to get ready to register"
            }
            date={" November 18, 2023"}
            number={1}
          />
          <DesktopTimes
            topic={"Teams Registration begins"}
            content={
              "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
            }
            number={2}
            date={" November 18, 2023"}
          />
          <DesktopTimes
            topic={"Teams Registration ends"}
            content={
              "Interested Participants are no longer Allowed to register"
            }
            number={3}
            date={" November 18, 2023"}
          />
          <DesktopTimes
            topic={"Announcement of the accepted teams and ideas"}
            content={
              "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
            }
            number={4}
            date={" November 18, 2023"}
          />
          <DesktopTimes
            topic={"Getlinked Hackathon 1.0 Offically Begins"}
            content={
              "Accepted teams can now proceed to build their ground breaking skill driven solutions"
            }
            number={5}
            date={" November 18, 2023"}
          />
          <DesktopTimes
            topic={"Demo Day"}
            content={
              "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
            }
            number={6}
            date={" November 18, 2023"}
          />
        </div>
        <div className="absolute left-60 top-48 w-5 ">
          <Star s={blueStar} h={32} w={26} />
        </div>
        <div className="absolute right-40 bottom-[46%] w-5 ">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="absolute left-10 bottom-20 w-4 ">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </div>
    </section>
  );
}
