import React from 'react'

const SuccessFactor = () => {
    const SuccessFactorArr = [{
        title: "Sustainable performance", desc:
            "Lack of need for regular attendance is the key point of kiosks, that's why kiosk software should be sustainable and fail-proof, requiring minimum administrators’ involvement. At ScienceSoft, we design controller software to conduct basic self-checks and run automated troubleshooting that eliminates uncovered errors. We also develop a backup system that immediately notifies a maintenance team "
        , bgColor: "FF6868"
    },
    {
        title: "Functional growth and scalability", desc: "In its kiosk solutions, ScienceSoft enables agile and continuous functionality expansion for kiosk software to help businesses iteratively adapt to customers’ changing needs and provide relevant service. We also consider it important to allow for ease and convenience of upgrades during kiosk software architecture design, since it will speed up roll-out of new features in the future.",
        bgColor: "1777BC"
    },
    { title: "Regulatory compliance", desc: "Depending on the kiosk’s functional specifics and the region it is located in, ScienceSoft makes sure that the kiosk software fully complies with respective necessary regulations, for example, ADA, HIPAA, GDPR, and PCI.", bgColor: "E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[50px] md:pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Success Factors of Kiosk Software </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>To make sure that a kiosk solution will help you achieve your business goals and get reasonable ROI, ScienceSoft recommends to pay special attention to the following aspects:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {SuccessFactorArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[300px] border border-gray-300 p-3 text-[white] pt-6 md:w-full md:border-none md:h-auto' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default SuccessFactor
