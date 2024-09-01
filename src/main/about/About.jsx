import React from 'react'
import styles from "./About.module.css"
import { Element } from 'react-scroll'
import about from '../../assets/img/about.png'
const About = () => {

    return (
        <section id="about" className='bg-primary min-h-[100vh] flex justify-center items-center mt-[70px] lg:mt-auto'>
            <Element className="element">
                <div className="lg:container px-4 m-auto text-white h-full">
                    <div className="flex flex-col md:flex-row-reverse  gap-10 h-full">
                        <div className='md:w-[59%] lg:w[70%] flex flex-col justify-center'>
                            <h4 className='text-4xl font-bold font-primary py-1'>About <span className='text-mainTextColor text-4xl'>Me</span></h4>
                            <p className='text-2xl font-semibold font-poppins'>Software Engineer
                            </p>
                            <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>With more than 5 years of expertise in building high-performance web applications using React and Next.js, we specialize in creating responsive, user-friendly interfaces and managing state with Redux. Proficient in JavaScript (ES6+), TypeScript, and modern web technologies, we are dedicated to continuous learning and innovation. Our team thrives in Agile environments, delivering exceptional user experiences through collaboration and effective problem-solving.</p>



                        </div>
                        <div className='flex flex-1 items-center justify-center'>
                            <img src={about} alt="about" className={`${styles.newSlide}`} />
                            {/* <div className={`rotate-90 drop-shadow-lg`}>
                                <div className={`${styles.hex} rotate-90 drop-shadow-lg`}></div>

                            </div> */}
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default About