import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {Button} from 'flowbite-react'
import { Navbar } from 'flowbite-react'

//styles
import './navbar.css'

import Logo from '../../Images/logoWhite.png'


export default function Navigation() {
    

    return (
        <>
            <Container fluid className=' bg-sky-600 p-5'>
                <Navbar
                fluid={true}
                rounded={true}
                id='navbar'
                >
                <Navbar.Brand href="/">
                    <img
                    src={Logo}
                    className="mr-3 h-30 sm:h-9 logo"
                    alt="Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink
                    to="/"
                    className='text-white font-bold'
                    >
                    Home
                    </NavLink>
                    <NavLink to="/about" className='text-white font-bold'>
                    About
                    </NavLink>
                    <NavLink to="/equipments" className='text-white font-bold'>
                    Memberships
                    </NavLink>
                    <NavLink to="/shop" className='text-white font-bold'>
                    Shop
                    </NavLink>
                    <NavLink to="/staff" className='text-white font-bold'>
                    Staff
                    </NavLink>
                    <NavLink to="/contact" className='text-white font-bold'>
                    Contact
                    </NavLink>
                    <NavLink to='/signup'>
                        <Button className='bg-border-lined ml-auto' id='menu-btn'>
                            Register
                        </Button>
                    </NavLink>
                </Navbar.Collapse>
                
            </Navbar>
            </Container>

            
        </>
    )
}
