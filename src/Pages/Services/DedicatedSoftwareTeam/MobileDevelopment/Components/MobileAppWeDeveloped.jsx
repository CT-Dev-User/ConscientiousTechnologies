import React from 'react'



import { useNavigate, useParams } from 'react-router-dom'
const MobileAppWeDeveloped = () => {
    const navigate = useNavigate()
    return (

        <div className='w-screen h-auto bg-black text-white lg:pt-14 pb-7 pt-20 box-border'>
            <div className='lg:w-[85%] w-[90%] mx-auto px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-white text-[#3970F0]'>Explore Our Software Development Offering</h1>
                <p className='text-base lg:mt-5 mt-2 font-normal'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
            </div>
        </div>
    )
}

export default MobileAppWeDeveloped
