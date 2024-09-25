import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "./serviceWeOffer.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceWeOffer = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [homeServiceData, setHomeServiceData] = useState([]);
    const navigate = useNavigate()
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        dotsClass: "custom-dots",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 2500,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
    };

    const handleServiceItemClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const fetchHomeServiceData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-service-data");
            setHomeServiceData(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHomeServiceData();
    }, []);
  
    return (
        <div id='service' className='w-[100vw] bg-[black] h-auto pt-[100px] md:pt-[40px] pb-[60px] md:pb-[0px] text-[white] ps-[110px] box-border md:ps-[0px]'>
            <div className='md:w-[90%] md:mx-auto'>
                <h1 className='text-3xl font-bold md:text-[18px]'>Service We Offers</h1>
                <p className='w-[80%] md:w-[100%] text-[16px] md:text-[10px] mt-[10px]'>At CT, we are ready to offer end-to-end development that covers everything from business analysis to software delivery and support, help modernize your legacy software, or provide expert advisory at any stage of SDLC.. </p>
            </div>

            <div className='w-[100%] flex gap-[30px] flex-wrap mt-[50px] md:hidden'>
                {homeServiceData.map((item, index) => (
                    <div key={index} className='service-item w-[20%]' onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => handleServiceItemClick(index)}>
                       
                        <div className='text-[white]  bg-red-500  w-[100%] h-[450px] relative text-[12px]' style={{ backgroundImage: `url(${item.ServiceHomePageimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='overlay'></div>
                            <div className={hoveredIndex === index ? 'w-[100%] h-[100%] absolute top-0 overlay show' : 'hidden'}>
                                <div className=' p-4'>
                                    {item.points.map((point, index) => (
                                        <li key={index} className="mb-2 list-none">
                                            <h3 className="text-[14px] font-semibold underline ">{point.title}</h3>
                                            <p className='font-normal text-[12px]' dangerouslySetInnerHTML={{ __html: point.description }} /> {/* Display description */}
                                        </li>
                                    ))}
                                </div>
                            </div>
                            <button className='border border-[white] px-[20px] w-[150px] h-[45px] absolute bottom-[-10px] left-[-5px] text-center bg-cyan-500 cursor-pointer' style={{ opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity .4s ease-in-out' }} onClick={() => { navigate(`/service/${item.title}`) }}>Explore More &rarr;</button>
                            <button className='border border-[white] px-[20px] absolute bottom-[-10px] left-[-5px] bg-[#474747] w-[200px] h-[45px] text-center' style={{ opacity: hoveredIndex === index ? 0 : 1, transition: 'opacity .4s ease-in-out' }} onClick={() => { navigate(`/Services/${item.title}`) }}>{item.title}</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='hidden md:flex w-[90%] flex-wrap mt-10 gap-[15px] mx-auto'>
                {homeServiceData.map((item, index) => (
                    <div className='w-fit-content border border-gray-300 rounded-[25px] p-[5px]' key={index} onClick={() => handleServiceItemClick(index)}>
                        <h3 className='text-xs'>{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className='hidden md:block w-[90%] h-[auto] mx-auto mt-[40px]'>
                <Slider {...settings} className='w-[100%]' ref={sliderRef}>
                    {homeServiceData.map((item, index) => (
                        <div key={index} className='service-item'>
                            <div className='text-[white] w-[95%] h-[450px] bg-[white] relative text-[12px] gap-[10px]' style={{ backgroundImage: `url(${item.ServiceHomePageimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className="overlay1"></div>
                                <div className='w-[100%] h-[100%] absolute top-0'>
                                    <div dangerouslySetInnerHTML={{ __html: item.points }} className='py-1 px-2' />
                                </div>
                                <button className='border border-[white] px-[20px] absolute bottom-0 bg-[#474747] w-[200px] h-[45px] text-center' onClick={() => { navigate(`/Services/${item.title}`) }}>{item.title}</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default ServiceWeOffer;
