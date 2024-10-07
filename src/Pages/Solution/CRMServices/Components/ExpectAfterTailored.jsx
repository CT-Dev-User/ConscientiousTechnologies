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


    <div id='how-we-work' className='w-screen h-[auto] bg-[white] box-border pt-12 pb-8'>
    <div className='lg:w-[85%] mx-auto w-[95%]'>
      <h1 className='lg:text-3xl font-bold text-2xl text-[blue] lg:text-black'>What to Expect After Tailored CRM Implementation</h1>
      <p className='lg:w-[80%] mt-2 w-full text-base'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
    </div>
    <div className='hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7'>

      {expectAfterTailoredData.map((data, i) => (
        <div key={i} className={`w-[30%] h-52 text-[black] border-[#737373] flex flex-col justify-around py-2 px-6 ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
          <h1 className='font-bold text-4xl self-end mr-5 2xl:text-6xl' style={{ color: data.srColor }}>{data.srNo}</h1>
          <div>
            <h3 className='font-semibold text-lg 2xl:text-2xl'>{data.title}</h3>
            <p className='text-sm mt-2 2xl:text-lg'>{data.desc}</p>
          </div>
        </div>
      ))}

    </div>
    <div className='lg:hidden flex text-[white] w-[90%] mx-auto justify-center flex-wrap mt-7'>
      {expectAfterTailoredData.map((data, i) => (
        <div key={i} className={`w-[49%] h-56 text-[black] border-[#737373] border-dashed flex flex-col justify-around px-2 ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
          <h1 className='font-bold self-end mr-2 text-xl' style={{ color: data.srColor }}>{data.srNo}</h1>
          <div>
            <h3 className='text-base font-bold'>{data.title}</h3>
            <p className='text-sm'>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default ExpectAfterTailored;
