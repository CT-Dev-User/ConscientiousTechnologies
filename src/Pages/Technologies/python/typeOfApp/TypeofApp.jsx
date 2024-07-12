import React from 'react'

const TypeofApp = () => {
    const pythonAppData = [{ title: "Back-end programming:", points: ["Data-intensive web applications.","Database interactions.","APIs."] }, { title: "Data analysis:", points: ["Custom-made statistical models.","Dashboards and reporting solutions."] }, { title: "Test automation", points: ["-------"] }, { title: "Machine learning:", points: ["Demand forecasting systems","Customer segmentation and customer behavior prediction systems","Product/service recommendation engines"] }, { title: "IoT development:", points: ["Data warehouse design and engineering.","Data analytics implementation.","Development of control apps."] }, { title: "-------", points: ["Demand-side platforms (DSPs)","Supply-side platforms (SSPs)","Data management platforms (DMPs)","Analytics"] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-auto'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0]'>Types of Applications Our Developers Build</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    pythonAppData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TypeofApp