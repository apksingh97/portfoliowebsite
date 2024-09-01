import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'

import {
    controllerDashboard,
    userDashboard,
    adminActAsControllerForm,
    adminActAsController,
    adminDashboard,
    allUserAction,
    formUi,
    formUiEdit,
} from '../../assets'

const tabs = [
    {
        label: 'Admin', image: [
            adminActAsControllerForm,
            adminActAsController,
            adminDashboard,
            allUserAction,
            formUi,
            formUiEdit]
    },
    { label: 'Controller', image: [controllerDashboard, userDashboard] },
    { label: 'User', image: [controllerDashboard, userDashboard] }
]

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState('')
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <section className='h-screen'>
            <div className='pt-[100px] containerBox  '>
                <div className="tabStyle flex justify-center gap-10">

                    {tabs.map((item) => (
                        <div
                            key={item.label}
                            className={`${item.label === selectedTab.label ? "selected text-white " : "text-white/40"} cursor-pointer mb-10`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {` ${item.label}`}
                            {item.label === selectedTab.label ? (
                                <motion.div className="underline bg-white h-[2px]" layoutId="underline" />
                            ) : null}
                        </div>
                    ))}
                </div>
                <AnimatePresence >
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab && <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6'>
                            {selectedTab.image.map((img, index) => (

                                <motion.div key={index} className="cursor-pointer hover:scale-[1.1] transition duration-1000" onClick={() => setSelectedImage({ img, index })} >
                                    <img src={img} />
                                </motion.div>
                            ))}
                        </div>}

                    </motion.div> 
                </AnimatePresence>
                <AnimatePresence >


                    {selectedImage && <div className='fixed z-50 top-0 left-0 w-full h-screen flex justify-center items-center bg-black/40 backdrop-blur-md' onClick={() => setSelectedImage('')}>
                        <motion.div initial={{ scale: .5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: .5, opacity: 0 }}
                            transition={{ duration: .5 }} className={` w-[70%] m-auto z-50 top-0 left-0 opacity-0 ease-in-out`}> 
                            <img src={selectedImage.img} />
                        </motion.div>
                    </div>
                    }

                </AnimatePresence>


            </div>
        </section>
    )
}

export default SectionWrapper(Portfolio, '')