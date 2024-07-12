import React from 'react'

const EnsureSuccess = () => {
   const SuccessEnsureArray = [{ title: "Scoping", desc: (<ul> <li className='list-disc ms-5'>Our requirements engineering activities.</li> <li className='list-disc ms-5'>Project feasibility assessment.</li> <li className='list-disc ms-5'>Scope creep control throughout the SDLC.</li> </ul>) },
    
    { title: "Cost Estimation", desc: (<ul> <li className='list-disc ms-5'>Factors impacting web development costs.</li> <li className='list-disc ms-5'>Approaches to cost estimation.</li> <li className='list-disc ms-5'>Our cost optimization practices.</li> </ul>) },
    
    { title: "Quality Management", desc: (<ul> <li className='list-disc ms-5'>Development health and software quality KPIs.</li> <li className='list-disc ms-5'>Quality assurance activities at each SDLC stage.</li></ul>) },
    
    { title: "Security management", desc: (<ul> <li className='list-disc ms-5'>The scope of cyber defense.</li> <li className='list-disc ms-5'>Security management procedures during the development project.</li> </ul>) }, 
    
    { title: "Collaboration", desc: (<ul> <li className='list-disc ms-5'>Collaboration flow: from planning to success measurement to ongoing improvement.</li> <li className='list-disc ms-5'>Tactical communication forms.</li> <li className='list-disc ms-5'>Collaboration toolkit.</li> </ul>) }, 
    
    { title: "knowledge Management", desc: (<ul> <li className='list-disc ms-5'>Knowledge management and sharing process.</li> <li className='list-disc ms-5'>Knowledge management techniques and tools.</li> <li className='list-disc ms-5'>Software documents we deliver across various development stages</li> </ul>) },
    
 ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[40px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-[30px] font-bold md:text-[16px] md:text-[blue]'>How We Ensure Success in Web Development Projects</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Apart from technical expertise, many other factors influence project success and software quality. ScienceSoft’s teams approach all of them seriously. Here are our project management and software development practices to deliver on goal, quality, schedule, and budget:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-8'>
                {SuccessEnsureArray.map((item, index) => (
                    <div key={index} className='w-[300px] h-[180px] border border-gray-300 p-3'>
                        <h1 className='text-[17px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default EnsureSuccess
