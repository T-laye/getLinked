import NavBar from "@/components/NavBar";
import Head from "next/head";
import Logo from "src/components/Logo";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | getLinked` : "getLinked"}</title>
        <meta name="description" content="Service Rendering Web-App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="flex items-end bg-red-40 border-b-[1px] border-b-[#ffffff18] h-[10vh] lg:h-[12vh] py-3 ">
        <div className="container lg:px-14  bggreen-400  mx-auto flex justify-between items-center">
          
          <Logo height={120} width={120} />
          <NavBar />
        </div>
      </header>
      <main className="">{children}</main>
    </>
  );
}
