import React from 'react'
import { Container, Row, NavItem } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

//styles
import './navbar.css'

export default function Navbar() {
    

    return (
        <>
            <Container fluid className='navbar bg-sky-600 p-5'>
                <Container>
                    <nav>
                        <Row className='navbar-links text-center text-white'>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                            <NavLink to='/equipments' className='nav-link'>Equipments</NavLink>
                            <NavLink to='/Shop' className='nav-link'>Shop</NavLink>
                            <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                        </Row>  
                    </nav>
                </Container>
            </Container>
        </>
    )
}
