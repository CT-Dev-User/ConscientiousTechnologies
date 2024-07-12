import React from 'react'

const InvestmentAspects = () => {
    const pythonDevData = [
        { srNo: '01', title: "Optimal cooperation model", desc: "We can offer the cooperation model that suits you best: full outsourcing of lending software development, a dedicated team to take over a part of your development project, or team augmentation with our best talents.", srColor: '#FF8585' },
        { srNo: '02', title: "collaborative approach", desc: "We employ established practices of joint planning, decision-making, and problem-solving and maintain transparent, KPI-based collaboration to maximize the long-term value of our service.", srColor: '#76AA06' },
        { srNo: '03', title: "Prompt development", desc: "We can provide an MVP of lending software in 3+ months and consistently grow it to a full-featured solution with major releases every 2–4 weeks.", srColor: '#FFC635' },
        { srNo: '04', title: "Guaranteed compliance", desc: "We ensure compliance with AML/KYC regulations, CCPA, CECL, CCAR, FCRA, FCBA, ECOA, FDCPA, Basel III, the Dodd-Frank Act, GDPR a", srColor: '#A772FF' },
        { srNo: '05', title: "Focus on security", desc: "We implement intelligent fraud detection algorithms, multi-factor authentication, authorization controls for APIs, and other powerful", srColor: '#F34A91' },
        { srNo: '06', title: "Driving ROI techs", desc: "Having proficiency in cloud, AI, big data, blockchain, we are eager to share our expertise and assist in selecting and implementing cutting-", srColor: '#51ACFF' }
    ];

    return (
        <div id='how-we-work' className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Benefits of Lending Software Development with CT</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that CT delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
            </div>
            <div className='flex text-[white] w-[85%] flex-wrap mx-[110px] flex-wrap mt-[40px] md:hidden'>

                {pythonDevData.map((data, i) => (
                    <div key={i} className={`w-[32%] h-[220px] text-[black] border-[#737373] flex flex-col justify-around py-2 px-[30px] ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
                        <h1 className='font-bold text-[40px] self-end mr-5' style={{ color: data.srColor }}>{data.srNo}</h1>
                        <div>
                            <h3 className='font-semibold text-[18px]'>{data.title}</h3>
                            <p className='text-[14px] mt-2'>{data.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='hidden md:flex text-[white] w-[90%] flex-wrap mx-auto justify-center flex-wrap mt-[30px]'>
                {pythonDevData.map((data, i) => (
                    <div key={i} className={`w-[49%] h-[280px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
                        <h1 className='font-bold self-end mr-2 text-[18px]' style={{ color: data.srColor }}>{data.srNo}</h1>
                        <div>
                            <h3 className='text-[14px] font-bold'>{data.title}</h3>
                            <p className='text-[12px]'>{data.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InvestmentAspects