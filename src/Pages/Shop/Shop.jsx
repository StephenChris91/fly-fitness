import React from 'react'

//styles
import './Shop.css'



//components
import CardList from '../../Components/Card/CardList'
import Hero from '../../Components/Hero/Hero'

export default function Shop() {
    

    return (
        <>
            <Hero
                upperText="GET YOUR BODY IN SHAPE"
                mainText="WITH FLY FITNESS FACTORY  YOUR RESULTS JUST GOT EASIER" lowerText="You do the work, we guide you, support you, and help you attain your goals"
            />
            <div className='w-full'>
                <div className="shop-container py-40 flex items-center justify-evenly flex-wrap mx-auto">
                    <h1 className='text-center font-bold text-4xl'>Shop</h1>
                    <div className='py-12 flex items-center justify-evenly flex-wrap mx-auto'>
                        <CardList />
                    </div>
                </div>
            </div>
        </>
        
    )
}
