import React from 'react'

const KeyCooperation = () => {
    const CollabSenario = [{ title: "Integrity", desc: "We offer full-cycle HR software development, from ideation to design and coding to continuous support. You get all-encompassing expert assistance at every project stage and receive all necessary documentation for your HR system.", bgColor: "FF6868" },
    {
        title: "Transparency", desc: "We devise tailored sets of KPIs to measure the HR software development efficiency and report regularly on the project’s health. If you want full control over the team’s progress and instant knowledge transfer, we can give you direct access to our project tracking systems.",
        bgColor: "1777BC"
    },
    { title: "Minimized risks", desc: "We ensure smooth and predictable development flow via clear task scoping, accurate project planning, and precise resource estimation. Before starting the project, our consultants conduct a feasibility study to guarantee financial gains from your HR software.", bgColor: "E751FF" }]
    return (

        <div className="w-screen h-auto box-border lg:py-20 py-7 bg-black text-white lg:text-black lg:bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl md:text-[blue]">
                    ScienceSoft’s Key Cooperation Principles         </h1>
                <p className="lg:w-[95%] mt-2 w-full text-base">
                    Our custom ERP development services are closely bound to our clients' needs and can be related to:
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {CollabSenario.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%]  md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
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

export default KeyCooperation
