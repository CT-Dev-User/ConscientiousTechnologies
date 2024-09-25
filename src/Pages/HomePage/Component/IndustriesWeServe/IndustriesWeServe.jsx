import React, { useEffect, useState } from 'react';
import './industriesWeServe.css'; // Assuming you have additional styles in this file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const IndustriesWeServe = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [homeIndustriesData, setHomeIndustriesData] = useState([])
    const navigate = useNavigate()

    const getHomeIndustriesData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-industries-data")
            if (response.status === 200) {
                setHomeIndustriesData(response.data.getData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getHomeIndustriesData()
    }, [])

    const firstTwelveData = homeIndustriesData.slice(0, 12);


    return (
        <div className='w-[100vw] h-auto bg-white pt-[100px] box-border text-black pb-[60px] md:pt-[60px]' id='industries'>
            <div className='w-[85%] mx-auto'>
                <h1 className='text-3xl font-bold md:text-[18px]'>Industries We Serve</h1>
                <p className='w-[95%] text-sm mt-2 md:mt-1 md:w-[100%] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex text-white w-[90%] gap-4 flex-wrap mx-auto justify-center mt-4 md:hidden'>
                {firstTwelveData.map((item, index) => (
                    <div className='w-[22%] h-[400px] bg-black relative main-div overflow-hidden'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}>
                        <div className='bg-image bg-center bg-cover w-[100%] h-[100%]' style={{ backgroundImage: `url(${item.homePageIndustryImage})`, transform: hoveredIndex === index ? 'scale(1.5)' : 'scale(1)', transition: 'transform 1.5s ease-in-out' }}></div>
                        <div className='w-full border-t-2 border-white absolute bottom-0 text-center flex items-center justify-center font-medium cursor-pointer title-div text-[16px] xl:text-lg 3xl:text-xl py-2'>{item.title}</div>
                        <div className='desc-div '>
                            <p className='mt-[30px] text-[14px] text-center py-7 w-[80%] mx-auto' dangerouslySetInnerHTML={{ __html: item.desc }} />
                            <div className='flex justify-center '>
                            <button
                                className="relative overflow-hidden border border-[white] px-[15px] py-[5px] w-[fit-content] text-[12px] group mt-[20px] mx-auto"
                                style={{ position: 'relative' }} onClick={()=>{navigate(`/industries/${item.title}`)}}>
                                <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More{" "}<span className="font-bold">&rarr;</span></span>
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex text-white flex-wrap mx-auto justify-center mt-4 w-[100%] gap-[20px]'>
                {firstTwelveData.map((item, index) => (
                    <div className='bg-black relative w-[45%] h-32'
                        style={{ backgroundImage: `url(${item.homePageIndustryImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        key={index}>
                        <div className='w-full border-t-2 border-white absolute bottom-0 text-center flex items-center justify-center font-medium cursor-pointer title-div text-[12px]'>{item.title}</div>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default IndustriesWeServe;
