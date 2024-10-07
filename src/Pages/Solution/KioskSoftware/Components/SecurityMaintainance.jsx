import React from 'react'

const SecurityMaintainance = () => {
    const securityMaintainanceArr = [{
        title: "Kiosk lockdown software", desc: "Limiting user interaction with a kiosk to predefined actions.."
    }, {
        title: "Restricted web browsing", desc: "Limiting available internet resources in internet kiosks."
    }, {
        title: "User session reset", desc: "Automatic system status reset and erasing session history after each user session."
    }, {
        title: "Data logging", desc: "Sending user session records data and error logs to a cloud database, where it can be accessed by kiosk administrators."
    }, {
        title: "Remote maintenance", desc: "Kiosk software health monitoring and updates deploying from a web administration panel."
    }, {
        title: "-------", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    }
    ]
    return (

        
        <div className='w-full my-10'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Security and maintenance</h1>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 lg:mt-10 w-[95%]'>
                {securityMaintainanceArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default SecurityMaintainance
