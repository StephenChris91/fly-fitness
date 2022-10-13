import React from 'react'

//motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



//components
import Hero from '../../Components/Hero/Hero'
import Box from '../../Components/Box/Box'
import TextCard from '../../Components/TextCard/TextCard'
import {Button} from 'flowbite-react'
import Slider from '../../Components/Slider/Slider'
import Testimonial from '../../Components/Testimonial/Testimonial'



//images
import Image1 from "../../Images/exercise -2.jpg"
import Image4 from '../../Images/gym-4.jpg'
import Image5 from '../../Images/exercise-4.jpg'
import Image6 from '../../Images/massage-4.jpg'
import Image7 from '../../Images/massage-1.jpg'
import Image8 from '../../Images/equipment.png'

//styles
import './Home.css'

export default function Home() {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, scale: 0 }
      };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);


    return (
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className="pt-20">
                <div className="mx-auto flex flex-col justify-between boxes-container">
                    <h1 className="text-4xl mb-20 text-center mx-auto font-bold">OUR TRAINING PROGRAMS</h1>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className="mr-80" ref={ref} variants={boxVariant} initial= "false" animate={control}>
                            <Box imageUrl={Image1}></Box>
                        </div>
                        <div className='text-container'>
                            <TextCard cardHeader='AEROBICS' cardPara='The high-intesity of multi-joints movements in Crossfit can help you gain muscle strengths and stamina; help you burn calories and manage weight.' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className='text-container'>
                            <TextCard cardHeader='YOGA' cardPara='Get flexible, and improve your respiration, energy and over all vitality with our yoga programs tailored to suit your specific needs (beginner, intermediate and expert classes)' />
                        </div>
                        <div className="ml-80" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                            <Box imageUrl={Image5}></Box>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className="mr-80" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                            <Box imageUrl={Image4}></Box>
                        </div>
                        <div className='text-container '>
                            <TextCard cardHeader='CROSSFIT' cardPara='The high-intesity of multi-joints movements in Crossfit can help you gain muscle strengths and stamina; help you burn calories and manage weight.' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className='text-container '>
                            <TextCard cardHeader='CUPPING THERAPY(HIJAMA)' cardPara='At FLYFITNESS FACTORY, you can enjoy the full benefits of the ancient Chinese treatment that helps with pain relief, chronic fatigue, relief from lung disease, healthy skin, digestive problems among many other benefits.' />
                        </div>
                        <div className="ml-80" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                            <Box imageUrl={Image6}></Box>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className="mr-80" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                            <Box imageUrl={Image7}></Box>
                        </div>
                        <div className='text-container '>
                            <TextCard cardHeader='MASSAGE' cardPara='Our standyby team and equipments helps in reducing muscle soreness, high blood pressure, strees and improve adequate blood circulation, energy and alertness.' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className='text-container mr-40'>
                            <TextCard cardHeader='EQUIPMENTS' cardPara='We use standard equipment to ensure that you maximize your potentials.' />
                        </div>
                        <div className="w-80" ref={ref} variants={boxVariant} initial="hidden" animate={control}>
                            <Box imageUrl={Image8}></Box>
                        </div>
                    </div>
                </div>
                <div className="pricing-section p-32 flex flex-col items-center justify-between bg-red-50">
                    <h2 className="text-5xl font-bold text-center text-gray-900 mb-10">MEMBERSHIP PLAN OPTIONS</h2>
                    <p className='font-normal text-center text-gray-700 mb-5'>Our certified trainers are here to help you get fit and into shape</p>
                    <Button className="bg-white" id='pricing-btn'>VIEW OPTIONS</Button>
                </div>
                <div className="team-section flex item-center justify-between pt-11 px-64 bg-gray-200">
                    <h1 className="team-section-header text-4xl font-bold text-center mt-32">Meet Our Team</h1>
                    <Slider />
                </div>
                <div className="testimonial-section px-64  bg-blue-50">
                    <Testimonial />
                </div>
            </div>
        </>
    )
}
