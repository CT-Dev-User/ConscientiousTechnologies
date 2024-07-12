import React from 'react'
import cloudComputingService from './cloudServiceOption.png'
const CloudServiceDev = () => {
    const cloudServiceDevArr = [{ title: "Cloud consulting", desc: "We audit your existing IT infrastructure and business processes, analyze cloud adoption needs, and prepare a feasibility study and business case. Our cloud architects will suggest the best fitting cloud provider and deployment option, advise on a pragmatic cloud strategy and the required IaaS, PaaS or SaaS services. We also prepare a risk mitigation plan and a security strategy"}, { title: "Cloud migration", desc: "We modernize your application or data storage and execute their fast, smooth, and reliable migrations without unplanned disruptions to your business. Our QA engineers prepare the test strategy and perform manual and automated testing. If required, we can also integrate your cloud and on-premises environments, implement CI/CD, improve security, and more." }, { title: "Cloud development", desc: "We design, build, test, deploy, and support apps and data warehouses that are fully adjusted to the specific capabilities and constraints of the cloud. Our team can cover back-end development, front-end development, integrations with other software, and CI/CD pipeline design. We also have in-house compliance experts (e.g., HIPAA, FDA, PCI DSS)."}, { title: "Cloud optimization", desc: "We review your cloud environment and check if you use the right cloud services to meet your needs. We also pause/terminate redundant cloud services, rightsize cloud resources, consider using Reserved and Spot instances, and more." }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[50px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>ConscientiousTech Cloud Service Option</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 justify-between md:w-[95%]'>
                <div className='w-[27%] h-[510px] md:hidden'>
                    <img src={cloudComputingService} alt="Ecommerce Development Services" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[70%] flex gap-2 flex-wrap md:w-full'>
                    {cloudServiceDevArr.map((items, i) => {
                        return (
                            <div className='w-[40%] h-[250px] p-3 border border-[#ccc] md:w-[100%] md:border-none md:h-auto md:py-5' key={i}>
                                <h4 className='md:text-[20px]'>{items.title}</h4>
                                <p className='text-[14px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default CloudServiceDev
