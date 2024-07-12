import React from 'react'

import { useNavigate } from 'react-router-dom'
const TypeOfSoft = () => {
    const navigate = useNavigate()

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[100px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Types of Software that CT Tests</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Click your software type to see how our testing experts handle its specifics.</p>
            </div>
        </div>
    )
}

export default TypeOfSoft
