import React from 'react'
import Hero from '../../Components/Hero/Hero'

import { Container, Row } from 'react-bootstrap'
import Box from '../../Components/Box/Box'
import Exercise from "../../Images/gym-2.jpg"

export default function Home() {
    

    return (
        <>
            <Hero 
               upperText="GET YOUR BODY IN SHAPE"
               mainText="WITH FLY FITNESS FACTORY 
               YOUR RESULTS JUST GOT EASIER"
               lowerText="You do the work, we guide you, support you, and help you 
               attain your goals"
            />
            <div className="mx-auto pt-20">
                <Container className="">
                    <h1 className="text-4xl mb-10 text-center mx-auto font-bold">OUR TRAINING PROGRAMS</h1>
                    <Box imageUrl={Exercise} boxHeader="AEROBICS" boxText="Your journey towards utmost fitness isn’t complete with-
                    out aerobics. No matter your age, weight or athletic
                    ability is good for you."/>
                </Container>
            </div>
        </>
    )
}
