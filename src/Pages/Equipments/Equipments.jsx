import React from 'react'


//components
import Hero from '../../Components/Hero/Hero'
import Button from '../../Components/Button/Button'



export default function Memberships() {
    

    return (
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className='mt-20 mb-10 w-[1200px] px-64 py-10 flex flex-col items-center mx-auto'>
                <div className='flex flex-col items-center justify-between mx-auto'>
                    <h1 className='font-bold text-4xl'>MEMBERSHIP PLAN OPTIONS</h1>
                    <p className='text-lg mb-10'>Our certified trainers are here to help you get into shape easier and faster than ever</p>
                </div>
                <div className='pricing-section'>
                    <div className='flex items-center justify-around mx-auto'>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mr-10 mt-10'>
                            <h2 className='font-bold'>INDIVIDUAL</h2>
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
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                            </div>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mr-10'>
                            <h2 className='font-bold'>COMPANY (5 Staff)</h2>
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
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                            </div>
                            <Button>Subscribe</Button>
                        </div>
                        <div className='p-5 flex flex-col items-center justify-between mx-auto border mt-10'>
                            <h2 className='font-bold'>COUPLE</h2>
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
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                                <p>No freeze subscription request</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
