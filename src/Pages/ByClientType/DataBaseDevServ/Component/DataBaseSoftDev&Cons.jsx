import React from 'react'

const DataBaseConsulting = () => {
    const SaasDevScope = [{ title: "Database software consulting", desc: 
(
    <ul>
       <ul>
            <li className='list-disc ms-5'>Define database functionality and tech stack.</li>
            <li className='list-disc ms-5'>Develop a business case.</li>
            <li className='list-disc ms-5'>Estimate solution ROI.</li>
            <li className='list-disc ms-5'>Design database architecture for high performance, security and scalability.</li>
            <li className='list-disc ms-5'>Deliver UX/UI mock-ups.</li>
            <li className='list-disc ms-5'>Provide a project management and implementation scenario, project cost & time estimates.</li>
        </ul>
    </ul>
)
},

    { title: "Full-cycle database software development", desc: (
        <ul>
           <ul>
                <li className='list-disc ms-5'>Solution consulting and planning.</li>
                <li className='list-disc ms-5'>Database, web and mobile app development.</li>
                <li className='list-disc ms-5'>Integration with third-party systems.</li>
                <li className='list-disc ms-5'>User training.</li>
                <li className='list-disc ms-5'>After-launch support.</li>
                <li className='list-disc ms-5'>Continuous software management.</li>
            </ul>
        </ul>
    ) }
]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Database Software Consulting and Development</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Expert consulting and development services for database software solutions. We specialize in creating custom databases tailored to your organization's needs, providing guidance, implementation, and ongoing support to optimize data management processes.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[30px]'>
                {SaasDevScope.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default DataBaseConsulting
