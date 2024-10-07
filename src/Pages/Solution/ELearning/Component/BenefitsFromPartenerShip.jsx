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

    <div id='how-we-work' className='w-screen h-[auto] bg-[white] box-border pt-12 pb-8'>
    <div className='lg:w-[85%] mx-auto w-[90%]'>
      <h1 className='lg:text-3xl font-bold text-2xl text-[blue] lg:text-black'>See How You Benefit from Partnering with ScienceSoft</h1>
      <p className='lg:w-[80%] mt-2 w-full text-base'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
    </div>
    <div className='hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7'>

      {benefitsFromPartenerShipData.map((data, i) => (
        <div key={i} className={`w-[30%] h-60 text-[black] border-[#737373] flex flex-col justify-around py-2 px-6 ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
          <h1 className='font-bold text-4xl self-end mr-5 2xl:text-6xl' style={{ color: data.srColor }}>{data.srNo}</h1>
          <div>
            <h3 className='font-semibold text-lg 2xl:text-2xl'>{data.title}</h3>
            <p className='text-sm mt-2 2xl:text-lg'>{data.desc}</p>
          </div>
        </div>
      ))}

    </div>
    <div className='lg:hidden flex text-[white] w-[90%] mx-auto justify-center flex-wrap mt-7'>
      {benefitsFromPartenerShipData.map((data, i) => (
        <div key={i} className={`w-[49%] h-64 text-[black] border-[#737373] border-dashed flex flex-col justify-around px-2 ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default BenefitsFromPartenerShip;
