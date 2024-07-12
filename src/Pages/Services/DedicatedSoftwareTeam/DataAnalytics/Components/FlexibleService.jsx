import React from 'react';

const FlexibleService = () => {
  const processWeFollowData = [
    { srNo: '01', title: "Analytics as a Service", desc: "Software designed to handle data aggregation, processing, and analysis tasks, produce accurate forecasts on the required variables, and provide intelligent prescriptions on the optimal decisions.", srColor: '#FF8585' },
    { srNo: '02', title: "Managed data analysis", desc: "Software that employs leading machine learning and deep learning techniques to automate even the most complex business operations end to end, from data intake to decisioning and action taking.", srColor: '#76AA06' },
    { srNo: '03', title: "Data analytics consulting", desc: "Software that automatically captures and interprets information from image and video data and can enforce user-defined actions when certain visual patterns are detected.", srColor: '#FFC635' },
    { srNo: '04', title: "Data implementation", desc: "Software used to process audio signals and interpret human speech; it can initiate particular actions upon voice commands and support human-like voice communication.", srColor: '#A772FF' },
    { srNo: '05', title: "Data modernization", desc: "Software that relies on natural language processing (NLP) and ML to understand and process human language and instantly generate responses that are accurate and relevant to the conversation.", srColor: '#F34A91' },
    { srNo: '06', title: "Data management", desc: "Software that combines the capabilities of AI, IoT, and big data to enable the creation of smart machines that can interact with other systems, self-tune, and make decisions with no to little human involvement.", srColor: '#51ACFF' }
  ];

  return (
    <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Flexible Service Approaches</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
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
          <div key={i} className={`w-[49%] h-[180px] md:h-[250px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default FlexibleService;
