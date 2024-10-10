import React from 'react'

const Benefits = () => {

    const benifitsData = [{
        title: "Corporate systems", desc: (
            <ul>
                <li>Full outsourcing of fintech software development.</li>
                <li>A dedicated team to take over a part of your project.</li>
                <li>Team augmentation with the required number (from 0.5 to 150+ FTEs) of our best talents.</li>
            </ul>
        ), bgColor: "FF6868"
    },
    {
        title: "Flexible pricing options", desc: (
            <ul>
                <li>Full outsourcing of fintech software development.</li>
                <li>A dedicated team to take over a part of your project.</li>
                <li>Team augmentation with the required number (from 0.5 to 150+ FTEs) of our best talents.</li>
            </ul>
        ),
        bgColor: "1777BC"
    },
    {
        title: "Flexible development pace", desc: (
            <ul>
                <li>T&M, T&M with a cap – for advisory activities or agile implementation of a fintech solution.</li>
                <li>Fixed price – for software development divided into clear stages (fixed price for each stage).</li>
                <li>A monthly subscription fee – for support activities.</li>
            </ul>
        ), bgColor: "E751FF"
    }]

    return (

        <div className="w-screen h-auto box-border lg:py-20 py-7 lg:bg-black lg:text-white text-black bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-white text-[blue]">
                    See How You Benefit from Partnering with Us
                </h1>
                <p className="lg:w-[95%] mt-4 w-full text-base">
                    ScienceSoft’s practice shows that flexibility is a key to meeting each client’s expectations regarding the fintech software development timelines and budget. We offer:            </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {benifitsData.map((item, index) => (
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

export default Benefits