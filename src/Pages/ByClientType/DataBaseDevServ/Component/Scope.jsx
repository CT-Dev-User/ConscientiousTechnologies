import React from 'react'

const Scope = () => {
    const SaasDevScope = [{title:"Customer database software", desc:"Deliver exceptional customer service through the quick and easy management of customer profiles, contacts and related documents."}, {title:"Marketing database software", desc:"Back up your marketing strategy with the deepest customer insights."},
     {title:"Membership database software", desc:"Keep track of the members, manage fees and events, recruit and coordinate volunteers with ease."}, 

{title:"Inventory database software", desc:"Maintain the most accurate record of your inventory, make quick and informed inventory management decisions."},
 {title:"Equipment database software", desc:"Track the performance of your equipment to reduce and minimize downtimes and stay proactive with timely scheduled maintenance operations."}, {title:"Real estate database software", desc:"Find the best match for any request with the handy management of property profiles and clients."},

  {title:"Employee database software", desc:"Adhering to ISO 27001 standards and a proprietary Integrated Manual and Automated Testing approach, we ensure data integrity and high test coverage for your SaaS."}, {title:"Recruitment database software", desc:"We offer L1, L2, and L3 support for your SaaS product as well as its corrective, adaptive, preventive, and perfective maintenance."},
   {title:"Image database software", desc:"Store your digital image content in multiple file formats (PNG, JPEG, GIF, DICOM), leverage the convenient organization and fast retrieval with image indexing (by keywords, dates, locations, etc.)."}]
  return (
    <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
    <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Scope of Our SaaS Development Services</h1>
        <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Our SaaS development services encompass full-cycle development, from ideation to deployment and ongoing support. We specialize in creating scalable, reliable, and innovative software solutions tailored to meet the unique needs of your business.</p>
    </div>
    <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-[30px] justify-evenly'>
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

export default Scope
