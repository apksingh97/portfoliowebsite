import React from 'react'
import About from '../about/About'
import Dashboard from './dashboard/Dashboard'
import Contact from './contact/Contact'

const Home = () => {
    return (
        <section className='bg-primary h-full'>
            <Dashboard />
            <About />
            <Contact />
        </section>
    )
}


export default Home