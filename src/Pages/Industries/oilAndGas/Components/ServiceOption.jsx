import React from 'react'

const ServiceOption = () => {
    const ServiceOptionArr = [{
        title: "Advanced technologies consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Reservoir modeling, monitoring and management.</li>
                <li className='list-disc ms-5'>Remote operations center (ROC).
                </li>
                <li className='list-disc ms-5'>Predictive equipment maintenance, etc</li>
            </ul>
        )
    }, {
        title: "IT solution consulting, implementation and support", desc: (
            <ul>
                <li className='list-disc ms-5'>Expenses on your ready-made product grow together with your customer base.</li>
                <li className='list-disc ms-5'>Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.
                </li>
                <li className='list-disc ms-5'>Low user satisfaction due to a complex interface and issues at the code level.</li>
            </ul>
        )
    }
        , {
        title: "IT outsourcing", desc: (
            <ul>



                <li className='list-disc ms-5'>Outsourced development of oil and gas software.</li>
                <li className='list-disc ms-5'>Outsourced data analytics.</li>
                <li className='list-disc ms-5'>Outsourced QA.</li>
                <li className='list-disc ms-5'>Outsourced IT support.</li>
            </ul>
        )
    }
        , {
        title: "IT staff augmentation", desc: (
            <ul>


                <li className='list-disc ms-5'>Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>Testers (manual and automated testing).</li>
                <li className='list-disc ms-5'>DevOps engineers.</li>
                <li className='list-disc ms-5'>Data analysts.</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Choose Your Service Option</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {ServiceOptionArr.map((item, index) => (
                    <div key={index} className='lg:w-[46%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceOption
