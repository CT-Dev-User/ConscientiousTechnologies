import React from 'react'

const UseCases = () => {
    const useCasesData = [{ title: "Operational intelligence", points: ["Optimizing process performance due to detecting deviations and undesirable patterns and their root-cause analysis, performance prediction and forecasting."] }, { title: "Supply chain management", points: ["Optimizing supply chain management with reliable demand predictions, inventory optimization recommendations, supplier- and risk assessment."] }, { title: "Product quality", points: ["Proactively identifying the production process deviations affecting product quality and production process disruptions."] }, { title: "Predictive maintenance", points: ["Monitoring machinery, identifying and reporting on patterns leading to pre-failure and failure states."] }, { title: "Dynamic route optimization", points: ["ML-based recommendation of the optimal delivery route based on the analysis of vehicle maintenance data, real-time GPS data, route traffic data, road maintenance data, weather data, etc."] }, { title: "Customer experience", points: ["Identifying customer behavior patterns and performing customer segmentation to build recommendation engines, design personalized ,services, etc."] }, { title: "Customer churn", points: ["Identifying potential churners by building predictions based on customers’ behavior."] }, { title: "Sales process optimization", points: ["Advanced lead and opportunity scoring, next-step sales recommendations, alerting on negative customer sentiments, etc."] }, { title: "Financial risk management", points: ["Forecasting project earnings, evaluating financial risks, assessing a prospect’s creditworthiness."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Use Cases CT Covers with Data Science Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Use Cases ScienceSoft Covers with Data Science Services .</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    useCasesData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[200px] md:w-[48%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] md:px-[10px] box-border' key={index}>
                                <h2 className='text-xl font-semibold'>{item.title}</h2>
                                <ul className='text-[14px] font-normal'>
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

export default UseCases