import NavBar from "@/components/NavBar";
import Head from "next/head";
import Logo from "src/components/Logo";

export default function FormLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | getLinked` : "getLinked"}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="overflow-hidden">{children}</main>
    </>
  );
}
