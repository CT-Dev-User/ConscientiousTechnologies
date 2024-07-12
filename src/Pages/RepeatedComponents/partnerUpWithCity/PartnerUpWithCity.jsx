import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import partner from "./partnerwithcity.png"
import axios from 'axios';
const PartnerUpWithCity = () => {
    const sliderRef = useRef(null);
    const sliderRefleaders = useRef(null);
    const [partnerUpData, setPartnerUpData] = useState([]);

    const fetchPartnerUpData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-partner-up-data");
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
        arrows: false,
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

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const settingsleaders = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
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

    const handlePrevSlideleaders = () => {
        sliderRefleaders.current.slickPrev();
    };

    const handleNextSlideleaders = () => {
        sliderRefleaders.current.slickNext();
    };

    return (
        <div className='py-[60px]'>
            <h1 className='ms-[110px] font-bold text-3xl mb-[40px] md:ms-[20px]'>Why Partner Up with CT ?</h1>
            <div className='w-[85vw] mx-auto h-[70vh] flex gap-[20px] md:w-[90vw] md:mx-[20px] md:h-[30vh]'>
                <div className='w-[48%] h-[100%] flex flex-col gap-[20px] md:w-[100%] text-white]'>
                    <div className='w-[100%] h-[48%] flex gap-[20px]'>
                        <div className='w-[48%] h-[100%] bg-[#FF6161] flex flex-col justify-center items-center'><h1>750+</h1><p>IT Pros</p></div>
                        <div className='w-[48%] h-[100%] bg-[#1E8DCB] flex flex-col justify-center items-center'><h1>550+</h1><p>Developers</p></div>
                    </div>
                    <div className='w-[100%] h-[48%] flex gap-[20px]'>
                        <div className='w-[48%] h-[100%] bg-[#23B14B] flex flex-col justify-center items-center'><h1>60+</h1><p>Project Managers</p></div>
                        <div className='w-[48%] h-[100%] bg-[#D14CFF] flex flex-col justify-center items-center'><h1>Certified</h1><p>Platforms Experts</p></div>
                    </div>
                </div>
                <div className='w-[50%] h-[100%] bg-[green] md:hidden'>
                    <img src={partner} alt="partner up with city" className='w-[100%] h-[100%]' />
                </div>
            </div>
            <div className='w-[85vw] mt-[60px] mx-auto md:w-[90vw] md:mx-[20px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Guaranteed service quality</h1>
                <div className="paretndiv w-[100%] mt-[60px]">
                    <div className="w-[100%] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="w-[90%] text-[14px] md:text-[16px] font-semibold">Quality-first approach based on a mature ISO 9001-certified quality management system.</p>
                    </div>

                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="w-[90%] text-[14px] md:text-[16px] font-semibold">
                            ISO 27001-certified security management that relies on comprehensive policies and processes, advanced security technology, and skilled professionals.
                        </p>
                    </div>

                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="w-[90%] text-[14px] md:text-[16px] font-semibold">
                            A full-scale PMO able to carry out even the most complex projects.
                        </p>
                    </div>
                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="w-[90%] text-[14px] md:text-[16px] font-semibold">
                            A leading outsourcing provider featured on the Global Outsourcing 100 list by IAOP.
                        </p>
                    </div>
                </div>
            </div>
            {
                partnerUpData.map((partner, index) => {
                    return (
                        <div key={`partner-${index}`}>
                            <div className='w-[100vw] py-[60px]' >
                                <h1 className="text-3xl font-bold mb-[50px] mx-[100px] md:mx-[20px] md:text-[24px]">
                                    {partner.heading1}
                                </h1>
                                <div className="flex items-center justify-between mx-[110px] md:mx-[20px]">
                                    <button onClick={handlePrevSlide} className="btn-prev text-[50px] font-normal md:hidden">
                                        ‹
                                    </button>
                                    <div className="w-[75vw] text-[white] md:w-[85vw]">
                                        <Slider ref={sliderRef} {...settings}>
                                            {partner.partnersLogo1.map((items, i) => (
                                                <div key={`logo1-${index}-${i}`}>
                                                    <div
                                                        className="w-[200px] h-[100px] flex items-center md:w-[170px] md:h-[70px] md:ml-[10px]"
                                                       
                                                    >
                                                        <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                                            <img src={items.logo1} alt={items.logo1} className='w-[100%] h-[100%]'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <button onClick={handleNextSlide} className="btn-next text-[50px] font-normal md:hidden">
                                        ›
                                    </button>
                                </div>
                            </div>
                            <div className='w-[100vw] pb-[60px]'>
                                <h1 className="text-3xl font-bold mb-[50px] mx-[100px] md:mx-[20px] md:text-[24px]">
                                    {partner.heading2}
                                </h1>
                                <div className="flex items-center justify-between mx-[110px] md:mx-[20px]">
                                    <button onClick={handlePrevSlideleaders} className="btn-prev text-[50px] font-normal md:hidden">
                                        ‹
                                    </button>
                                    <div className="w-[75vw] text-[white] md:w-[85vw]">
                                        <Slider ref={sliderRefleaders} {...settingsleaders}>
                                            {partner.partnersLogo2.map((items, i) => (
                                                <div key={`logo2-${index}-${i}`}>
                                                    <div
                                                        className="w-[200px] h-[100px] flex items-center md:w-[170px] md:h-[70px] md:ml-[10px]"
                                                 
                                                    >
                                                        <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                                        <img src={items.logo2} alt={items.logo2} className='w-[100%] h-[100%]'/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <button onClick={handleNextSlideleaders} className="btn-next text-[50px] font-normal md:hidden">
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default PartnerUpWithCity