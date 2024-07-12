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

        <div id='testimonials' className='w-[100vw] h-[auto] bg-[#191919] pb-[60px] box-border text-[white] pt-[100px] md:pt-[30px]'>
            <div className='w-[85%] mx-auto '>
                <h1 className='text-3xl font-bold'>Meet Our Client</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[85%] mx-[auto] md:hidden'>
                <Slider {...settings} dotsClass="slick-custom-dots">
                    {clientReviewsData.map((items, i) => {
                        return (
                            <div className='h-[400px] mt-[30px] w-[85%]' key={i}>
                                <div className='w-[96%] h-[100%] bg-[#464444] flex justify-around py-[20px]'>
                                    <div className='w-[40%] h-[100%] flex justify-center items-center'>
                                        <img src={items.profileImage} alt={items.name} className='w-[97%] h-[100%] mx-auto' />
                                    </div>
                                    <div className='w-[55%]'>
                                        <img src={quotes} alt='quotes' className='w-[25px]' />
                                        <div className='ms-[30px] flex flex-col justify-start gap-[25px]'>
                                            <div>
                                                <h1 className='text-[20px] mt-0'>Review Heading {i + 1}</h1>
                                                <p className='text-[15px] font-normol w-[92%] mt-2'>{items.review}</p>
                                            </div>

                                            <div>
                                                <h6 className='text-[18px] font-semibold'>{items.name}</h6>
                                                <p className='text-[13px]'>{items.Jobprofile}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className='hidden md:block w-[100%] mx-auto mt-[20px]'>
                <Slider {...settingsMobile}>
                    {clientReviewsData.map((items, i) => {
                        return (
                            <div className='w-[100%] h-[50vh] mx-[10px] flex gap-[10px]' key={i}>
                                <div className='w-[94%] h-[100%] bg-white'>
                                    <div className='w-[100%] h-[40%] mx-auto' style={{ backgroundImage: `url(${items.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    </div>
                                    <div className='w-[100%] text-black ms-[10px] flex flex-col justify-start gap-[25px]'>
                                        <div>
                                            <h1 className='text-[16px] mt-0 font-bold'>Review Heading {i + 1}</h1>
                                            <p className='text-[10px] font-normol w-[90%] mt-2'>{items.review}</p>
                                        </div>

                                        <div>
                                            <h6 className='text-[14px] font-semibold'>{items.nameOfClient}</h6>
                                            <p className='text-[10px]'>{items.Jobprofile}</p>
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
