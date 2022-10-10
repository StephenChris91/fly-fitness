import React from 'react'

import {Container} from 'react-bootstrap'
import Button from '../Button/Button'

//styles
import './Hero.css'

export default function Hero({ upperText, mainText, lowerText }) {
    

    return (
        <>
            <Container fluid className="hero-container flex flex-col text-center p-20 pt-20">
                <h4 className="text-xl text-white mb-20">{upperText}</h4>
                <h1 className="text-6xl text-white mb-20 font-extrabold	">{mainText}</h1>
                <h4 className="text-md text-white mb-5">{lowerText}</h4>
                <Button>GET STARTED</Button>
            </Container>
        </>
    )
}
