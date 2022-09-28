import React from 'react'


//styles
import './box.css'
export default function Box({imageUrl, boxHeader, boxText}) {
    

    return (
        <div className='outer-box mx-auto '>
            <div className='inner-box relative flex flex-row justify-between w-2/3 mx-auto'>
                <div className='box-image mr-32'>
                    <img src={imageUrl} alt="" className=' m-10' />
                </div>
                <div className='box-texts pt-24'>
                    <h2 className='text-gray-900 text-3xl font-bold mb-5'>{boxHeader}</h2>
                    <p className="text-gray-800">{boxText}</p>
                </div>
                
            </div>
        </div>
    )
}
