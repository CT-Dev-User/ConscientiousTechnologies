import React from 'react'

const Soluion = ({solutionImage, Soluion}) => {
  return (
    <div className='w-full py-14'>
        <div className='flex flex-wrap lg:w-[85%] mx-auto w-[90%] justify-between'>
      
                <div className='lg:w-[48%] h-auto md:h-[250px] lg:h-[300px] 2xl:h-[350px] w-[95%] bg-red-100 '>
                    <img src={solutionImage} alt="Case study insight" className='h-full w-full' />
                </div>
                <div className='w-[95%] lg:w-[48%] mt-5'>
                    <h3 className='text-base lg:text-[1.5rem] 2xl:text-[2rem] font-bold text-[#3970F0]'>Solution</h3>
                    <p className='text-base 2xl:text-xl font-normal w-full lg:w-[90%] mt-3'> {Soluion ? Soluion : "The client came up with an idea to build a mobile application tailored to the needs of retailers, wholesalers, and aspiring entrepreneurs. Our team communicated and understood the client’s requirements. We created an app that redefines business initiation by offering a zero-capital entry, supporting small business owners, students, and even housewives. The platform seamlessly integrates buyers and sellers, fostering a dynamic ecosystem with innovative features."}</p>

                </div>

        </div>
      
    </div>
  )
}

export default Soluion
