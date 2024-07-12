import React from 'react'

const PerkOfOurApplication = () => {
    const OurDeskTop = [{ title: "A database", desc: "That carefully shelves your data in a secure and reliable environment and can be optionally integrated with other data sources to avoid manual input.", bgColor:"FF6868" },
    {
        title: "A web application", desc: "That allows you to use this data in a fast and convenient way (with basic Create, Read, Update and Delete operations, as well as with rich search, filter, and reporting functionality).",
        bgColor:"1777BC"
    }, { title: "A mobile application (optionally)", desc: "That allows you to access the database and leverage its features wherever you are, reflecting the demands of today’s on-the-go life.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>What You Get</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Efficiency meets versatility: Our desktop application development offers seamless integration, customizable features, intuitive interfaces, and robust performance, empowering users with tailored solutions for enhanced productivity and streamlined operations.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default PerkOfOurApplication
