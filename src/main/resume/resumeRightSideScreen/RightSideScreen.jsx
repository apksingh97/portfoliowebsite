import React from 'react'
import Education from './Education'
import EmploymentHistory from './EmploymentHistory'
import Skill from './Skill'

const RightSideScreen = () => {
    return (
        <section>
            <div className='relative mb-7'>
                <h4 className='text-4 font-normal font-tertiary relative inline-block text-goldenColor uppercase tracking-[3px]'>About Me</h4>
                <p className='text-md font-light text-white/70 font-sans tracking-[1px]'>With over 5 years of experience in development, I specialize in building robust, scalable applications using React JS, Next JS, and state management tools like Redux and Zustand. I have a proven track record of delivering high-quality solutions that meet client needs and improve business performance. I am passionate about staying up-to-date with the latest technologies and continuously refining my skills. I am seeking opportunities to contribute to innovative projects where I can leverage my expertise in modern web technologies and state management to drive success. 
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