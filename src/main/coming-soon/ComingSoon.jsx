import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ComingSoon = ({ text = "Coming Soon", icon = false }) => {
    return (
        <section className='section bg-primary flex justify-center items-center flex-col gap-7 h-screen'>
            {icon && <FontAwesomeIcon icon={icon} className="w-[100px] text-mainTextColor" />}
            <h1 className='text-7xl font-bold text-white'>{text}</h1>
            <NavLink to='/' className='text-mainTextColor text-2xl'>Back Homepage</NavLink>
        </section>
    )
}

export default ComingSoon