import React from 'react';

const ProcessWeFollow = () => {
  const processWeFollowData = [
    { srNo: '01', title: "Requirement Gathering", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#FF8585' },
    { srNo: '02', title: "UI/UX Design & Prototype", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#76AA06' },
    { srNo: '03', title: "Development", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#FFC635' },
    { srNo: '04', title: "Quality Assurance", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#A772FF' },
    { srNo: '05', title: "Deployment", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#F34A91' },
    { srNo: '06', title: "Support & Maintenance", desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Process We Follow</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
      </div>
      <div className='flex text-[white] w-[90%] gap-[0px] flex-wrap mx-auto justify-center flex-wrap mt-[30px] md:hidden'>

        {processWeFollowData.map((data, i) => (
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
        {processWeFollowData.map((data, i) => (
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

export default ProcessWeFollow;
