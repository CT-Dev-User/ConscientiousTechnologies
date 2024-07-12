import React from 'react'
import ctlogo from '../assets/heroSectionImg/CTLogo1@2x-8.png';
import instaIcon from '../assets/footer/insta-icon.png'
import fbIcon from '../assets/footer/fb-icon.png'
import linkedin from '../assets/footer/linkedin.png'
import youtube from '../assets/footer/youtube-icon.png'

const Footer = () => {
    const socialIcon = [{ title: "instagram", logo: instaIcon }, { title: "instagram", logo: fbIcon }, { title: "instagram", logo: youtube }, { title: "instagram", logo: linkedin }]

    const footerLinks = [{ title: "Services", subLink: ["Dedicated Software Team", "Application Development", "UI/UX Design Services", "Cloud Services", "E-commerce", "QA and Services", "AI and ML"] }, { title: "Industries", subLink: ["B2B", "Fintech", "Software", "SaaS", "Startup", "Esports", "E-Commerce"] }, { title: "About", subLink: ["Company", "Events", "Success Stories", "Benefits", "Careers"] }]

    return (
        <footer className='w-[100vw] bg-[#000000] h-[430px] text-[white] flex items-center md:h-auto md:py-[60px]'>
            <div className='w-[85vw] flex justify-between items-center h-[71%]  md:flex-col md:w-[90%] ml-[100px] md:ml-[20px]'>
                <div className='w-[25%] flex flex-col h-[100%] md:w-[100%]'>
                    <div className='w-[75%] h-[auto] md:w-full'>
                        <img src={ctlogo} alt="conscientious technology" className='w-[130px]' />
                        <p className='mt-[10px] text-[14px] '>Mangalmurti Layout, Office No. 2, 1st floor, Trident Tower, near Kanhaiya Kunj Hotel, Mahesh Nagar, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607</p>
                        <div className='social-icon flex w-[100%] gap-[20px] mt-[20px] md:hidden'>
                            {socialIcon.map((items, i) => {
                                return (
                                    <img key={i} src={items.logo} alt={items.title} className='w-[20px] h-[20px]' />
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div className='w-[65%] h-[100%] md:w-[100%] md:mt-[20px]'>
                    <div className='w-[90%] h-[100%] flex gap-[20px] items-center justify-around flex-wrap md:w-[100%]' >
                        {footerLinks.map((items, i) => {
                            return (
                                <div className='w-[20%] h-[100%] md:w-[100%] md:h-[fit-content]' key={i}>
                                    <h5 className='text-[16px] font-semibold'>{items.title}</h5>
                                    <ul className='md:flex md:gap-x-[20px] md:text-[14px] md:w-[100%]'>
                                        {items.subLink.map((link, i) => {
                                            return (
                                                <li className='list-none mt-2 font-normal text-[14px]' key={i}>{link}</li>
                                            )
                                        })}
                                    </ul>

                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className='hidden social-icon w-[100%] gap-x-[20px] mt-[20px] md:flex'>
                    {socialIcon.map((items, i) => {
                        return (
                            <img key={i} src={items.logo} alt={items.title} className='w-[20px] h-[20px]' />
                        )
                    })}
                </div>
            </div>


        </footer>
    )
}

export default Footer
