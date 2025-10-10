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
                I’m a Full Stack Developer with 4 years of professional experience building fast, responsive, and user-centric web applications. My core strength lies in front-end development, where I specialize in crafting clean, modular UI components and scalable architectures using React.js, Next.js, and modern JavaScript (ES6+).
                <br /> <br />
                In addition to my front-end expertise, I’m actively building my back-end skill set, with hands-on experience in Node.js, Java, and Struts. I'm focused on becoming a well-rounded developer capable of owning features end-to-end—from database to browser.
                <br /> <br />
                Passionate about the evolving web landscape, I'm currently exploring the integration of AI-powered features into modern web apps—aiming to create smarter, more dynamic, and personalized user experiences.


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