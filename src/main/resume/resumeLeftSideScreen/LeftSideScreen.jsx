import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile from '../../../assets/img/profile.jpg'
const LeftSideScreen = () => {
    return (
        <>
            <div className="img flex justify-center p-[7%] bg-[#080b30] w-[60%] lg:w-[70%] rounded-[14px] m-auto">
                <img src={profile} alt="Amit Pratap Singh" />
            </div>
            <h4 className='h4 text-center mb-0 text-mainTextColor'>Amit Pratap Singh</h4>
            <p className='text-md text-center'><span className='bg-[#2d2b27] rounded-[30px] px-7 py-1 text-white/80'>Software Engineer
            </span> </p>
            <div className="py-8">
                <hr className='bg-[#201e1b]' />
            </div>
            <div className="contactStyle">
                <div className="flex gap-4 items-center ">
                    <div className="image shadow-[1px_1px_7px_#41360c;] p-4 rounded-xl">
                        <FontAwesomeIcon icon={['fas', 'envelope']} className="w-4 text-goldenColor" />

                    </div>
                    <div className="textField"><span className="contactText uppercase tracking-[1px] opacity-70 font-light text-mainTextColor">Email</span>
                        <p className='mt-[-6px]'>
                            <a className='text-[.8rem] font-light uppercase tracking-[1px] opacity-70 text-white/80' href="mailto:samit5585@gmail.com">samit5585@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-center mt-8">
                    <div className="image shadow-[1px_1px_7px_#41360c;] p-4 rounded-xl">
                        <FontAwesomeIcon icon={['fas', 'mobile']} className="w-4 text-goldenColor" />

                    </div>
                    <div className="textField"><span className="contactText uppercase tracking-[1px] opacity-70 font-light text-mainTextColor">Phone</span>
                        <p className='mt-[-6px]'>
                            <a className='text-[.8rem] font-light uppercase tracking-[1px] opacity-70 text-white/80' href="tel:+917007115781 ">700 711 5781</a>
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-start mt-8">
                    <div className="image shadow-[1px_1px_7px_#41360c;] p-4 rounded-xl">
                        <FontAwesomeIcon icon={['fas', 'location-dot']} className="w-4 text-goldenColor" />

                    </div>
                    <div className="textField"><span className="contactText uppercase tracking-[1px] opacity-70 font-light text-mainTextColor">Location</span>
                        <p className='mt-[-6px] text-[.8rem] font-light uppercase tracking-[1px] opacity-70 leading-5 text-white/80'  >
                            Purushottampuri Colony phulwariya Varanasi, Uttar Pradesh.
                        </p>
                    </div>
                </div>
            </div>
            <div className="socialMedia flex gap-3 pt-4 justify-center mt-4">
                <div className='rounded-[50%] p-2 border border-goldenColor text-mainTextColor  border-solid'>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} className='w-4 h-4 ' />
                </div>
                <div className='rounded-[50%] p-2 border border-goldenColor text-mainTextColor  border-solid'><FontAwesomeIcon icon={['fab', 'instagram']} className='w-4 h-4 ' /></div>
                <div className='rounded-[50%] p-2 border border-goldenColor text-mainTextColor  border-solid'><FontAwesomeIcon icon={['fab', 'twitter']} className='w-4 h-4 ' /></div>
                <div className='rounded-[50%] p-2 border border-goldenColor  text-mainTextColor border-solid'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='w-4 h-4 ' /></div>
            </div>
        </>
    )
}

export default LeftSideScreen