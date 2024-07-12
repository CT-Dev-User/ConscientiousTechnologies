import React from 'react'

const PaymentSolution = () => {
    const PaymentSolutionArr = [{
        title: "Payment processing software", desc: (
            <ul>
                <li className='list-disc ms-5'>A backbone of any digital payment system, such software enables automated capture and processing of online and point-of-sale payment transactions and their instant transfer to the local and global payment processing networks to finalize funds transfer between the parties.</li>
            </ul>
        )
    }, {
        title: "Payment applications", desc: (
            <ul>
                <li className='list-disc ms-5'>Apps that offer a fast and secure way to perform domestic and cross-border P2P funds transfers. Functioning as full-featured digital wallets, such apps introduce rich functionality for money transfer and management, providing 100% visibility and streamlined control of transfer transactions.</li>
            </ul>
        )
    }, {
        title: "Money transfer applications", desc: (
            <ul>
                <li className='list-disc ms-5'>Apps that offer a fast and secure way to perform domestic and cross-border P2P funds transfers. Functioning as full-featured digital wallets, such apps introduce rich functionality for money transfer and management, providing 100% visibility and streamlined control of transfer transactions.</li>
            </ul>
        )
    }

        , {
        title: "Buy Now, Pay Later (BNPL) software", desc: (
            <ul>
                <li className='list-disc ms-5'>Such software combines loan management functionality with a broad set of consumer-facing features for convenient online and in-store installment payments. BNPL software helps merchants drive higher order value and frequency by letting shoppers pay their purchases off later in small portions.</li>
            </ul>
        )
    }, {
        title: "Payment gateways", desc: (
            <ul>
                <li className='list-disc ms-5'>Payment gateways serve to integrate payment functionality into customer-facing applications. Such software instantly collects purchasing details, billing information, and payment data provided by customers, encrypts the data, and transfers it securely to a payment processing system.</li>
            </ul>
        )
    }, {
        title: "Payment orchestration software", desc: (
            <ul>
                <li className='list-disc ms-5'>This software facilitates the integration of multiple selling platforms with the processing systems of various payment service providers. Such solutions instantly aggregate omnichannel transactions and provide analytics-based transaction routing to the best-fitting payment processor.</li>
            </ul>
        )
    }

        , {
        title: "Payment automation software", desc: (
            <ul>
                <li className='list-disc ms-5'>Software that helps enterprises eliminate manual tasks across all payment-related processes, from document processing to payment execution and reconciliation. Such solutions automate various types of payments, including supplier, employee, tax, and intercompany payments.</li>
            </ul>
        )
    }, {
        title: "Payment fraud detection system", desc: (
            <ul>
                <li className='list-disc ms-5'>Software that relies on artificial intelligence to analyze payment transactions and payer behavior and instantly spot fraud. Such solutions help prevent financial losses associated with malicious activities of employees and external bad actors.</li>
            </ul>
        )
    }, {
        title: "Blockchain payment networks", desc: (
            <ul>
                <li className='list-disc ms-5'>Decentralized networks that enable cost-effective, near-instant processing of domestic and cross-border payments with no cut-off times and no involvement of third parties. Such solutions offer full traceability of payment transactions and provide advanced security of payment data.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Payment Solutions ScienceSoft Delivers</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>From simple mobile apps to large-scale multi-party networks — we create all kinds of payment solutions and securely integrate them into robust payment processing chains.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {PaymentSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PaymentSolution
