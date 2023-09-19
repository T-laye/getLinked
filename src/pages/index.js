import Glow from "@/components/Glow";
import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";

export default function Home() {
  return (
    <Layout className={``}>
        <div className="bg-red-00 absolute -top-[18%] left-[10%]">
          <Glow />
        </div>
      <section className="border-b relative border-b-[#ffffff18] max-h-[90vh] h-[90vh] overflow-hidden">

        <Hero />
      </section>
    </Layout>
  );
}
