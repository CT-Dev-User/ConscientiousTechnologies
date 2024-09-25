import React, { useEffect, useState } from 'react'
import './caseStudies.css'
import axios from 'axios'
const CaseStudies = () => {
  const [CaseStudiesData, setCaseStudies] = useState([])
  
  const getCaseStudiesDataFunc = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-case-studies");
      setCaseStudies(response.data.getData);
    }
    catch (error) {
      console.log(error)
    }
  }

  
  useEffect(() => {
    getCaseStudiesDataFunc()
  }, [])
  return (
    <div className='w-[100vw] h-[auto] bg-black box-border text-[white] py-[60px] md:pt-[50px]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[24px]'>Case Studies</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
      </div>
      <div className='flex text-white w-[85%] gap-[35px] flex-wrap mx-auto justify-center mt-[30px] md:h-[60vh] md:overflow-y-auto '>
        {CaseStudiesData.map((items, i) => {
          return (
            <div style={{ backgroundImage: `url(${items.caseStudyImage})`, backgroundSize: 'cover', backgroundPosition: 'cover' }} className='w-[31%] h-[380px] bg-[black] relative case-studies-main-div md:w-[100%] md:h-[45%]' key={i}>
              <div className='case-studies-child-div flex flex-col justify-between'>
                <div className='flex flex-col justify-around gap-[20px]'>
                  <h1 className='font-semibold text-xl md:text-[16px]'>{items.title}</h1>
                  <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px] md:text-[12px]' dangerouslySetInnerHTML={{__html:items.desc}}></p>
                    <h4>Core tech :- {items.coreTech}</h4>
                  </div>

                </div>
                <button
                  className="relative overflow-hidden border border-[white] px-[15px] py-[5px] w-[fit-content] text-[12px] group"
                  style={{ position: 'relative' }}>
                  <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More{" "}<span className="font-bold">&rarr;</span></span>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CaseStudies
