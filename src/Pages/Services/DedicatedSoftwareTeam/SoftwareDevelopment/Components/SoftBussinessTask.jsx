import React from 'react';

const SoftAdvance = () => {
    const ourSoftDevOption = [
        {
            title: "Big data",
            desc:
                "Scalable software that aggregates and processes huge volumes of data with high velocity."
        },
        {
            title: "Artificial intelligence",
            desc: "Software capable of drawing insights and triggering actions based on historical and real-time data processing."
        },
        {
            title: "Data science",
            desc: "Software that can find sophisticated patterns in data and continuously learn to deliver more accurate results."
        },
        {
            title: "Internet of Things",
            desc: "Software that allows for fast processing and mining of data captured by physical objects."
        },
        {
            title: "Computer vision",
            desc: "OSoftware to recognize patterns and classify objects in digital images and videos."
        },
        {
            title: "Augmented reality",
            desc: "Software capable of laying virtual objects over real surroundings."
        },
        {
            title: "Virtual reality",
            desc: "Software that creates fictional environment with 3D objects and realistic acoustics"
        },
        {
            title: "Blockchain",
            desc: "Software with decentralized and highly secure data storage enabling direct peer-to-peer transactions."
        },
        {
            title: "-----------------",
            desc: "---------------"
        }
    ];

    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold md:text-2xl text-xl lg:text-black text-primary'>Software for Advanced Business Tasks</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%]  lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg 2xl:text-xl text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftAdvance;
