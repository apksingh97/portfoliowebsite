import React from 'react'
import { motion } from 'framer-motion'

import { fadeIn, textVariant } from '../../../utils/motion'
import { services } from '../../../constants'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../../../hoc'
const ServiceCard = ({ index, title, icon }) => {
    return (
        <>
            <Tilt className="sm:w-[250px] w-full">
                <motion.div variants={fadeIn('right', 'spring', 0.5 * index, .75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div options={{ max: 45, scale: .7, speed: 700 }}
                        className="bg-new-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                    </div>

                </motion.div>
            </Tilt>
        </>
    )
}
const About = () => {
    return (
        <section className='containerBox mt-[120px]' id='about'>
            <motion.div variants={textVariant()}>
                <p className="sectionSubText">Introduction</p>
                <h2 className='sectionHeadText'>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn('', "", 0.1, 1)}
                className="mt-4 text-new-secondary text-[17px] leading-[30px]">
                With over 5 years of experience in development, I specialize in building robust, scalable applications using React JS, Next JS, and state management tools like Redux and Zustand. I have a proven track record of delivering high-quality solutions that meet client needs and improve business performance. I am passionate about staying up-to-date with the latest technologies and continuously refining my skills. I am seeking opportunities to contribute to innovative projects where I can leverage my expertise in modern web technologies and state management to drive success. 

            </motion.p>
            <div className='mt-20 md:mt-4 flex flex-wrap gap-10 '> 
                {services.map((service, index) =>
                (
                    < ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default SectionWrapper(About, 'about')