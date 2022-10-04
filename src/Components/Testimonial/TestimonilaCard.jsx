import { Card } from 'flowbite-react'



export default function TestimonialCard({testimony, name, location}) {

   
    

    return (
        <div className='w-72 h-72'>
            <Card className='flex flex-col items-center gap-6 absolute'>
                <div className='bg-blue-700 rounded-[100px] h-20 w-20 relative top-[-60px] mx-auto'></div>
                <p className=" font-medium tracking-tight text-gray-900 dark:text-white">
                    <span className='text-2xl font-bold text-yellow-500'>"</span>{testimony}<span className='text-2xl font-bold text-yellow-500'>"</span>
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 relative bottom-0">
                    {`-${name}, ${location}`}
                </p>
            </Card>
        </div>
        
    )
}