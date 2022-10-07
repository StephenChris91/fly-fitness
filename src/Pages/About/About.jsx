import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Box from '../../Components/Box/Box'
import TextCard from '../../Components/TextCard/TextCard'


//styles
import './About.css'

//Images
import Image1 from '../../Images/gym-3.jpg'
import Image2 from '../../Images/exercise-3.jpg'



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
            <div className='about-container mt-20 mx-auto'>
                <h1 className='font-bold text-4xl text-center mb-10'>ABOUT</h1>
                <div className="about-us mb-10">
                    <p className='font-normal mb-5'>Health and well-being contribute significantly to the overall quality life of an individual. And one of the many ways to achieve this exercise, Yet it can prove daunting. It requires a lot from an individual; mentally; physically and financially, to make that life-altering decision to indulge in exerciseut once that decision is made, there is a noticeable improvement in the general well-being of the individual. Therefore, it becomes imperative that mprove your health, overall well-being, productivity and performance with the leaders in fitness solutions, FLY FITNESS FACTORY.</p>
                    <p className='font-normal mb-5'>We have integrated health & fitness solutions offering that is easily accessible, affordable and designed to meet an individual’s specific needs. Wehave taken it upon ourselves to enable people to be the bet versions of themselves.</p>
                    <p className='font-normal'>Transforming your body, mind and starting your journey to fit, happy, positive, healthier and better you</p>
                </div>
                
                <div className='benefits mb-20'>
                    <h1 className='font-bold text-2xl mb-2'>We are all about</h1>
                    <div>
                        <div className='flex flex-col justify-evenly gap-3'>
                            <p>Personalized Training Programs.</p>
                            <p>On-going wellness management</p>
                            <p>Supportive community/Group training session.</p>
                            <p>Recreational actvities (playstation, table tennis, dart, ludo games and more)</p>
                            <p>Wide range of Programs.</p>
                            <p>Online training session</p>
                            <p>Nutritional guide and diet plan.</p>
                        </div>
                        <div className="empty"></div>
                    </div>
                    
                </div>
                <div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className="mr-80">
                            <Box imageUrl={Image2}></Box>
                        </div>
                        <div className='text-container'>
                            <TextCard cardHeader='OUR VISION' cardPara='That one day, Every day, Every Member of the community and
                            those who will visit where we operate shall understand the
                            need for Healthy Lifestyle and strive to live one.' />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className='text-container'>
                            <TextCard cardHeader='OUR MISSION' cardPara='That one day, Every day, Every Member of the community and
                            those who will visit where we operate shall understand the
                            need for Healthy Lifestyle and strive to live one.' cardPara2='In a clean, comfortale ambience that enhances the experience, satisfaction and perception of value by our patrons.' cardPara3='In doing this, we are driven by respect for our people, the environment, internal and external customers as well as Stakeholders.' />
                        </div>
                        <div className="ml-80">
                            <Box imageUrl={Image1}></Box>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className="mr-80">
                            <Box imageUrl={Image1}></Box>
                        </div>
                        <div className='text-container'>
                            <TextCard cardHeader='CORE VALUES'  cardPara='The traits or qualities that we consider not just worthwhile
                            they represent for us as an organization. The highest priorities deeply held beliefs, core, fundamental driving forces' cardPara2='They are at the heart of what Fly Fitness Factory and it’s
                            employees stands for:'/>
                            {valuesList.map(list => (
                                <ul key={list.idx}>
                                    <li >{list.txt}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-auto mb-32">
                        <div className='text-container'>
                            <TextCard cardHeader='CORE VALUES' />
                            {goalsLists.map(list => (
                                <ul key={list.idx}>
                                    <li >{list.txt}</li>
                                </ul>
                            ))}
                        </div>
                        <div className="ml-[600px]">
                            <Box imageUrl={Image1}></Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
