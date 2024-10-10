import React from 'react'

const ValueDrivenApproach = () => {
    const valueDrivenApproachArr = [{ title: "Close and transparent collaboration", desc: "We design the optimal feature set, architecture, UX and UI of ERP software with your unique needs in mind. Our consultants introduce the best-fitting tech stack for ERP implementation and provide expert advice on security and compliance. You also receive a detailed ERP project plan for risk-free implementation.", bgColor: "FF6868" },
    {
        title: "Designing for maximized value", desc: "We cover all stages of ERP development, from design to deployment in production. Our ERP talents integrate the new software with your existing corporate systems and run the necessary quality assurance procedures. You also benefit from user training in a preferred format and get after-launch support.",
        bgColor: "1777BC"
    },
    { title: "Fast development", desc: "We revamp your legacy ERP software's architecture, codebase, and tech stack and upgrade it with the required features. Our service can comprise cloud migration and data migration to the new modules. You get a modern solution promptly and with minimal disruption to your business operations.", bgColor: "E751FF" }]
    return (

        <div className="w-screen h-auto box-border lg:py-20 py-7 lg:bg-black lg:text-white text-black bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-white text-[blue]">
                    Our Value-Driven Approach to Payment Software Development
                </h1>
                <p className="lg:w-[95%] mt-4 w-full text-base">
                    Our custom ERP development services are closely bound to our clients' needs and can be related to:
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {valueDrivenApproachArr.map((item, index) => (
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

export default ValueDrivenApproach
