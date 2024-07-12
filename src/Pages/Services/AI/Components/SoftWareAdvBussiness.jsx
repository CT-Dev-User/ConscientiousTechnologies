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
        <div className='w-[100vw] h-[auto] box-border py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Software for Advanced Business Tasks </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='w-[330px] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SoftWareAdvBussiness
