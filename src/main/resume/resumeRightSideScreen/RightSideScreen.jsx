import React from 'react'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Skill from './Skill'

const RightSideScreen = () => {
    return (
        <section>
            <div className='relative mb-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>About Me</h4>
                <p className='text-md font-light text-white/70 font-sans tracking-[1px]'>I am a Front-end Developer with 4 years of hands-on experience in building responsive, high-performance web applications using React.js and Next.js. I have a strong foundation in front-end architecture, modern JavaScript practices, and creating user-focused interfaces. Additionally, I possess beginner-level knowledge of Node.js, Java and I am eager to further develop my back-end skills to grow into a more versatile full-stack developer. I am enthusiastic about leveraging AI in web development and am actively expanding my expertise in this area to bring innovative solutions to future projects.
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