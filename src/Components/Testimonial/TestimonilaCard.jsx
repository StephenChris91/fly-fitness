import { Card } from 'flowbite-react'



export default function TestimonialCard({testimony, name, location}) {

   
    

    return (
        <div className='shadow-lg w-72'>
            <Card className='flex flex-col gap-6 h-auto'>
                <p className=" font-medium tracking-tight text-gray-900 dark:text-white">
                    {testimony}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {`${name}, ${location}`}
                </p>
            
            </Card>
        </div>
        
    )
}