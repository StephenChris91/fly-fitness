import React from 'react'

import {Container} from 'react-bootstrap'
import {Button} from 'flowbite-react'

//react-spring
import {animated, useSpring} from 'react-spring'

//styles
import './Hero.css'

export default function Hero({ upperText, mainText, lowerText }) {
    
    const fadeInTop = useSpring({
        from: {opacity: 0, marginTop: -20},
        to: {opacity: 1, marginTop: 0}
    })

    const fadeInLeft = useSpring({
        from: {marginLeft: -500, opacity: 0},
        to: {marginLeft: 0, opacity: 1}
    })

    return (
        <>
            <Container fluid className="hero-container flex flex-col text-center p-20 pt-20">
                <animated.h4 className="text-xl text-white mb-20" style={fadeInLeft}>{upperText}</animated.h4>
                <animated.h1 className="text-6xl text-white mb-20 font-extrabold" style={fadeInTop}>{mainText}</animated.h1>
                <animated.h4 className="text-white mb-5" style={fadeInLeft}>{lowerText}</animated.h4>
                <animated.div className='flex flex-col items-centre justify-center mx-auto' style={fadeInTop}>
                    <Button className='bg-border-lined' id='hero-btn'>VIEW DETAILS</Button>
                </animated.div>
            </Container>
        </>
    )
}
