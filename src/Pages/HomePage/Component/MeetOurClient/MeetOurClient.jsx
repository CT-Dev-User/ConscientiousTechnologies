import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import quotes from '../assets/meetOurClient/quotes.png'
import './meetOurClient.css'
import axios from 'axios';
const MeetOurClient = () => {
    const [clientReviewsData, setClientReviewsData] = useState([])

    const fetchClientReviewData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/get-client-review-data");
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
            <div className='w-[85%] mx-auto'>
                <h1 className='text-3xl font-bold'>Meet Our Client</h1>
                <p className='lg:w-[85%] text-base mt-2 w-full font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='lg:block w-[85%] mx-auto hidden'>
                <Slider {...settings} dotsClass="slick-custom-dots">
                    {clientReviewsData.map((items, i) => {
                        return (
                            <div className='h-80 mt-7 w-[85%]' key={i}>
                                <div className='w-[96%] h-full bg-[#464444] flex justify-around py-5'>
                                    <div className='w-[36%] h-full flex justify-center items-center'>
                                        <img src={items.profileImage} alt={items.name} className='w-[97%] h-full mx-auto' />
                                    </div>
                                    <div className='w-[55%]'>
                                        <img src={quotes} alt='quotes' className='w-4' />
                                        <div className='ms-7 flex flex-col justify-start gap-6'>
                                            <div>
                                                <h1 className='text-lg mt-0'>Review Heading {i + 1}</h1>
                                                <p className='text-sm font-normol w-11/12 mt-2'>{items.review}</p>
                                            </div>

                                            <div>
                                                <h6 className='text-lg font-semibold'>{items.name}</h6>
                                                <p className='text-xs'>{items.Jobprofile}</p>
                                            </div>
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
                            <div className='w-full h-[34rem] mx-2 flex gap-2' key={i}>
                                <div className='w-[94%] h-full bg-white'>
                                    <div className='w-full h-2/5 mx-auto' style={{ backgroundImage: `url(${items.profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className='w-full text-black ms-2 flex flex-col justify-start gap-6'>
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
