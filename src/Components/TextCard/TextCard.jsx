import React from 'react'


//styles

export default function Box({ cardHeader, cardPara, cardPara2, cardPara3}) {
    

    return (
        <div className="">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
                {cardHeader}
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
                <p className='mb-3'>{cardPara}</p>
                <p className='mb-3'>{cardPara2}</p>
                <p className='mb-3'>{cardPara3}</p>
            </div>
        </div>
    )
}