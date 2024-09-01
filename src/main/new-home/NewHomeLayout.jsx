import React from 'react'
import { Outlet } from 'react-router-dom'
import { newLink } from '../../constants'
// import Footer from '../../shared/common/footer/Footer'
import Header from '../../shared/common/header/Header'
import '../new-home/index.css'
const NewHomeLayout = () => {
    return (
        <>
            <div className='relative bg-new-primary z-0'>


                <Header bg='bg-new-primary' link={newLink} />
                <Outlet />
                {/* <Footer /> */}


            </div>
        </>
    )
}

export default NewHomeLayout