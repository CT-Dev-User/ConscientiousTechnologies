import React from 'react'

const CustomerExperience = () => {
    const customerExperience = [{ title: "Banking apps", points: ["-------"] }, { title: "Payment apps", points: ["-------"] }, { title: "Money transfer apps", points: ["-------"] }, { title: "Lending apps", points: ["-------"] }, { title: "Insurance apps", points: ["-------"] }, { title: "Crypto wallets", points: ["-------"] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Web and Mobile Applications to Introduce Excellent Digital Customer Experience</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Click on the cards below to explore a full scope of CT’s services for your business area.</p>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {customerExperience.map((item, index) => (
                    <div key={index} className='lg:w-[46%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
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

export default CustomerExperience