import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../shared/common/header/Header';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from '../shared/common/footer/Footer';
import { link } from '../constants'
config.autoAddCss = false
library.add(fas)

const Layout = () => {
    return (
        <>
            <Header bg="bg-primary" link={link} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout