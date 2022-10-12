import React from 'react'
import Navigation from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


export default function Layout({ children }) {

   
    

    return (
        <div>
            <Navigation />
            {children}
            <Footer />
        </div>
    )
}