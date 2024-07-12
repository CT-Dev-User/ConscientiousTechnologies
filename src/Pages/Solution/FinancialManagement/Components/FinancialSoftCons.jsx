import React from 'react'

const FinancialSoftCons = () => {
    const CollabSenario = [{ title: "Risk - free implementation", desc: "We carefully analyze the economic feasibility of custom financial software development and advanced financial technology implementation for your case. Our experts provide a detailed cost estimate to help you confidently decide on further engagement and accurately plan expenses. ", bgColor:"FF6868" },
    {
        title: "Result-oriented service ", desc: "Our IT support activities and service quality are reflected in regular reports with clear metrics for strict compliance with service level objectives.",
        bgColor:"1777BC"
    }, 
    { title: "Guaranteed security", desc: "We design software powered with multi-layer data encryption, role-based access control, intelligent fraud detection, and other robust security mechanisms to ensure full safety of financial data and effective response to al types of cyber threats.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:pt-[10px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Benefits of Financial Software Consulting by CT</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:h-auto md:border-none' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default FinancialSoftCons
