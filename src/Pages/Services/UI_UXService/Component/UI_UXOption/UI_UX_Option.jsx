import React, { useEffect, useState } from 'react'
import './ui_ux_option.css'
import b2b from '../assets/b2bWork.png'
import Ecommerse from '../assets/ecommerse.png'
const UI_UX_Option = () => {
  const ui_ux_optionArr = [{
    title: "Ecommerce website design", img: Ecommerse, desc: "Fresh and elegant ecommerce design to drive your store’s customer lifetime value and facilitate up/cross selling."
  }, {
    title: "B2C website / portal design", img: b2b, desc: "Customer-centric design that makes for higher dwell time and a lower user error rate as well as enhances user engagement."
  }, {
    title: "B2B website / portal design", img: b2b, desc: "Industry-specific design to increase the frequency of email subscriptions, pre-registrations for future services, and quote/demo requests."
  }]

  return (
    <div className='w-screen h-auto box-border py-16 '>

      <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
        <h1 className="lg:text-3xl font-bold text-2xl lg:text-black text-[blue]">Our Web Design Service Options</h1>
        <p className="lg:w-[95%] mt-2 w-full text-base">
          While providing the option of one-off web design, we also suggest continuous design support services that enable non-stop evolution of your ever-growing web solution. Working in close cooperation with your team, we gradually introduce improvements and changes based on regular user surveys and A/B testing, thus ensuring superior user experience.
        </p>
      </div>
      <div className='flex  text-white lg:w-[85%] flex-wrap mx-auto mt-6 gap-10 justify-start px-3 lg:px-0'>
        {ui_ux_optionArr.map((items, i) => {
          return (
            <div style={{ backgroundImage: `url(${items.img})`, backgroundSize: 'cover', backgroundPosition: 'cover' }} className='lg:w-[31%] md:w-[80%] mx-auto  lg:h-[560px] bg-black relative case-studies-main-div w-[100%] md:h-[400px] h-[300px]' key={i}>
              <div className='ui-ux-service-child-div flex flex-col justify-between lg:h-[300px]  h-[200px] px-3 py-3'>
                <div className='flex flex-col justify-around gap-[20px]'>
                  <h1 className='font-normal lg:text-[2rem] text-2xl leading-10 w-[90%]'>{items.title}</h1>
                  <div className='flex flex-col gap-[10px]'>
                    <p className=' font-normal text-base w-[95%]'>{items.desc}</p>
                    <p className='ms-[90%] text-base block lg:hidden'>&rarr;</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UI_UX_Option
