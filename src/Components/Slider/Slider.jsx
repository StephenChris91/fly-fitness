

//icons
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

//slider 
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

//slider css
import '@splidejs/react-splide/css/core';

//Images
import Manager1 from '../../Images/manager1.png'
import Manager2 from '../../Images/manager2.png'
import Manager3 from '../../Images/manager3.png'
import Manager4 from '../../Images/manager4.png'
import Manager5 from '../../Images/manager5.png'




export default function Slider({imageUrl}) {
    
const allStaff = [ 
    {
        id: 5,
        name: "Bolarinwa Kashif O.",
        role:"Founder & CEO",
        email: 'mistarfly@flyfitnessfactory.com ',
        photo: Manager5,
        instagram: 'https://instagram.com/mistarfly?igshid=YmMyMTA2M2Y=',
        twitter: 'https://twitter.com/mistarfly?s=21&t=l1L5ef8ao6eJzj9gk8IO7w',
        facebook: 'https://www.facebook.com/mistarflyy'
    },
    {
    id: 2,
    photo: Manager2,
    name: "Akanni Grace O.",
    email: 'omotara@flyfitnessfactory.com',
    role:"Co-Founder & Executive Director",
    instagram: 'https://instagram.com/theladymotara?igshid=YmMyMTA2M2Y=',
    twitter: 'https://twitter.com/_theladymo?s=21&t=TlLs-OSHUC4x3cU0yfaIFw',
    facebook: 'https://www.facebook.com/profile.php?id=100059488473839'
    },
    {
    id: 4,
    name: "Bolarinwa Haishah O",
    role:"Executive Board Member",
    email: 'nana@flyfitnessfactory.com',
    photo: Manager4,
    facebook: 'https://www.facebook.com/haishah.badmus'
    },
    {
    id: 1,
    photo: Manager1,
    name: "Yusuf Balikis O",
    email: 'omidan@flyfitnessfactory.com',
    role:"Auditor General",
    },
    {
    id: 3,
    photo: Manager3,
    name: "Olokede Oluwatobi Samuel",
    email: 'oluwatobi@flyfitnessfactory.com',
    role:"Supervisor",
    },
    
    
    ]
    

    return (
        <Splide hasTrack={ false } aria-label="..." className='lg:w-[500px] sm:w-60 lg:ml-0 sm:ml-0 relative'>
            <SplideTrack>
                {allStaff.map(staff => (
                    <SplideSlide key={staff.id}>
                        <img src={staff.photo} alt={staff.name}/>
                        <h4 className='font-bold text-lg'>{staff.name}</h4>
                        <p className='font-normal'>{staff.role}</p>
                        <div className='flex items-start justify-start'>
                            {
                                staff.facebook ?
                                <a href={`${staff.facebook}`} target='_blank' rel='noreferrer'>
                                    <FaFacebookSquare className='text-2xl text-blue-700'/>
                                </a> :
                                ''
                            }
                            {
                                staff.instagram ?
                                <a href={`${staff.instagram}`} target='_blank' rel='noreferrer'>
                                    <FaInstagramSquare className='text-2xl text-blue-700'/>
                                </a> :
                                ''
                            }
                            {
                                staff.twitter ?
                                <a href={`${staff.twitter}`} target='_blank' rel='noreferrer'>
                                    <FaTwitterSquare className='text-2xl text-blue-700'/>
                                </a> :
                                ''
                            }                        
                        </div>
                    </SplideSlide>
                ))}
                
            </SplideTrack>

            <div className="flex justify-between splide__arrows absolute right-2 lg:top-[500px] sm:top-60 z-10">
                <button className="splide__arrow splide__arrow--prev bg-transparent "><HiArrowNarrowLeft /></button>
                <button className="splide__arrow splide__arrow--next bg-transparent "><HiArrowNarrowRight /></button>
            </div>
            
        </Splide>
    )
}