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
        <div className='w-screen h-screen'>
            <Slider {...settings} ref={sliderRef} className='w-full h-full'>
                {homeHeroData && homeHeroData.map((item, i) => {
                    return (
                        <div className='w-full h-screen hero-section-slide' key={i}>
                            <div className='w-full h-full relative' style={{ backgroundImage: `url(${item.herosliderImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                                <div className='w-full h-full absolute top-0 left-0 bg-black opacity-[0.7] flex flex-col lg:justify-center lg:items-start box-border px-3 gap-11 justify-evenly items-center'>
                                    <div className='flex flex-col gap-12 w-full'>
                                        <h2 className='lg:text-3xl font-semibold text-white lg:w-1/2 w-[90%] text-xl  xl:text-3xl 2xl:text-5xl lg:ms-[110px] ms-[0px]' style={{ fontFamily: 'Montserrat' }}>{item.title}</h2>
                                        <p className='lg:text-xl text-lg text-white text-left lg:ms-[110px] lg:w-3/5 w-[90%] ms-0 lg:mx-auto 2xl:text-2xl' style={{ fontFamily: 'Poppins' }}>{item.heroHomedesc}</p>
                                    </div>
                                    <button className="relative overflow-hidden text-white border border-current w-[fit-content] lg:px-3 py-1 lg:ms-[110px] group border-b-2 lg:text-xl px-4 ms-0 text-base " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
