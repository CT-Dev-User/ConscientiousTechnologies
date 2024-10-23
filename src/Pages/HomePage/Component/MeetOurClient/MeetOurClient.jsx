import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import quotes from '../assets/meetOurClient/quotes.png'
import './meetOurClient.css'
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
const MeetOurClient = () => {
    const [clientReviewsData, setClientReviewsData] = useState([])

    const fetchClientReviewData = async () => {
        try {
            const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-client-review-data");
            setClientReviewsData(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchClientReviewData();
    }, []);

    // const meetOurClientData = [{ review: "We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing", nameOfClient: "Johan Garbrielsson", image: require('../assets/meetOurClient/first.png'), Jobprofile: "Head of Digital Product & Services", rating: "5" },
    //  { review: "We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing", nameOfClient: "Johan Garbrielsson", image: require('../assets/meetOurClient/first.png'), Jobprofile: "Head of Digital Product & Services", rating: "5" }, { review: "We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing", nameOfClient: "Johan Garbrielsson", image: require('../assets/meetOurClient/first.png'), Jobprofile: "Head of Digital Product & Services", rating: "5" }, { review: "We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, We successfully delivered a bug-free module, enhancing the platform's user-friendliness. A comprehensive web..Lorem ipsum dolor sit amet, consectetur adipiscing", nameOfClient: "Johan Garbrielsson", image: require('../assets/meetOurClient/second.png'), Jobprofile: "Head of Digital Product & Services", rating: "5" }]

    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 1.12,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true
    };


    const settingsMobile = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        arrows: false,
        autoplay: true
    };
    return (

        <div id='testimonials' className='w-screen h-auto bg-[#191919] pb-14 box-border text-white lg:pt-24 pt-7'>
            <div className='lg:w-[85%] mx-auto w-[95%]'>
                <h1 className='lg:text-3xl font-bold text-2xl'>Meet Our Client</h1>
                <p className='lg:w-[85%] text-base mt-2 w-full font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='lg:block w-[85%] mx-auto hidden'>
                <Slider {...settings} dotsClass="slick-custom-dots">
                    {clientReviewsData.map((items, i) => {
                        return (
                            <div className='lg:h-80 2xl:h-96 mt-7 w-[85%]' key={i}>
                                <div className='w-[96%] h-full bg-[#464444] flex justify-around py-5'>
                                    <div className='w-[36%] h-full flex justify-center items-center'>
                                        <img src={items.profileImage} alt={items.name} className='w-[97%] h-full mx-auto' />
                                    </div>
                                    <div className='w-[55%] h-[100%] flex flex-col justify-between'>
                                        <div className='h-[95%]'>
                                            <img src={quotes} alt='quotes' className='w-4' />
                                            <div className='h-[90%] ms-7 flex flex-col justify-start gap-6'>
                                                <div className='h-[80%]'>
                                                    <h1 className='text-base 2xl:text-lg mt-0'>{items.reviewHeading}</h1>
                                                    <p className='text-xs 2xl:text-base font-normal w-11/12 mt-2'>{items.review}</p>
                                                </div>
                                                <div className='h-[20%]'>
                                                    <h6 className='text-base 2xl:text-lg font-semibold'>{items.name}</h6>
                                                    <p className='text-xs'>{items.jobProfile}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex justify-end gap-2 h-[5%] pr-5'>
                                            {Array.from({ length: items.rating }, (_, index) => (
                                                <FaStar
                                                    key={index}
                                                    color={index < items.rating ? 'gold' : 'gray'}
                                                    className='h-4 w-4'
                                                    size={5} // Size of the star
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className='lg:hidden w-full mx-auto mt-5'>
                <Slider {...settingsMobile}>
                    {clientReviewsData.map((items, i) => {
                        return (
                            <div className='w-full h-[34rem]' key={i}>
                                <div className='w-[96%] h-full bg-white box-border px-2'>
                                    <div className='w-full h-2/5 mx-auto' style={{ backgroundImage: `url(${items.profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className='w-full text-black flex flex-col justify-start gap-6'>
                                        <div>
                                            <h1 className='text-base mt-2 font-bold'>Review Heading {i + 1}</h1>
                                            <p className='text-sm font-normol w-[90%] mt-2'>{items.review}</p>
                                        </div>

                                        <div>
                                            <h6 className='text-sm font-semibold'>{items.name}</h6>
                                            <p className='text-xs font-normal'>{items.Jobprofile}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>


    )
}

export default MeetOurClient
