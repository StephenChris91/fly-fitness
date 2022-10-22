


//icons
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

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
    id: 1,
    photo: Manager1,
    name: "Yusuf Balikis O",
    email: 'omidan@flyfitnessfactory.com',
    role:"Auditor General"
    },
    {
    id: 2,
    photo: Manager2,
    name: "Akanni Grace O.",
    email: 'omotara@flyfitnessfactory.com',
    role:"Co-Founder & Executive Director"
    },
    {
    id: 3,
    photo: Manager3,
    name: "Olokede Oluwatobi Samuel",
    email: 'oluwatobi@flyfitnessfactory.com',
    role:"Supervisor"
    },
    {
    id: 4,
    name: "Bolarinwa Haishah O",
    role:"Executive Board Member",
    email: 'nana@flyfitnessfactory.com',
    photo: Manager4
    },
    {
    id: 5,
    name: "Bolarinwa Kashif O.",
    role:"Founder & CEO",
    email: 'mistarfly@flyfitnessfactory.com ',
    photo: Manager5
    }
    ]
    

    return (
        <Splide hasTrack={ false } aria-label="..." className='lg:w-60 sm:w-80 lg:ml-0 sm:ml-40 relative'>
            <SplideTrack>
                {allStaff.map(staff => (
                    <SplideSlide key={staff.id}>
                        <img src={staff.photo} alt={staff.name}/>
                        <h4 className='font-bold text-lg'>{staff.name}</h4>
                        <p className='font-normal'>{staff.role}</p>
                    </SplideSlide>
                ))}
                
            </SplideTrack>

            <div className="splide__arrows absolute right-2 lg:top-72 sm:top-80">
                <button className="splide__arrow splide__arrow--prev"><HiArrowNarrowLeft /></button>
                <button className="splide__arrow splide__arrow--next"><HiArrowNarrowRight /></button>
            </div>
            
        </Splide>
    )
}