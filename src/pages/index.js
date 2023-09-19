import Glow from "@/components/Glow";
import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";

export default function Home() {
  return (
    <Layout className={``}>
      <section className="border-b relative border-b-[#ffffff18] max-h-[85vh] h-[85vh] overflow-">
        <div className="bg-red-00 absolute -top-[31%] left-[10%]">
          <Glow />
        </div>

        <Hero />
      </section>
    </Layout>
  );
}
