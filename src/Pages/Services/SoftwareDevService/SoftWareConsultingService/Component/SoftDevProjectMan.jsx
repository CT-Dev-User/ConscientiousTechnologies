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

    <div id='how-we-work' className='w-screen h-[auto] bg-[white] box-border py-12'>
    <div className='lg:w-[85%] mx-auto w-[90%]'>
      <h1 className='lg:text-3xl font-bold text-2xl text-[blue] lg:text-black'>Software Development and Project Management We Implement</h1>
      <p className='lg:w-[80%] mt-2 w-full text-base'>Streamlined Excellence: Unveiling our proven software development and project management methodologies. From Agile to DevOps, we ensure efficiency, quality, and timely delivery for unparalleled project success</p>
    </div>
    <div className='hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7'>

      {softDevProjectData.map((data, i) => (
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
      {softDevProjectData.map((data, i) => (
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

export default SoftDevProjectMan;
