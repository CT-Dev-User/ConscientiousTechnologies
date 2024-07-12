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
            desc:"In web development since 1999, we create all kinds of customer-facing and corporate web-based apps."
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
        <div className="w-full py-[30px] md:py-[20px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px]'>Find Diverse Skills and Experience at ScienceSoft</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Elevate Your Experience: Explore a spectrum of user-centric cloud services with CT. From scalable infrastructure to seamless collaboration, we empower businesses with cutting-edge solutions for enhanced performance and agility.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] md:gap-0 md:gap-y-[10px] md:justify-evenly'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:w-[47%] sm:w-[100%] md:shadow-none md:h-[290px]'>
                        <h1 className='text-[18px] font-semibold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiverseSkills;
