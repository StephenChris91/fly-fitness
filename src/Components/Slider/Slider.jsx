


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
    photo: Boluwatife,
    name: "Boluwatife Christiana Ojo",
    role:"Instructor"
    },
    {
    photo: Essien,
    name: "Essien Ekponoimo Mfon",
    role:"Instructor"
    },
    {
    photo: Olokode,
    name: "Olokode Oluwatobi Samuel",
    role:"Supervisor"
    },
    {
    name: "Akanni Oluwasegun Kingsley",
    role:"Assistant Instructor",
    photo: Akanni
    },
    {
    name: "Oriolowo Selimat Omowunmi",
    role:" Nutritionist",
    photo: Oriola
    },
    {
    name: "Aluko Adebowale Joshua",
    role:"Graphics Designer",
    photo: Aluko
    },
    {
    name: "Aladesuyi Temilade Elizabeth",
    role:"Instructor",
    photo: Temilade
    },
    {
    name: "Olaitan Olawale Omolara",
    role: "PRO",
    photo: Olaitan
    },
    {
    name: "Adeogun Abiodun Emmanuel",
    role: "Boxing Coach", 
    photo: Adeogun
    },
    {
    name: "Nathaniel Ifeoluwa Akinduro",
    role: "Fitness Instructor",
    photo: Nathaniel
    },
    {
    name: "Jayesimi Omoshade Olufemi",
    role: "Secretary",
    photo: Jaiyesimi
    },
    {
    name: "Elijah Oluwafemi Adebayo",
    role: "Instructor",
    photo: Elijah
    },
    {
    name: "Adedoyin Aderele Junior",
    role: "Steward",
    photo: Adedoyin
    },
    {
    name: "Musbau Azeez Adewale",
    role: "Maintenance Personel", 
    photo: Musbau
    },
    
    {
    name: "Ogunniyi Kehinde Emmanuel",
    role: "Karate Coach",
    photo: Ogun
    },
    {
    name: "Adebisi Wasilat Adeola",
    role: "Steward",
    photo: Adebisi
    },
    {
    name: "Obangbade Nafisat Yetunde",
    role: "Steward",
    photo: Obangbade
    },
    {
    name: "Bolarinwa Muhammed Dolapo",
    role: "Assistant Instructor",
    photo: Bolarinwa
    },
    ]
    

    return (
        <Splide hasTrack={ false } aria-label="..." className='w-60 relative'>
            <SplideTrack>
                {allStaff.map(staff => (
                    <SplideSlide>
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