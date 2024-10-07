import React from 'react'

const WebDevSteps = () => {
    const processArr = [{
        step: "Step 1", title: "Planning", desc: (
            <ul>
                <li className="ms-5 list-disc">We start building a portal with exploring your specific business needs, considering relevant regulatory constraints, gathering and processing opinions and expectations of project stakeholders and drawing up detailed portal requirements and tech specifications.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Design", desc: (
            <ul>
                <li className="ms-5 list-disc">We create the portal architecture design and deliver UX/UI designs.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Iterative development", desc: (
            <ul>
                <li className="ms-5 list-disc">Our team will build and deliver the web portal back end, front end and APIs in quick iterations with major releases each 2-4 weeks.</li>

            </ul>
        )
    },

    {
        step: "Step 4", title: "Portal integration with other software", desc: (
            <ul>
                <li className="ms-5 list-disc">We integrate web portal software with custom-made or platform-based tools and systems you already use, including ERP, CRM, PDM, MES, HIE, LMS, and more.</li>
            </ul>
        )
    },


    {
        step: "Step 5", title: "QA and testing", desc: (
            <ul>
                <li className="ms-5 list-disc">For high-quality test planning, the QA team reviews portal requirements and user stories, and architecture design. Then, in parallel with development, our QA team verifies that your web portal runs as planned and complies with all set requirements and checks the security of your data. </li>
            </ul>
        )
    },

    {
        step: "Step 6", title: "Deployment and setup", desc: (
            <ul>
                <li className="ms-5 list-disc">We get the portal running in your IT environment, train your support team if needed and provide user guides.</li>
            </ul>
        )
    },

    {
        step: "Step 7", title: "After-release support", desc: (
            <ul>
                <li className="ms-5 list-disc">For 1-3 months, we answer your after-release questions, manage incidents, configuration changes and updates.</li>
            </ul>
        )
    },

    {
        step: "Step 8", title: "Ongoing monitoring (optional)", desc: (
            <ul>
                <li className="ms-5 list-disc">We take over web portal performance management, troubleshooting, evolution and change management to keep your portal highly available and relevant to your needs.</li>
            </ul>
        )
    }
    ]
    return (
        
      
            <div className="w-screen h-auto">
              <div className="w-full h-auto bg-black box-border py-16 text-white hidden lg:block">
                <div className="lg:w-[85%] mx-auto">
                  <h1 className="lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-[blue] lg:text-white">
                  Web Portal Development Steps 
                  </h1>
                  <p className="w-[85%] text-base mt-2">
                  The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:
                  </p>
                </div>
                <div className="w-[85%] mx-auto mt-10 hidden lg:block">
                  {processArr.map((step, index) => {
                    return (
                      <div
                        key={index}
                        className={`${
                          index % 2 === 0 ? "flex-row border-r-2 border-r-[#FFC635]" : "border-l-2 border-l-[#FFC635] ml-[50%] flex-row-reverse"
                        } w-1/2 h-auto py-5 flex justify-between flex-wrap`}
                      >
                        <div className="w-[95%] flex flex-col h-auto bg-[#3C3C3C] p-4 box-border">
                          <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                          <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                          <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                        </div>
                        <div className="w-[2px] h-auto relative">
                          <div className={`w-[25px] h-[25px] bg-[#FFC635] absolute top-[-20px] ${index % 2 === 0 ? "left-1/2" : "left-0"} -translate-x-1/2 -translate-y-1/2`}>
        
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
        
              <div className="w-full py-10 lg:hidden block">
                <div className="mx-auto w-[95%]">
                  <h1 className="font-bold text-base text-blue">
                  Web Portal Development Steps
                  </h1>
                  <p className="text-sm mt-2 w-full">
                  The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:
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
    )
}

export default WebDevSteps