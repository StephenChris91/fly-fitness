import Hero from '../../Components/Hero/Hero'
import Box from '../../Components/Box/Box'
import TextCard from '../../Components/TextCard/TextCard'
import Testimonial from '../../Components/Testimonial/Testimonial'
import { ListGroup } from 'react-bootstrap'


//styles
import './About.css'

//Images
import Image1 from '../../Images/gym-3.jpg'
import Image2 from '../../Images/exercise-3.jpg'
import Image3 from '../../Images/exercise-1.jpg'
import Image4 from '../../Images/gym-2.jpg'



export default function About() {

    const valuesList = [
        {
            idx: 1,
            txt: 'We act responsibly'
        },
        {
            idx: 2,
            txt: 'We have a sense of urgency'
        },
        {
            idx: 3,
            txt: 'We are a winning team'
        },
        {
            idx: 4,
            txt: 'We are committed to continous improvement',
        },
        {
            idx: 5,
            txt: 'We are customer driven'
        },
    ]

    const goalsLists = [
        {
            idx: 1,
            txt: 'To contribute to the society, not just to make money.'
        },
        {
            idx: 2,
            txt: 'To sell memories not services'
        },
    ]
    

    return (
        <>
            <Hero 
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY 
                YOUR RESULTS JUST GOT EASIER"
                lowerText="You do the work, we guide you, support you, and help you 
                attain your goals"
            />
            <div className='about-container mt-20 mx-auto lg:w-[1200px] sm:w-[300px] flex flex-col lg:items-start sm:items-center lg:p-0 sm:p-3'>
                <h1 className='font-bold text-4xl text-center mb-10'>ABOUT</h1>
                <div className="about-us mb-10">
                    <p className='font-normal mb-5'>Health and well-being contribute significantly to the overall quality life of an individual. And one of the many ways to achieve this exercise, Yet it can prove daunting. It requires a lot from an individual; mentally; physically and financially, to make that life-altering decision to indulge in exerciseut once that decision is made, there is a noticeable improvement in the general well-being of the individual. Therefore, it becomes imperative that mprove your health, overall well-being, productivity and performance with the leaders in fitness solutions, FLY FITNESS FACTORY.</p>
                    <p className='font-normal mb-5'>We have integrated health & fitness solutions offering that is easily accessible, affordable and designed to meet an individual’s specific needs. Wehave taken it upon ourselves to enable people to be the bet versions of themselves.</p>
                    <p className='font-normal'>Transforming your body, mind and starting your journey to fit, happy, positive, healthier and better you</p>
                </div>
                
                <div className='benefits mb-20'>
                    <h1 className='font-bold text-2xl mb-2'>We are all about</h1>
                    <div>
                        <ListGroup as='ol' numbered className='flex flex-col justify-evenly'>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Personalized Training Programs.</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>On-going wellness management</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Supportive community/Group training session.</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Recreational actvities (playstation, table tennis, dart, ludo games and more)</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Wide range of Programs.</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Online training session</ListGroup.Item>
                            <ListGroup.Item as='li' className='font-bold text-lg'>Nutritional guide and diet plan.</ListGroup.Item>
                        </ListGroup>
                        <div className="empty"></div>
                    </div>
                    
                </div>
                <div className='lg:w-[1200px] sm:w-[400px] flex flex-col items-center justify-between lg:p-0 sm:p-[14px]'>
                    <div className="flex items-center justify-between mx-auto lg:mb-32 sm:mb-5 lg:flex-row sm:flex-col">
                        <div className="lg:mr-80 sm:mr-0 lg:mb-0 sm:mb-3">
                            <Box imageUrl={Image2} ></Box>
                        </div>
                        <div className='text-container'>
                            <TextCard cardHeader='OUR VISION' cardPara='That one day, Every day, Every Member of the community and
                            those who will visit where we operate shall understand the
                            need for Healthy Lifestyle and strive to live one.' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto lg:mb-32 sm:mb-5 lg:flex-row sm:flex-col-reverse">
                        <div className='text-container'>
                            <TextCard cardHeader='OUR MISSION' cardPara='That one day, Every day, Every Member of the community and
                            those who will visit where we operate shall understand the
                            need for Healthy Lifestyle and strive to live one.' cardPara2='In a clean, comfortale ambience that enhances the experience, satisfaction and perception of value by our patrons.' cardPara3='In doing this, we are driven by respect for our people, the environment, internal and external customers as well as Stakeholders.' />
                        </div>
                        <div className="lg:ml-80 sm:ml-0 lg:mb-0 sm:mb-3">
                            <Box imageUrl={Image1}></Box>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto lg:mb-32 sm:mb-5 lg:flex-row sm:flex-col">
                        <div className="lg:mr-80 sm:mr-0 lg:mb-0 sm:mb-3">
                            <Box imageUrl={Image4}></Box>
                        </div>
                        <div className='text-container'>
                            <TextCard cardHeader='CORE VALUES'  cardPara='The traits or qualities that we consider not just worthwhile
                            they represent for us as an organization. The highest priorities deeply held beliefs, core, fundamental driving forces' cardPara2='They are at the heart of what Fly Fitness Factory and it’s
                            employees stands for:'/>
                            {valuesList.map(list => (
                                <ListGroup as='ol' numbered className='flex justify-evenly'>
                                    <ListGroup.Item as='li' key={list.idx}>
                                        <li className='flex justify-between font-bold'>{list.txt}</li>
                                    </ListGroup.Item>
                                </ListGroup>
                                
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto lg:mb-32 sm:mb-5 lg:flex-row sm:flex-col-reverse">
                        <div className='text-container lg:w-[1000px] sm:w-[300px]'>
                            <TextCard cardHeader='OUR GOALS' />
                            {goalsLists.map(list => (
                                <ListGroup as='ol' numbered className='flex  justify-evenly'>
                                    <ListGroup.Item as='li' key={list.idx}>
                                        <li >{list.txt}</li>
                                    </ListGroup.Item>
                                </ListGroup>
                                
                            ))}
                        </div>
                        <div className="lg:ml-[80px] sm:ml-0 lg:mb-0 sm:mb-3">
                            <Box imageUrl={Image3}></Box>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="font-bold text-3xl lg:text-center sm:text-start mb-5">Happiness at your reach</h1>
                    <p className='mb-4'>Fly Fitness Factory operates and manages fitness facilities beyond the idea of a simple gym, it is geared towards enabling your happiness.</p>

                    <p className='mb-4'>Since launching of its first branch on the 1st of December, 2021 it has postioned itself to cater to the country’s growing fitness community. In addition, to providing excellent and effecient fitness services, it also geared towards contributing to the economic development of Nigeria and the world in general</p>

                    <p className='mb-4'>We are a physical fitness centre where we train, coach, help and push people to attain healthy lifestyle, a more balance and Fit body. 
                    Fly Fitness Factory is where lifestyle are changed for the better.</p>
                </div>
            </div>
            <div className="about-testimonial bg-gray-100 w-full">
                <Testimonial />
            </div>
        </>
    )
}
