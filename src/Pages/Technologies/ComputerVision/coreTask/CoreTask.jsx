import React from 'react'

const CoreTask = () => {
    const softwareAdv = [{ title: "Detect", points: ["Distinguish regions of interest for further analysis, individual objects from the background, etc."] }, { title: "Recognize", points: ["Label or classify objects in digital images based on one or several object classes: people, vehicles, electronic components, etc."] }, { title: "Identify", points: ["Recognize individual features of an object and classify it with more precision: identify individual people, specific vehicles, animal species, device models, etc."] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[20px] md:ms-0'>
            <div className='w-full mx-auto md:w-full md:px-3 '>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0] ms-0 w-full'>Image Analysis Core Tasks</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:pl-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
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

export default CoreTask