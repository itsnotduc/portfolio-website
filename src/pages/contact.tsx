"use client";
import React from 'react'
import SectionHeading from '@/components/common/section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '../../context/hooks'
import { motion } from 'framer-motion'
export default function Contact() {
    const { ref } = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    }}
    viewport={{
        once: true
    }}>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-5'>Contact me directly at <a className='underline' href='mailto:ndmd2110@gmail.com'>ndmd2110@gmail.com</a>{" "} through this form.</p>
        <form className='mt-10 flex flex-col'>
            <input type='email' className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your Email'/>
            <textarea placeholder='Your message' className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'></textarea>
            <button type='submit' className='gap-2 flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all group '>Send <FaPaperPlane className=' group-hover:translate-x-2 group-hover:-translate-y-1 text-sx-opacity-70 transition-all hover:scale-120 active:scale-100 hover:bg-gray-950 duration-500'/></button>
        </form>
    </motion.section>
  )
}
