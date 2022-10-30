import { Carousel } from 'react-bootstrap'

//slider 
//import Carousel from "framer-motion-carousel";

//slider css
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
import './Equipement.css'



//images
import Equipment1 from '../../Images/equipemnt1.png'
import Equipment2 from '../../Images/equipemnt2.png'
import Equipment3 from '../../Images/equipemnt3.png'
import Equipment4 from '../../Images/equipemnt4.png'
import Equipment5 from '../../Images/equipemnt5.png'
import Equipment6 from '../../Images/equipemnt6.png'
import Equipment7 from '../../Images/equipemnt7.png'
import Equipment8 from '../../Images/equipemnt8.png'
import Equipment9 from '../../Images/equipemnt9.png'
import Equipment10 from '../../Images/equipemnt10.png'
import Equipment11 from '../../Images/equipemnt11.png'
import Equipment12 from '../../Images/equipemnt12.png'
import Equipment13 from '../../Images/equipemnt13.png'
import Equipment14 from '../../Images/equipemnt14.png'
import Equipment15 from '../../Images/equipemnt15.png'
import Equipment16 from '../../Images/equipemnt16.png'
import Equipment17 from '../../Images/equipemnt17.png'
import Equipment18 from '../../Images/equipemnt18.png'
import Equipment19 from '../../Images/equipemnt19.png'
import Equipment20 from '../../Images/equipemnt20.png'
import Equipment21 from '../../Images/equipemnt21.png'
import Equipment22 from '../../Images/equipemnt22.png'
import Equipment23 from '../../Images/equipemnt23.png'



export default function EquipmentSlider() {
    const sliderImages = [
        {
            id: 1,
            img: Equipment1
        },
        {
            id: 2,
            img: Equipment2
        },
        {
            id: 3,
            img: Equipment3
        },
        {
            id: 4,
            img: Equipment4
        },
        {
            id: 5,
            img: Equipment5
        },
        {
            id: 6,
            img: Equipment6
        },
        {
            id: 7,
            img: Equipment7
        },
        {
            id: 8,
            img: Equipment8
        },
        {
            id: 9,
            img: Equipment9
        },
        {
            id: 10,
            img: Equipment10
        },
        {
            id: 11,
            img: Equipment11
        },
        {
            id: 12,
            img: Equipment12
        },
        {
            id: 13,
            img: Equipment13
        },
        {
            id: 14,
            img: Equipment14
        },
        {
            id: 15,
            img: Equipment15
        },
        {
            id: 16,
            img: Equipment16
        },
        {
            id: 17,
            img: Equipment17
        },
        {
            id: 18,
            img: Equipment18
        },
        {
            id: 19,
            img: Equipment19
        },
        {
            id: 20,
            img: Equipment20
        },
        {
            id: 21,
            img: Equipment21
        },
        {
            id: 22,
            img: Equipment22
        },
        {
            id: 23,
            img: Equipment23
        },
    ]

    return (
        <>
            <Carousel>
                {sliderImages.map(item => (
                        <Carousel.Item>
                            <img
                            className="w-100"
                            src={item.img}
                            alt={item.img}
                            width='400px'
                            />
                        </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}