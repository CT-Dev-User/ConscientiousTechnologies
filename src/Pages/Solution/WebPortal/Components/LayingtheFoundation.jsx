import React from 'react'

const LayingtheFoundation = () => {
    const layingtheFoundationArr = [{
        title: "Convenient user onboarding", desc: (
            <ul>
                <li className='list-disc ms-5'>Step-wise registration process.</li>
                <li>User identity verification.</li>
                <li>Two-factor authentication to protect confidential data.</li>
                <li>E-signature management.</li>
                <li>A possibility to upload digital documents.</li>
            </ul>
        )
    }, {
        title: "Diverse user engagement", desc: (
            <ul>
                <li className='ms-5 list-disc'>Mobile-friendly, adaptive web design.</li>
                <li className='ms-5 list-disc'>
                    Interactive tools like feedback forms, calculators, contact forms.</li>
                <li className='ms-5 list-disc'>
                    Content personalization based on the user roles and interaction history.</li>
            </ul>
        )
    }, {
        title: "Easy content management", desc: (
            <ul>
                <li className='ms-5 list-disc'>All types of content pages: searchable product / service catalogs, real-time pricing and inventory viewing, multimedia galleries, blogs, etc..</li>
                <li className='ms-5 list-disc'>
                    real-time pricing and inventory viewing, multimedia galleries, blogs, etc.</li>
                <li className='ms-5 list-disc'>
                    Drag-and-drop page builder.</li>
                <li className='ms-5 list-disc'>
                    Unified content publishing styles to bring order to information and ensure integrity during the portal updates.</li>
            </ul>
        )
    },
    {
        title: "Reliability and security", desc: (
            <ul>
                <li className='ms-5 list-disc'> Scalability to handle the growing number of users and data.</li>
                <li className='ms-5 list-disc'> High performance to ensure users can access the content and tools quickly.
                </li>
                <li> Compliance with local laws and legislations (e.g., HIPAA compliance for storing and processing PHI).
                </li>
                <li> Encrypted transfer and storage of login credentials and sensitive data.
                </li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Laying the Foundation for Great User Experience</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Each web portal is a unique solution that is created strictly for the needs of a particular company and often combines the features of 2-3 portal types. And while the functionality and design of a portal are discussed individually, there are certain characteristics that we always specify in functional and non-functional requirements as they are essential for user experience.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {layingtheFoundationArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default LayingtheFoundation
