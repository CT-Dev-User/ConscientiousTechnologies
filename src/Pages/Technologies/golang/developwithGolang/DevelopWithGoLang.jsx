import React from 'react'

const DevelopWithGoLang = () => {
  const pythonAppData = [{ title: "Cloud-native applications", points: ["------"] }, { title: "Distributed systems", points: ["------"] }, { title: "Embedded systems (IoT)", points: ["-------"] }, { title: "Big data systems", points: ["------"] }, { title: "AI and machine learning software", points: ["------"] }, { title: "Blockchain software", points: ["------"] }]
  return (
    <div className='w-[85vw] md:w-[90vw] md:mx-[20px] mx-[110px] pt-[60px] pb-[30px]'>
      <div className='w-[100%] mb-[30px]'>
        <h1 className='font-bold text-3xl md:text-[24px] text-[#3970F0]'>What We Develop with Golang </h1>
        <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
      </div>
      <div className='w-[100%] flex flex-wrap justify-between'>
        {
          pythonAppData.map((item, index) => {
            return (
              <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
                <ul className='list-disc font-normal text-[12px] pl-[20px] md:text-[16px]'>
                  {
                    item.points.map((point, i) => {
                      return (
                        <li key={i}>{point}</li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DevelopWithGoLang