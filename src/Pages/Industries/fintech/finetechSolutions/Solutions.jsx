import React from 'react'

const Solutions = () => {
    const serviceDomain = [{ title: "Client-facing apps", points: ["Mobile banking apps", "Money lending apps", "Payment apps, including Buy Now Pay Later apps", "Insurance apps"] }, { title: "Complex processing systems", points: ["Large-scale systems with a comprehensive processing engine at their core – they are able to handle complex operations specific to a particular BFSI segment:"] }, { title: "Peer-to-peer (P2P) marketplaces", points: ["Online platforms that connect multiple financial services providers, including private investors, with individuals and SMBs in need of financial services or funding:"] }, { title: "Process automation solutions", points: ["Software aimed to streamline particular operations for a business or its consumers: e.g., enable payment automation, underwriting automation, or portfolio management automation."] }, { title: "Digital Data analytics systems", points: ["Comprehensive solutions powered with advanced data science techs that help drive valuable insights from a company’s business data and optimize financial operations."] }, { title: "BFSI service platforms", points: ["Secure and scalable web platforms that enable complex multi-party financial activities, such as trading, investing, currency exchange."] }, { title: "Digital collaboration solutions", points: ["Centralized and blockchain-based platforms and networks providing digital collaboration environment for a BFSI company’s internal teams and external partners, as well as for multiple financial services providers."] }, { title: "Digital wallets", points: ["Online apps that enable fast and easy payments and money transfers while ensuring full security of the users’ personal and billing information. Cryptocurrency wallets to transact and manage crypto assets."] }, { title: "Crypto assets", points: ["Programmable assets built on blockchain that may represent tradeable securities, utilities, rewards, particular financial rights, and more. Blockchain-based digital currencies that serve as a means of payment, exchange, and value storage."] }, { title: "Intelligent virtual assistants", points: ["AI-powered agents that handle personalized customer communication and can provide clients with intelligent advice on the proper payment and investment actions."] }, { title: "Financial fraud detection software", points: ["Advanced cybersecurity tools that rely on artificial intelligence to instantly identify and prevent malicious behavior of a company’s employees or clients."] }, { title: "Compliance monitoring", points: ["Software enabling real-time monitoring of the financial IT system and employee adherence to the internal service policies and regulatory requirements."] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Fintech Solutions CT Delivers
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {serviceDomain.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            {item.points.map((point, idx) => (
                                // Split each point by comma and map over the split parts
                                <ul>
                                    {point.split(',').map((splitPoint, subIdx) => (
                                        <li key={subIdx} className='mb-2 list-disc ms-5'>{splitPoint.trim()}</li>
                                    ))}
                                </ul>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Solutions