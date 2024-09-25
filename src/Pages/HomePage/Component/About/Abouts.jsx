import React from 'react'
import aboutImg from '../assets/about/Rectangle 34172.png'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const aboutMiddleContent = [{ num: "11+ Years", desc: " Mobile App Design and Development" }, { num: "4500+", desc: "Mobile Apps Developed" }, { num: "110+", desc: "Websites Developed" }, { num: "1000+", desc: "Million App Downloads on App Stores (iOS + Android)" }, { num: "4.9", desc: "Ratings onClutch.co" }, { num: "100+", desc: "Mobile Apps Developed" }]
  return (
    <div id='overview' className='w-[100vw] bg-[white] h-[520px] flex gap-[25px] md:flex-col md:h-[auto] md:pt-[50px] pb-[20px] '>
      <div className='h-[100%] w-[35%] md:w-[90%] md:h-[20vh] md:mx-auto '>
        <div className='flex flex-col justify-around w-[100%] h-[100%] mx-auto'>
          <div className='flex flex-col gap-[10px] ms-[110px] md:ms-[0px] '>
            <h2 className='font-bold text-3xl md:text-[20px] md:font-black 2xl:text-[2.5rem]'>About Company</h2>
            <p className='text-[16px] font-semibold md:text-[14px] py-4 w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
          </div>
          <button
            className="relative overflow-hidden text-black border border-[#999999] group  w-[fit-content] px-3 py-1 ms-[110px] md:hidden"
            style={{ position: 'relative' }} onClick={() => navigate('/about us')}>
            <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
          </button>
        </div>
      </div>
      <div className='h-[100%] w-[27%] flex flex-wrap md:w-[96%] md:h-[35vh] md:mx-auto'>
        {aboutMiddleContent && aboutMiddleContent.map((item, i) => {
          return (
            <div className='flex justify-center items-center w-[49%] h-[33%] ' key={i}>
              <div className= {`border-dashed border-[#999999] flex-1 h-[100%] flex flex-col justify-start p-2  px-4 box-border gap-[10px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`}>
                <h2 className='text-[16px] pt-7 font-bold 2xl:text-xl'>
                  {item.num}
                </h2>
                <p className='text-[14px] md:text-[12px] mt-2'>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='h-[100%] w-[35%] md:w-[100%]'>
        <img src={aboutImg} alt="about-img" className='w-[100%] h-[100%] md:w-[95%] mx-auto' />
      </div>
      <button
        className="hidden md:block relative overflow-hidden text-black border border-[#999999] px-3 py-1 group mx-auto w-[211px] "
        style={{ position: 'relative' }} onClick={() => navigate('/about us')}>
        <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More <span className="font-bold">&rarr;</span></span>
      </button>
    </div>
  )
}

export default About
