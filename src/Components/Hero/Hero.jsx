import { useNavigate } from 'react-router-dom'

import { Container, Button } from 'react-bootstrap'
//import Buttons from '../Button/Button'

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

    const navigate = useNavigate()

    return (
        <>
            <Container fluid className="hero-container flex flex-col text-center px-5 py-20">
                <animated.h4 className="text-xl text-white mb-20" style={fadeInLeft}>{upperText}</animated.h4>
                <animated.h1 className="text-4xl lg:text-6xl lg:w-[1200px] lg:mx-auto lg:text-center text-white mb-20 font-extrabold" style={fadeInTop}>{mainText}</animated.h1>
                <animated.h4 className="text-white mb-5" style={fadeInLeft}>{lowerText}</animated.h4>
                <animated.div className='flex flex-col items-centre justify-center mx-auto' style={fadeInTop}>
                    <Button variant='outline-warning'  onClick={() => navigate('/equipments')}>
                        VIEW DETAILS
                    </Button>
                </animated.div>
            </Container>
        </>
    )
}
