import React from 'react'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Skill from './Skill'

const RightSideScreen = () => {
    return (
        <section>
            <div className='relative mb-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>About Me</h4>
                <p className='text-md font-light text-white/70 font-sans tracking-[1px]'>I’m a Full Stack Developer with 4 years of professional experience building fast, responsive, and user-centric web applications. My core strength lies in front-end development, where I specialize in crafting clean, modular UI components and scalable architectures using React.js, Next.js, and modern JavaScript (ES6+).
                    <br /> <br />
                    In addition to my front-end expertise, I’m actively building my back-end skill set, with hands-on experience in Node.js, Java, and Struts. I'm focused on becoming a well-rounded developer capable of owning features end-to-end—from database to browser.
                    <br /> <br />
                    Passionate about the evolving web landscape, I'm currently exploring the integration of AI-powered features into modern web apps—aiming to create smarter, more dynamic, and personalized user experiences.

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