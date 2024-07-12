import React from 'react'

const MLUseCases = () => {
    const useCasesData = [{ title: "Supply chain management", points: ["Demand forecasting","Inventory planning, management, and optimization,  preventive alerting for inventory control","Identifying quality issues in line production","Supplier relationship management based on smart supplier selection"] }, { title: "Production efficiency", points: ["Automated recognition of manufacturing defects","Power consumption forecasting and optimization","Process quality prediction based on process parameters","Production loss root cause analysis"] }, { title: "Predictive maintenance", points: ["Predicting remaining useful lifetime","Flagging anomalous behavior","Predicting failure probability over time/in a certain number of steps","Root cause failure analysis"] }, { title: "Transportation and logistics", points: ["Predicting vehicle demand","Predicting optimal amounts of fuel needed based on the analysis of driving patterns"] }, { title: "Operational intelligence", points: ["Operations anomaly and bottleneck recognition","Deviation root-cause analysis","Operational decision-making","Forecasting of operational performance metrics"] },{title:"Customer analytics", points:["Customer sentiment analysis","Customer behavior prediction","Sales forecasting","Context-aware marketing","AI-based product/service recommendation engines"]},{title:"Financial management", points:["Financial planning and analysis","Financial modeling","Algorithmic trading and hedging","Financial advisory and wealth management","Intelligent processing of financial documents"]},{title:"Computer vision", points:["Medical image analysis", "Biometric verification","Tracking customers inside retail stores","Object recognition and classification in traffic","Autonomous vehicles"]}, {title:"Natural language processing", points:["Sentiment analysis","Security authentication","Chatbots","Speech to text conversion","Spam filtering"]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
            <h1 className="text-3xl font-bold mb-[20px] md:text-[24px]">Machine Learning Use Cases We Cover</h1>
            <p className='font-semibold text-[14px] mb-[20px] md:text-[16px]'>CT assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    useCasesData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px]'>{item.title}</h2>
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

export default MLUseCases