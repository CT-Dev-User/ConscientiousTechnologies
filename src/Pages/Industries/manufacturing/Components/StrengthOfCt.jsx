import React from 'react';

const StrengthOfCt = () => {
    const strengthOfCTData = [
        { srNo: '01', title: "Full-cycle services", desc: "We offer comprehensive manufacturing IT services, from design and development to ongoing evolution and support of your software.", srColor: '#FF8585' },
        { srNo: '02', title: "Estimation accuracy", desc: "Due to ample industry experience of our project managers, we can accurately estimate project costs and delivery time", srColor: '#76AA06' },
        { srNo: '03', title: "Quality-first approach", desc: "We adhere to our established quality management practices to deliver services of consistently high and predictable quality and minimize project risks.", srColor: '#FFC635' },
        { srNo: '04', title: "Focus on security.", desc: "We rely on comprehensive security policies and processes, advanced cybersecurity techs, and our skilled professionals to guarantee safety of our customers’ data.", srColor: '#A772FF' },
        { srNo: '05', title: "Cost-efficiency", desc: "We use proven open-source components like frameworks and libraries and public APIs to reduce implementation costs and increase the ROI of your solution.", srColor: '#F34A91' },
        { srNo: '06', title: "Minimized risks.", desc: " We adhere to the iterative development model that allows seeing first results early and get next versions of a solution delivered every 2-4 weeks.", srColor: '#51ACFF' }
    ];

    return (
        <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Strengths of ScienceSoft's Offering for Manufacturing Companies </h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models: </p>
            </div>
            <div className='flex text-[white] w-[90%] gap-[0px] flex-wrap mx-auto justify-center flex-wrap mt-[30px] md:hidden'>
                {strengthOfCTData.map((data, i) => (
                    <div key={i} className={`w-[350px] h-[220px] text-[black] border-[#737373] flex flex-col justify-around py-3 px-[30px]  ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
                        <h1 className='font-bold text-[40px] self-end mr-5' style={{ color: data.srColor }}>{data.srNo}</h1>
                        <div>
                            <h3 className='font-semibold text-[18px]'>{data.title}</h3>
                            <p className='text-[14px] mt-2'>{data.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='hidden md:flex text-[white] w-[90%] flex-wrap mx-auto justify-center flex-wrap mt-[30px]'>
                {strengthOfCTData.map((data, i) => (
                    <div key={i} className={`w-[49%] h-[250px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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
};

export default StrengthOfCt;
