import React from "react";
import DesktopTimes from "../DesktopTimes";
import grayStar from "public/gray_star.svg";
import whiteStar from "public/white_star.svg";
import blueStar from "public/blue_star.svg";
import Star from "../Star";

export default function Timeline() {
  return (
    <section id="timeline" className="min-h-screen h-sceen py-16 hidden lg:block">
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
        <div className="mt-1">
          <div className="">
            <div className="bg-gren-300 flex items-center justify-center">
              <div className="bg-bue-400 w-1/2">
                <div
                  data-aos="fade-down"
                  data-aos-delay="100"
                  className="flex items-end flex-col pr-[86px] "
                >
                  <h3 className="text-purple text-2xl font-bold text-end">
                    {/* {topic} */}
                  </h3>
                  <p className="text-sm text-end w-4/5">
                    {/* {content} */}
                    </p>
                </div>
              </div>
              <div className="bg-lie-400 w1/3 flex flex-col items-center ">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="0"
                  className="h-14 w-14 my-3  rounded-full text-2xl font-bold flex items-center justify-center"
                >
                  {/* {number} */}
                </div>
                <div className="w-1.5 h-12 bg-purple"></div>
                <div className="w-1.5 h-12 bg-purple"></div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="100"
                className="bg-orage-400 flex w-1/2 items-center pl-[86px]"
              >
                <h3 className="text-purple text-2xl font-bold text-end">
                  {/* {date} */}
                </h3>
              </div>
            </div>
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
