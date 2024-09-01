import React from 'react'
import { SectionWrapper } from '../../../hoc'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { textVariant } from '../../../utils/motion'
import { experiences } from '../../../constants';
import { motion } from 'framer-motion'

const ExperiencedCard = ({ experience }) =>
(
    <VerticalTimelineElement contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #232631' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={<div className='flex justify-center items-center w-full h-full'>
            {experience.icon}
        </div>}>
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p className='text-new-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider ">{point}</li>
                ))}
            </ul>
        </div>


    </VerticalTimelineElement>
)


const Experience = () => {
    return (
        <div className='containerBox mt-20'>
            <motion.div variants={textVariant()}>
                <p className="sectionSubText">Introduction</p>
                <h2 className='sectionHeadText'>Overview</h2>
            </motion.div>

            <div className="flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperiencedCard key={index} experience={experience} />

                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default SectionWrapper(Experience, 'experience')