import React from 'react'

const DiffCollabration = () => {
  const CollabSenario = [{ title: "Software development outsourcing", desc: "We assemble fully managed development teams to implement software projects end to end. Our team takes 100% responsibility for project planning, collaboration, and risk management. You get top-quality software promptly and at a 1.5–2.5x lower cost.", bgColor: "FF6868" },
  {
    title: "Dedicated teams", desc: "We compose dedicated teams with all necessary competencies to take over particular tasks (e.g., coding, QA, integration). With a high-performing team focused solely on your project, you can efficiently address skill gaps and speed up development.",
    bgColor: "1777BC"
  },
  { title: "Team augmentation", desc: "We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.", bgColor: "E751FF" }]
  return (

    <div className="w-screen h-auto py-7 box-border bg-black text-white lg:text-black lg:bg-white">
      <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
        <h1 className="lg:text-3xl font-bold text-2xl lg:text-black text-[blue]">
          Different Collaboration Scenarios for Your Software Development
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

export default DiffCollabration
