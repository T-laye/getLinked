import Glow from "@/components/Glow";
import Star from "@/components/Star";
import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";
import whiteStar from "public/white_star.svg";
import grayStar from "public/gray_star.svg";
import Intro from "@/components/sections/Intro";
import Rules from "@/components/sections/Rules";
import Judge from "@/components/sections/Judge";
import FAQ from "@/components/sections/FAQ";
import Timeline from "@/components/sections/Timeline";
import MobileTImeline from "@/components/sections/MobileTImeline";
import Reward from "@/components/sections/Reward";
import Partners from "@/components/sections/Partners";
import Privacy from "@/components/sections/Privacy";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className=" relative ">
        <div className=" mix-blend-hard-light bg-blend-hard-light lg:hidden left-0 absolute top-0  lg:-top-[30%] lg:left-[15%]">
          <Glow />
        </div>
        <Hero />
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute hidden lg:block z-10 lg:-top-[10%] lg:-right-[10%]">
          <Glow />
        </div>
      </div>

      {/* Introduction */}
      <Intro />

      {/* Rules and Guidelines */}
      <div className="relative">
        <Rules />
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute  -top-[20%] left-0 -z-10 lg:-top-[50%] lg:left-[2%]">
          <Glow />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute  -right-52 bottom-10 -z-10 lg:-bottom-[55%] lg:-right-[28%]">
          <Glow />
        </div>
      </div>

      {/* Judge */}
      <div className="relative">
        <Judge />
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute  -left-6 top-32 -z-10 lg:top-[30%] lg:-left-[4%]">
          <Glow />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute  -right-36 bottom-28 -z-10 lg:-bottom-[40%] lg:-right-[18%]">
          <Glow />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative">
        <FAQ />
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute  -right-36 bottom-28 -z-10 lg:-bottom-[40%] lg:-right-[18%]">
          <Glow />
        </div>
      </div>

      {/* Timeline sections */}
      <Timeline />
      <MobileTImeline />

      {/* Award and Prizes sections */}
      <div className="relative">
        <Reward />

        <div className=" mix-blend-hard-light bg-blend-hard-light opacity-60 absolute left-0 top-20 lg:left-10 lg:top-20 -z-9 ">
          <Glow />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute top-[50%] -right-[54%]  -z-9 lg:top-[30%] lg:-right-[30%]">
          <Glow />
        </div>
      </div>

      {/* Sponsors */}
      <div className="relative">
        <Partners />

        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute top-[40%] -right-[50%]  -z-10 lg:top-[65%] lg:-right-[25%]">
          <Glow />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute top-[10%] -left-[30%]  -z-10 lg:-top-[30%] lg:-left-[15%]">
          <Glow />
        </div>
      </div>

      <div className="relative">
        <Privacy />
        <div className=" mix-blend-hard-light bg-blend-hard-light  absolute bottom-[50%] -left-[30%]  -z-10 lg:bottom-[0%] lg:-left-[15%]">
          <Glow />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
