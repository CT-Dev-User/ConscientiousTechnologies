import React from 'react'

const ITSolution = () => {
    const ITSolutionArr = [{
        title: "Advanced operational analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Operational cost analytics.</li>
                <li className='list-disc ms-5'>Capital project execution analytics.
                </li>
                <li className='list-disc ms-5'>Exploration progress analytics.</li>
                <li className='list-disc ms-5'>Supplier analytics.</li>
                <li className='list-disc ms-5'>Supply chain status analytics.</li>
                <li className='list-disc ms-5'>Drilling analytics.</li>

            </ul>
        )
    }, {
        title: "Capital project management", desc: (
            <ul>
                <li className='list-disc ms-5'>Project document and digital asset management. </li>
                <li className='list-disc ms-5'>4D/5D building information modeling (BIM), VR.
                </li>
                <li className='list-disc ms-5'>Planning and scheduling.</li>
                <li className='list-disc ms-5'>Quality assurance.</li>
                <li className='list-disc ms-5'>Project cost management.</li>
                <li className='list-disc ms-5'>Project risk management.</li>
            </ul>
        )
    }
        , {
        title: "Procurement/Supplier", desc: (
            <ul>
                <li className='list-disc ms-5'>Supplier assessment and management.</li>
                <li className='list-disc ms-5'>Supplier risk management.</li>
                <li className='list-disc ms-5'>Supplier portals.</li>
                <li className='list-disc ms-5'>Inventory management.</li>
                <li className='list-disc ms-5'>Purchase order automation.</li>
            </ul>
        )
    }
        , {
        title: "Knowledge management", desc: (
            <ul>
                <li className='list-disc ms-5'>Knowledge resources extraction and storage (daily drilling reports, regular project reports, incident reports, etc.).</li>
                <li className='list-disc ms-5'>Knowledge source screening and annotation (manually and using AI).</li>
                <li className='list-disc ms-5'>Semantic search across the knowledge base.</li>
            </ul>
        )
    }, {
        title: "-------", desc: (
            <ul>
                <li className='list-disc ms-5'> Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior.</li>
                <li className='list-disc ms-5'>Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance.</li>
            </ul>
        )
    }, {
        title: "-------", desc: (
            <ul>

                <li className='list-disc ms-5'>Demand-side platforms (DSPs)</li>
                <li className='list-disc ms-5'>Supply-side platforms (SSPs)</li>
                <li className='list-disc ms-5'>Data management platforms (DMPs).</li>
                <li className='list-disc ms-5'>Analytics</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>IT Solutions for Oil and Gas ScienceSoft Offers</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
                <h4 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0] mt-[30px]'>Business management</h4>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {ITSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ITSolution
