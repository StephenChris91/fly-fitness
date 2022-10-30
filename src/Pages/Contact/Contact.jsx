
import { useState } from 'react'

//components
import Hero from '../../Components/Hero/Hero'
import { form, Label, TextInput, Textarea } from 'flowbite-react'
import {Button} from 'react-bootstrap'

//react-spring
import { animated, useSpring } from 'react-spring'

//styles
import './Contact.css'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Contact Form Submitted Successfully')
    }
    const fadeInLeft = useSpring({
        from: {marginLeft: 100, opacity: 0},
        to: {marginLeft: 0, opacity: 1}
    })
    

    return (
        <>
            <Hero
                mainText="CONTACT FLY FITNESS TODAY"
                lowerText="SEND US YOUR INFORMATION AND WE WILL GET IN CONTACT WITH YOU AS SOON AS WE CAN"
            />

            <div className='bg-sky-600 mx-auto mt-20 py-40 lg:px-20 sm:px-[15px] lg:w-[1200px] sm:[500px]'>
            <h1 className='font-bold text-center text-white text-4xl mb-10'>GET STARTED TODAY.</h1>
            <animated.form className="flex flex-col gap-4" style={fadeInLeft} onSubmit={handleSubmit}>
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
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setLocation(e.target.value)}
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
                    onChange={(e) => setSubject(e.target.value)}
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
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant='dark' size='lg' type="submit" style={{ width: '100%'}}>
                        SEND
                </Button>
                </animated.form>
            </div>
        </>
    )
}
