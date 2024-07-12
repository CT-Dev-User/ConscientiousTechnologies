import React from 'react'

const ImageAnalysisService = () => {
    const softwareAdv = [{ title: "Facial recognition", points: ["Identification of a specific person’s face to provide exclusive services, identify suspects and trespassers, etc."] }, { title: "Emotion recognition", points: ["Assessing the level of a customer’s satisfaction to solve unique business challenges."] }, { title: "Grading and sorting", points: ["Object quality analysis for streamlined classifying and sorting."] }, { title: "Quality control (QC)", points: ["Checking for surface defects, foreign materials, discoloration, absence of components, etc."] }, { title: "Counting", points: ["Using an optical system to count similar objects on the production line or in a warehouse."] }, { title: "Computer-aided diagnosis", points: ["Reading X-ray images, CT, PET and MRI scans, ultrasound scans (including 3D and 4D), isotope scans, etc. Enhancing clinical images, measuring organ dimensions and blood flow, detecting pathological signs and suggesting a diagnosis."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px] '>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Image Analysis Solutions We Offer</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-0'>{item.title}</h2>
                                <ul className='text-[14px] pl-[30px] font-medium md:pl-0'>
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

export default ImageAnalysisService