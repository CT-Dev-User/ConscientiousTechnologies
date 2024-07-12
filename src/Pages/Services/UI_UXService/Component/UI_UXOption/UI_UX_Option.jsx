import React, { useEffect, useState } from 'react'
import './ui_ux_option.css'
import b2b from '../assets/b2bWork.png'
import Ecommerse from '../assets/ecommerse.png'
const UI_UX_Option = () => {
const ui_ux_optionArr = [{
    title:"Ecommerce website design", img:Ecommerse, desc:"Fresh and elegant ecommerce design to drive your store’s customer lifetime value and facilitate up/cross selling."
}, {
    title:"B2C website / portal design", img:b2b, desc:"Customer-centric design that makes for higher dwell time and a lower user error rate as well as enhances user engagement."
}, {
    title:"B2B website / portal design", img:b2b, desc:"Industry-specific design to increase the frequency of email subscriptions, pre-registrations for future services, and quote/demo requests."
}]  
  
  return (
    <div className='w-[100vw] h-[auto] box-border py-[50px] md:py-[30px]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[24px]'>Our Web Design Service Options</h1>
        <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>While providing the option of one-off web design, we also suggest continuous design support services that enable non-stop evolution of your ever-growing web solution. Working in close cooperation with your team, we gradually introduce improvements and changes based on regular user surveys and A/B testing, thus ensuring superior user experience. </p>
      </div>
      <div className='flex text-white w-[85%] gap-[35px] flex-wrap mx-auto justify-center mt-[30px] md:h-[60vh]  md:w-[95%] md:overflow-y-auto'>
        {ui_ux_optionArr.map((items, i) => {
          return (
            <div style={{ backgroundImage: `url(${items.img})`, backgroundSize: 'cover', backgroundPosition: 'cover' }} className='w-[360px] h-[420px] bg-[black] relative case-studies-main-div md:w-[100%] md:h-[300px]' key={i}>
              <div className='ui-ux-service-child-div flex flex-col justify-between h-[230px] md:h-[200px]'>
                <div className='flex flex-col justify-around gap-[20px]'>
                  <h1 className='font-semibold text-xl md:text-[20px]'>{items.title}</h1>
                  <div className='flex flex-col gap-[10px]'>
                    <p className='text-[14px] md:text-[12px] font-semibold'>{items.desc}</p>
                    <p className='ms-[90%] md:block hidden'>&rarr;</p>
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
