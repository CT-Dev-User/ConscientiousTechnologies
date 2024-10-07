import React from 'react'

import { useNavigate } from 'react-router-dom'
const TypeOfSoft = () => {
    const navigate = useNavigate()

    return (

        <div className='w-screen bg-[black] text-[white] pt-10 pb-8'>
            <div className='w-[90%] lg:w-[85%] mx-auto px-0 lg:px-3 '>
                <h1 className='lg:text-3xl font-bold text-2xl'>Types of Software that CT Tests</h1>
                <p className='text-sm lg:mt-5 mt-2 font-normal'>Click your software type to see how our testing experts handle its specifics.</p>
            </div>
        </div>
    )
}

export default TypeOfSoft
