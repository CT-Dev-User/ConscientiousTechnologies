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
        <footer className='w-screen bg-[#000000] lg:h-[28rem] text-white flex items-center h-auto py-14 lg:py-2'>
            <div className='lg:w-[85%] flex justify-between items-center h-[71%] flex-col lg:flex-row w-[90%] mx-auto'>
                <div className='lg:w-[30%] flex lg:flex-col lg:h-full w-full'>
                    <div className='lg:w-3/4 h-auto w-full'>
                        <img src={ctlogo} alt="conscientious technology" className='w-32' />
                        <p className='mt-2 text-base'>Mangalmurti Layout, Office No. 2, 1st floor, Trident Tower, near Kanhaiya Kunj Hotel, Mahesh Nagar, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607</p>
                        <div className='social-icon lg:flex w-full gap-5 mt-5 hidden'>
                            {socialIcon.map((items, i) => {
                                return (
                                    <img key={i} src={items.logo} alt={items.title} className='w-5 h-5' />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='lg:w-[65%] h-full w-full'>
                    <div className='w-full lg:w-[90%] h-full flex gap-5 items-center justify-around flex-wrap' >
                        {footerLinks.map((items, i) => {
                            return (
                                <div className='lg:w-1/5 lg:h-full w-full h-fit mt-2' key={i}>
                                    <h5 className='text-lg font-semibold'>{items.title}</h5>
                                    <ul className='flex gap-x-5 text-base w-full lg:flex-col flex-wrap lg:text-sm'>
                                        {items.subLink.map((link, i) => {
                                            return (
                                                <li className='list-none mt-2 font-normal text-base' key={i}>{link}</li>
                                            )
                                        })}
                                    </ul>

                                </div>
                            )
                        })}

                    </div>

                </div>

                <div className='lg:hidden social-icon w-full gap-x-5 mt-5 flex'>
                    {socialIcon.map((items, i) => {
                        return (
                            <img key={i} src={items.logo} alt={items.title} className='w-5 h-5' />
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
