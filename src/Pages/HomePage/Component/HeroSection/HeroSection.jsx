import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Slider from "react-slick";
import "./heroSection.css";

const HeroSection = () => {
    const [autoplayPaused, setAutoplayPaused] = useState(false);
    const sliderRef = useRef(null);
    const [homeHeroData, setHeroData] = useState([]);

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            if (autoplayPaused) {
                slider.slickPause();
            } else {
                slider.slickPlay();
            }
        }
    }, [autoplayPaused]);

    const handleMouseEnter = () => {
        setAutoplayPaused(true);
    };

    const handleMouseLeave = () => {
        setAutoplayPaused(false);
    };

    const fetchHomeHeroData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-heroslider-data");
            setHeroData(response.data.getdata);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHomeHeroData();
    }, []);


    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    infinite: true,
                    fade: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    cssEase: 'ease-in-out',
                    speed: 2500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };


    return (
        <div className='w-full h-[100vh]'>
            <Slider {...settings} ref={sliderRef} className='w-full h-full'>
                {homeHeroData && homeHeroData.map((item, i) => {
                    return (
                        <div className='w-full h-[100vh] hero-section-slide' key={i}>
                            <div className='w-[100vw] h-full relative' style={{ backgroundImage: `url(${item.herosliderImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                                <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.7] flex flex-col justify-center items-start box-border px-3 gap-[46px] md:justify-evenly md:items:center'>
                                    <div className='flex flex-col gap-[50px] w-[100%]'>
                                        <h2 className='text-3xl font-semibold text-white w-[50%] md:w-[90%] md:text-xl  xl:text-3xl 2xl:text-5xl  ms-[110px] md:ms-[0px]' style={{ fontFamily: 'Montserrat' }}>{item.title}</h2>
                                        <p className='text-xl md:text-[18px] text-white text-left ms-[110px] w-[60%] md:w-[90%] md:ms-0 md:mx-auto xl:text-xl 3xl:text-2xl' style={{ fontFamily: 'Poppins' }}>{item.heroHomedesc}</p>
                                    </div>
                                    <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 ms-[110px] group border-b-2 text-[20px] md:px-4 md:ms-0 md:text-[16px] " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                        <span className="relative z-10">Connect With Our Experts <span className="font-bold">&rarr;</span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default HeroSection;
