import React from 'react'

const ChooseServiceOption = () => {
    const SaasDevScope = [{
        title: "Agency software consulting", desc: (
            <ul>
                <li className='list-disc ms-5'> Business needs analysis and enterprise solution conceptualization. </li>
                <li className='list-disc ms-5'>Feature mapping.</li>
                <li className='list-disc ms-5'>Architecture design (covers enterprise integrations).</li>
                <li className='list-disc ms-5'>UX and UI design.</li>
                <li className='list-disc ms-5'>Consulting on security and compliance.</li>
                <li className='list-disc ms-5'>Creating an implementation roadmap, including a risk mitigation plan, TCO and ROI estimates.</li>
            </ul>
        )
    },

    {
        title: "End-to-end software development", desc: (
            <ul>
                <li className='list-disc ms-5'> Software planning and conceptualization.</li>
                <li className='list-disc ms-5'>Architecture design.</li>
                <li className='list-disc ms-5'>Enterprise software development.</li>
                <li className='list-disc ms-5'>Integration with the required systems.</li>
                <li className='list-disc ms-5'>Quality assurance.</li>
            </ul>
        )
    },

    {
        title: "Legacy software modernization", desc: (
            <ul>
                <li className='list-disc ms-5'>Audit of the existing enterprise software system..</li>
                <li className='list-disc ms-5'>Enterprise software migration to the cloud.</li>
                <li className='list-disc ms-5'>Rearchitecting the existing software.</li>
                <li className='list-disc ms-5'>Modernization of the legacy codebase.</li>
                <li className='list-disc ms-5'>Modernization of the legacy tech stack.</li>
                <li className='list-disc ms-5'>Development of new software modules.</li>
            </ul>
        )
    }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[60px] md:pt-[50px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Choose a Service Option that Fits Your Needs Best</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Tailored Solutions: Discover the perfect fit for your requirements among our versatile service options. With customizable features and expert guidance, unlock the ideal solution to propel your business forward.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[30px]'>
                {SaasDevScope.map((item, index) => (
                    <div key={index} className='w-[350px] h-[250px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChooseServiceOption
