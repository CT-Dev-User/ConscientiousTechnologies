
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const WhyChooseCTSlider = ({ category, subCategory }) => {
    const sliderRef = useRef(null);
    const [sliderData, setSliderData] = useState([])
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

    const fetchSliderData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-choose-ct-slider-data-byCategorySubCategory/${category}/${subCategory}`);
            setSliderData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSliderData()
    }, [])

    return (
        <div className="w-100 h-auto">
            {
                sliderData.map((slider, i) => {
                    return (
                        <div key={i} className="w-[100vw] h-[auto] mt-[100px] mb-[60px] md:mt-[30px]">
                            <div className="w-[85%] mx-auto md:w-[100%] md:p-2">
                                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">
                                    {slider.heading}</h1>
                                <p>{slider.subtitle}</p>
                            </div>

                            <div className="w-[85%] mx-auto md:w-[90%]">
                                <h1 className="text-[30px] font-bold mt-[40px] mb-[20px] md:text-[24px]">{slider.logoHeading}</h1>

                            </div>

                            <div className="flex items-center justify-between mx-[110px] md:mx-[20px]">
                                <button onClick={handlePrevSlide} className="btn-prev text-[50px] font-normal md:hidden">
                                    ‹
                                </button>

                                <div className="w-[75vw] text-[white] md:w-[85vw]">
                                    <Slider ref={sliderRef} {...settings}>
                                        {slider.logos.map((items, i) => (
                                            <div  key={i}>
                                                <div
                                                    className="w-[200px] h-[100px] flex items-center md:w-[170px] md:h-[70px] md:ml-[10px]"
                                                
                                                >
                                                    <div className="bg-[#D9D9D9] w-[70%] h-[100%] md:h-[80%] flex justify-center items-center text-[black]">
                                                        <img src={items.logo} alt="fghjk" className="w-[100%] h-[100%]" />
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

                            <div className="paretndiv w-[85%] mx-auto mt-[60px] md:w-[90%]">
                                {
                                    slider.points.map((point, i) => {
                                        return (
                                            <div className="flex gap-[10px]" key={i}>
                                                <div className="w-[18px] h-[18px] bg-violet-300"></div>
                                                <p className="text-[16px]">{point.title}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default WhyChooseCTSlider;

