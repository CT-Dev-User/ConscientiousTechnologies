import React from 'react'
import aboutImg from '../assets/about/Rectangle 34172.png'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const aboutMiddleContent = [{ num: "11+ Years", desc: " Mobile App Design and Development" }, { num: "4500+", desc: "Mobile Apps Developed" }, { num: "110+", desc: "Websites Developed" }, { num: "1000+", desc: "Million App Downloads on App Stores (iOS + Android)" }, { num: "4.9", desc: "Ratings onClutch.co" }, { num: "100+", desc: "Mobile Apps Developed" }]
  return (
    <div id='overview' className='w-screen bg-white flex gap-6 flex-col lg:flex-row h-auto py-4 lg:pt-24 lg:py-0 lg:pb-8'>
      <div className='lg:h-full lg:w-[35%] w-[95%] h-[20vh] mx-auto lg:mx-0'>
        <div className='flex flex-col justify-around w-full h-full mx-auto'>
          <div className='flex flex-col gap-2 lg:ms-[110px]'>
            <h2 className='lg:font-bold lg:text-3xl text-2xl font-black'>About Company</h2>
            <p className='lg:text-base font-semibold text-s py-4 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
          </div>
          <button
            className="relative overflow-hidden text-black border border-[#999999] group w-[fit-content] px-3 py-1 ms-[110px] hidden lg:block"
            style={{ position: 'relative' }} onClick={() => navigate('/about us')}>
            <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
          </button>
        </div>
      </div>
      <div className='lg:h-full lg:w-[28%] flex flex-wrap w-[96%] h-[35vh] mx-auto lg:mx-0'>
        {aboutMiddleContent && aboutMiddleContent.map((item, i) => {
          return (
            <div className='flex justify-center items-center w-1/2 h-32' key={i}>
              <div className= {`border-dashed border-[#999999] flex-1 h-full flex flex-col justify-start p-2 px-4 box-border gap-[10px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`}>
                <h2 className='text-base font-bold 2xl:text-xl'>
                  {item.num}
                </h2>
                <p className='lg:text-sm text-xs mt-2'>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='h-full lg:w-[36%] w-full mt-4 lg:mt-0'>
        <img src={aboutImg} alt="about-img" className='lg:w-full h-full w-[95%] mx-auto' />
      </div>
      <button
        className="lg:hidden relative overflow-hidden text-black border border-[#999999] px-3 py-1 group mx-auto w-56"
        style={{ position: 'relative' }} onClick={() => navigate('/about us')}>
        <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
      </button>
    </div>
  )
}

export default About
