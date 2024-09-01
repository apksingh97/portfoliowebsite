import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TopHeader = () => {
    return (

        <div className="lg:container m-auto flex justify-between py-2">
            <div className="number text-white flex gap-2 items-center ">
                <FontAwesomeIcon icon={['fas', 'phone']} className="w-4" /> <a href="tel:917007115781" className=' text-xs font-normal  font-poppins tracking-[1px]'>700 711 5781</a>
            </div>
            <div className="email text-white flex gap-2 items-center">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="w-4" /><a href="mailto:samit5585@gmail.com" className=' text-xs font-normal tracking-[1px]' > samit5585@gmail.com</a></div>
        </div>
    )
}

export default TopHeader