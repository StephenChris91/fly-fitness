import React from 'react'


//styles

export default function Box({ cardHeader, cardPara, cardPara2, cardPara3}) {
    

    return (
        <div className="lg:w-full sm:w-[400px]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
                {cardHeader}
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400 lg:w-full sm:w-[300px]">
                <p className='mb-3'>{cardPara}</p>
                <p className='mb-3'>{cardPara2}</p>
                <p className='mb-3'>{cardPara3}</p>
            </div>
        </div>
    )
}