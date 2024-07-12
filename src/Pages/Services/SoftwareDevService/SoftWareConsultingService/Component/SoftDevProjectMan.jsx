import React from 'react';

const SoftDevProjectMan = () => {
  const softDevProjectData = [
    { srNo: '01', title: "Risk-proof project scoping", desc: "We accurately scope the project at the start and help assess the feasibility of scope alterations later on to help our clients avoid scope creep.", srColor: '#FF8585' },
    { srNo: '02', title: "Realistic cost estimation", desc: "We analyze the future project from different perspectives to factor in all possible risks and estimate its cost precisely.", srColor: '#76AA06' },
    { srNo: '03', title: "Focus on user experience", desc: "We research user expectations to design winning UX an UI and ensure high user adoption.", srColor: '#FFC635' },
    { srNo: '04', title: "Healthy collaboration", desc: "We foster collaboration between all project stakeholders based on the principles of transparency, efficiency, and mutual respect", srColor: '#A772FF' },
    { srNo: '05', title: "Quality throughout SDLC", desc: "We introduce quality control mechanisms at every stage of SDLC to help our clients detect and solve quality issues early on.", srColor: '#F34A91' },
    { srNo: '06', title: "Top security", desc: "We implement a robust security management system to safeguard our client’s project environment, software, and data", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border py-[60px] md:py-[30px]'>
      <div className='w-[85%] mx-auto md:w-[95%]'>
        <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Software Development and Project Management We Implement</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px] md:w-full'>Streamlined Excellence: Unveiling our proven software development and project management methodologies. From Agile to DevOps, we ensure efficiency, quality, and timely delivery for unparalleled project success</p>
      </div>
      <div className='flex text-[white] w-full gap-[0px] flex-wrap ms-[100px] flex-wrap mt-[30px] md:hidden'>

        {softDevProjectData.map((data, i) => (
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
        {softDevProjectData.map((data, i) => (
          <div key={i} className={`w-[49%] h-[200px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default SoftDevProjectMan;
