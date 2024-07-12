import React from 'react'

const MeetYouWhere = () => {
    const MeetYouWhereArr = [{
        title: "Custom CMS development", desc: (
            <ul>


                <li className='list-disc ms-5'>Create an optimal CMS feature set.</li>
                <li className='list-disc ms-5'>Select a tech stack for CMS implementation.</li>
                <li className='list-disc ms-5'>Design CMS architecture and UX/UI.</li>
                <li className='list-disc ms-5'>Develop and test a CMS solution.</li>
            </ul>
        )
    }
        , {
        title: "Platform-based CMS development", desc: (
            <ul>
                <li className='list-disc ms-5'> Select a fitting CMS platform.</li>
                <li className='list-disc ms-5'>Configure, customize, and integrate your CMS solution with legacy or third-party systems.</li>
                <li className='list-disc ms-5'>Provide QA and user training.</li>
            </ul>
        )
    }
        , {
        title: "CMS module development", desc: (
            <ul>
                <li className='list-disc ms-5'>Create a requirements specification for a CMS module.</li>
                <li className='list-disc ms-5'>Design Architecture, UX and UI of a CMS module.</li>
                <li className='list-disc ms-5'>Develop a module and integrate it with your CMS solution.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[40px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Let Us Meet You Where You Are</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>lorem impson ample expertise in project management software implementation, we've defined a set of factors, which if covered, help maximize ROI of a custom project management system.</p>
                {/* <h4 className='text-[22px] ms-2 mt-5'>Need to build a new CRM?</h4> */}
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {MeetYouWhereArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MeetYouWhere
