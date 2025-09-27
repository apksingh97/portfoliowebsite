import React from 'react'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Skill from './Skill'

const RightSideScreen = () => {
    return (
        <section>
            <div className='relative mb-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>About Me</h4>
                <p className='text-md font-light text-white/70 font-sans tracking-[1px]'>I am a Front-end Developer with 4 I’m a Front-End Developer with 4 years of hands-on experience building fast, responsive, and user-centric web applications using React.js and Next.js. I specialize in crafting clean UI components, implementing modern JavaScript (ES6+), and architecting scalable front-end systems that deliver seamless user experiences.
                    <br /> <br />
                    While front-end is my core strength, I’m actively expanding my back-end capabilities. I have beginner-level experience with Node.js, Java and Struts and I'm eager to deepen my knowledge to evolve into a well-rounded full-stack developer.
                    <br /> <br />
                    Passionate about the future of web development, I’m currently exploring how to integrate AI-driven features into modern web apps to create more dynamic, intelligent, and personalized user experiences.

                </p>
            </div>
            <div className='my-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Employment History </h4>
                <EmploymentHistory />
            </div>
            <div className="my-7">
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Skill</h4>
                <Skill />
            </div>
            <div className='my-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>Education </h4>
                <Education />
            </div>
        </section>
    )
}

export default RightSideScreen