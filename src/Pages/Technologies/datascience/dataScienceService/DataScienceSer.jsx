import React from 'react'

const DataScienceSer = () => {
    const dataScienceSer = [{ title: "Data science consulting", points: ["Whether you need an ML model to solve a specific business task or plan to implement a complex data science solution, our industry analysts and data scientists are ready to provide you with an exhaustive consultation. With a detailed project roadmap and an optimal tech stack from us, you will get actionable steps to turn data into a value driver."] }, { title: "Data science solution implementation", points: ["Our experts build industry-centric data science solutions that foster informed decision-making, streamline operations, eliminate human work, increase safety, enhance customer experience, and ensure other data-driven benefits. For complex projects, we are ready to start with a PoC or an MVP."] }, { title: "Data science evolution", points: ["Our experts will provide you with strategic and tactical guidance if your data science solution needs to meet new challenging goals. We will design and implement new ML models, software features and modules to reinforce your solution with extra ML-powered capabilities."] }, { title: "Data science solution support", points: ["We regularly check your ML models for accuracy and adjust them to ensure high-quality insights and predictions. With proactive monitoring and efficient issue resolution by a trusted IT partner, you can be sure your solution functions seamlessly."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Data Science Services We Offer</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    dataScienceSer.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default DataScienceSer