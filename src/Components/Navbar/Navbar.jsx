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
        <div className='bg-sky-600 px-10 mx-auto'>
            <Navbar
            fluid={true}
            rounded={true}
            className='bg-sky-500'
            id='navbar'
            >
            <div>
                <NavLink to="/">
                    <img
                    src={Logo}
                    className="mr-3 h-6 sm:h-9"
                    alt=" Logo"
                    />
                </NavLink>
            </div>
            
            <div className="flex md:order-2">
                <NavLink to='/signup'>
                    <Button variant='outline-warning' className='' onClick={() => navigate('/signup')}>
                        Get started
                    </Button>
                </NavLink>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='text-white'>
                <NavLink 
                to='/'
                active={true}
                className='text-white hover:text-yellow-500'
                >
                    Home
                </NavLink>
                <NavLink to="/about" className='text-white hover:text-yellow-500'>
                    About
                </NavLink>
                <NavLink to="/equipments" className='text-white hover:text-yellow-500'>
                    Membership
                </NavLink>
                <NavLink to="/staff" className='text-white hover:text-yellow-500'>
                    Staff
                </NavLink>
                <NavLink to="/shop" className='text-white hover:text-yellow-500'>
                    Shop
                </NavLink>
                <NavLink to="/staff" className='text-white hover:text-yellow-500'>
                    Contact
                </NavLink>
            </Navbar.Collapse>
            </Navbar>
    
        </div>
    )
}
