import React from 'react'


//components
import Card from './Card'
import Button from '../../Components/Button/Button'



//images
import Product1 from '../../Images/Products1.png'
import Product2 from '../../Images/Products2.png'
import Product3 from '../../Images/Products3.png'
import Product4 from '../../Images/Products4.png'
import Product5 from '../../Images/Products5.png'
import Product6 from '../../Images/Products6.png'
import Product7 from '../../Images/Products7.png'
import Product8 from '../../Images/Products8.png'
import Product9 from '../../Images/Products9.png'


export default function CardList  () {
    const productList = [
        {
        id: 1,
        name: 'Jacket',
        image: Product1,
        price: 10000
        },
        {
        id: 2,
        name: 'Fly Round Neck',
        image: Product2,
        price: 8000
        },
        {
        id: 3,
        name: 'Face Cap',
        image: Product3,
        price: 4000
        },
        {
        id: 4,
        name: 'Longsleeve Shirt',
        image: Product4,
        price: 12000
        },
        {
        id: 5,
        name: 'Swaet shirt',
        image: Product5,
        price: 8000
        },
        {
        id: 6,
        name: 'Fly Round Neck',
        image: Product6,
        price: 9000
        },
        {
        id: 7,
        name: 'Beenie',
        image: Product7,
        price: 4000
        },
        {
        id: 8,
        name: 'Hoodie',
        image: Product8,
        price: 8000
        },
        {
        id: 9,
        name: 'Fly Bottle Water',
        image: Product9,
        price: 6000
        },
]

    return (
        <>
            {productList.map(product => (
                <div className=''>
                    <Card 
                        imageUrl={product.image} 
                        productName={product.name} 
                        productPrice={product.price}
                        className='mb-20'>
                        <Button id='card-btn'>Place Order</Button>
                    </Card>
                </div>
            ))}
        </>
    )
}