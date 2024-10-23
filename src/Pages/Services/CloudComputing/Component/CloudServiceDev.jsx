import React from 'react'
import cloudComputingService from './cloudServiceOption.png'
const CloudServiceDev = () => {
    const cloudServiceDevArr = [{ title: "Cloud consulting", desc: "We audit your existing IT infrastructure and business processes, analyze cloud adoption needs, and prepare a feasibility study and business case. Our cloud architects will suggest the best fitting cloud provider and deployment option, advise on a pragmatic cloud strategy and the required IaaS, PaaS or SaaS services. We also prepare a risk mitigation plan and a security strategy" }, { title: "Cloud migration", desc: "We modernize your application or data storage and execute their fast, smooth, and reliable migrations without unplanned disruptions to your business. Our QA engineers prepare the test strategy and perform manual and automated testing. If required, we can also integrate your cloud and on-premises environments, implement CI/CD, improve security, and more." }, { title: "Cloud development", desc: "We design, build, test, deploy, and support apps and data warehouses that are fully adjusted to the specific capabilities and constraints of the cloud. Our team can cover back-end development, front-end development, integrations with other software, and CI/CD pipeline design. We also have in-house compliance experts (e.g., HIPAA, FDA, PCI DSS)." }, { title: "Cloud optimization", desc: "We review your cloud environment and check if you use the right cloud services to meet your needs. We also pause/terminate redundant cloud services, rightsize cloud resources, consider using Reserved and Spot instances, and more." }]

    return (

        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='2xl:text-3xl font-bold text-2xl lg:text-black text-primary'>ConscientiousTech Cloud Service Option</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>We work with all the mainstream technologies to expand the scope of functions the software can perform</p>
            </div>
            <div className='w-full  lg:w-[85%] flex mx-auto mt-6 gap-20 justify-start'>
                <div className='w-[27%] h-[500px] hidden lg:block'>
                    <img src={cloudComputingService} alt="Ecommerce Development Services" className='w-[100%] h-[100%]' />
                </div>
                <div className='lg:w-[65%]  flex gap-3 flex-wrap w-full lg:mt-0 mt-4'>
                    {cloudServiceDevArr.map((items, i) => {
                        return (
                            <div className='md:w-[45%] w-full h-auto p-3 border border-[#ccc]' key={i}>
                                <h4 className='font-bold'>{items.title}</h4>
                                <p className='text-[13.5px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default CloudServiceDev
