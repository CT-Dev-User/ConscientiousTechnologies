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
        <div className="w-full my-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Let Us Meet You Where You Are </h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>lorem impson ample expertise in project management software implementation, we've defined a set of factors, which if covered, help maximize ROI of a custom project management system.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {MeetYouWhereArr.map((item, index) => (
                <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default MeetYouWhere
