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

export default function Home() {
  return (
    <Layout className={``}>
      <div className="bg-red800 opacit0 mix-blend-hard-light bg-blend-hard-light left-0 absolute hidden lg:block lg:-top-[15%] lg:left-[15%]">
        <Glow />
      </div>
      {/* HERO SECTION */}
      <Hero />
      {/* Intro Section */}
      <Intro />
      <Rules />
      <Judge />
      <div className="bg-red800 opacit0 mix-blend-hard-light bg-blend-hard-light left-0  hidden lg:block lg:-top-[15%] lg:left-[15%]">
        <Glow />
      </div>
      <FAQ />
      <Timeline />
      <MobileTImeline />
      <Reward />
    </Layout>
  );
}
