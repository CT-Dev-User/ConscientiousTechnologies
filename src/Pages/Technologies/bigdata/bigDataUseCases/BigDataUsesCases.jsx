import React from 'react'

const BigDataUsesCases = () => {
    const bigDataUseCases = [{ title: "Manufacturing", points: ["Analyzing manufacturing data (equipment year, model, sensor data, error messages, engine temperature, etc.) to predict equipment failures and the remaining useful time in real time.", "Real-time monitoring of production processes, production equipment data, materials usage, etc., to identify factors leading to production time increase and delays for production optimization."] }, { title: "Healthcare", points: ["Capturing, storing, and analyzing patient-related data (doctor notes, medical images, EHR/EMR data, R&D results, etc.).", "Real-time patient monitoring and alerting on trends and patterns requiring the doctor’s attention.", "Personalized care plans recommendations."] }, { title: "Financial services", points: ["Analyzing integrated transactional data, interaction events, customer behavior in real time, identifying complex AML transactions, creating advanced risk models, etc., to identify potential fraud and fraud patterns.", "Consolidating and analyzing data on assets and liabilities and conducting credit risk assessment, liquidity risk assessment, counterparty risk analysis, etc., to mitigate financial risks."] }, { title: "Transportation and logistics", points: ["Tracking and analyzing real-time sensor data (cargo state, location, etc.) to make the delivery process fully transparent and ensure high-quality delivery of sensitive goods.", "Analyzing driver behavior, maintenance needs, weather data, traffic data, fuel consumption data, etc., in real time to enable dynamic route optimization."] }, { title: "Retail and ecommerce", points: ["Analyzing customer demographic data, data from mobile apps, in-store purchases, etc. to identify customer paths and behavior to optimize merchandizing, provide personalized product recommendations, discounts, etc.", "Forecasting customer demand, analyzing the key attributes of past and current products/services and commercial success of their offerings, and using ML-driven recommendations to create new products/services."] }, { title: "Oil and Gas", points: ["Analyzing log and sensor data from different types of equipment in real time and putting analytics results into operations to facilitate predictive equipment maintenance.", "Analyzing drilling and production process data, data generated from seismic monitors, etc., to identify new oil deposits."] }, { title: "Telecommunications", points: ["Analyzing the network usage trends and patterns and using sophisticated models to forecast areas with excess capacity and optimize the network capacity.", "Analyzing overall customer satisfaction, identifying customer churn patterns, and recommending the most relevant products/services to increase customer retention."] }, { title: "Professional services", points: ["Customer segmentation to offer personalized services, enable automated customer-agent matching, and ensure effective ad targeting.", "Financial data analytics to identify optimal service pricing strategies (based on competitors’ prices, market dynamics, historical data), detect revenue leakage, and improve profitability"] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Industry-specific big data use cases</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    bigDataUseCases.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default BigDataUsesCases