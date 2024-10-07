import React from 'react'
import architectureImg from '../architecture.png'
const Architecture = () => {
  return (
    <div className='w-[100vw] h-[auto] box-border mt-20 flex flex-col gap-10 '>
          <div className='lg:w-[85%] mx-auto w-[95%]  px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Architecture of Kiosk Software </h1>
                <p className='text-base lg:mt-5 mt-2 font-normal'>Digital kiosk software architecture varies depending on the kiosk purpose and functionality. The key elements of ScienceSoft's typical kiosk solutions are a client application and controller software, which contains the business logic of the kiosk solution. </p>
            </div>
            <div className='lg:w-[80%] w-[95%] h-auto mx-0 lg:mx-auto mt-5'>
              <h4 className='lg:text-3xl font-bold text-xl mb-6  text-[#005EB8] w-fit mx-auto' >Architecture of Kiosk Software </h4>
              <img src={architectureImg} alt="Architecture of Kiosk Software " className='w-[90%] mx-auto lg:w-full h-full' />

            </div>
            <div className='lg:w-[85%] mx-auto w-[90%]'>
                <ul className='lg:w-[90%] mx-auto text-lg lg:mt-5 mt-2 font-normal list-disc ms-2'>
                  <li>   Both software parts can run from one device with high processing power (a kiosk unit, a Mac computer, etc.) or reside in two closely located devices: a client app installed on any (usually portable) device and a controller on a standalone mini PC (Raspberry Pi, Intel NUC, etc.). </li>
                  <li>    Kiosk software can either independently handle customer requests or securely communicate with the cloud server to process a request (e.g. banking kiosks). Communication with cloud is also necessary for kiosk software to upload activity reports or error logs to the cloud database and for kiosk administrators to perform maintenance via a cloud-based kiosk management software. </li>
              </ul>
            </div>   
    </div>
  )
}

export default Architecture
