import Hero from '../../Components/Hero/Hero'

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

//styles
import './Staff.css'




export default function Slider({imageUrl}) {
    
const staffList = [ 
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
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className='bg-sky-600 w-full'>
                <h1 className="staff-header pt-20 text-white text-4xl font-bold text-center">Our Staff</h1>
                <div className="shop-container py-10 flex items-center justify-evenly flex-wrap mx-auto">
                    {staffList.map(staff => (
                        <div key={staff.id} className='mb-20 mx-[5px]'>
                            <img src={staff.photo} alt={staff.name} />
                            <h3 className='text-white text-center font-bold text-lg'>{staff.name}</h3>
                            <p className='text-white text-center'>{staff.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}