import React from 'react'
import SectionHeading from '@/components/common/section-heading'
import { motion } from 'framer-motion'
import {useSectionInView} from '../../context/hooks'
export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:100}}
        transition={{delay:1}}
        id="about">
           <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I've always had a passion for computers and have been a gamer since childhood. In my free time, I'm a <strong>bedroom producer</strong>, creating beats and uploading them on YouTube. I love playing <strong>League of Legends</strong>, making websites, and coding in <strong>C#</strong>. I also enjoy playing football (soccer) and am an avid sports fan. I watch <strong>NBA</strong> and football regularly, supporting <strong>Chelsea</strong>, and I admire <strong>Lonzo Ball</strong> and <strong>LaMelo Ball</strong>. I love listening to music, and my favorite show is <strong>Breaking Bad</strong>.
            </p>

            <p>
                When I'm not immersed in my hobbies, I enjoy exploring new technologies and continually learning. I'm always eager to enhance my skills in <strong>web development</strong> and <strong>software engineering</strong>. Currently, I'm looking for a full-time position as a <strong>software developer</strong>.
            </p>

        </motion.section>
    )
}
