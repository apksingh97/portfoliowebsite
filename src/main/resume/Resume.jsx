
import LeftSideScreen from './resumeLeftSideScreen/LeftSideScreen'
import RightSideScreen from './resumeRightSideScreen/RightSideScreen'
const Resume = () => {
    return (
        <section className=' bg-primary h-full  flex justify-center'>
            <div className="resume containerBox m-auto ">
                <div className="flex flex-wrap md:flex-nowrap gap-7 my-[40px]">
                    <div className='w-full sm:w-[70%] m-auto  md:m-0 md:w-[37%] lg:w-[27%] h-[calc(100vh-40px)] bg-[#201e1b] p-4 rounded-xl shadow-[1px_1px_9px_#2e280e] md:sticky top-[40px] flex flex-col justify-center'>
                        <LeftSideScreen />
                    </div>
                    <div className='w-full sm:w-[70%] m-auto  md:m-0 md:w-[63%]  lg:w-[73%] bg-[#201e1b] h-full p-4 rounded-xl shadow-[1px_1px_9px_#2e280e] '>
                        <RightSideScreen />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Resume