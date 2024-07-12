import React from 'react'

const ScopeOfEnterPrise = () => {
    const SaasDevScope = [{
        title: "Enterprise application planning", desc: (
            <ul>
                <li className='list-disc ms-5'>Enterprise application planning</li>
                <li className='list-disc ms-5'>Mapping out functional and technical requirements.</li>
                <li className='list-disc ms-5'>Mapping security and compliance (e.g., with HIPAA, FDA, GLBA, PCI DSS) requirements for the application and the development process.</li>
                <li className='list-disc ms-5'>Business case delivery with TCO and ROI estimation.</li>
            </ul>
        )
    },

    {
        title: "Project planning", desc: (
            <ul>
                <li className='list-disc ms-5'>Setting project goals and milestones.</li>
                <li className='list-disc ms-5'>Setting project KPIs.</li>
                <li className='list-disc ms-5'>Creating a detailed project roadmap with deadlines for each project stage</li>
            </ul>
        )
    },
    {
        title: "Enterprise application architecture design", desc: (
            <ul>
                <li className='list-disc ms-5'>Troubled compliance of fleet operations with federal and industry-specific fleet management regulations</li>
                <li className='list-disc ms-5'>Need for higher operational efficiency due to fluctuating fuel prices and low margin.</li>
                <li className='list-disc ms-5'>Difficulty in planning vehicle purchasing and low visibility over fleet operations and maintenance expenses.</li>
                <li className='list-disc ms-5'>Financial losses due to frequent accidents and inability to guarantee driver safety.</li>
            </ul>
        )
    },
    {
        title: "UX and UI design", desc: (
            <ul>
                <li className='list-disc ms-5'>Creating user stories.</li>
                <li className='list-disc ms-5'>Creating UX mockups and wireframes.</li>
                <li className='list-disc ms-5'>Designing GUI that matches enterprise needs.</li>
            </ul>
        )
    },
    {
        title: "Enterprise application development", desc: (
            <ul>
                <li className='list-disc ms-5'>Front end and back end development.</li>
                <li className='list-disc ms-5'>Preparing guidance materials for end users (in parallel with design and development)</li>
            </ul>
        )
    },
    {
        title: "Testing and QA", desc: (
            <ul>
                <li className='list-disc ms-5'>Testing and QA strategy planning.</li>
                <li className='list-disc ms-5'>Conducting functional, compatibility, performance, usability, accessibility, security and compliance testing</li>
            </ul>
        )
    },

    {
        title: "Enterprise software and user support", desc: (
            <ul>
                <li className='list-disc ms-5'>User training.</li>
                <li className='list-disc ms-5'>Application administration and monitoring.</li>
                <li className='list-disc ms-5'>L1–L3 application support.</li>
                <li className='list-disc ms-5'>Evolution (adding new features and integrations).</li>
            </ul>
        )
    },
    {
        title: "Legacy enterprise software modernization", desc: <ul>
            <li>Examining architecture and infrastructure of a legacy enterprise application.</li>
            <li className='list-disc ms-5'>Application reengineering and recoding.</li>
            <li className='list-disc ms-5'>Containerization.</li>
            <li className='list-disc ms-5'>Cloud migration based on a fitting approach (re-hosting, re-platforming, or re-factoring).</li>
            <li className='list-disc ms-5'>Cloud usage optimization.</li>
        </ul>
    },
    {
        title: "Enterprise app integration", desc: <ul>
            <li className='list-disc ms-5'>Defining and examining software to integrate and the data to be shared.</li>
            <li className='list-disc ms-5'>Analyzing integration risks and constraints.</li>
            <li className='list-disc ms-5'>Choosing integration approach (common data storage, point-to-point, or mediated integration, robots usage) and tech stack.</li>
        </ul>
    },

    {
        title: "----------", desc: <ul>
            <li className='list-disc ms-5'>Examining architecture and infrastructure of a legacy enterprise application.</li>
            <li className='list-disc ms-5'>Application reengineering and recoding.</li>
            <li className='list-disc ms-5'>Containerization.</li>
            <li className='list-disc ms-5'>Cloud migration based on a fitting approach (re-hosting, re-platforming, or re-factoring).</li>
            <li className='list-disc ms-5'>Cloud usage optimization.</li>
        </ul>
    }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>The Scope of Our Enterprise Application Development Services </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>ScienceSoft company provides services that cover all aspects of enterprise application implementation. You can either choose one or several components from our offer to get a unique service pack fully covering your enterprise needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[30px] justify-center items-center'>
                {SaasDevScope.map((item, index) => (
                    <div key={index} className='w-[45%] h-[200px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScopeOfEnterPrise
