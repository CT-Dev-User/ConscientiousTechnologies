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

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>IT Solutions for Oil and Gas ScienceSoft Offers</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>We cover the implementation of all core functionality modules of operations management software.</p>
                <h4 className='lg:text-2xl font-bold text-xl lg:text-black mt-6 text-[blue]'>IT Solutions for Oil and Gas ScienceSoft Offers</h4>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {ITSolutionArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ITSolution
