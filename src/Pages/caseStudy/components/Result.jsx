import React from 'react'

const Result = ({resultsImg1, resultsImg2, resultsImg3 }) => {
    return (
        <div className='w-screen h-auto bg-black py-14'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='text-4xl font-bold text-[#3970F0]' >Results</h1>
                <div className='flex w-full flex-wrap justify-between mt-5 gap-3'>
                    <div className='lg:w-[31%] md:w-[45%] w-full h-[350px] bg-red-400'>
                        <img src={resultsImg1} alt="" className='h-full w-full' />
                    </div>
                    <div className='lg:w-[31%] md:w-[45%] w-full h-[350px] bg-red-400'>
                    <img src={resultsImg2} alt="" className='h-full w-full' />
                    </div>
                    <div className='lg:w-[31%] md:w-[45%] w-full h-[350px] bg-red-400'>
                    <img src={resultsImg3} alt="" className='h-full w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
