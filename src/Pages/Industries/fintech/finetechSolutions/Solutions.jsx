import React from 'react'

const Solutions = () => {
    const serviceDomain = [{ title: "Client-facing apps", points: ["Mobile banking apps","Money lending apps","Payment apps, including Buy Now Pay Later apps","Insurance apps"] }, { title: "Complex processing systems", points: ["Large-scale systems with a comprehensive processing engine at their core – they are able to handle complex operations specific to a particular BFSI segment:"] }, { title: "Peer-to-peer (P2P) marketplaces", points: ["Online platforms that connect multiple financial services providers, including private investors, with individuals and SMBs in need of financial services or funding:"] }, { title: "Process automation solutions", points: ["Software aimed to streamline particular operations for a business or its consumers: e.g., enable payment automation, underwriting automation, or portfolio management automation."] }, { title: "Digital Data analytics systems", points: ["Comprehensive solutions powered with advanced data science techs that help drive valuable insights from a company’s business data and optimize financial operations."] }, { title: "BFSI service platforms", points: ["Secure and scalable web platforms that enable complex multi-party financial activities, such as trading, investing, currency exchange."] },{title:"Digital collaboration solutions",points:["Centralized and blockchain-based platforms and networks providing digital collaboration environment for a BFSI company’s internal teams and external partners, as well as for multiple financial services providers."]},{title:"Digital wallets", points:["Online apps that enable fast and easy payments and money transfers while ensuring full security of the users’ personal and billing information. Cryptocurrency wallets to transact and manage crypto assets."]},{title:"Crypto assets", points:["Programmable assets built on blockchain that may represent tradeable securities, utilities, rewards, particular financial rights, and more. Blockchain-based digital currencies that serve as a means of payment, exchange, and value storage."]},{title:"Intelligent virtual assistants",points:["AI-powered agents that handle personalized customer communication and can provide clients with intelligent advice on the proper payment and investment actions."]},{title:"Financial fraud detection software",points:["Advanced cybersecurity tools that rely on artificial intelligence to instantly identify and prevent malicious behavior of a company’s employees or clients."]},{title:"Compliance monitoring",points:["Software enabling real-time monitoring of the financial IT system and employee adherence to the internal service policies and regulatory requirements."]}]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Fintech Solutions CT Delivers</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[250px] border border-gray-300 p-3 py-[30px] md:w-full md:h-auto md:border-none md:py-2' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal mt-1'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Solutions