import React from 'react'

const ServiceOption = () => {
    const ServiceOptionArr = [{
        title: "Advanced technologies consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Reservoir modeling, monitoring and management.</li>
                <li className='list-disc ms-5'>Remote operations center (ROC).
                </li>
                <li className='list-disc ms-5'>Predictive equipment maintenance, etc</li>
            </ul>
        )
    }, {
        title: "IT solution consulting, implementation and support", desc: (
            <ul>
                <li className='list-disc ms-5'>Expenses on your ready-made product grow together with your customer base.</li>
                <li className='list-disc ms-5'>Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.
                </li>
                <li className='list-disc ms-5'>Low user satisfaction due to a complex interface and issues at the code level.</li>
            </ul>
        )
    }
        , {
        title: "IT outsourcing", desc: (
            <ul>



                <li className='list-disc ms-5'>Outsourced development of oil and gas software.</li>
                <li className='list-disc ms-5'>Outsourced data analytics.</li>
                <li className='list-disc ms-5'>Outsourced QA.</li>
                <li className='list-disc ms-5'>Outsourced IT support.</li>
            </ul>
        )
    }
        , {
        title: "IT staff augmentation", desc: (
            <ul>


                <li className='list-disc ms-5'>Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>Testers (manual and automated testing).</li>
                <li className='list-disc ms-5'>DevOps engineers.</li>
                <li className='list-disc ms-5'>Data analysts.</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-screen h-auto">
        <div className="w-full h-auto bg-black box-border py-16 text-white hidden lg:block">
          <div className="lg:w-[85%] mx-auto">
            <h1 className="lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-[blue] lg:text-white">
            Choose Your Service Option 
            </h1>
            <p className="w-[85%] text-base mt-2">
            Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.
            </p>
          </div>
          <div className="w-[85%] mx-auto mt-10 hidden lg:block">
            {ServiceOptionArr.map((step, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "flex-row border-r-2 border-r-[#FFC635]" : "border-l-2 border-l-[#FFC635] ml-[50%] flex-row-reverse"
                  } w-1/2 h-auto py-5 flex justify-between flex-wrap`}
                >
                  <div className="w-[95%] flex flex-col h-auto bg-[#3C3C3C] p-4 box-border">
                    <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                    <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                    <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                  </div>
                  <div className="w-[2px] h-auto relative">
                    <div className={`w-[25px] h-[25px] bg-[#FFC635] absolute top-[-20px] ${index % 2 === 0 ? "left-1/2" : "left-0"} -translate-x-1/2 -translate-y-1/2`}>
  
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  
        <div className="w-full py-10 lg:hidden block">
          <div className="mx-auto w-[95%]">
            <h1 className="font-bold text-base text-blue">
            Choose Your Service Option
            </h1>
            <p className="text-sm mt-2 w-full">
            Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.
            </p>
          </div>
          <div className="w-[95%] flex mx-auto flex-wrap gap-3 mt-8 items-center justify-center ">
            {ServiceOptionArr.map((item, index) => (
              <div key={index} className="p-3 w-full h-auto border">
                <h1 className="text-base">{item.title}</h1>
                <div className="text-xs mt-2 font-medium">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

    )
}

export default ServiceOption
