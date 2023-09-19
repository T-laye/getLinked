import Hero from "@/components/sections/Hero";
import Layout from "src/layout/index";

export default function Home() {
  return (
    <Layout className={``}>
      <section>
        <Hero />
      </section>
    </Layout>
  );
}
