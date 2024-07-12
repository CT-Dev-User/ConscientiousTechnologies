import React from 'react'

const SharePointUseCases = () => {
    const softwareAdv = [{ title: "HR Intranet", points: ["Employee information management.", "Recruitment, hiring and onboarding management.", "Employee benefits management.", "Payroll management."] }, { title: "Business-Oriented Intranet", points: ["Document management.", "Project and task management.","Employee communication and collaboration."] }, { title: "Social Intranet", points: ["Informal employee communication.", "Social media integration.", "News and announcements."] }, { title: "Document Management System", points: ["Document templates.", "Multistep and non-linear approval workflows.","Real-time collaboration on documents."] }, { title: "Contract Management System", points: ["Contract templates.","Guided contract creation.","Contract co-authoring.","Full-text and metadata search."] }, { title: "Legal Case Management System", points: ["Client and matter management.", "Tracking key dates and deadlines.","Time recording and billing."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
        <div className='w-[100%] mb-[30px]'>
            <h1 className='font-bold text-3xl md:text-[20px]'>SharePoint and Office 365 Use Cases</h1>
            <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[240px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
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

export default SharePointUseCases