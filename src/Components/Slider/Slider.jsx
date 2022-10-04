


//icons
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

//slider 
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

//slider css
import '@splidejs/react-splide/css/core';

//Images
import Adebisi from '../../Images/Adebisi.png'
import Adedoyin from '../../Images/Adedoyin.png'
import Adeogun from '../../Images/Adeogun.png'
import Akanni from '../../Images/akanni.png'
import Aluko from '../../Images/Aluko.png'
import Bolarinwa from '../../Images/Bolarinwa.png'
import Elijah from '../../Images/Elijah.png'
import Essien from '../../Images/Essien.png'
import Jaiyesimi from '../../Images/Jaiyesimi.png'
import Musbau from '../../Images/Musbau.png'
import Nathaniel from '../../Images/Nathaniel.png'
import Obangbade from '../../Images/Obangbade.png'
import Ogun from '../../Images/Ogun.png'
import Olaitan from '../../Images/Olaitan.png'
import Olokode from '../../Images/Olokode.png'
import Oriola from '../../Images/Oriola.png'
import Temilade from '../../Images/Temilade.png'
import Boluwatife from '../../Images/Boluwatife.png'




export default function Slider({imageUrl}) {
    
const allStaff = [ 
    {
    id: 1,
    photo: Boluwatife,
    name: "Boluwatife Christiana Ojo",
    role:"Instructor"
    },
    {
    id: 2,
    photo: Essien,
    name: "Essien Ekponoimo Mfon",
    role:"Instructor"
    },
    {
    id: 3,
    photo: Olokode,
    name: "Olokode Oluwatobi Samuel",
    role:"Supervisor"
    },
    {
    id: 4,
    name: "Akanni Oluwasegun Kingsley",
    role:"Assistant Instructor",
    photo: Akanni
    },
    {
    id: 5,
    name: "Oriolowo Selimat Omowunmi",
    role:" Nutritionist",
    photo: Oriola
    },
    {
    id: 6,
    name: "Aluko Adebowale Joshua",
    role:"Graphics Designer",
    photo: Aluko
    },
    {
    id: 7,
    name: "Aladesuyi Temilade Elizabeth",
    role:"Instructor",
    photo: Temilade
    },
    {
    id: 8,
    name: "Olaitan Olawale Omolara",
    role: "PRO",
    photo: Olaitan
    },
    {
    id: 9,
    name: "Adeogun Abiodun Emmanuel",
    role: "Boxing Coach", 
    photo: Adeogun
    },
    {
    id: 10,
    name: "Nathaniel Ifeoluwa Akinduro",
    role: "Fitness Instructor",
    photo: Nathaniel
    },
    {
    id: 11,
    name: "Jayesimi Omoshade Olufemi",
    role: "Secretary",
    photo: Jaiyesimi
    },
    {
    id: 12,
    name: "Elijah Oluwafemi Adebayo",
    role: "Instructor",
    photo: Elijah
    },
    {
    id: 13,
    name: "Adedoyin Aderele Junior",
    role: "Steward",
    photo: Adedoyin
    },
    {
    id: 14,
    name: "Musbau Azeez Adewale",
    role: "Maintenance Personel", 
    photo: Musbau
    },
    
    {
    id: 15,
    name: "Ogunniyi Kehinde Emmanuel",
    role: "Karate Coach",
    photo: Ogun
    },
    {
    id: 16,
    name: "Adebisi Wasilat Adeola",
    role: "Steward",
    photo: Adebisi
    },
    {
    id: 17,
    name: "Obangbade Nafisat Yetunde",
    role: "Steward",
    photo: Obangbade
    },
    {
    id: 18,
    name: "Bolarinwa Muhammed Dolapo",
    role: "Assistant Instructor",
    photo: Bolarinwa
    },
    ]
    

    return (
        <Splide hasTrack={ false } aria-label="..." className='w-60 relative'>
            <SplideTrack>
                {allStaff.map(staff => (
                    <SplideSlide key={staff.id}>
                        <img src={staff.photo} alt={staff.name} className=''/>
                        <h4 className='font-bold text-lg'>{staff.name}</h4>
                        <p className='font-normal'>{staff.role}</p>
                    </SplideSlide>
                ))}
                
            </SplideTrack>

            <div className="splide__arrows absolute right-2 top-72">
                <button className="splide__arrow splide__arrow--prev"><HiArrowNarrowLeft /></button>
                <button className="splide__arrow splide__arrow--next"><HiArrowNarrowRight /></button>
            </div>
            
        </Splide>
    )
}