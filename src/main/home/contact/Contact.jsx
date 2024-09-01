import React from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object().shape({
    fName: yup.string().min(4, "First name must be at least 4 character").required(),
    lName: yup.string(),
    email: yup.string().email('Must be a valid email Id').max(255).required('Email is required'),
    number: yup.string().required('Number is required').matches(phoneRegExp, 'Phone number is not valid').min(10, 'Enter 10 digit mobile number without +91').max(10, 'Enter 10 digit mobile number without +91'),
    message: yup.string()
});
const Contact = () => {
    const navigate = useNavigate()

    const submitValue = (data, e) => {


        emailjs.sendForm('service_m62dijv', 'template_bygwlui', e.target, 'MxHJikCLIxaFocRVN')
            .then((result) => { 
                if (result.text.toLocaleLowerCase() === 'ok') {
                    navigate('/thank-you')
                }
            }, (error) => {
                console.log(error);
            });

    }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), });

    return (
        <section className='contactForm bg-primary h-[100vh] flex justify-center items-center' id='contact'>
            <div className="element flex justify-center w-full">
                <div className="w-full lg:container m-auto">
                    <div className="w-[90%] md:w-[70%] lg:w-[59%] m-auto ">
                        <h4 className='text-4xl font-bold font-primary py-1 text-center text-white'>Contact <span className='text-mainTextColor text-4xl'>Us</span></h4>
                        <p className='text-2xl font-semibold font-poppins text-center text-white'>Connect With Us
                        </p>

                        <Form onSubmit={handleSubmit(submitValue)} className="inputForm flex flex-col gap-4 mt-7"  >
                            <Segment>
                                <div className="formField flex gap-4 h-[65px]">
                                    <div className="flex-1">
                                        <Form.Field required error={!!errors.fName} className="leading-none">
                                            <input type="text" {...register('fName')} placeholder="Your First Name" className="input input-bordered input-md w-full bg-white" />
                                            <span className="font-light text-error text-xs">
                                                {errors.fName?.message}
                                            </span>
                                        </Form.Field>

                                    </div>
                                    <div className="flex-1">
                                        <Form.Field required error={!!errors.fName} className="leading-none">
                                            <input type="text" {...register('lName')} placeholder="Your Last Name" className="input input-bordered input-md w-full bg-white" />

                                        </Form.Field>

                                    </div>
                                </div>
                                <div className="formField flex gap-4 h-[65px]">
                                    <div className="flex-1">
                                        <Form.Field required error={!!errors.email} className="leading-none">
                                            <input placeholder="Your Email" {...register('email')} className="input input-bordered input-md w-full bg-white" />
                                            <span className="font-light text-error text-xs">
                                                {errors.email?.message}
                                            </span>
                                        </Form.Field>
                                    </div>
                                    <div className="flex-1">
                                        <Form.Field required error={!!errors.number} className="leading-none" >
                                            <input placeholder="Your Number" {...register('number')} className="input input-bordered input-md w-full bg-white" />
                                            <span className="font-light text-error text-xs">
                                                {errors.number?.message}
                                            </span>
                                        </Form.Field>
                                    </div>
                                </div>

                                <div className="formField">
                                    <textarea  {...register('message')} placeholder="Write message" className="textarea textarea-bordered textarea-lg w-full h-[100px] bg-white" />
                                </div>
                                <div className="formField text-center">
                                    <input type="submit" value="Submit" className='cursor-pointer bg-buttonColor px-8 py-2 rounded-md font-semibold text-black font-primary ' />
                                </div>
                            </Segment>
                        </Form>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact