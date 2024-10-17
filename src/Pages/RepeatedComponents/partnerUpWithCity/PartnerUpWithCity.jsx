import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import partner from "./partnerwithcity.png"
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const PartnerUpWithCity = () => {
    const sliderRef = useRef(null);
    const sliderRefleaders = useRef(null);
    const [partnerUpData, setPartnerUpData] = useState([]);
  
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 cursor-pointer z-0 hidden lg:block"
        onClick={onClick}>
        <div className="p-1 box-border w-fit  rounded-[50%] flex justify-center items-center">
          <FaAngleRight className="text-black text-[2rem] hover:text-[#0466C1] " />
        </div>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 cursor-pointer z-0 hidden lg:block"
        onClick={onClick}>
        <div className="p-1 box-border w-fit rounded-[50%] flex justify-center items-center">
          <FaAngleLeft className="text-black text-[2rem] hover:text-[#0466C1] "  />
        </div>
      </div>
    );
  };

    const fetchPartnerUpData = async () => {
        try {
            const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-partner-up-data");
            if (response.status === 200) {
                setPartnerUpData(response.data.getdata);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPartnerUpData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                },
            },
        ],
    };


    const settingsleaders = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                },
            },
        ],
    };
    return (
        <div className='pt-10 box-border w-screen'>
            <div className='lg:w-[85%] w-[95%] mx-auto '>
                <h1 className=' font-bold lg:text-3xl text-xl 2xl:text-[2.2rem] mb-[40px]'>Why Partner Up with CT ?</h1>
                <div className='w-[95%] lg:mx-auto lg:h-[70vh] flex gap-[20px] h-[30vh]'>
                    <div className='lg:w-[48%] h-[100%] flex flex-col gap-[20px] w-[100%] text-white]'>
                        <div className='w-[100%] h-[48%] flex gap-[20px]'>
                            <div className='w-[48%] h-[100%] bg-[#FF6161] flex flex-col justify-center items-center '><h1 className='lg:text-lg text-sm 2xl:text-[2rem]'>750+</h1><p className='mt-6 lg:text-lg text-sm 2xl:text-[1.5rem]'>IT Pros</p></div>
                            <div className='w-[48%] h-[100%] bg-[#1E8DCB] flex flex-col justify-center items-center '><h1 className='lg:text-lg text-sm 2xl:text-[2rem]'> 550+</h1><p className='lg:text-lg text-sm 2xl:text-[1.5rem] mt-5'>Developers</p></div>
                        </div>
                        <div className='w-[100%] h-[48%] flex gap-[20px]'>
                            <div className='w-[48%] h-[100%] bg-[#23B14B] flex flex-col justify-center items-center'><h1 className='lg:text-lg text-sm 2xl:text-[2rem]'>60+</h1><p className='lg:text-lg text-sm 2xl:text-[1.5rem] mt-5'>Project Managers</p></div>
                            <div className='w-[48%] h-[100%] bg-[#D14CFF] flex flex-col justify-center items-center'><h1 className='lg:text-lg text-sm 2xl:text-[2rem]'>Certified</h1><p className='lg:text-lg text-sm 2xl:text-[1.5rem] mt-5'>Platforms Experts</p></div>
                        </div>
                    </div>
                    <div className='w-[50%] h-[100%] bg-[green] lg:block hidden'>
                        <img src={partner} alt="partner up with city" className='w-[100%] h-[100%]' />
                    </div>
                </div>
                <div className='w-[100%] my-10 lg:my-14'>
                    <h1 className='font-bold lg:text-3xl text-xl 2xl:text-[2rem]'>Guaranteed service quality</h1>
                    <div className="paretndiv w-[100%] mt-7">
                        <div className="w-[100%] flex gap-[10px]">
                            <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                            <p className="w-[90%] lg:text-lg text-sm 2xl:text-[1rem] font-semibold">Quality-first approach based on a mature ISO 9001-certified quality management system.</p>
                        </div>

                        <div className="mt-[10px] flex gap-[10px]">
                            <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                            <p className="w-[90%] lg:text-lg text-sm 2xl:text-[1rem] font-semibold">
                                ISO 27001-certified security management that relies on comprehensive policies and processes, advanced security technology, and skilled professionals.
                            </p>
                        </div>

                        <div className="mt-[10px] flex gap-[10px]">
                            <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                            <p className="w-[90%] lg:text-lg text-sm 2xl:text-[1rem] font-semibold">
                                A full-scale PMO able to carry out even the most complex projects.
                            </p>
                        </div>
                        <div className="mt-[10px] flex gap-[10px]">
                            <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                            <p className="w-[90%] lg:text-lg text-sm 2xl:text-[1rem] font-semibold">
                                A leading outsourcing provider featured on the Global Outsourcing 100 list by IAOP.
                            </p>
                        </div>
                    </div>
                </div>
                {
                    partnerUpData.map((partner, index) => {
                        return (
                            <div key={`partner-${index}`}>
                                <div className='w-full py-4 ' >
                                    <h1 className=" font-bold mb-[50px] lg:text-3xl text-xl 2xl:text-[2rem]">
                                        {partner.heading1}
                                    </h1>
                                    <div className="flex items-center justify-between">

                                        <div className=" text-[white] w-full lg:w-[95%] mx-auto ">
                                            <Slider ref={sliderRef} {...settings} className='w-[98%] lg:w-[85%] mx-auto'>
                                                {partner.partnersLogo1.map((items, i) => (
                                                    <div key={`logo1-${index}-${i}`}>
                                                        <div
                                                            className="lg:w-[200px] lg:h-[100px] flex items-center w-[170px] h-[70px] "

                                                        >
                                                            <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                                                <img src={items.logo1} alt={items.logo1} className='w-[100%] h-[100%]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                     
                                    </div>
                                </div>
                                <div className='w-full py-8'>
                                    <h1 className=" font-bold lg:text-3xl text-xl 2xl:text-[2rem] mb-[50px]">
                                        {partner.heading2}
                                    </h1>
                                    <div className="flex items-center justify-between ">
                                       
                                        <div className=" text-[white] w-full lg:w-[95%] mx-auto">
                                            <Slider ref={sliderRefleaders} {...settingsleaders} className='w-[98%] lg:w-[85%] mx-auto'>
                                                {partner.partnersLogo2.map((items, i) => (
                                                    <div key={`logo2-${index}-${i}`}>
                                                        <div
                                                            className="lg:w-[200px] lg:h-[100px] flex items-center w-[170px] h-[70px]">
                                                            <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                                                <img src={items.logo2} alt={items.logo2} className='w-[100%] h-[100%]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>




        </div>
    )
}

export default PartnerUpWithCity