import React from 'react'

const Deployment = () => {
    const OurDeskTop = [{ title: "Public cloud consulting services", desc: "Enjoy the ease of use and maintenance, flexible pricing, and near-unlimited scalability.", bgColor:"FF6868" },
    {
        title: "Private cloud consulting services", desc: "Leverage superior security and privacy and zero latency for local apps.",
        bgColor:"1777BC"
    }, 
    { title: "Hybrid cloud consulting services", desc: "Combine the best of two worlds: public and private clouds.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:bg-[black]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Cloud Deployments We Handle</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px] md:text-[white]'>Strategic Cloud Deployments: Harness the power of cloud with CT. From seamless migrations to robust architectures, we optimize deployments for scalability, security, and performance, ensuring a future-ready digital landscape</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[95%] md:text-[20px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal w-[95%] md:text-[16px]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Deployment
