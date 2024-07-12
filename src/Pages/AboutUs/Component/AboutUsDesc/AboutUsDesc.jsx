import React, { useEffect, useState } from 'react'
import aboutus from '../../../../assets/AboutUs/aboutUs.png'
import axios from 'axios'
const AboutUsDesc = () => {
    const [socialIcon, setSocialIcon] = useState([])


    const fetchSocialIcon = async () => {
        const response = await axios.get("http://localhost:8080/get-social-media-data")
        if (response.status === 200) {
            setSocialIcon(response.data.getdata)
        }
    }
    console.log(socialIcon)
    useEffect(() => {
        fetchSocialIcon()
    }, [])

    return (
        <div className='w-[85vw] flex justify-between mx-auto py-[60px] mt-3' id="about_us">
            <div className='w-[50%] '>
                <h1 className='text-[#3960C3] font-bold text-[24px]'>About Us</h1>
                <p className='w-[90%]'>Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.</p>

              
                    <ul className='flex mt-5 gap-x-[30px]'>
                        {socialIcon.map((data, i) => (
                            <li key={i}>
                                <a href={data.link}>
                                <img src={data.social_icon} alt={data.title} className='w-[33px] h-[33px]'/>
                                </a>
                            </li>

                        ))}
                    </ul>

            </div>
            <div className='w-[50%] box-border'>
                <img src={aboutus} alt="about-us" className='w-[95%]'/>
            </div>

        </div>
    )
}

export default AboutUsDesc
