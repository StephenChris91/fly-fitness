import { NavLink } from 'react-router-dom'
import { HiMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

//logo
import Logo from '../../Images/logo.png'


export default function Footer() {

   
    

    return (
        <div className='footer-section px-10 py-12' >
            <footer className='flex justify-around gap-12 lg:flex-row sm:flex-col'>
                <div className="footer-div-sections">
                    <img src={Logo} alt='footer-logo' className='mt-[-10px] lg:ml-0 sm:ml-[-50px]' />
                </div>
                <div className="footer-div-sections">
                    <h1 className='font-bold text-lg mb-10'>Quick Links</h1>
                    <div className='flex flex-col gap-4 font-bold'>
                        <NavLink to='/' className='text-black no-underline'>Home</NavLink>
                        <NavLink to='/about' className='text-black no-underline'>About</NavLink>
                        <NavLink to='/staff' className='text-black no-underline'>Staff</NavLink>
                    </div>
                    
                </div>
                <div className="footer-div-sections">
                    <h1 className='font-bold text-lg mb-10'>Contact</h1>
                    <div className='footer-contact-info flex flex-col gap-4'>
                        <div className='flex items-start justify-start gap-4'>
                            <HiMail className='m-0 text-2xl'/><span className='m-0'>info@flyfitness.com</span>
                        </div>
                        <div className='flex items-start justify-start gap-4'>
                            <HiOutlinePhone className='m-0 text-2xl'/><span className='m-0'>08054224781</span>
                        </div>
                        <div className='flex items-start justify-start gap-4'>
                            <HiOutlineLocationMarker className='ml-0 text-2xl'/><p>Ariwola House, 
                                <br />Opposite Ansarudeen School <br/>Sango-Eleyele Road,
                                <br />Ibadan, Nigeria.</p>
                        </div>
                        <div className='flex items-start justify-start gap-4'>
                            <HiOutlineLocationMarker className='ml-0 text-2xl'/><p>Ground Floor, 
                            <br />Providence Court Building
                            <br />Ajibade Junction, Mokola Road
                            <br />Ibadan, Nigeria.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}