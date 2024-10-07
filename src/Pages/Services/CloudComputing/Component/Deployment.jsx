import React from 'react'

const Deployment = () => {
    const OurDeskTop = [{ title: "Public cloud consulting services", desc: "Enjoy the ease of use and maintenance, flexible pricing, and near-unlimited scalability.", bgColor: "FF6868" },
    {
        title: "Private cloud consulting services", desc: "Leverage superior security and privacy and zero latency for local apps.",
        bgColor: "1777BC"
    },
    { title: "Hybrid cloud consulting services", desc: "Combine the best of two worlds: public and private clouds. Combine the best of two worlds: public and private clouds.", bgColor: "E751FF" }]
    return (

        <div className="w-screen h-auto box-border lg:pt-16 py-7 bg-black text-white lg:text-black lg:bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl md:text-[blue]">
                    Cloud Deployments We Handle        </h1>
                <p className="lg:w-[95%] mt-2 w-full text-base">
                    Strategic Cloud Deployments: Harness the power of cloud with CT. From seamless migrations to robust architectures, we optimize deployments for scalability, security, and performance, ensuring a future-ready digital landscape
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {OurDeskTop.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
                        style={{ backgroundColor: `#${item.bgColor}` }}
                    >
                        <h1 className="text-lg w-[90%]">{item.title}</h1>
                        <p className="text-sm mt-2 font-normal w-[95%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Deployment
