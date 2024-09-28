import React, { useEffect, useState } from 'react'
import aboutus from '../../../../assets/AboutUs/aboutUs.png'
import axios from 'axios'
const OurStory = () => {
    const [socialIcon, setSocialIcon] = useState([])


    return (
        <div className='w-[95vw] lg:w-[85vw] flex justify-between flex-wrap mx-auto  py-4 lg:py-8' id='about_us'>
            <div className=' w-[50%] py-5 box-border '>
                <img src={aboutus} alt="about-us" className='w-[90%] h-[100%] lg:block hidden' />
            </div>
            <div className='w-[100%] lg:w-[50%] mt-3 flex flex-col gap-4'>
                <h1 className='text-[#3960C3] lg:font-bold lg:text-3xl text-xl font-black 2xl:text-4xl'>Our Story</h1>
                <p className='w-full lg:w-[90%] lg:text-base font-semibold text-s py-4 2xl:text-lg'>Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.</p>
            </div>

        </div>
    )
}

export default OurStory
