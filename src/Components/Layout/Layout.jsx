import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


export default function Layout({ children }) {

   
    

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}