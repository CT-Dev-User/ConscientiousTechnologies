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
    <div id='how-we-work' className='w-screen h-[auto] bg-[white] box-border pt-12 pb-8'>
      <div className='lg:w-[85%] mx-auto w-[90%]'>
        <h1 className='lg:text-3xl font-bold text-base text-[blue] lg:text-black'>Process We Follow</h1>
        <p className='lg:w-[80%] lg:text-sm mt-2 w-full text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
      </div>
      <div className='hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7'>

        {processWeFollowData.map((data, i) => (
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
        {processWeFollowData.map((data, i) => (
          <div key={i} className={`w-[49%] h-44 text-[black] border-[#737373] border-dashed flex flex-col justify-around px-2 ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
            <h1 className='font-bold self-end mr-2 text-lg' style={{ color: data.srColor }}>{data.srNo}</h1>
            <div>
              <h3 className='text-sm font-bold'>{data.title}</h3>
              <p className='text-xs'>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessWeFollow;
