import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {

    const [getDate, setGetDate] = useState()
    useEffect(() => {
        setGetDate(new Date().getFullYear())

    }, [])

    return (
        <section className='bg-darkColor'>
            <div className="lg:container m-auto">
                <footer className="footer footer-center p-4 gap-7 rounded">
                    <div className="grid grid-flow-col gap-4">
                        <HashLink to="/#about" className="link text-lg no-underline text-mainTextColor">About us</HashLink>
                        <HashLink to="/#contact" className="link text-lg no-underline text-mainTextColor" >Contact</HashLink>
                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-2">
                            <div className='rounded-[50%] p-2 border border-white border-solid text-white'>
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} className='w-4 h-4 ' />
                            </div>
                            <div className='rounded-[50%] p-2 border border-white border-solid text-white'><FontAwesomeIcon icon={['fab', 'instagram']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid text-white'><FontAwesomeIcon icon={['fab', 'twitter']} className='w-4 h-4 ' /></div>
                            <div className='rounded-[50%] p-2 border border-white border-solid text-white'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='w-4 h-4 ' /></div>
                        </div>
                    </div>
                    <div>
                        <p className='text-white'>Copyright ©{getDate}  - All right reserved by Amit Pratap Singh</p>
                    </div>
                </footer>
            </div>
        </section>
    )
}

export default Footer