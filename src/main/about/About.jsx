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
                            <p className='text-2xl font-semibold font-poppins'>Full Stack Developer
                            </p>
                            <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>With 4 years of experience in web development, I specialize as a Full-Stack Developer with a strong foundation in building fast, responsive, and user-focused applications. My expertise lies in front-end technologies like React.js and Next.js, where I’ve developed clean, scalable UI components and implemented modern JavaScript (ES6+) best practices to deliver seamless user experiences.
                                <br /> <br />
                                In addition to my front-end strengths, I’ve been actively developing my back-end skills with hands-on experience in Node.js, Java, and Struts, working toward becoming a well-rounded full-stack professional capable of delivering end-to-end solutions.
                                <br /> <br />
                                I’m also passionate about the evolving landscape of web development and am currently exploring how to integrate AI-driven capabilities into full-stack applications to create more intelligent, personalized, and dynamic user experiences.
                            </p>



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