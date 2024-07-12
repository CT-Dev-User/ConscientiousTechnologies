import React from 'react';

const ExpectAfterTailored = () => {
  const expectAfterTailoredData = [
    { srNo: '01', title: "Faster sales cycles", desc: "Due to the automation of up to 30% of sales activities.", srColor: '#FF8585' },
    { srNo: '02', title: "Lead volume growth", desc: "Due to unlimited multi-channel marketing campaigns that can be managed simultaneously.", srColor: '#76AA06' },
    { srNo: '03', title: "Reduced workload", desc: "Thanks to the effective self-service tools for customers.", srColor: '#FFC635' },
    { srNo: '04', title: "Higher conversions sales", desc: "Made possible by dynamic customer segmentation and relevant marketing offerings at each customer life cycle stage.", srColor: '#A772FF' },
    { srNo: '05', title: "Higher customer retention ", desc: "Due to a personalized approach to each customer, enabled by a well-documented conversation and sales history.", srColor: '#F34A91' },
    { srNo: '06', title: "Faster customer service", desc: "Due to intelligent workflow automation and instant access to comprehensive customer data.", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
      <div className='w-[85%] mx-auto md:w-full md:px-3'>
        <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>What to Expect After Tailored CRM Implementation </h1>
        <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
      </div>
      <div className='flex text-[white] w-[90%] gap-[0px] flex-wrap mx-auto justify-center flex-wrap mt-[30px] md:hidden'>

        {expectAfterTailoredData.map((data, i) => (
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
        {expectAfterTailoredData.map((data, i) => (
          <div key={i} className={`w-[49%] h-[180px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default ExpectAfterTailored;
