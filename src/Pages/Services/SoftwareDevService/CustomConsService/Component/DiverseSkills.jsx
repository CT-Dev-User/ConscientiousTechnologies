import React from 'react';

const DiverseSkills = () => {
    const ourSoftDevOption = [
        {
            title: "software consulting",
            desc:
                "We gather and analyze your business needs, conceptualize software to cover them, and help you get the best value from its development."
        },
        {
            title: "Web development",
            desc: "In web development since 1999, we create all kinds of customer-facing and corporate web-based apps."
        },
        {
            title: "Mobile development",
            desc: "Building on the expertise from 300+ completed mobile projects, we can deliver mobile apps for any platform and cover industry specifics (e.g., for telehealth or mCommerce apps)."
        },

        {
            title: "Desktop development",
            desc: "We develop desktop apps for Mac, Windows and Linux in C++/Qt, .NET and Python programming languages."
        },
        {
            title: "SaaS development",
            desc: "We can assist with both product management and development of SaaS apps."
        },
        {
            title: "Software modernization",
            desc: "We improve the usability, refactor code and optimize the maintenance cost of legacy software."
        }
    ];

    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Find Diverse Skills and Experience at ScienceSoft</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>Elevate Your Experience: Explore a spectrum of user-centric cloud services with CT. From scalable infrastructure to seamless collaboration, we empower businesses with cutting-edge solutions for enhanced performance and agility.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default DiverseSkills;
