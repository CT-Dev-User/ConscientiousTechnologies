import React from 'react'

const SoftWareAdvBussiness = () => {
    const softWareBussinessArr = [{
        title: "Personalization in sale & marketing", desc: (
            <ul>
                <li className='list-disc ms-5'>Customer behavioral analytics, including face and emotion recognition.</li>
            </ul>
        )
    }, {
        title: "Customer service and support", desc: (
            <ul>
                <li className='list-disc ms-5'>Virtual customer agents (chatbots, digital humans) providing assistance on any issues.</li>
                <li className='list-disc ms-5'>Speech-to-text and text-to-speech con</li>
            </ul>
        )
    }, {
        title: "Supply chain planning", desc: (
            <ul>
                <li className='list-disc ms-5'>Demand forecasting and demand-driven supply chain planning.</li>
            </ul>
        )
    }, {
        title: "Predictive asset maintenance", desc: (
            <ul>
                <li className='list-disc ms-5'>Predicting failure probability over time/in a certain number of steps.</li>
            </ul>
        )
    }, {
        title: "Medical imaging and diagnostics", desc: (
            <ul>
                <li className='list-disc ms-5'>Medical image analysis: CT, MRI, PET, SPECT, ultrasound images, X-ray scans, and more.</li>
                <li className='list-disc ms-5'>Computer-aided diagnostic a</li>
            </ul>
        )
    },
    {
        title: "Financial management", desc: (
            <ul>
                <li className='list-disc ms-5'>Financial performance and risk forecasting.</li>
                <li className='list-disc ms-5'>Financial modeling.</li>
            </ul>
        )
    },

    {
        title: "Document processing", desc: (
            <ul>
                <li className='list-disc ms-5'>Extraction, validation, and analysis of data from digital documents.</li>
                <li className='list-disc ms-5'>Conversion of pa</li>
            </ul>
        )
    }, {
        title: "Content creation", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated generation of multi-format content based on user prompts.</li>
                <li className='list-disc ms-5'>Quality assuran</li>
            </ul>
        )
    }, {
        title: "Fraud detection & physical security", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated spotting of fraudulent activities in digital and physical environments.</li>
                <li className='list-disc ms-5'>Intelligent enforcement o</li>
            </ul>
        )
    }]
    return (

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='2xl:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Software for Advanced Business Tasks</h1>
            <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {softWareBussinessArr.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>

    )
}

export default SoftWareAdvBussiness
