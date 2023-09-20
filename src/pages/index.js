import Glow from "@/components/Glow";
import Star from "@/components/Star";
import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";
import whiteStar from "public/white_star.svg";
import grayStar from "public/gray_star.svg";

export default function Home() {
  return (
    <Layout className={``}>
      {/* HERO SECTION */}
      <div className="bg-red800 absolute hidden lg:block lg:-top-[20%] lg:left-[10%]">
        <Glow />
      </div>
      <section className="border-b relative border-b-[#ffffff18] max-h-[90vh] h-[88vh] overflow-hidden">
        <div className="bg-ed-800 absolute -top-10 -left-20 lg:hidden">
          <Glow />
        </div>
        <Hero />
        <div className="hidden lg:block absolute left-[11%] top-[8%]">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="hidden lg:block absolute right-[35%] top-[18%]">
          <Star s={grayStar} h={32} w={26} />
        </div>
        <div className="hidden lg:block absolute left-[40%] bottom-[20%]">
          <Star s={grayStar} h={32} w={26} />
        </div>
        <div className="absolute left-[11%] top-[8%]">
          <Star s={whiteStar} h={32} w={26} />
        </div>
        <div className="absolute right-[35%] top-[18%]">
          <Star s={grayStar} h={32} w={26} />
        </div>
        <div className="absolute left-[40%] bottom-[20%]">
          <Star s={grayStar} h={32} w={26} />
        </div>
      </section>
    </Layout>
  );
}
