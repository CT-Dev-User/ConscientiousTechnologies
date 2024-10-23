import React from 'react'

const OurOutSource = () => {
    const CollabSenario = [{ title: "Thorough IT background", desc: "Before we take up your app or infrastructure support, we analyze TCO and ROI of supported assets and assess how far these financial estimates will be improved after we commence the support.", bgColor: "FF6868" },
    {
        title: "Effective collaboration", desc: "Our IT support activities and service quality are reflected in regular reports with clear metrics for strict compliance with service level objectives.",
        bgColor: "1777BC"
    },
    { title: "Flexibility", desc: "We believe that long-term IT support is mutually beneficial for a customer and a service provider, as a longer service term means fewer transition periods and integration phases for the customer and well-tailored working routines for the support team.", bgColor: "E751FF" }]
    return (
        <div className="w-screen h-auto lg:py-16 py-7 box-border bg-black text-white lg:text-black lg:bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="2xl:text-3xl font-bold text-2xl lg:text-black text-[blue]">
                    What Makes Our Outsourced IT Help Desk Services Reliable
                </h1>
                <p className="lg:w-[95%] mt-2 w-full text-base">
                    Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {CollabSenario.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
                        style={{ backgroundColor: `#${item.bgColor}` }}
                    >
                        <h1 className="text-lg 2xl:text-xl w-[90%]">{item.title}</h1>
                        <p className="text-sm mt-2 font-normal w-[95%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default OurOutSource
