import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import weatherAppImg from "../public/images/weatherapp.png";
import hostsphereImg from "../public/images/hostsphere.png";
import kryptopapiImg from "../public/images/kryptopapi.png";
import { StaticImageData } from "next/image";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Durham College",
    location: "Oshawa, ON",
    description:
      "I graduated with 3.12 GPA in Computer Programming. I learned C++, Java, C#, SQL, HTML, CSS, JavaScript, PHP, Python, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Freelance Interpreter",
    location: "Remote",
    description:
      "I worked as a freelance interpreter for 2 years. I interpreted English to Vietnamese and vice versa. I worked with clients from the US, Canada, and Vietnam.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "XAMK University",
    location: "Mikkeli, Finland",
    description:
      "I am currently studying Software Engineering at XAMK University. I am learning React, Node.js, MongoDB, PostgreSQL, and more. Expected to graduate earlier than expected.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
] as const;

export const projectsData: readonly {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  url: string;
}[] = [
  {
    title: "Weather App",
    description:
      "Weather Forecast Website allows you to check the weather in any city. It shows the temperature, humidity, wind speed and weather condition.",
    tags: ["React", "Javascript", "Tailwind", "Vite"],
    imageUrl: weatherAppImg,
    url: "https://itsnotduc.github.io/Weather-App/",
  },
  {
    title: "HostSphere",
    description:
      "Website allows you to host websites and track statistics. It shows the number of visitors, unique visitors, bounce rate and average time on site.",
    tags: ["React", "Javascript", "Vite", "Tailwind", "MongoDB"],
    imageUrl: hostsphereImg,
    url: "https://itsnotduc.github.io/HostSphere/",
  },
  {
    title: "KryptoPapi",
    description:
      "A bot that predicts the price of cryptocurrencies. It shows the price of Bitcoin, Ethereum, Dogecoin and other cryptocurrencies. Send notifications via Telegram",
    tags: ["Python", "Flask", "Sckit-learn", "Pandas"],
    imageUrl: kryptopapiImg,
    url: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "C++",
  "Java",
  "C#",
  "Vite"
] as const;