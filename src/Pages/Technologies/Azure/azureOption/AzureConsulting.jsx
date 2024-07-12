import React from 'react'

const AzureConsulting = () => {

    
    const AzureConsultingData = [{ title: "Develop VR software from scratch", desc: "Win the market with your original and innovative VR application..", bgColor:"FF6868" },
    {
        title: "Introduce VR in existing software", desc: "Extend your user base and raise engagement by adding VR to your software.",
        bgColor:"1777BC"
    }, 
    { title: "ERP evolution", desc: "Our ERP software development company provides full transparency of the development flow via regular reporting and documented processes.", bgColor:"E751FF" }]

    return (

        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Choose Your Azure Consulting Option</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>CT is a flexible ASP.NET development company that offers different cooperation models to perfectly meet your .NET project needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] '>
                {AzureConsultingData.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:border-none' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

     
    )
}

export default AzureConsulting