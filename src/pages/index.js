import Glow from "@/components/Glow";
import Star from "@/components/Star";
import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";

export default function Home() {
  return (
    <Layout className={``}>
      <div className="bg-red-00 absolute -top-[20%] left-[10%]">
        <Glow />
      </div>
      <section className="border-b relative border-b-[#ffffff18] max-h-[90vh] h-[88vh] overflow-hidden">
        <div className="absolute left-[20%]">
          <Star />
        </div>
        <Hero />
      </section>
    </Layout>
  );
}
