import React, { useEffect, useState } from 'react'
import aboutus from '../../../../assets/AboutUs/aboutUs.png'
import axios from 'axios'
const OurStory = () => {
    const [socialIcon, setSocialIcon] = useState([])


    return (
        <div className='w-[85vw] flex justify-between mx-auto py-[30px]' id='about_us'>
            <div className='bg-red w-[50%] py-5 box-border'>
                <img src={aboutus} alt="about-us" className='w-[90%] h-[100%]'/>


            </div>
            <div className='w-[50%] mt-3'>
                <h1 className='text-[#3960C3] font-bold text-[24px]'>Our Story</h1>
                <p className='w-[95%]'>Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.</p>
            </div>

        </div>
    )
}

export default OurStory
