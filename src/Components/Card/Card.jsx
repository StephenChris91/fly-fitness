import { Card } from 'flowbite-react'


//images
//import Button from '../../Components/Button/Button'


export default function SingleCard({imageUrl, productName, productPrice}) {

   
    

    return (
        <div className="max-w-sm mb-20">
            <Card
                className='mb-20'
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={imageUrl}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    {productName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
                    {productPrice}
                </p>
            </Card>
        </div>
    )
}