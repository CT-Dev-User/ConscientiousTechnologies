import React from 'react';

const BenefitFromSaaSDev = () => {
  const benifitsOfSaas = [
    { srNo: '01', title: "Professional product design", desc: "Our business analysts and brand managers will translate your idea into a competitive product with intuitive UX, eye-catching UI, and a distinctive brand identity.", srColor: '#FF8585' },
    { srNo: '02', title: "Reduced development costs", desc: "Due to mature project management, scalable cloud-native architectures, and ready-made components (frameworks, platforms, and cloud services).", srColor: '#76AA06' },
    { srNo: '03', title: "Preventive cybersecurity ", desc: "To detect vulnerabilities before they reach production and proactively secure your users’ personal data.", srColor: '#FFC635' },
    { srNo: '04', title: "99.98% app availability", desc: "Due to professional usage of cloud load balancing tools, thorough monitoring activities, and mature DevOps.", srColor: '#A772FF' },
    { srNo: '05', title: "Quality management ", desc: "Enforced throughout SaaS development life cycle and a tailored set of KPIs for transparent reporting.", srColor: '#F34A91' },
    { srNo: '06', title: "Easy SaaS evolution", desc: "Due to the modular architecture, clear separation of concerns (SoC), and standardized APIs.", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>How You Benefit From SaaS Development with ScienceSoft</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Increased efficiency, scalability, and cost-effectiveness are key benefits of SaaS development. Businesses gain access to innovative software solutions without the hassle of maintenance, enabling them to focus on core operations and drive growth.</p>
      </div>
      <div className='flex text-[white] w-[90%] gap-[0px] flex-wrap mx-auto justify-center flex-wrap mt-[30px] md:hidden'>

        {benifitsOfSaas.map((data, i) => (
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
        {benifitsOfSaas.map((data, i) => (
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

export default BenefitFromSaaSDev;
