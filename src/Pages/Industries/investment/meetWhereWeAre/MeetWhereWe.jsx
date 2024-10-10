import React from 'react'

const MeetWhereWe = () => {

    const meetWhereWeData = [{ title: "Investment software consulting", desc: "We can design an optimal feature set, architecture, UX and UI, and a tech stack for your unique solution. For software product companies, we are ready to conduct TA and competitor analysis and define a USP for the product. You also receive a project roadmap with cost and time estimates, a risk mitigation plan,", bgColor: "FF6868" },
    {
        title: "Investment software development", desc: "Having 750+ development, BA, PM, QA, and data science professionals on board, we can cover all aspects of investment software creation and take over your project at any implementation stage.",
        bgColor: "1777BC"
    },
    { title: "Investment software modernization", desc: "Already have investment software that underperforms but can’t be replaced yet? We can revamp your legacy software's architecture, codebase, and tech stack and evolve it with the required features.", bgColor: "E751FF" }]

    return (

       
        <div className="w-screen h-auto box-border lg:py-20 py-7 lg:bg-black lg:text-white text-black bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-white text-[blue]">
                Perks of ScienceSoft's ERP Software Development Services
                </h1>
                <p className="lg:w-[95%] mt-4 w-full text-base">
                Our custom ERP development services are closely bound to our clients' needs and can be related to:
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {meetWhereWeData.map((item, index) => (
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

export default MeetWhereWe