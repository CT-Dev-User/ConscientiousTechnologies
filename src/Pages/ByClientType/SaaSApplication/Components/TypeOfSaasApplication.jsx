import React from 'react'

const TypeOfSaasApplication = () => {
    const OurDeskTop = [{title:"Ecommerce and retail solutions", desc:(
        <ul>
            <li className='list-disc ms-5'>Online storefronts.</li>
            <li className='list-disc ms-5'>Shopping cart and checkout systems.</li>
            <li className='list-disc ms-5'>Inventory management, and many more.</li>
        </ul>
    )}, {title:"Enterprise resource planning (ERP)", desc:(
        <ul>
            <li className='list-disc ms-5'>Corporate finance management.</li>
            <li className='list-disc ms-5'>Procurement and supply chain management.</li>
            <li className='list-disc ms-5'>HR management, and many more.</li>
        </ul>
    )}, {title:"Customer relationship management (CRM)", desc:(
        <ul>
            <li className='list-disc ms-5'>Sales automation.</li>
            <li className='list-disc ms-5'>Customer support and service.</li>
            <li className='list-disc ms-5'>Marketing automation, and many more.</li>
        </ul>
    )}, 
    {title:"Content management systems (CMS)", desc:(
        <ul>
            <li className='list-disc ms-5'>Website creation and management.</li>
            <li className='list-disc ms-5'>Blogging platforms.</li>
            <li className='list-disc ms-5'>Domain hosting and management, and many more.</li>
        </ul>
    )},
    {title:"Financial services and fintech", desc:(
        <ul>
            <li className='list-disc ms-5'>Payment processing.</li>
            <li className='list-disc ms-5'>Loan processing.</li>
            <li className='list-disc ms-5'>Claim processing.</li>
            <li className='list-disc ms-5'>Cryptocurrency wallets, and more.</li>
        </ul>
    )},
    {title:"Healthcare and life sciences", desc:(
        <ul>
            <li className='list-disc ms-5'>Electronic health records (EHR).</li>
            <li className='list-disc ms-5'>Telemedicine platforms</li>
            <li className='list-disc ms-5'>Clinical trial management, and many more.</li>
        </ul>
    )},
    {title:"Travel apps", desc:(
        <ul>
            <li className='list-disc ms-5'>Booking platforms.</li>
            <li className='list-disc ms-5'>Itinerary planning tools.</li>
            <li className='list-disc ms-5'>Flight tracking and airport information services, and many more.</li>
        </ul>
    )}, 
    {title:"Health and wellness services", desc:(
        <ul>
            <li className='list-disc ms-5'>Personal wellness and fitness apps.</li>
            <li className='list-disc ms-5'>Mental health apps.</li>
            <li className='list-disc ms-5'>Nutrition tracking, and many more.</li>
        </ul>
    )}, 
    {title:"Cybersecurity and identity management", desc:(
        <ul>
            <li className='list-disc ms-5'>Network security.</li>
            <li className='list-disc ms-5'>Identity and access management (IAM).</li>
            <li className='list-disc ms-5'>Threat detection and response, and many more.</li>
        </ul>
    )}
]

  return (
    <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
    <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Solutions We Help Startups Create</h1>
        <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Click on the cards below to explore a full scope of ScienceSoft’s services for the type of software you want to build.</p>
    </div>
    <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-8 justify-center items-center'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[300px] h-[180px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>


</div>
  )
}

export default TypeOfSaasApplication
