import React from 'react'


//styles
import './box.css'
export default function Box({imageUrl}) {

   
    

    return (
        <div className='outer-box mx-auto' >
            <div className='inner-box relative mx-auto'>
                <div className='box-image'>
                    <img src={imageUrl} alt="" className='m-5 sm:w-[200px] lg:w-[500px]' />
                </div>
            </div>
        </div>
    )
}
