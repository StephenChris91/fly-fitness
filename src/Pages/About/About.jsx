import React from 'react'
import Hero from '../../Components/Hero/Hero'


//styles
import './About.css'


export default function About() {
    

    return (
        <>
            <Hero 
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY 
                YOUR RESULTS JUST GOT EASIER"
                lowerText="You do the work, we guide you, support you, and help you 
                attain your goals"
            />
            <div className='about-container mt-20 mx-auto'>
                <h1 className='font-bold text-4xl text-center mb-10'>ABOUT</h1>
                <p className='font-normal mb-5'>Health and well-being contribute significantly to the overall quality life of an individual. And one of the many ways to achieve this exercise, Yet it can prove daunting. It requires a lot from an individual; mentally; physically and financially, to make that life-altering decision to indulge in exerciseut once that decision is made, there is a noticeable improvement in the general well-being of the individual. Therefore, it becomes imperative that mprove your health, overall well-being, productivity and performance with the leaders in fitness solutions, FLY FITNESS FACTORY.</p>
                <p className='font-normal mb-5'>We have integrated health & fitness solutions offering that is easily accessible, affordable and designed to meet an individual’s specific needs. Wehave taken it upon ourselves to enable people to be the bet versions of themselves.</p>
                <p className='font-normal'>Transforming your body, mind and starting your journey to fit, happy, positive, healthier and better you</p>
            </div>
        </>
    )
}
