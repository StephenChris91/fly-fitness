import React from 'react'

import {Container} from 'react-bootstrap'
import {Button} from 'flowbite-react'

//styles
import './Hero.css'

export default function Hero({ upperText, mainText, lowerText }) {
    

    return (
        <>
            <Container fluid className="hero-container flex flex-col text-center p-20 pt-20">
                <h4 className="text-xl text-white mb-20">{upperText}</h4>
                <h1 className="text-6xl text-white mb-20 font-extrabold	">{mainText}</h1>
                <h4 className="text-white mb-5">{lowerText}</h4>
                <div className='flex flex-col items-centre justify-center mx-auto'>
                    <Button className='bg-border-lined' id='hero-btn'>VIEW DETAILS</Button>
                </div>
            </Container>
        </>
    )
}
