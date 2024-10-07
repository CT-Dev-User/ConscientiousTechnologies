import React from 'react'
import architectureImg from '../architecture.png'
const Architecture = () => {
  return (
    <div className='w-screen h-auto box-border lg:pt-14 pt-12 pb-7 lg:pb-14 hidden lg:block'>
          <div className='w-[85%] mx-auto'>
                <h1 className='text-3xl font-bold md:text-[blue]'>Explore Our Consulting Services</h1>
                <p className='mt-2 w-[85%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[85%] h-[25rem] bg-[grey] mx-auto mt-5'>

            </div>
            <div className='w-[85%] mx-auto mt-10'>
                <p>Both software parts can run from one device with high processing power (a kiosk unit, a Mac computer, etc.) or reside in two closely located devices: a client app installed on any (usually portable) device and a controller on a standalone mini PC (Raspberry Pi, Intel NUC, etc.).Kiosk software can either independently handle customer requests or securely communicate with the cloud server to process a request (e.g. banking kiosks). Communication with cloud is also necessary for kiosk software to upload activity reports or error logs to the cloud database and for kiosk administrators to perform maintenance via a cloud-based kiosk management software.</p>
            </div>
    </div>
  )
}

export default Architecture
