import React from 'react'

const ScopeofOurSaaSDev = () => {
    const SaasDevScope = [{title:"Idea production and brand design", desc:"Our consultants analyze competitors and the target audience's needs, describe a SaaS concept, define product differentiation and a unique selling proposition, and more."}, {title:"SaaS consuting", desc:"Our consultants prepare detailed software requirements specifications (SRS), describe the development roadmap, estimate TCO & ROI, and provide other project guidance."}, {title:"SaaS UX design", desc:"Our UX designers outline personas, create user journey maps, deliver wireframes and storyboards, do usability testing, and more. We can also conduct a UX audit of your existing SaaS."}, 
{title:"SaaS UI design", desc:"Our UI designers conduct visual identity analysis and create a design concept. They provide clickable prototypes, comprehensive UI kit, animations, specifications and assets for developers in Zeplin, Sketch or Figma, and more."},
 {title:"SaaS architecture design", desc:"ScienceSoft designs multi-tenancy architectures that are easy to scale, can withstand peak loads, and ensure 99.98% availability."}, {title:"SaaS application development", desc:"Experienced in a wide range of technologies, our SaaS developers produce top-grade code, while our PMO use mature KPIs to ensure engineers’ highest productivity."},
  {title:"QA and Testing", desc:"Adhering to ISO 27001 standards and a proprietary Integrated Manual and Automated Testing approach, we ensure data integrity and high test coverage for your SaaS."}, {title:"Support and maintenance", desc:"We offer L1, L2, and L3 support for your SaaS product as well as its corrective, adaptive, preventive, and perfective maintenance."},
   {title:"SaaS evolution", desc:"We help your SaaS cater to the growing audience needs by introducing in-demand features, including video streaming, VoIP, chatbots, AR/VR, AI, analytics."}]
  return (
    <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
    <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Scope of Our SaaS Development Services</h1>
        <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Our SaaS development services encompass full-cycle development, from ideation to deployment and ongoing support. We specialize in creating scalable, reliable, and innovative software solutions tailored to meet the unique needs of your business.</p>
    </div>
    <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-[30px] justify-center items-center'>
                {SaasDevScope.map((item, index) => (
                    <div key={index} className='w-[300px] h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
</div>
  )
}

export default ScopeofOurSaaSDev
