import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "../../context/active-section-context";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "../components/common/theme-switch.tsx";
import ThemeContextProvider from "../../context/theme-context";
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
      <ThemeContextProvider>
        <div className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50`}>
          <div className="bg-[#ffbfc1] dark:bg-[#cc6723] dark:-right-[60rem] z-0 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem]"></div>
          <div className="bg-[#faeab6] dark:bg-[#bb2a2a] z-0 absolute top-[-1rem] right-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
          <ActiveSectionContextProvider>
            <Navbar />
            <main className="flex-grow z-10 relative">
              <Component {...pageProps} />
            </main>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
