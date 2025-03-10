"use client";

import React from 'react'
import SectionHeading from './seaction-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

  const Experience = () => {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

  return (
    <section  className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}  id="experience">            
        
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
                experiencesData.map((item, index) =>(
                    <React.Fragment key={index}>
                    <VerticalTimelineElement 
                    contentStyle={{
                        background: theme === 'light' ?  "#f3f4f6" :
                        "rgba( 255, 255, 255, 0.05)", 
                        boxShadow:"none",
                        border:"1px sold rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding:" 1.3rem 2rem",
                    }} 
                    contentArrowStyle={{
                        borderRight: theme === 'light' ? "0.4rem soild #9ca3af"
                        : "0.4rem solid rgba(255, 255, 255, 0.5)" ,
                    }}
                    date={item.date} 
                    icon={item.icon}
                    iconStyle={{
                        background: theme === 'light' ? "white" : "rgba(255, 255, 255, 0.15 )",
                        fontSize:"1.5rem",
                    }}>
                        <h3 className="font-semibold !mt-0" >{item.title}</h3>
                        <p>{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience
