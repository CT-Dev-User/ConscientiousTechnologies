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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[50px] md:pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Security and maintenance</h1>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {securityMaintainanceArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SecurityMaintainance
