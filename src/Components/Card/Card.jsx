import { Card } from 'flowbite-react'
import { Button } from 'react-bootstrap'
import  { useNavigate } from 'react-router-dom'


//images
//import Button from '../../Components/Button/Button'
import './Card.css'


export default function SingleCard({imageUrl, productName, productPrice}) {

   const navigate = useNavigate()
    

    return (
        <div className="max-w-sm mb-20">
            <Card
                className='mb-20'
                imgAlt={productName}
                imgSrc={imageUrl}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {productName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    {productPrice}
                </p>
                <div className='flex items-center justify-center mx-auto'>
                    <Button variant='outline-warning' onClick={() => navigate('/contact')}>Place Order</Button>
                </div>
            </Card>
        </div>
    )
}