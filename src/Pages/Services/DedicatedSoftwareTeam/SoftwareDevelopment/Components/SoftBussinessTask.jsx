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
            desc:"Software capable of drawing insights and triggering actions based on historical and real-time data processing."
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
        <div className="w-full mt-[40px] mb-[60px]">
            <div className='w-[85%] mx-auto md:w-5/6'>
                <h1 className='text-3xl font-bold md:text-base text-blue'>Software for Advanced Business Tasks </h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-xs'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 '>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoftAdvance;
