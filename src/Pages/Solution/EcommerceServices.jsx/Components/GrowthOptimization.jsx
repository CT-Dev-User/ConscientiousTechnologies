import React from 'react'
// import webSolution from '../../../../../assets/Services/DedicatedDevTeam/WebDev/websolution.png'
const GrowthOptimization = () => {
    const growthOptimizationArr = [{
        title: "Digital marketing automation", desc:
            (
                <ul>
                    <li className='list-disc ms-5'>Email marketing.</li>
                    <li className='list-disc ms-5'>Social media marketing.</li>
                    <li className='list-disc ms-5'>Content marketing.</li>
                    <li className='list-disc ms-5'>SEO marketing.</li>
                </ul>
            )
    }, {
        title: "Business performance optimization", desc: (
            <ul>
                <li className='list-disc ms-5'>Expanding customer acquisition channels.</li>
                <li className='list-disc ms-5'>Enabling an omnichannel business model.</li>
                <li className='list-disc ms-5'>Auditing digital user experience and introducing design improvements.</li>
                <li className='list-disc ms-5'>Improving the checkout experience.</li>
                <li className='list-disc ms-5'>Advancing data analytics capabilities.</li>
            </ul>
        )
    }]

    return (

        
        <div className='w-full my-16 '>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Ecommerce Growth and Optimization</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {growthOptimizationArr.map((item, index) => (
                    <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GrowthOptimization
