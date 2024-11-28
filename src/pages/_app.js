import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "../../context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const metadata = {
    title: "Duc Nguyen | Portfolio Website",
    description: "I am a Fullstack Developer || Software Engineer || Cloud Engineer",
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags here if needed */}
      </Head>
      <div className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:text-gray-800 dark:text-opacity-90`}>
        <div className="bg-[#ffbfc1] z-0 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem]"></div>
        <div className="bg-[#faeab6] z-0 absolute top-[-1rem] right-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Navbar />
          <main className="flex-grow z-10 relative">
            <Component {...pageProps} />
          </main>
        </ActiveSectionContextProvider>
      </div>
    </>
  );
}

export default MyApp;
