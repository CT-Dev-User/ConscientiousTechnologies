import React from 'react'

const DevopsServiceByCt = () => {
    const DevopsServiceArr = [{
        title: "End-to-end DevOps implementation consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Applying the Infrastructure as a Code (IaaC) approach.</li>
                <li className='list-disc ms-5'>Applying app module containerization.</li>
                <li className='list-disc ms-5'>Setting up continuous integration and deployment (CI/CD) pipelines.</li>
                <li className='list-disc ms-5'>Introducing test automation.</li>
                <li className='list-disc ms-5'>Introducing automated application monitoring.</li>
            </ul>
        )
    },

    {
        title: "DevOps launch consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Carrying out strategic planning.</li>
                <li className='list-disc ms-5'>Developing a detailed DevOps implementation roadmap.</li>
                <li className='list-disc ms-5'>Upskilling your team in DevOps tools and ways of working.</li>
                <li className='list-disc ms-5'>Assisting in the DevOps solution setup.</li>
            </ul>
        )
    },
    {
        title: "DevOps project recovery consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Find and fix collaboration problems between development, testing and operations teams.</li>
                <li className='list-disc ms-5'>Identify and fill in knowledge gaps in DevOps tools and methodologies.</li>
                <li className='list-disc ms-5'>Cope with technical problems (e.g., CI/CD configuration errors).</li>
                <li className='list-disc ms-5'>Optimize the automated testing coverage, and more.</li>
            </ul>
        )
    },

    {
        title: "Managed DevOps services and DevOps outsourcing", desc: (
            <ul>
                <li className='list-disc ms-5'>IaC, CI/CD, containerization and orchestration (Docker, Kubernetes, etc.).</li>
                <li className='list-disc ms-5'>Test automation.</li>
                <li className='list-disc ms-5'>Cloud infrastructure management (AWS, Azure, Google Cloud Platform, etc.), cloud costs optimization.</li>
            </ul>
        )
    },

    { title: "Healthcare and life sciences", desc:(
        <ul>
            <li className='list-disc ms-5'>Electronic health records (EHR).</li>
            <li className='list-disc ms-5'>Telemedicine platforms.</li>
            <li className='list-disc ms-5'>Clinical trial management, and many more.</li>   
        </ul>
    )}, 
    { title: "QA and Testing", desc:(
        <ul>
            <li className='list-disc ms-5'>Applying the Infrastructure as a Code (IaaC) approach.</li>
            <li className='list-disc ms-5'>Applying app module containerization.</li>
            <li className='list-disc ms-5'>Setting up continuous integration and deployment (CI/CD) pipelines.</li>
            <li className='list-disc ms-5'>Introducing test automation.</li>
            <li className='list-disc ms-5'>Introducing automated application monitoring.</li>
        </ul>
    )}]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Scope of Our SaaS Development Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Our SaaS development services encompass full-cycle development, from ideation to deployment and ongoing support. We specialize in creating scalable, reliable, and innovative software solutions tailored to meet the unique needs of your business.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[30px]'>
                {DevopsServiceArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[250px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default DevopsServiceByCt
