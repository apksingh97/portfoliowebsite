import React from 'react'
import styles from "./Dashboard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TypeAnimation } from 'react-type-animation'
import { NavLink } from 'react-router-dom'
import pdf from '../../../assets/pdf/resume.pdf'
import portfolio from '../../../assets/img/portfolioImg.png'

const Dashboard = () => {


    return (
        <section className='dashboardSection bg-primary pt-[120px] md:pt-0 md:h-screen flex justify-center items-center' id='/#'>
            <div className="lg:container px-4 m-auto text-white h-full">
                <div className="flex flex-wrap  gap-10 h-full">
                    <div className='md:w-[59%] lg:w-[65%] flex flex-col justify-center'>
                        <p className='text-xl md:text-2xl lg:text-3xl font-semibold font-poppins'>Hello, It's Me</p>
                        <h4 className='text-4xl md:text-5xl lg:text-6xl font-bold font-primary py-1'>Amit Pratap Singh</h4>
                        <p className='text-2xl md:text-3xl font-semibold font-poppins '>I'm a <TypeAnimation className='text-mainTextColor text-2xl md:text-3xl' sequence={[' Software Engineer', 2000, ' Software Engineer', 3000]} speed={50} wrapper='span' repeat={Infinity} />
                        </p>
                        <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>With over 5 years of experience in development, I specialize in building robust, scalable applications using React JS, Next JS, and
                            state management tools like Redux and Zustand. I have a proven track record of delivering high-quality solutions that meet client needs and improve business performance. I am passionate about staying up-to-date with the latest technologies and continuously refining my skills. I am seeking opportunities to contribute to innovative projects where I can leverage my expertise in modern web technologies and state management to drive success.
                        </p>

                        <div className="buttonStyle flex-wrap flex gap-3 mt-4">
                            <NavLink to="/new-home" className="lineButtonStyle">View 3D Website</NavLink>
                            <NavLink to="/resume" className="solidButtonStyle">Go to Resume</NavLink>
                            <button className='lineButtonStyle' onClick={() => window.open(pdf)}> Download Resume</button>
                        </div>

                        {/* <div className="socialMedia flex gap-2 pt-4">
                            <div className='rounded-[50%] p-2 border border-white border-solid'>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} className='w-4 h-4 ' />
                            </div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'instagram']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'twitter']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='w-4 h-4 ' /></div>
                        </div> */}

                    </div>
                    <div className='md:w-[41%] lg:w-[35%] flex flex-1 items-center justify-center mt-[70px] md:mt-0'>
                        <div className={`${styles.newSlide} absolute z-[999]`}>

                            <img src={portfolio} alt='portfolioImg' className={`  w-[240px] translate-y-[-91px] `} />
                        </div>
                        <div className='rotate-90 drop-shadow-lg'>
                            <div className={`${styles.hex} rotate-90 drop-shadow-lg`}>

                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Dashboard