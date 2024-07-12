import React from 'react';

const BenefitsFromCloud = () => {
  const processWeFollowData = [
    { srNo: '01', title: "Reduced migration cost", desc: "We design individual pragmatic migration strategies for each infrastructure component (applications, databases, data warehouses, desktops, etc.) to avoid extra re-development efforts and cut down on migration costs.", srColor: '#FF8585' },
    { srNo: '02', title: "Optimized cloud costs", desc: "We design optimal resource orchestration patterns (including auto-scaling for load surges in peak times) and select particular cloud services best suited for your specific case.", srColor: '#76AA06' },
    { srNo: '03', title: "High development speed", desc: "We help you organize effective DevOps processes, incl. continuous code integration, testing, and delivery. Also, we will advise you on ready-to-go cloud services", srColor: '#FFC635' },
    { srNo: '04', title: "Reliability", desc: "We design fault-tolerant architectures for your cloud apps and establish best practices of cloud performance management to ensure high app reliability and fast recovery.", srColor: '#A772FF' },
    { srNo: '05', title: "Enhanced security", desc: "We rely on our effective and transparent information security management processes and help you encrypt data at rest and in transit,", srColor: '#F34A91' },
    { srNo: '06', title: "Guaranteed quality", desc: "Entrusting your cloud infrastructure to ScienceSoft, you can be 100% sure of the quality of the delivered services - our mature quality management system", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border py-[60px] md:py-[30px]'>
      <div className='w-[85%] mx-auto md:w-full md:px-3'>
        <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>How You Benefit from Cloud Consulting Services by ScienceSoft</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Maximize Efficiency: Discover the transformative advantages of Cloud Consulting Services with CT. From cost optimization to enhanced security, unlock the full potential of cloud technology for your business success.</p>
      </div>
      <div className='flex text-[white] w-[100%] gap-[0px] flex-wrap flex-wrap mt-[30px] md:hidden ms-[100px]'>

        {processWeFollowData.map((data, i) => (
          <div key={i} className={`w-[370px] h-[220px] text-[black] border-[#737373] flex flex-col justify-around py-3 px-[30px]  ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
            <h1 className='font-bold text-[40px] self-end mr-5' style={{ color: data.srColor }}>{data.srNo}</h1>
            <div>
              <h3 className='font-semibold text-[18px]'>{data.title}</h3>
              <p className='text-[14px] mt-2'>{data.desc}</p>
            </div>
          </div>
        ))}

      </div>
      <div className='hidden md:flex text-[white] w-[95%] flex-wrap mx-auto justify-center flex-wrap mt-[30px]'>
        {processWeFollowData.map((data, i) => (
          <div key={i} className={`w-[49%] h-[230px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] md:pb-3 ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default BenefitsFromCloud;
