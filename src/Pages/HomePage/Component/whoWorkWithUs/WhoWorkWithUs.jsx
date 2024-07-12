import React, { useState, useEffect } from 'react';
import './workWithUs.css';
import { useNavigate } from 'react-router-dom';

const WhoWorkWithUs = () => {
    const [showPoints, setShowPoints] = useState(false);
    const navigate = useNavigate()

    const whoWorkWithUsData = [
        { title: 'Start Up', desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", image: require('../assets/whoWorkWithUs/startups.png'), points: ["MVP and SaaS Development for quick market entry at minimal spending", "CTO as a Service to align technology with business goals for success.", "Data Analytics & DevOps to get insights from data to drive decision-making", "Technology Consulting to help startups avoid costly tech mistakes for long-term success."] },
        { title: 'Enterprises', desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", image: require('../assets/whoWorkWithUs/enterprises.png'), points: ["MVP and SaaS Development for quick market entry at minimal spending", "CTO as a Service to align technology with business goals for success.", "Data Analytics & DevOps to get insights from data to drive decision-making", "Technology Consulting to help startups avoid costly tech mistakes for long-term success."] },
        { title: 'Agencies', desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", image: require('../assets/whoWorkWithUs/Agencies.png'), points: ["MVP and SaaS Development for quick market entry at minimal spending", "CTO as a Service to align technology with business goals for success.", "Data Analytics & DevOps to get insights from data to drive decision-making", "Technology Consulting to help startups avoid costly tech mistakes for long-term success."] }
    ];

    useEffect(() => {
        if (showPoints) return; // If points are already shown, do not execute the effect

        const timer = setTimeout(() => {
            setShowPoints(true);
        }, 300); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, [showPoints]);

    return (
        <div className='w-[100vw] h-[auto] bg-[black] pb-[30px] box-border text-[white] pt-[60px] md:pt-[50px]'>
            <div className='w-[85%] mx-auto md:w-[95%] md:pl-[10px]'>
                <h1 className='text-3xl font-bold md:text-[16px]'>Who We Work With</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='flex text-white w-[85%] gap-[35px] flex-wrap mx-auto justify-center mt-[30px] md:hidden'>
                {whoWorkWithUsData.map((items, i) => (
                    <div className='parent-div' style={{ backgroundImage: `url(${items.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={i}>
                        <div className='child-div'>
                            <h3 className='text-2xl font-medium'>{items.title}</h3>
                            <p className='text-[12px] mt-2'>{items.desc}</p>
                        </div>
                        <div className='list-div' style={{ animationDelay: `${i * 0.5}s` }}>
                            <ul >

                                {showPoints && items.points.map((item, j) => (
                                    <li className='list-disc text-[12px] mt-3' key={j}>{item}</li>
                                ))}
                            </ul>
                            <button className='border-[none] px-[15px] py-[5px] w-[fit-content] text-[12px] text-[skyblue] float-right mt-5 absolute bottom-[30px] right-[20px]' onClick={() => {navigate(`/by-client/${items.title}`) }} >Explore More &rarr;</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='hidden md:flex text-white w-[100%] gap-[35px] flex-wrap mx-auto justify-center mt-[30px]'>
                {whoWorkWithUsData.map((items, i) => (
                    <div className='w-[94%] h-[40vh] relative mx-auto' style={{ backgroundImage: `url(${items.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={i}>
                        <div className='absolute bottom-0 left-0 h-[50%] bg-[#1D1D1D] opacity-[0.8] p-[15px]'>
                            <h3 className='text-xl font-medium'>{items.title}</h3>
                            <p className='text-[12px] mt-2'>{items.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhoWorkWithUs;
