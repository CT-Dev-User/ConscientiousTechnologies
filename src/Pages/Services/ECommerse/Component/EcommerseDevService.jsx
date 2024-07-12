import React from 'react'
import ecommerseDevImg from './websolution.png'
const EcommerseDevService = () => {
    const ecommerseSolutionArr = [{ title: "UX and UI design", desc: (
        <ul>
            <li>Target audience research: interviews, personas, user stories.</li>
            <li>Wireframing and prototyping.</li>
            <li>Usability testing.</li>
            <li>Forming a UI kit to reflect the personality of your brand.</li>
        </ul>
    )}, { title: "Webstore setup", desc: (
        <ul>
            <li>Bringing to life all the functional requirements planned.</li>
            <li>Front-end and back-end development.</li>
            <li>Mobile development.</li>
        </ul>
    ) }, { title: "Custom ecommerce development", desc: (
        <ul>
            <li>Headless and PWA development.</li>
            <li>AI-driven personalization.</li>
            <li>Voice-powered commerce.</li>
            <li>AR-powered experience.</li>
        </ul>
    ) }, { title: "Ecommerce integration", desc: (
        <ul>
            <li>Enterprise resource planning.</li>
            <li>Marketing automation.</li>
            <li>Customer service.</li>
            <li>Content management.</li>
            <li>Product information management.</li>
        </ul>
    ) }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Ecommerce Development Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Empowering E-commerce: Partner with CT for comprehensive e-commerce development services. From intuitive UX/UI designs to secure payment gateways, we amplify your online presence for enhanced customer engagement and sales growth.</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 justify-between md:w-[95%]'>
                <div className='w-[27%] h-[440px] md:hidden'>
                    <img src={ecommerseDevImg} alt="Ecommerce Development Services" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[70%] flex gap-2 flex-wrap md:w-[100%]'>
                    {ecommerseSolutionArr.map((items, i) => {
                        return (
                            <div className='w-[40%] h-[215px] p-3 border border-[#ccc] md:w-[100%] md:border-none md:h-auto md:py-3' key={i}>
                                <h4 className='md:text-[19px]'>{items.title}</h4>
                                <div className='text-[14px] mt-1 md:mt-2'>{items.desc}</div>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default EcommerseDevService
