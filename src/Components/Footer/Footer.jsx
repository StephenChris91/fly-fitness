import { NavLink } from 'react-router-dom'
import { HiMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

//logo
import Logo from '../../Images/logo.png'


export default function Footer() {

   
    

    return (
        <div className='footer-section px-64 py-32' >
            <footer className='flex justify-between gap-5'>
                <img src={Logo} alt='footer logo' className='w-70 h-20 mt-[-12px]'/>
                <div className='flex flex-col justify-between gap-4'>
                    <h1 className='text-2xl font-bold text-left'>Quick Links</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/staff'>Staff</NavLink>
                </div>
                <div className='flex flex-col justify-between gap-4'>
                    <h1 className='text-2xl font-bold text-left mb-0'>Contact</h1>
                    <div className='flex items-center justify-between gap-5 text-left mt-[-30px]'>
                        <HiMail className='text-blue-800 text-2xl'/>
                        <p>info@flyfitnessfactory.com</p>
                    </div>
                    <div className='flex items-center justify-between gap-5 text-left mt-[-30px]'>
                        <HiOutlinePhone className='text-blue-800 text-2xl'/>
                        <p>info@flyfitnessfactory.com</p>
                    </div>
                    <div className='flex items-center justify-between gap-5 text-left mt-[-30px]'>
                        <HiOutlineLocationMarker className='text-blue-800 text-2xl' />
                        <p>info@flyfitnessfactory.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}