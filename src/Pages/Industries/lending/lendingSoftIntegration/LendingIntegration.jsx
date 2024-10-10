import React from 'react'

const LendingIntegration = () => {

    const leadingIntegrationData = [{
        title: "Corporate systems", desc: (
            <ul>
                <li>CRM.</li>
                <li>Accounting software.</li>
                <li>Customer-facing apps (e.g., a customer portal, a company website).</li>
                <li>A BI solution.</li>
                <li>Case-specific systems, such as core banking software.</li>
            </ul>
        ), bgColor: "FF6868"
    },
    {
        title: "External data sources", desc: (
            <ul>
                <li>Credit rating platforms of the selected credit bureaus (e.g., Experian, Equifax, or TransUnion for the US).</li>
                <li>Bank accounts</li>
                <li>Financial data marketplaces.</li>
            </ul>
        ),
        bgColor: "1777BC"
    },
    {
        title: "Third-party services", desc: (
            <ul>
                <li> Payment gateways of banks or independent payment service providers (e.g., PayPal, Stripe).</li>
                <li>Messaging services.</li>
                <li>Authentication services.</li>
            </ul>
        ), bgColor: "E751FF"
    }]

    return (
        <div className="w-screen h-auto box-border lg:py-20 py-7 lg:bg-black lg:text-white text-black bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-white text-[blue]">
                    Lending Software Integrations ScienceSoft Helps Establish
                </h1>
                <p className="lg:w-[95%] mt-4 w-full text-base">
                    Our custom ERP development services are closely bound to our clients' needs and can be related to:
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {leadingIntegrationData.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
                        style={{ backgroundColor: `#${item.bgColor}` }}
                    >
                        <h1 className="text-lg w-[90%]">{item.title}</h1>
                        <p className="text-sm mt-2 font-normal w-[95%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LendingIntegration