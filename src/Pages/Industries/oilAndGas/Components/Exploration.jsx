import React from 'react'

const Exploration = () => {
    const explorationArr = [{
        title: "Integrated oil and gas resources", desc: (
            <ul>
                <li className='list-disc ms-5'>Geological information ingestion and storage.</li>
                <li className='list-disc ms-5'>Seismic data ingestion and storage.
                </li>
                <li className='list-disc ms-5'>Data access with strong security.</li>
                <li className='list-disc ms-5'>Seismic attribute calculation.</li>
                <li className='list-disc ms-5'>Data interpretation (manual and automated).</li>
            </ul>
        )
    }, {
        title: "Reservoir modeling, monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Enhanced reservoir monitoring. </li>
                <li className='list-disc ms-5'>Fracture and fault detection in reservoirs.
                </li>
                <li className='list-disc ms-5'>Reservoir modeling and simulation.</li>
                <li className='list-disc ms-5'>Quality assurance.</li>
                <li className='list-disc ms-5'>Real-time remote monitoring of changes in big reservoirs.</li>
                <li className='list-disc ms-5'>Advanced visualization, including VR.</li>
            </ul>
        )
    }
        , {
        title: "Remote operations center (ROC)", desc: (
            <ul>
                <li className='list-disc ms-5'>Remote monitoring of drilling and well operations.
                </li>
                <li className='list-disc ms-5'>Automated alarming (e.g., in case of high fault probability).</li>
                <li className='list-disc ms-5'>Advanced data visualization, including VR.</li>
                <li className='list-disc ms-5'>Drilling optimization via evaluation of multiple decision</li>
            </ul>
        )
    }
        , {
        title: "Equipment maintenance", desc: (
            <ul>
                <li className='list-disc ms-5'>Long-term maintenance planning (with resource leveling and optimization).</li>
                <li className='list-disc ms-5'>Short-term work order planning.</li>
                <li className='list-disc ms-5'>Virtual reality to facilitate equipment maintenance and repairing.</li>
            </ul>
        )
    }, {
        title: "Predictive maintenance", desc: (
            <ul>
                <li className='list-disc ms-5'>Equipment and sensor data ingestion and storage (cloud big data storage).</li>
                <li className='list-disc ms-5'>Machine-learning-based predictive failure modeling in real-time.</li>
                <li className='list-disc ms-5'>Drill bit defect recognition based on image analysis.</li>
            </ul>
        )
    }, {
        title: "VR-based immersive training", desc: (
            <ul>
                <li className='list-disc ms-5'>Operational training (introductory training, training on new equipment/sites, etc.).</li>
                <li className='list-disc ms-5'>Emergency training.</li>
                <li className='list-disc ms-5'>Safety training.</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Exploration & production</h1>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {explorationArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exploration
