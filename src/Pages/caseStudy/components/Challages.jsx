import React from 'react'

const Challages = ({ challenges }) => {
    const challengesArr = challenges ? challenges.split(",").map(goal => goal.trim()) : []
    console.log(challengesArr)
    return (
        <div className='w-screen py-14'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 flex flex-wrap'>
                <div className='w-[95%] lg:w-[48%] mx-auto'>
                    <h1 className='text-2xl lg:text-3xl font-bold text-[#3970F0]' >The Challenge</h1>
                    <ul className='mt-3'>
                        {challengesArr.map((challange, index) => (
                            <li  className='list-disc text-xl py-2 ms-10 font-semibold text-[#272727]' key={index}>  {challange}
                            </li>
                            // <li key={index}>{challange}</li>
                        ))}
                    </ul>
                </div>
                <div className='w-[95%] lg:w-[48%] mx-auto mt-4 lg:mt-0'>
                    <h1 className='text-2xl lg:text-3xl font-bold text-[#3970F0]'>Our Approach</h1>
                    <p className='text-lg w-[90%]  mt-4 leading-normal font-medium'>We conducted a holistic audit that shed light on each of the regions within which Rip Curl operates and how the company stacked up to their competitors on important keywords. We also developed an earned media strategy tailored to both their retail presence and status as a thought leader. Our SEO team also optimized blog content on their website and
                        For digital advertising, we improved audiences and segmentation, dynamically retargeted visitors, and utilized athlete and influencer partnerships to improve ad performance.</p>
                </div>
            </div>

        </div>
    )
}

export default Challages
