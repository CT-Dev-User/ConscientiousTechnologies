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

        <div
        id="how-we-work"
        className="w-screen h-[auto] bg-[white] box-border pt-12 pb-8"
    >
        <div className="lg:w-[85%] mx-auto w-[90%]">
            <h1 className="lg:text-3xl font-bold text-2xl text-[blue] lg:text-black">
                Benefits of Lending Software Development with CT
            </h1>
            <p className="lg:w-[80%] mt-2 w-full text-base">
                According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that CT delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:
            </p>
        </div>
        <div className="hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7">
            {pythonDevData.map((data, i) => (
                <div
                    key={i}
                    className={`w-[30%] h-64 text-[black] border-[#737373] flex flex-col justify-around py-2 px-6 ${i === 0 || i === 1 || i === 3 || i === 4 ? "border-r" : ""
                        } ${i === 0 || i == 1 || i == 2 ? "border-b" : ""}`}
                >
                    <h1
                        className="font-bold text-4xl self-end mr-5 2xl:text-6xl"
                        style={{ color: data.srColor }}
                    >
                        {data.srNo}
                    </h1>
                    <div>
                        <h3 className="font-semibold text-lg 2xl:text-2xl">
                            {data.title}
                        </h3>
                        <p className="text-sm mt-2 2xl:text-lg lg:text-base">
                            {data.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="lg:hidden flex text-[white] w-[90%] mx-auto justify-center flex-wrap mt-7">
            {pythonDevData.map((data, i) => (
                <div
                    key={i}
                    className={`w-[49%] h-64 text-[black] border-[#737373] border-dashed flex flex-col justify-around px-2 ${i === 0 || i === 2 || i === 4 ? "border-r" : ""
                        } ${i === 0 || i == 1 || i == 2 || i == 3 ? "border-b" : ""}`}
                >
                    <h1
                        className="font-bold self-end mr-2 text-xl"
                        style={{ color: data.srColor }}
                    >
                        {data.srNo}
                    </h1>
                    <div>
                        <h3 className="text-base font-bold">{data.title}</h3>
                        <p className="text-sm">{data.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default InvestmentAspects