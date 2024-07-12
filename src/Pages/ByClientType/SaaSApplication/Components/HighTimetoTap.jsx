import React, { useRef } from 'react'
import Slider from "react-slick";
import partenerUp from '../../../../assets/ByClientType/StartUpWebDev/partenerUp.png'
const HighTimetoTap = () => {
    const sliderRef = useRef(null);
    const sliderRefleaders = useRef(null);

    const ctReliableForAi = [
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false, // Disable autoplay
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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    const ctReliableForAileaders = [
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
        { name: "nissan", logo: "" },
        { name: "jpMorgan", logo: "" },
        { name: "cocaCola", logo: "" },
        { name: "royal", logo: "" },
    ];

    const settingsleaders = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false, // Disable autoplay
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
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
            <h1 className='ms-[110px] font-bold text-3xl mb-[40px]'>Why Partner Up with CT ?</h1>
            <div className='w-[85vw] mx-auto h-[70vh] flex justify-between'>
                <div className='w-[48%] h-[100%] flex flex-col justify-between'>
                    <div className='w-[100%] h-[48%] flex justify-between'>
                        <div className='w-[48%] h-[100%] bg-[#FF6161] flex flex-col justify-center items-center'><h1>750+</h1><p>IT Pros</p></div>
                        <div className='w-[48%] h-[100%] bg-[#1E8DCB] flex flex-col justify-center items-center'><h1>550+</h1><p>Developers</p></div>
                    </div>
                    <div className='w-[100%] h-[48%] flex justify-between'>
                        <div className='w-[48%] h-[100%] bg-[#23B14B] flex flex-col justify-center items-center'><h1>60+</h1><p>Project Managers</p></div>
                        <div className='w-[48%] h-[100%] bg-[#D14CFF] flex flex-col justify-center items-center'><h1>Certified</h1><p>Platforms Experts</p></div>
                    </div>
                </div>
                <div className='w-[50%] h-[100%] bg-[green]'>
                    <img src={partenerUp} alt="partner up with city" className='w-[100%] h-[100%]' />
                </div>
            </div>
            <div className='w-[85vw] mt-[60px] mx-auto'>
                <h1 className='font-bold text-3xl'>Guaranteed service quality</h1>
                <div className="paretndiv w-[85vw] mx-auto mt-[30px]">
                    <div className="flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="text-[14px]">Quality-first approach based on a mature ISO 9001-certified quality management system.</p>
                    </div>

                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="text-[14px]">
                            ISO 27001-certified security management that relies on comprehensive policies and processes, advanced security technology, and skilled professionals.
                        </p>
                    </div>

                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="text-[14px] font-semibold">
                            A full-scale PMO able to carry out even the most complex projects.
                        </p>
                    </div>
                    <div className="mt-[10px] flex gap-[10px]">
                        <div className="w-[16px] h-[16px] bg-violet-300 mt-[4px]"></div>
                        <p className="text-[14px] font-semibold">
                            A leading outsourcing provider featured on the Global Outsourcing 100 list by IAOP.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[100vw] py-[60px]'>
                <h1 className="text-3xl font-bold mb-[50px] mx-[100px]">
                    Our partnerships and awards
                </h1>
                <div className="w-[85vw] flex items-center justify-around mx-[100px]">
                    <button onClick={handlePrevSlide} className="btn-prev text-[50px] font-normal">
                        ‹
                    </button>
                    <div className="w-[80vw] text-[white] sm:w-[50%]">
                        <Slider ref={sliderRef} {...settings}>
                            {ctReliableForAi.map((items, i) => (
                                <div>
                                    <div
                                        className="w-[210px] h-[100px] flex justify-center items-center md:h-[70px]"
                                        key={i}
                                    >
                                        <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px] text-[black]">
                                            Company Logo
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <button onClick={handleNextSlide} className="btn-next text-[50px] font-normal">
                        ›
                    </button>
                </div>
            </div>
            <div className='w-[100vw] pb-[60px]'>
                <h1 className="text-3xl font-bold mb-[50px] mx-[100px]">
                    We are trusted by global market leaders
                </h1>
                <div className="w-[85vw] flex items-center justify-around mx-[100px]">
                    <button onClick={handlePrevSlideleaders} className="btn-prev text-[50px] font-normal">
                        ‹
                    </button>
                    <div className="w-[80vw] text-[white] sm:w-[50%]">
                        <Slider ref={sliderRefleaders} {...settingsleaders}>
                            {ctReliableForAileaders.map((items, i) => (
                                <div>
                                    <div
                                        className="w-[210px] h-[100px] flex justify-center items-center md:h-[70px]"
                                        key={i}
                                    >
                                        <div className="bg-[#D9D9D9] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px] text-[black]">
                                            Company Logo
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <button onClick={handleNextSlideleaders} className="btn-next text-[50px] font-normal">
                        ›
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HighTimetoTap