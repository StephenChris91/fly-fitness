import React from 'react'
import { useNavigate } from 'react-router-dom'


//components
import Hero from '../../Components/Hero/Hero'
import {Button} from 'react-bootstrap'



export default function Memberships() {
    
    const navigate = useNavigate()
    return (
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className='mt-20 mb-10 sm:px-[15px] lg:w-[900px] sm:[500px] lg:px-32 py-10 flex flex-col items-center mx-auto'>
                <div className='flex flex-col items-center justify-between mx-auto'>
                    <h1 className='font-bold text-4xl text-center'>MEMBERSHIP PLAN OPTIONS</h1>
                    <p className='text-lg mb-10 text-center'>Our certified trainers are here to help you get into shape easier and faster than ever</p>
                </div>
                <div className='pricing-section mb-20'>
                    <div className='flex flex-col lg:flex-row items-center justify-around mx-auto'>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border lg:mr-10 mt-10'>
                            <h4 className='font-bold'>INDIVIDUAL</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>40,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>15,000</p>
                            </div>
                            <div>
                                <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mr-10'>
                            <h4 className='font-bold'>COMPANY (5 STAFF)</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>200,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>70,000</p>
                            </div>
                            <div>
                            <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border lg:mt-10'>
                            <h4 className='font-bold'>COUPLE</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>70,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>25,000</p>
                            </div>
                            <div>
                                <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center justify-around mx-auto'>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border lg:mr-10 mt-10'>
                            <h4 className='font-bold'>FAMILY OF 4</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>140,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>50,000</p>
                            </div>
                            <div>
                                <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mr-10'>
                            <h4 className='font-bold'>OLD PEOPLE</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>25,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>10,000</p>
                            </div>
                            <div>
                            <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border lg:mt-10'>
                            <h4 className='font-bold text-center'>PARAMILITARY <br />& MILITARY</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>25,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>10,000</p>
                            </div>
                            <div>
                                <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                    </div>
                    
                    <div className='flex flex-col lg:flex-row items-center justify-around mx-auto'>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border lg:mr-10 mt-10'>
                            <h4 className='font-bold'>STUDENTS</h4>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>3 Months</p>
                                <p>25,000</p>
                            </div>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>15,000</p>
                            </div>
                            <div>
                                <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mr-10'>
                            <h2 className='font-bold'>OLD PEOPLE</h2>
                            <div className='w-60 flex items-center justify-between mx-auto'>
                                <p>Monthly</p>
                                <p>5,000</p>
                            </div>
                            <div>
                            <p>No freeze subscription request</p>
                                <p>Free group classes</p>
                                <p>No guest passes</p>
                                <p>All day access</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button variant='outline-warning' onClick={() => navigate('/contact')}>Subscribe</Button>
                        </div>
                    </div>
                </div>
                <div className='more-info flex flex-col'>
                    <h4 className='font-bold text-left'>More Information</h4>
                    <div className='flex flex-col lg:flex-row justify-between items-left gap-5 mx-auto'>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                            <div className='flex justify-between mx-auto w-72'>
                                <p>Weekly Payments</p>
                                <p>5,000</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Daily Payments: (Member)</p>
                                <p>1,000</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Daily Payments: (Non Member)</p>
                                <p>1500</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p className='font-bold'>Spinning/Boxing Classes</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Member</p>
                                <p>500</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Non Member</p>
                                <p>1000</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center mx-auto'>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p className='font-bold'>Karate/Taekwondo Classes</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Member</p>
                                <p>500</p>
                            </div>
                            <div className='flex justify-between items-center mx-auto w-72'>
                                <p>Non Member</p>
                                <p>1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
