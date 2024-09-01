import { motion } from 'framer-motion'
import { ComputersCanvas } from '../../components/canvas'

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>

            <div className='absolute inset-0  top-[120px]  containerBox mx-auto flex flex-row items-start gap-5'>

                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className='heading1'>Hi, I'm <span className='text-[#915eff]'>Amit</span></h1>
                    <p className="headingSubText">This is my 3D visuals, user <br />
                        interface and web application </p>
                </div>
            </div>

            <ComputersCanvas />
            <div className="absolute sm:bottom-[10px] bottom-[90px] w-full flex justify-center items-center">
                <a href="#about">

                    <div className="w-[30px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-center p-1">
                        {/* <div className=" w-3 h-3 rounded-full bg-white"></div> */}
                        <motion.div
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full  mt-[-17px] bg-white" />
                    </div>

                </a>
            </div >
        </section >
    )
}

export default Hero