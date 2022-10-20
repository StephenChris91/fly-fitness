import React from 'react'


//styles
import './box.css'
export default function Box({imageUrl}) {

   
    

    return (
        <div className='outer-box mx-auto' >
            <div className='inner-box relative mx-auto'>
                <div className='box-image'>
                    <img src={imageUrl} alt="" className='m-10 sm:w-[300px] lg:w-[500px]' />
                </div>
            </div>
        </div>
    )
}
