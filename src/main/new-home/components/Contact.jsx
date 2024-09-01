import React, { useState } from 'react'
import { SectionWrapper } from '../../../hoc'
import { slideIn } from '../../../utils/motion'
import { motion } from 'framer-motion'
import { EarthCanvas } from '../../components/canvas'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    fName: yup.string().min(4, "First name must be at least 4 character").required(),
    lName: yup.string(),
    email: yup.string().email('Must be a valid email Id').max(255).required('Email is required'),
    number: yup.string(),
    message: yup.string()
});

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submitValue = (data, e) => {
        setLoading(true)
        emailjs.sendForm('service_m62dijv', 'template_bygwlui', e.target, 'MxHJikCLIxaFocRVN')
            .then((result) => {
                if (result.text.toLocaleLowerCase() === 'ok') {
                    navigate('/thank-you')
                    setLoading(false) 
                }
            }, (error) => {
                setLoading(false) 

            });
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });

    return (

        <div className='xl:mt-12 md:flex-row flex-col-reverse flex gap-10 containerBox overflow-hidden pb-10 '>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black p-8 rounded-2xl">
                <p className='sectionSubText'>Get in touch</p>
                <h4 className='sectionHeadText'>Contact.</h4>
                <form onSubmit={handleSubmit(submitValue)} className="mt-12 flex flex-col gap-8">

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Name</span>
                        <div className="flex flex-col sm:flex-row gap-7">
                            <div className="flex-1 w-full">
                                <input type="text" name='fName' {...register('fName')} placeholder="Enter First Name" className='bg-new-tertiary py-4 px-6 placeholder:text-new-secondary text-white rounded-lg outlined-none border-none font-medium w-full' />
                                <span className="font-light text-error text-xs">
                                    {errors.fName?.message}
                                </span>
                            </div>
                            <div className="flex-1 w-full">
                                <input type="text" name='lName' {...register('lName')} placeholder="Enter second Name" className='bg-new-tertiary py-4 px-6 placeholder:text-new-secondary text-white rounded-lg outlined-none border-none font-medium w-full' />
                            </div>
                        </div>

                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Email</span>
                        <input placeholder="Enter Email" {...register('email')} className=' bg-new-tertiary py-4 px-6 placeholder:text-new-secondary text-white rounded-lg outlined-none border-none font-medium' />
                        <span className="font-light text-error text-xs">
                            {errors.email?.message}
                        </span>
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Number</span>
                        <input placeholder="Enter Phone Number" {...register('number')} className=' bg-new-tertiary py-4 px-6 placeholder:text-new-secondary text-white rounded-lg outlined-none border-none font-medium' />

                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-2'>Your Message</span>
                        <textarea rows="7" name='message' {...register('message')} placeholder="What do you want to say" className=' bg-new-tertiary py-4 px-6 placeholder:text-new-secondary text-white rounded-lg outlined-none border-none font-medium' />
                    </label>
                    <button type='submit' className=' bg-new-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
                        {loading ? "Sending..." : 'Send'} 
                    </button>
                </form>
            </motion.div>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="  h-[550px] md:h-[550px]  flex-1 xl:h-[650px] ">
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')