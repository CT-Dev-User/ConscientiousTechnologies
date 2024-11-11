import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const AllHeader = ({ category, serviceName, solutionName, industryName, subServiceName }) => {
    const [headerData, setHeaderData] = useState([]);
    const [isImageLoaded, setIsImageLoaded] = useState([]);

    const fetchHeader = async () => {
        try {
            let response;
            if (category === "Service") {
                response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-service-data-by-serviceName/${serviceName}`);
            } else if (category === "Solution") {
                response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-solution-data-by-solutionName/${solutionName}`);
            } else if (category === "Industry") {
                response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-latest-industry-data-by-industryName/${industryName}`);
            } else if (category === "SubService") {
                response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-subservice-data-by-subservice/${serviceName}/${subServiceName}`);
            }
            setHeaderData(response.data);
            setIsImageLoaded(Array(response.data.length).fill(false)); // Initial loading state
        } catch (error) {
            console.log(error);
        }
    };

    const preloadImage = (src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsImageLoaded((prev) => {
                const updatedIsImageLoaded = [...prev];
                updatedIsImageLoaded[index] = true;
                return updatedIsImageLoaded;
            });
        };
    };

    useEffect(() => {
        fetchHeader();
    }, []);

    useEffect(() => {
        // Preload images after fetching header data
        headerData.forEach((header, index) => {
            preloadImage(header.headerImage, index);
        });
    }, [headerData]);

    return (
        <div className='w-[100vw] h-[100vh]'>
            {headerData.map((header, i) => (
                <div className='w-screen h-[100vh]' key={header._id}>
                    <div
                        className='w-full h-full relative'
                        style={{
                            backgroundImage: isImageLoaded[i] ? `url(${header.headerImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: '#333'  // Fallback color while image loads
                        }}
                    >
                        <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col lg:justify-center lg:items-start box-border px-3 gap-[50px] justify-evenly items-center'>
                            <div className='h-fit flex flex-col gap-[40px] justify-center w-[100%]'>
                                <h2 className='lg:text-3xl font-semibold text-white lg:w-[80%] w-[90%] leading-10 text-xl xl:text-3xl 2xl:text-5xl lg:ms-[110px] ms-[0px]' style={{ fontFamily: 'Montserrat' }}>
                                    {header.headerTagLine}
                                </h2>
                                <p className='lg:text-xl 2xl:text-2xl text-[16px] text-white text-left lg:ms-[110px] ms-0 lg:w-[60%] w-[90%] mx-auto lg:mx-0' style={{ fontFamily: 'Poppins' }}>
                                    {header.headerDescription}
                                </p>
                            </div>
                            {category !== "About Us" && (
                                <button className="relative overflow-hidden text-white border border-current w-[fit-content] lg:px-3 py-1 lg:ms-[110px] group border-b-2 lg:text-xl px-4 ms-0 text-base">
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                    <span className="relative z-10">Connect With Our Experts<span className="font-bold">&rarr;</span></span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllHeader;
