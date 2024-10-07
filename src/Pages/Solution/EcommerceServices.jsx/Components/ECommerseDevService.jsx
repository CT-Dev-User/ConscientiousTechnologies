import React from 'react'
// import ecommerseDevImg from '../../../../assets/Solution/EcommerseDevService/ecommerseDevServiceImg.png'
const ECommerseDevService = () => {
    const eCommerseDevServiceArr = [{
        title: "UX and UI design", desc:
            (
                <ul>
                    <li className='list-disc ms-5'> Target audience research: interviews, personas, user stories.</li>
                    <li className='list-disc ms-5'>Wireframing and prototyping.</li>
                    <li className='list-disc ms-5'>Usability testing.</li>
                    <li className='list-disc ms-5'>Forming a UI kit to reflect the personality of your brand.</li>
                </ul>
            )
    }, {
        title: "Webstore setup", desc: (
            <ul>
                <li className='list-disc ms-5'>Bringing to life all the functional requirements planned.</li>
                <li className='list-disc ms-5'> Front-end and back-end development.</li>
                <li className='list-disc ms-5'>Mobile development.</li>
            </ul>
        )
    }, {
        title: "Custom ecommerce development", desc: (
            <ul>
                <li className='list-disc ms-5'>Headless and PWA development.</li>
                <li className='list-disc ms-5'>AI-driven personalization.</li>
                <li className='list-disc ms-5'>Voice-powered commerce.</li>
                <li className='list-disc ms-5'>AR-powered experience.</li>
            </ul>
        )
    }, {
        title: "Ecommerce integration", desc: (
            <ul>
                <li className='list-disc ms-5'>Enterprise resource planning.</li>
                <li className='list-disc ms-5'>Marketing automation.</li>
                <li className='list-disc ms-5'>Customer service.</li>
                <li className='list-disc ms-5'>Content management.</li>
                <li className='list-disc ms-5'>Product information management.</li>
            </ul>
        )
    }]

    return (
        <div className='w-full my-20'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Ecommerce Development Services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Empowering E-commerce: Partner with CT for comprehensive e-commerce development services. From intuitive UX/UI designs to secure payment gateways, we amplify your online presence for enhanced customer engagement and sales growth.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>

                <div className='w-[25%] h-[500px] bg-black'>

                </div>
                <div className='lg:w-[65%] flex mx-auto flex-wrap gap-7 w-[95%]'>

                    {eCommerseDevServiceArr.map((item, index) => (
                        <div key={index} className='md:w-[46%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ECommerseDevService
