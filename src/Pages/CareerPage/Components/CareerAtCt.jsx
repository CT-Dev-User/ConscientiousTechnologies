import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const CareerAtCt = () => {
    const JobData = [
        { jobCategory: "Software Development", position: [{ title: "Senior Python Developer", RequirementsPoints: ["4+ years of commercial Python development (Django, Flask, Django Rest Framework, Django admin lte2.", "Understanding in architecture patterns (microservices, scaling, load balancing.", "Skills in configuration CI/CD, autodeployment to cloud, Git flow variants.", "Work experience with PostgreSQL.", "A high level of English proficiency (Intermediate +)."] }] }, { jobCategory: "Web Development", position: [{ title: "Mern Developer", RequirementsPoints: ["4+ years of commercial Python development (Django, Flask, Django Rest Framework, Django admin lte2.", "Understanding in architecture patterns (microservices, scaling, load balancing.", "Skills in configuration CI/CD, autodeployment to cloud, Git flow variants.", "Work experience with PostgreSQL.", "A high level of English proficiency (Intermediate +)."] }] }
    ];

    const [openJobIndex, setOpenJobIndex] = useState(null);

    const toggleJobRequirements = (index) => {
        setOpenJobIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Careers at CT</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Join ScienceSoft's team of 750+ top IT professionals and contribute to the digital success of the companies in more than 70 countries and 30+ industries. Our project portfolio comprises over 3,600 success stories, including projects for Walmart, eBay, NASA JPL, PerkinElmer, Baxter, IBM, Leo Burnett. </p>
            </div>
            {JobData.map((job, index) => (
                <div className='w-[85%] mx-auto mt-[50px]' key={index}>
                    <h4 className='text-[20px]'>{job.jobCategory}</h4>
                    {job.position.map((item, idx) => (
                        <div className={`${openJobIndex === index ? 'w-[100%]' : 'w-[100%]'}`} key={idx}>
                            <div className='flex w-[100%] justify-between mb-[20px]'>
                                <h5 className='mb-2'>{idx + 1} {item.title}</h5>
                                <h5 onClick={() => toggleJobRequirements(index)}>{openJobIndex === index ? <FaAngleUp /> : <FaAngleDown />}</h5>
                            </div>

                            <div className={`${openJobIndex === index ? 'transition-all duration-500 ease-in-out delay-1000 block bg-[#EBEBEB] p-2' : 'hidden transition-all duration-600 ease-in-out delay-1000'}`}>

                                <h6 className='mb-[7px]'>Requirements</h6>
                                <ul className='w-[95%] mx-auto'>
                                    {item.RequirementsPoints.map((reqPoint, i) => (
                                        <li className='font-normal list-disc text-[15px]' key={i}>{reqPoint}</li>
                                    ))}
                                </ul>
                                <button className='bg-[#000000] text-[white] px-[25px] py-1 text-[17px] font-medium mt-4'>APPLY</button>
                            </div>

                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CareerAtCt;
