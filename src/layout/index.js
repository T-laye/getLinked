import Glow from "@/components/Glow";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import { useEffect, useState } from "react";
import Logo from "src/components/Logo";

export default function Layout({ title, children }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    <>
      <Head>
        <title>{title ? `${title} | getLinked` : "getLinked"}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header
        className={`flex lg:items-end bg-red-40 border-b-[1px] border-b-[#ffffff18] h-[8vh] lg:h-[12vh] lg:py-3 fixed w-full p-4 transition-transform ${
          visible
            ? "top-0 transform translate-y-0 scrolling-header lg:overflow-hidden"
            : "-top-full transform -translate-y-full "
        }`}
      >
        <div className="container px-8 lg:px-10  bggreen-400  mx-auto flex justify-between items-center relative">
          <Logo height={120} width={120} />
          <NavBar />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light hidden lg:block  absolute -top-24 left-40  -z-10">
          <Glow />
        </div>
      </header>
      {/* <div className="container px-8 lg:px-10  bggreen-400  mx-auto flex justify-between items-center relative">
          <Logo height={120} width={120} />
          <NavBar />
        </div>
        <div className=" mix-blend-hard-light bg-blend-hard-light hidden lg:block  absolute -top-24 left-40  -z-10">
          <Glow />
        </div>
      </header> */}
      <main className="overflow-hidden pt-16 md:pt-24 2xl:pt-36">{children}</main>
    </>
  );
}
