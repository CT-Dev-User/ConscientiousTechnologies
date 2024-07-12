import React from 'react'

const LendingIntegration = () => {

    const leadingIntegrationData = [{ title: "Corporate systems", desc:(
        <ul>
            <li>CRM.</li>
            <li>Accounting software.</li>
            <li>Customer-facing apps (e.g., a customer portal, a company website).</li>
            <li>A BI solution.</li>
            <li>Case-specific systems, such as core banking software.</li>
        </ul>
    ), bgColor:"FF6868" },
    {
        title: "External data sources", desc: (
            <ul>
                <li>Credit rating platforms of the selected credit bureaus (e.g., Experian, Equifax, or TransUnion for the US).</li>
                <li>Bank accounts</li>
                <li>Financial data marketplaces.</li>
            </ul>
        ),
        bgColor:"1777BC"
    }, 
    { title: "Third-party services", desc: (
        <ul>
            <li> Payment gateways of banks or independent payment service providers (e.g., PayPal, Stripe).</li>
            <li>Messaging services.</li>
            <li>Authentication services.</li>
        </ul>
    ), bgColor:"E751FF" }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
        <div className='w-[85%] mx-auto md:w-full md:px-3'>
            <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Lending Software Integrations ScienceSoft Helps Establish </h1>
            <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
        </div>
        <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
            {leadingIntegrationData.map((item, index) => (
                <div key={index} className='w-[350px] h-[200px] p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                    <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                    <div className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</div>
                </div>
            ))}
        </div>


    </div>
    )
}

export default LendingIntegration