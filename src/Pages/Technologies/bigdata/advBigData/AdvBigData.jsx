import React from 'react'

const AdvBigData = () => {
    const advbigDataSer = [{ title: "Artificial intelligence", points: ["Developing personalization engines, natural language processing systems, computer vision, and other AI-powered solutions that maintain stable performance under any data load."] }, { title: "Machine learning", points: ["SBuilding highly accurate ML models that identify hidden patterns in big data, provide reliable forecasts, power complex neural networks, and automate complex business algorithms."] }, { title: "Data science", points: ["Providing strategic and technological guidance in wrangling, exploring, and applying data, we employ reliable statistical methods, establish robust data quality management processes, and help avoid issues related to inaccurate data and false predictions."] }, { title: "Business intelligence", points: ["Integrating large volumes of high-velocity data into scalable, fault-tolerant analytics solutions that provide trustworthy insights to any number of users."] }, { title: "Data visualization", points: ["Creating easy-to-navigate, customizable reports and dashboards that are tailored to the needs of specific business users and provide a clear and concentrated view of data insights that matter most."] }, { title: "Cloud services", points: ["Proficient in Azure, AWS, and GCP, we build cloud big data solutions from scratch and migrate legacy workloads to the cloud to achieve better scalability, cost-efficiency, and availability of our customers’ data."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Our Advanced Big Data Competencies</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>SCT combines big data expertise with decades-long experience in other advanced technologies to deliver end-to-end big data applications that bring maximum value to their users.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    advbigDataSer.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default AdvBigData