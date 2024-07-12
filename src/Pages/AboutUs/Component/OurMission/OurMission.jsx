import React from 'react'
import ourMissionbg from '../../ourpeople.png'
const OurMission = () => {
    return (
        <div className='w-[85vw] h-[250px] mx-auto box-border relative' style={{ backgroundImage: `url(${ourMissionbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col justify-center box-border px-[20px] gap-[50px] md:justify-evenly md:items-center'>
            <div className='flex flex-col justify-between'>
                <h2 className='text-[#3960C3] font-bold text-[24px]'>Our Mission</h2>
                <p className='w-[80%] text-[white] font-normal'>Since our inception in 2004, ValueCoders has been delivering IT outsourcing services worldwide. We combine business domain knowledge, proven methodologies, and the technology expertise of 450+ skilled software professionals to yield high-quality solutions that add value to businesses.</p>
            </div>
            <div className='text-end pr-4 text-white'>
                <h4>Nikhil Hirudkar</h4>
                <p>CEO, Conscientious Technology</p>
            </div>
        </div>
        </div>
    )
}

export default OurMission
