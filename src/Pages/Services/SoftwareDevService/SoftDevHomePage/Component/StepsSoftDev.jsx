import React from "react";

const StepsSoftDev = () => {
  const processArr = [
    {
      step: "Step 1",
      title: "Planning",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            Document key business processes and how they’re covered with
            existing software.
          </li>
          <li className="ms-5 list-disc">
            Elicit business needs and concerns.
          </li>
          <li className="ms-5 list-disc">
            Evaluate risks of new software introduction, e.g., impact on
            business processes, and plan risk mitigation measures.
          </li>
          <li className="ms-5 list-disc">
            Draw up high-level functional and technical software requirements.
          </li>
          <li className="ms-5 list-disc">
            Prepare the list of software features and integrations.
          </li>
          <li className="ms-5 list-disc">
            Draw up a project roadmap and major milestones.
          </li>
        </ul>
      ),
    },
    {
      step: "Step 2",
      title: "Business case composition",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            It takes from 1 week to conduct cost-benefit analysis, estimate NVP,
            ROI.
          </li>
        </ul>
      ),
    },
    {
      step: "Step 3",
      title: "Architecture, UX and UI design",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            Define app architecture, techs, data flow and integration points.
          </li>
          <li className="ms-5 list-disc">
            Note: If possible, ScienceSoft will re-use parts of your existing
            enterprise systems rather than develop new software modules, for
            lower cost and higher reliability of your software.
          </li>
          <li className="ms-5 list-disc">
            Conduct UX research, outline personas and key user scenarios,
            prepare user journey maps.
          </li>
          <li className="ms-5 list-disc">
            Create wireframes and clickable prototypes.
          </li>
          <li className="ms-5 list-disc">
            Conduct visual identity analysis, prepare design concept, create a
            branded UI kit with ready-to-use components (icons, buttons, colors,
            fonts, etc.), animations, specifications and assets for developers
          </li>
        </ul>
      ),
    },

    {
      step: "Step 4",
      title: "MVP launch (upon request)",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            The delivery of the first working version of enterprise software
            takes from 1 month. The first working version of software product
            can be delivered in ~ 2 months.
          </li>
        </ul>
      ),
    },

    {
      step: "Step 5",
      title: "Development and testing",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            Agile delivery of new software parts in 2-week releases. Continuous
            safe minor releases via automated CI/CD pipelines.
          </li>
          <li className="ms-5 list-disc">
            Analysis of emerging needs and the release planning.
          </li>
          <li className="ms-5 list-disc">Approving the release scope.</li>
          <li className="ms-5 list-disc">Delivering and reviewing mockups.</li>
          <li className="ms-5 list-disc">
            Developing and testing the approved software part, migrating the
            developed software part to the staging and production environment.
          </li>
          {/* <li className="ms-5 list-disc">Getting feedback from a project sponsor and users on the results of the release.</li>
                <li className="ms-5 list-disc">Reviewing the results of the completed release and approving the scope of the next release.</li> */}
        </ul>
      ),
    },

    {
      step: "Step 6",
      title: "Deployment (and 3-month maintenance)",
      desc: (
        <ul>
          <li className="ms-5 list-disc">
            Conducting user acceptance testing (UAT).
          </li>
          <li className="ms-5 list-disc">
            Establishing software monitoring processes.
          </li>
          <li className="ms-5 list-disc">
            Defining new roles and responsibilities for application support in
            your and our teams.
          </li>
        </ul>
      ),
    },
    {
      step: "Step 7",
      title: "Project handover / continuous support (on demand)",
      desc: (
        <ul>
          <li className="ms-5 list-disc">Conducting project evaluation.</li>
          <li className="ms-5 list-disc">
            Performing knowledge transfer to your in-house IT team/other
            vendors.
          </li>
          <li className="ms-5 list-disc">
            Providing the final report and requesting your confirmation for the
            project closure.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div className="w-screen h-auto">
      <div className="w-full h-auto bg-black box-border py-16 text-white hidden lg:block">
        <div className="lg:w-[85%] mx-auto">
          <h1 className="lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-[blue] lg:text-white">
            Check Out Our Software Development Steps 
          </h1>
          <p className="w-[85%] text-base mt-2">
            Discover Our Software Development Steps: Gain insights into our
            comprehensive approach, from ideation to deployment, ensuring
            transparency and delivering high-quality, custom solutions for your
            unique business requirements.
          </p>
        </div>
        <div className="w-[85%] mx-auto mt-10">
          {processArr.map((step, index) => {
            return (
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? "flex-row border-r-2 border-r-[#FFC635]" : "border-l-2 border-l-[#FFC635] ml-[50%] flex-row-reverse"
                } w-1/2 h-auto py-5 flex justify-between flex-wrap`}
              >
                <div className="w-[95%] flex flex-col h-full bg-[#3C3C3C] p-4">
                  <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                  <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                  <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                </div>
                <div className="w-[2px] h-auto relative">
                  <div className="w-6 h-6 bg-[#FFC635] absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" w-full py-10 lg:hidden block">
        <div className="mx-auto w-[95%]">
          <h1 className="font-bold text-base text-blue">
            Software for Advanced Business Tasks 
          </h1>
          <p className="text-sm mt-2 w-full">
            We work with all the mainstream technologies to expand the scope of
            functions the software can perform.
          </p>
        </div>
        <div className="w-[95%] flex mx-auto flex-wrap gap-3 mt-8 items-center justify-center ">
          {processArr.map((item, index) => (
            <div key={index} className="p-3 w-full h-auto border">
              <h1 className="text-base">{item.title}</h1>
              <div className="text-xs mt-2 font-medium">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSoftDev;
