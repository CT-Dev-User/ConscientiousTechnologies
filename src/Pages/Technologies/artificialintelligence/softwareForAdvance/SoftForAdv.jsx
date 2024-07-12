import React from 'react'

const SoftForAdv = () => {
    const softwareAdv = [{ title: "Personalization in sale & marketing", points: ["Advising on and developing ML-powered solutions to help companies find hidden patterns in massive amount of data to enable accurate predictions and forecasting, root-cause analysis, automated visual inspection, etc.Customer behavioral analytics, including face and emotion recognition."] }, { title: "Customer service and support", points: ["Virtual customer agents (chatbots, digital humans) providing assistance on any issues.","Speech-to-text and text-to-speech con"] }, { title: "Supply chain planning", points: ["Demand forecasting and demand-driven supply chain planning."] }, { title: "Predictive asset maintenance", points: ["Predicting failure probability over time/in a certain number of steps."] }, { title: "Medical imaging and diagnostics", points: ["Medical image analysis: CT, MRI, PET, SPECT, ultrasound images, X-ray scans, and more.","Computer-aided diagnostic a"] }, { title: "Financial management", points: ["Financial performance and risk forecasting.","Financial"] },{title:"Document processing", points:["Extraction, validation, and analysis of data from digital documents.","Conversion of pa"]},{title:"Content creation", points:["Automated generation of multi-format content based on user prompts.","Quality assuran"]},{title:"Fraud detection & physical security", points:["Automated spotting of fraudulent activities in digital and physical environments.","Intelligent enforcement"]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Software for Advanced Business Tasks</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] md:px-[5px] md:pt-[10px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px] md:text-[18px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
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

export default SoftForAdv