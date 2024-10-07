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
        <div className='w-full my-20 box-border'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Laying the Foundation for Great User Experience</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Each web portal is a unique solution that is created strictly for the needs of a particular company and often combines the features of 2-3 portal types. And while the functionality and design of a portal are discussed individually, there are certain characteristics that we always specify in functional and non-functional requirements as they are essential for user experience.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {layingtheFoundationArr.map((item, index) => (
                    <div key={index} className='md:w-[45.5%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LayingtheFoundation
