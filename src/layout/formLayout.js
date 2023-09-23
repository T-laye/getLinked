import NavBar from "@/components/NavBar";
import Head from "next/head";
import Logo from "src/components/Logo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormLayout({ title, children }) {
  const customToastStyle = {
    backgroundColor: "#150E28",
    color: "#fff",
  };

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
      <ToastContainer closeOnClick pauseOnHover toastStyle={customToastStyle} />
      <main className="overflow-hidden">{children}</main>
    </>
  );
}
