import React from 'react'
import aboutus from '../../../../assets/AboutUs/aboutUs.png'
import respect from '../../../../assets/AboutUs/respectCoreValue.png'
const OurCoreValues = () => {
    const coreValuesArr = [{ title: "Respect", icon: respect, subTitle: "Set trends for your peers and the industry in general to follow." }, { title: "Exceptional value", icon: respect, subTitle: "Understand and exceed customer's expectations all the time." }, { title: "Authenticity", icon: respect, subTitle: "Be sincere, honest, and open in dealings to ensure trustworthiness." }, { title: "Leadership", icon: respect, subTitle: "Set trends for your peers and the industry in general to follow." }]
    return (
        <div className='w-screen h-[auto] box-border py-8 ' id='our_core_values'>
            <div className='lg:w-[85%] mx-auto w-[95%]'>
                <h1 className='text-[#3960C3] font-bold lg:text-3xl text-xl  2xl:text-4xl '>Our Core Values</h1>
                <p className=' mt-2 md:w-[100%] font-normal w-[90%] lg:text-base text-sm py-4 2xl:text-[1.2rem] tracking-normal'>At ValueCoders, we embrace a well-established set of cultural and professional values which represent our highestaspirations for how we engage as colleagues, fellows, alumni, partners, and board members </p>
            </div>
            <div className='flex w-[95%] lg:w-[85%] mx-auto mt-[30px] '>
                <div className='flex w-full lg:w-[60%] flex-wrap gap-y-[40px] gap-x-[30px]'>
                    {coreValuesArr.map((items, i) => (
                        <div className='w-[45%] lg:w-[300px] border-b border-[#D9D9D9] pb-[30px] flex flex-col gap-3'>
                            <img src={items.icon} alt={items.title} className='w-[80px] h-[80px]'/>
                            <h4 className='lg:text-2xl text-xl 2xl:text-[1.7rem] font-semibold'>{items.title}</h4>
                            <p className='lg:text-[1rem] text-sm 2xl:text-[1rem]'>{items.subTitle}</p>
                        </div>
                    ))}
                </div>
                <div className='w-[40%] hidden lg:block'>
                    <img src={aboutus} alt="conscientious technology Core Values"  className=' h-[450px]'/>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValues
