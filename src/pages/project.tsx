"use client";
import { useRef } from "react";
import { projectsData } from "../lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    if (!tags) return null;

    return (
        <Link href={url || '#'} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <motion.div 
                    ref={ref} 
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }} 
                    className="mb-3 sm:mb-8 last:mb-0 cursor-pointer"
                >
                    <motion.section className='group bg-gray-100 dark:bg-gray-800/90 max-w-[45rem] border border-black/5 dark:border-white/5 overflow-hidden sm:pr-8 relative sm:h-[22rem] rounded-xl even:pl-8 hover:bg-gray-200 dark:hover:bg-gray-700/50 transition duration-200'>
                        <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]'>
                            <h3 className='text-2xl font-semibold dark:text-white'>{title}</h3>
                            <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-200'>{description}</p>
                            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                                {tags?.map((tag, index) => (
                                    <li 
                                        className="bg-black/[0.7] dark:bg-white/10 px-3 py-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-md shadow-gray-500/20 dark:shadow-gray-900/20" 
                                        key={index}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {imageUrl && (
                            <Image
                                src={imageUrl}
                                alt="Project I worked on"
                                quality={95}
                                width={500}
                                height={300}
                                className='absolute top-[130px] -right-40 w-[28.25rem] rounded-t-lg shadow-2xl shadow-black/20 dark:shadow-white/10 group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-5 group-hover:translate-y-3 group-hover:-rotate-2 transition duration-300 group-hover:scale-110 group-even:group-hover:translate-x-5 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2'
                            />
                        )}
                    </motion.section>
                </motion.div>
            </a>
        </Link>
    );
}