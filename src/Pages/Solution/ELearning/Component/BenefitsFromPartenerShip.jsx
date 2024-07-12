import React from 'react';

const BenefitsFromPartenerShip = () => {
  const benefitsFromPartenerShipData = [
    { srNo: '01', title: "Excellent software quality", desc: "due to our quality-first approach to service delivery based on a mature ISO 9001-certified quality management system.", srColor: '#FF8585' },
    { srNo: '02', title: "Fast delivery", desc: "of a viable MVP (within 3–5 months) due to agile iterative development and applying CI/CD practices.", srColor: '#76AA06' },
    { srNo: '03', title: "Cost-efficiency", desc: "due to using OOTB software components, public APIs, and cloud-native architectures and continuous project cost optimization by ScienceSoft’s PMs.", srColor: '#FFC635' },
    { srNo: '04', title: "Guaranteed security ", desc: "of our customers' data due to ScienceSoft's robust security management practices supported by an ISO 27001 certificate.", srColor: '#A772FF' },
    { srNo: '05', title: "High user adoption", desc: "thanks to rich functional capabilities, engaging advanced features, user-friendly UI, and seamless UX of the eLearning app.", srColor: '#F34A91' },
    { srNo: '06', title: "Transparent operation", desc: "achieved via our mature collaboration practices, consistent software documentation, and regular reporting on the development KPIs..", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
      <div className='w-[85%] mx-auto md:w-full md:px-3'>
        <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>See How You Benefit from Partnering with ScienceSoft </h1>
        <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
      </div>
      <div className='flex text-[white] w-[95%] gap-[0px] flex-wrap mx-auto justify-center flex-wrap mt-[30px] md:hidden'>

        {benefitsFromPartenerShipData.map((data, i) => (
          <div key={i} className={`w-[380px] h-[220px] text-[black] border-[#737373] flex flex-col justify-around py-3 px-[20px]  ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
            <h1 className='font-bold text-[40px] self-end mr-5' style={{ color: data.srColor }}>{data.srNo}</h1>
            <div>
              <h3 className='font-semibold text-[18px]'>{data.title}</h3>
              <p className='text-[14px] mt-2 w-[85%]'>{data.desc}</p>
            </div>
          </div>
        ))}

      </div>
      <div className='hidden md:flex text-[white] w-[95%] flex-wrap mx-auto justify-center flex-wrap mt-[30px]'>
        {benefitsFromPartenerShipData.map((data, i) => (
          <div key={i} className={`w-[49%] h-[230px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
            <h1 className='font-bold self-end mr-2 text-[18px]' style={{ color: data.srColor }}>{data.srNo}</h1>
            <div>
              <h3 className='text-[14px] font-bold'>{data.title}</h3>
              <p className='text-[12px] w-[85%]'>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsFromPartenerShip;
