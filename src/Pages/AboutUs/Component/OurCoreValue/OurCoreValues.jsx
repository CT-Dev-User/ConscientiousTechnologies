import React from 'react'
import aboutus from '../../../../assets/AboutUs/aboutUs.png'
import respect from '../../../../assets/AboutUs/respectCoreValue.png'
const OurCoreValues = () => {
    const coreValuesArr = [{ title: "Respect", icon: respect, subTitle: "Set trends for your peers and the industry in general to follow." }, { title: "Exceptional value", icon: respect, subTitle: "Understand and exceed customer's expectations all the time." }, { title: "Authenticity", icon: respect, subTitle: "Be sincere, honest, and open in dealings to ensure trustworthiness." }, { title: "Leadership", icon: respect, subTitle: "Set trends for your peers and the industry in general to follow." }]
    return (
        <div className='w-[100vw] h-[auto] bg-[white] box-border pt-[60px] md:pt-[50px] pb-[30px]' id='our_core_values'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-[#3960C3] font-bold text-[24px] md:text-[blue]'>Our Core Values</h1>
                <p className='text-[16px] mt-2 md:w-[100%] md:text-[12px]'>At ValueCoders, we embrace a well-established set of cultural and professional values which represent our highestaspirations for how we engage as colleagues, fellows, alumni, partners, and board members </p>
            </div>
            <div className='flex w-[85%] mx-auto mt-[30px] h-[300px]'>
                <div className='flex w-[60%] flex-wrap  gap-y-[40px] gap-x-[30px]'>
                    {coreValuesArr.map((items, i) => (
                        <div className='w-[300px] border-b border-[#D9D9D9] pb-[30px]'>
                            <img src={items.icon} alt={items.title} className='w-[60px] h-[60px]'/>
                            <h4 className='text-[18px] font-bold'>{items.title}</h4>
                            <p className='text-[14px]'>{items.subTitle}</p>
                        </div>
                    ))}
                </div>
                <div className='w-[40%]'>
                    <img src={aboutus} alt="conscientious technology Core Values"  className=' h-[350px]'/>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValues
