import React from 'react'

//components
import Hero from '../../Components/Hero/Hero'
import { form, Label, TextInput, Textarea } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
import Button from '../../Components/Button/Button'

//styles
import './Login.css'

//Logo
import Logo from '../../Images/logo.png'

export default function Login() {
    

    return (
        <>
            <img src={Logo} alt='Login Logo' className='flex items-center justify-between mx-auto pt-10'  />
            <div className='bg-sky-600 mx-auto mt-20 py-40 px-20 w-[1200px]'>
            <h1 className='font-bold text-white text-4xl mb-10'>LOGIN</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Email"
                        value="Your Email Address"
                        className='text-white'
                    />
                    </div>
                    <TextInput
                    id="Email"
                    type="text"
                    placeholder='email@myemail.com'
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />''
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Password"
                        value="Password"
                    />
                    </div>
                    <TextInput
                    id="Location"
                    placeholder='Your password...'
                    type="password"
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
                <div>
                    <Button width='full' padding='5' bgColor='white' type="submit" >
                        SEND
                    </Button>
                </div>
                </form>
                <div className='text-white mt-10'>
                    <p>Already have an account?{' '}
                        <strong>
                            <NavLink to='/signup'>
                                SIGN UP
                            </NavLink>
                        </strong>
                    </p>
                </div>
            </div>
        </>
    )
}
