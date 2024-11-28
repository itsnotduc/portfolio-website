import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '../../context/hooks';
import { useActiveSectionContext } from '../../context/active-section-context';
const inter = Inter({ subsets: ["latin"] });
  
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section  ref={ref} id="home" className={`${inter.className} flex flex-col items-center text-center scroll-mt-[100rem]`}>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}>
            <Image src="/images/avatar.jpg" alt="Avatar" width="192" height="192" quality="95" priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
          </motion.div>

          <motion.span className='absolute text-4xl bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1}} transition={{
              type: 'spring',
              stiffness: 100,
              delay: 0.3,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl w-full whitespace-pre-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Duc Nguyen.</span>{"\n"}I'm a{" "}
        <span className="font-bold">IT @ XAMK</span> ||{" "}
        <span>Coder</span> ||{" "}
        <span>Gamer</span> ||{" "}
        <span>Music Producer</span>.{"\n"}My focus is{" "}
        <span className="underline font-bold">Web Developer, Software Engineer</span>.{"\n"}
      </motion.p>
      <motion.div className='flex flex-col sm:flex-row gap-3 items-center justify-center px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <Link  onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }} href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-100 transition-all duration-500'>Contact Me Here <BsArrowRight className='group-hover:translate-x-1.5 transition'/></Link>
        <a className='group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition-all duration-500 outline-none cursor-pointer' href='../../../public/files/Nguyen_Duc_Resume.pdf' download>Download Resume <HiDownload className='group-hover:translate-y-1 transition'/></a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-105 active:scale-100 transition-all duration-500 outline-none cursor-pointer' href="https://github.com/itsnotduc"><BsLinkedin className='transition-all duration-500'/></a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.20rem] hover:scale-105 active:scale-100 transition-all duration-500 outline-none cursor-pointer' href="https://www.linkedin.com/in/duc-nguyen-24b417250/"><FaGithubSquare className='transition-all duration-500'/></a>

      </motion.div>
    </section>
  );
}
