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
        <div className='w-[100vw] h-[auto] box-border py-[10px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Ecommerce Development Services</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Empowering E-commerce: Partner with CT for comprehensive e-commerce development services. From intuitive UX/UI designs to secure payment gateways, we amplify your online presence for enhanced customer engagement and sales growth.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                <div className='w-[27%] h-[450px] md:hidden bg-black'>
                    {/* <img src={ecommerseDevImg} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' /> */}
                </div>
                <div className='w-[65%] flex gap-2 flex-wrap md:w-[95%] md:gap-y-[30px]'>
                    {eCommerseDevServiceArr.map((items, i) => {
                        return (
                            <div key={i} className='w-[45%] h-[220px] p-3 border border-[#ccc] md:w-full md:border-none md:h-auto'>
                                <h4 className='font-bold'>{items.title}</h4>
                                <div className='text-[13.5px] mt-1'>{items.desc}</div>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default ECommerseDevService
