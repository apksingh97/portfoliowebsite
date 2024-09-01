import React from 'react'
import { StarsCanvas } from '../components/canvas'
import { About, Feedbacks, Contact, Hero, Tech, Works } from './components'
import Experience from './components/Experience'

const NewHome = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />

            </div>
        </>
    )
}

export default NewHome