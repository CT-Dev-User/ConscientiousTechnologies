import React from 'react'

const BlockChainUseCases = () => {
    const softwareAdv = [{ title: "Financial transaction management", points: ["Secure and fast payment, lending, currency exchange transactions with no intermediary services. Reduced fraud, minimized delays, and zero lost agreement opportunities in trade finance and commodity trading due to the use of smart contracts."] }, { title: "Health record management", points: ["Unchangeable, HIPAA-compliant recordkeeping, secure transfer of sensitive data between multiple healthcare providers for quick and accurate patient diagnosis and effective treatment. Safe and easy medical record sharing with patients."] }, { title: "Supply chain and logistics", points: ["Faster validation and execution of supplier contract obligations, transparent goods provenance tracing and monitoring, enhanced supply protection, and more for a streamlined supply chain cycle with reduced disruption risks."] }, { title: "Asset management", points: ["Immutable asset records for various industries, from media and luxury retail to real estate and additive manufacturing. It helps provide proof of ownership and prevent fraud and counterfeiting."] }, { title: "Identity and access management", points: ["Irrevocable credential data and a zero-knowledge proof encryption scheme to prevent unauthorized access to the company data, networks, apps, or devices. Automated KYL/AML verification using smart contracts."] }, { title: "Document management", points: ["Safe document sharing, guaranteed legal compliance, easy record validation due to end-to-end traceability of document manipulations, from creation and editing to viewing and sharing."] }, { title: "Marketplace management", points: ["Secure multi-seller access, immutable record of all marketplace transactions for improved order and payment traceability, faster and less costly payments."] }, { title: "Insurance claim management", points: ["Fast and accurate claim validation, assessment, and payment, transparent resolution of claim disputes with reduced manual work to cut claim handling costs."] }, { title: "Electronic voting", points: ["Easy vote verification, secure vote storage, and transparent vote counting for credible, incorruptible voting and improved voter engagement."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Blockchain Use Cases ScienceSoft Supports</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
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

export default BlockChainUseCases