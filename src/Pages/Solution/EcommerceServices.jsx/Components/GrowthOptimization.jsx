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
        <div className='w-[100vw] h-[auto] box-border py-[10px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Ecommerce Growth and Optimization </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {growthOptimizationArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default GrowthOptimization
