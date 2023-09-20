import React from "react";
import DesktopTimes from "../DesktopTimes";
import MobileTimes from "../MobileTimes";

export default function MobileTimeline() {
  return (
    <section className="min-h-screen h-sceen py-16 lg:hidden">
      <div className="min-h-sreen container mx-auto px-4 b-red-300 h-full">
        <div className="flex flex-col items-center">
          <h2
            data-aos="flip-up"
            data-aos-delay="100"
            className="clash text-xl lg:text-[32px] font-bold text-center  bggreen-800"
          >
            Timeline
          </h2>
          <div className="md:w-2/3 lg:w-1/3 bg-red300">
            <p className="lg:text-sm leading-6 mt-4 text-center">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <MobileTimes
            topic={"Hackathon Announcement"}
            content={
              "The getlinked tech hackathon 1.0 is formally announced to the general public and teams to get ready to register"
            }
            date={" November 18, 2023"}
            number={1}
          />
          <MobileTimes
            topic={"Teams Registration begins"}
            content={
              "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
            }
            number={2}
            date={" November 18, 2023"}
          />
          <MobileTimes
            topic={"Teams Registration ends"}
            content={
              "Interested Participants are no longer Allowed to register"
            }
            number={3}
            date={" November 18, 2023"}
          />
          <MobileTimes
            topic={"Announcement of the accepted teams and ideas"}
            content={
              "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced"
            }
            number={4}
            date={" November 18, 2023"}
          />
          <MobileTimes
            topic={"Getlinked Hackathon 1.0 Offically Begins"}
            content={
              "Accepted teams can now proceed to build their ground breaking skill driven solutions"
            }
            number={5}
            date={" November 18, 2023"}
          />
          <MobileTimes
            topic={"Demo Day"}
            content={
              "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day"
            }
            number={6}
            date={" November 18, 2023"}
          />
        </div>
      </div>
    </section>
  );
}
