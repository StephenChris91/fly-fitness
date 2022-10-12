import React from 'react'

//components
import Hero from '../../Components/Hero/Hero'
import { form, Label, TextInput, Button, Textarea } from 'flowbite-react'

//styles
import './Contact.css'

export default function Contact() {
    

    return (
        <>
            <Hero
                mainText="CONTACT FLY FITNESS TODAY"
                lowerText="SEND US YOUR INFORMATION AND WE WILL GET IN CONTACT WITH YOU AS SOON AS WE CAN"
            />

            <div className='bg-sky-600 mx-auto mt-20 py-40 px-20 w-[1200px]'>
            <h1 className='font-bold text-center text-white text-4xl mb-10'>GET STARTED TODAY.</h1>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="name"
                        className='text-white'>Your Name</Label>
                    </div>
                    <TextInput
                    id="name"
                    type="text"
                    placeholder="Name..."
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
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
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Location"
                        value="Location"
                    />
                    </div>
                    <TextInput
                    id="Location"
                    placeholder='Your location...'
                    type="text"
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="Subject"
                        value="Subject"
                        className='text-gray-100'
                    />
                    </div>
                    <TextInput
                    id="Subject"
                    placeholder='Your Subject...'
                    type="text"
                    required={true}
                    shadow={false}
                    sizing="lg"
                    />
                </div>
                <div className="mb-2 block">
                        <Label
                        htmlFor="comment"
                        value="Your message"
                />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={6}
                />
                <Button type="submit" className='mx-auto bg-white bg-transparent'>
                    SEND
                </Button>
                </form>
            </div>
        </>
    )
}
