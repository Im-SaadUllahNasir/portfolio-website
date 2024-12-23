"use client";

import React from 'react';
import SectionHeading from './seaction-heading'; // Fixed typo
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {

  const { ref } = useSectionInView("About");



 
  return (
    <motion.section ref={ref} className=" scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{ opacity:0, y:100 }}
    animate={{ opacity:1, y:0 }}
    transition={{
        delay:0.175
    }} id="about">
        <SectionHeading>About Me</SectionHeading>
        <p className=" mb-3 ">
        After graduating with a degree in <span className="font-medium">Data Science</span> from University of Engineering and Technology, Peshawar, I decided to pursue my passion for technology and data-driven solutions. I enrolled in various courses and learned <span className="font-medium">machine learning, data analysis, and data visualization</span>. <span className="italic">My favorite part of data science</span> is uncovering insights from complex datasets and building predictive models. I <span className="underline">love</span> the process of transforming raw data into actionable information. My core skills include <span className="font-medium">Python, SQL, Pandas, Plotly, Seaborn, NumPy, and TensorFlow</span>. I am also familiar with <span className="font-medium">data visualization tools</span> like <span className="font-medium">Tableau and Matplotlib</span>. I am always looking to learn new technologies and techniques. I am currently looking for a <span className="font-medium">full-time position</span> as a <span className="font-medium">Data Scientist</span> or <span className="font-medium">Data Analyst</span>.
        </p>
        <p>
        <span className="italic">When I'm not working with data</span>, I enjoy playing video games, watching movies, and spending time with my friends. I also enjoy <span className="font-medium">learning new things</span>. I am currently learning about <span className="font-medium">artificial intelligence and data ethics</span>. I'm also learning how to <span className="font-medium">improve my problem-solving skills</span> through competitive programming and challenges.
        </p>
    </motion.section>
  )
}

export default About
