import React from 'react'

const Complementry = () => {
    const advbigDataSer = [{ title: "Machine learning consulting", points: ["Advising on and developing ML-powered solutions to help companies find hidden patterns in massive amount of data to enable accurate predictions and forecasting, root-cause analysis, automated visual inspection, etc."] }, { title: "Big data services", points: ["Big data consulting, implementation, support, and big data as a service to help companies store and process big data in real-time as well as retrieve advance analytics insights out of huge datasets."] }, { title: "Image analysis services", points: ["Designing and developing custom image analysis software."] }, { title: "Data mining services", points: ["Retrieving valuable insights out of large, heterogeneous and constantly changing data sets without investing in in-house data mining talents."] }, { title: "Data visualizationBusiness intelligence", points: ["Helping companies achieve informed decision-making and optimize processes through data-driven insights"] }, { title: "Data warehousing", points: ["Consolidating disparate data into a single point of truth as the background for enterprise-wide analytics and automated reporting."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Complementary Data Science Services We Offer</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Internet of Things (IoT) services help elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    advbigDataSer.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
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

export default Complementry