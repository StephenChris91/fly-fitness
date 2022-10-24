
import { useNavigate } from 'react-router-dom'

//components
import Hero from '../../Components/Hero/Hero'
import Box from '../../Components/Box/Box'
import TextCard from '../../Components/TextCard/TextCard'
import { Button } from 'flowbite-react'
import Slider from '../../Components/Slider/Slider'
import Testimonial from '../../Components/Testimonial/Testimonial'


//react-spring
import { useSpring, animated } from 'react-spring'



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

    const fadeInPropsLeft = useSpring({
        from: {marginLeft: -500, opacity: 0},
        to: {marginLeft: 0, opacity: 1}
    })
    const fadeInPropsRight = useSpring({
        from: {marginRight: -500, opacity: 0},
        to: {marginRight: 0, opacity: 1}
    })

    const navigate = useNavigate()


    return (
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className="pt-20">
                <div className="mx-auto flex flex-col lg:items-center sm:items-center lg:justify-between sm:justify-between lg:w-[1200px] sm:w-[300px] sm:p-5">
                    <h1 className="lg:text-4xl sm:text-2xl mb-20 lg:text-center sm:text-center mx-auto font-bold">OUR TRAINING PROGRAMS</h1>
                    <div className="flex lg:flex-row sm:flex-col items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <animated.div className="lg:mr-80 sm:mr-[20px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsLeft}>
                            <Box imageUrl={Image1}></Box>
                        </animated.div>
                        <div className='text-container'>
                            <TextCard cardHeader='AEROBICS' cardPara='The high-intesity of multi-joints movements in Crossfit can help you gain muscle strengths and stamina; help you burn calories and manage weight.'
                            ></TextCard>
                        </div>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col-reverse items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <div className='text-container'>
                            <TextCard cardHeader='YOGA' cardPara='Get flexible, and improve your respiration, energy and over all vitality with our yoga programs tailored to suit your specific needs (beginner, intermediate and expert classes)'></TextCard>
                        </div>
                        <animated.div className="lg:ml-80 sm:ml-[-50px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsRight}>
                            <Box imageUrl={Image5}></Box>
                        </animated.div>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <animated.div className="lg:mr-80 sm:mr-[20px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsLeft}>
                            <Box imageUrl={Image4}></Box>
                        </animated.div>
                        <div className='text-container '>
                            <TextCard cardHeader='CROSSFIT' cardPara='The high-intesity of multi-joints movements in Crossfit can help you gain muscle strengths and stamina; help you burn calories and manage weight.' />
                        </div>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col-reverse items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <div className='text-container '>
                            <TextCard cardHeader='CUPPING THERAPY(HIJAMA)' cardPara='At FLYFITNESS FACTORY, you can enjoy the full benefits of the ancient Chinese treatment that helps with pain relief, chronic fatigue, relief from lung disease, healthy skin, digestive problems among many other benefits.' />
                        </div>
                        <animated.div className="lg:ml-80 sm:ml-[-50px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsRight}>
                            <Box imageUrl={Image6}></Box>
                        </animated.div>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <animated.div className="lg:mr-80 sm:mr-[20px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsLeft}>
                            <Box imageUrl={Image7}></Box>
                        </animated.div>
                        <div className='text-container lg:mr-0 sm:mr-[0px]'>
                            <TextCard cardHeader='MASSAGE' cardPara='Our standyby team and equipments helps in reducing muscle soreness, high blood pressure, strees and improve adequate blood circulation, energy and alertness.' />
                        </div>
                    </div>
                    <div className="flex lg:flex-row sm:flex-col-reverse items-center justify-between mx-auto lg:mb-32 sm:mb-10">
                        <div className='text-container'>
                            <TextCard cardHeader='EQUIPMENTS' cardPara='We use standard equipment to ensure that you maximize your potentials.' />
                        </div>
                        <animated.div className=" lg:ml-80 sm:ml-[-50px] lg:mb-0 sm:mb-12 lg:w-none sm:w-full" style={fadeInPropsRight}>
                            <Box imageUrl={Image8}></Box>
                        </animated.div>
                    </div>
                </div>
                <div className="pricing-section p-32 flex flex-col items-center justify-between bg-red-50">
                    <h2 className="lg:text-5xl sm:text-2xl font-bold text-center text-gray-900 mb-10">MEMBERSHIP PLAN OPTIONS</h2>
                    <p className='font-normal text-center text-gray-700 mb-5'>Our certified trainers are here to help you get fit and into shape</p>
                    <Button className="bg-white" id='pricing-btn' onClick={() => navigate('/equipments')}>VIEW OPTIONS</Button>
                </div>
                <div className="flex lg:flex-row sm:flex-col items-center lg:justify-between sm:justify-center lg:mx-0 sm:mx-auto lg:py-20 sm:py-20 lg:px-64 sm:px-10 bg-gray-200">
                    <h1 className="text-4xl font-bold text-center lg:mt-22 sm:mt-0 lg:mb-0 sm:mb-10">Meet Our Team</h1>
                    <Slider />
                </div>
                <div className="testimonial-section lg:py-0 sm:py-20 lg:px-64 sm:px-10  bg-blue-50">
                    <Testimonial />
                </div>
            </div>
        </>
    )
}
