import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {} from 'flowbite-react'
import { Navbar } from 'flowbite-react'

//helpers
import { useNavigate } from 'react-router-dom'

//styles
import './navbar.css'

import Logo from '../../Images/logoWhite.png'


export default function Navigation() {
    
    const navigate = useNavigate()

    return (
        <div className='bg-sky-600 px-10 mx-auto h-20'>
            <Navbar
            fluid={true}
            rounded={true}
            className='bg-sky-500 '
            id='navbar'
            >
            <div>
                <NavLink to="/">
                    <img
                    src={Logo}
                    className="mr-3 w-[150px] logo"
                    alt=" Logo"
                    />
                </NavLink>
            </div>
            
            <div className="flex md:order-2">
                <NavLink to='/signup'>
                    <Button variant='outline-warning' className='mr-5' onClick={() => navigate('/signup')}>
                        GET STARTED
                    </Button>
                </NavLink>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='text-white'>
                <NavLink 
                to='/'
                className='text-white hover:text-yellow-500 no-underline'
                >
                    Home
                </NavLink>
                <NavLink to="/about" className='text-white hover:text-yellow-500 no-underline'>
                    About
                </NavLink>
                <NavLink to="/equipments" className='text-white hover:text-yellow-500 no-underline'>
                    Membership
                </NavLink>
                <NavLink to="/staff" className='text-white hover:text-yellow-500 no-underline'>
                    Staff
                </NavLink>
                <NavLink to="/shop" className='text-white hover:text-yellow-500 no-underline'>
                    Shop
                </NavLink>
                <NavLink to="/contact" className='text-white hover:text-yellow-500 no-underline'>
                    Contact
                </NavLink>
            </Navbar.Collapse>
            </Navbar>
    
        </div>
    )
}
