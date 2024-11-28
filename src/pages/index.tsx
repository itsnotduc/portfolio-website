import React from "react";
import Intro from "./intro";
import SectionDivider from "@/components/common/section-divider";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Contact from "./contact";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-10">
        <Intro/>
        <SectionDivider/>
        <About/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <Skills/>
        <SectionDivider/>
        <Experience/>
        <SectionDivider/>
        <Contact/>
    </main>
  );
}
