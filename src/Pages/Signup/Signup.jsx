import React from 'react'

//components
import { form, Label, TextInput, Textarea, Checkbox} from 'flowbite-react'
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

//styles
import './Signup.css'

//Logo
import Logo from '../../Images/logo.png'

export default function Login() {
    

    return (
        <>
            <img src={Logo} alt='Login Logo' className='flex items-center justify-between mx-auto pt-10'  />
            <div className='bg-sky-600 mx-auto mt-20 py-40 lg:px-20 sm:px-[15px] lg:w-[1200px] sm:[500px]'>
            <h1 className='font-bold text-white text-4xl mb-10'>CREATE ACCOUNT</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Name"
                        value="Name"
                        className='text-white'
                    />
                    </div>
                    <TextInput
                    id="Name"
                    type="text"
                    placeholder='email@myemail.com'
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Last Name"
                        value="Last Name"
                    />
                    </div>
                    <TextInput
                    id="Name"
                    placeholder='Your Last Name...'
                    type="text"
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
                <div className="mb-2 block">
                    <div className=' '>
                        <Label
                        htmlFor="Date"
                        value="Date Of Birth"
                        />
                        </div>
                        <TextInput
                            id="Name"
                            placeholder='Your Last Name...'
                            type="date"
                            required={true}
                            shadow={false}
                            sizing="lg"
                        />
                </div>
                <div className="mb-2 block">
                        <div className=''>
                            <Label
                            htmlFor="Email"
                            value="Your Email"
                        />
                            </div>
                            <TextInput
                            id="Email"
                            placeholder='Your Email...'
                            type="text"
                            required={true}
                            shadow={false}
                            sizing="lg"
                            />
                        </div>
                <div className="mb-2 block">
                        <div className=''>
                            <Label
                            htmlFor="Password"
                            value="Your Password"
                        />
                            </div>
                            <TextInput
                            id="Password"
                            placeholder='Your Email...'
                            type="password"
                            required={true}
                            shadow={false}
                            sizing="lg"
                            />
                        </div>
                <div className="mb-2 block">
                        <div className=''>
                            <Label
                            htmlFor="Confirm Password"
                            value="Confirm Password"
                        />
                            </div>
                            <TextInput
                            id="Confirm-Password"
                            placeholder='Confirm Password...'
                            type="password"
                            required={true}
                            shadow={false}
                            sizing="lg"
                            />
                        </div>
                <div>
                    <div className='terms mb-10'>
                        <div className='mb-10'>
                            <Checkbox /> <span className='text-white'>I have read and agree to Fly Fitness???s <strong>Terms & 
                                conditions</strong></span>
                        </div>
                        <div>
                            <Checkbox /> <span className='text-white'>I have read and agree to Fly Fitness???s <strong>Terms & 
                            Privacy Policy </strong></span>
                        </div>
                    </div>
                    <Button variant='dark' size='lg' type="submit" style={{ width: '100%' }} >
                        SEND
                    </Button>
                </div>
                
                </form>
                <div className='text-white mt-10'>
                    <p>Already have an account?{' '}
                        <strong>
                            <NavLink to='/login' className='text-white'>
                                LOGIN 
                            </NavLink>
                        </strong>
                    </p>
                </div>
            </div>
        </>
    )
}
