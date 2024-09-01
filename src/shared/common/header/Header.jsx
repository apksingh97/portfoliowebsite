import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const Header = ({ bg, link }) => {

    const location = useLocation()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className={`${scrolled ? bg : 'bg-transparent'} fixed w-full top-0 z-[9999] `}>

            <div className="containerBox">

                <div className="navbar  h-[70px]">
                    <div className=''>
                        <h4 className='font-poppins font-extrabold text-white text-xl tracking-[4px] uppercase'><HashLink to='/#'>
                            Portfolio
                        </HashLink></h4>
                    </div>

                    <div className="text-right flex-1 flex relative justify-end  lg:hidden">


                        <button className='absolute z-[9999]' onClick={() => setOpen(!open)}>
                            {!open ? <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-mainTextColor" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> :
                                <FontAwesomeIcon icon={['fas', 'close']} className='w-10 h-10 font-thin text-mainTextColor ' />}
                        </button>


                        <div className={`${open ? 'translate-y-0 block ' : 'translate-y-[-100%]'} h-[100vh] bg-gray-900 transition duration-1000 w-full ease-in-out fixed top-0 lg:hidden left-0`}>

                            <ul className='flex flex-col justify-center items-center right-0 top-0 h-full gap-7'>
                                {link.map(({ title, url }, index) => (
                                    <li onClick={() => setOpen(!open)} className={`${style.menuActive} `} key={index}><HashLink to={url} className={`${location.pathname + location.hash === url ? ' text-white' : 'text-white/80'} text-4xl`} >{title}</HashLink></li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div className="menu navbar-end hidden lg:flex items-end flex-1">
                        <ul tabIndex={0} className="flex gap-3  text-white text-sm tracking-[3px] uppercase">
                            {link.map(({ title, url }, index) => (
                                <li className={`${style.menuActive} `} key={index}>

                                    <HashLink className={`${location.pathname + location.hash === url ? ' text-white' : 'text-white/50'}`} to={url} >
                                        {title}
                                    </HashLink >
                                </li>
                            ))}

                        </ul>
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Header