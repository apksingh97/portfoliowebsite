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
                            <p className='text-[1rem] font-poppins  tracking-wide pt-4 w-[90%]'>With more than 4 years of expertise in front-end development, I'm a building fast, responsive, and user-centric web applications using React.js and Next.js. I specialize in crafting clean UI components, implementing modern JavaScript (ES6+), and architecting scalable front-end systems that deliver seamless user experiences.
                                <br /> <br />
                                While front-end is my core strength, I’m actively expanding my back-end capabilities. I have beginner-level experience with Node.js, Java and Struts and I'm eager to deepen my knowledge to evolve into a well-rounded full-stack developer.
                                <br /> <br />
                                Passionate about the future of web development, I’m currently exploring how to integrate AI-driven features into modern web apps to create more dynamic, intelligent, and personalized user experiences.
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