import React from 'react'


//styles

export default function Box({ cardHeader, cardPara }) {
    

    return (
        <div className="">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {cardHeader}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {cardPara}
            </p>
        </div>
    )
}