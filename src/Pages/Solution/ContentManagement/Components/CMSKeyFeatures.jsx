import React from 'react'

const CMSKeyFeatures = () => {
    const CMSKeyFeaturesArr = [{
        title: "Content creation and storage", desc: (
            <ul>
                <li className='list-disc ms-5'>WYSIWYG editor and content templates.</li>
                <li className='list-disc ms-5'>Content hierarchy taxonomy.</li>
                <li className='list-disc ms-5'>Indexing and full-text search.</li>
                <li className='list-disc ms-5'>AI-powered auto-tagging and metadata creation.</li>
                <li className='list-disc ms-5'>Content archiving.</li>
            </ul>
        )
    }
        , {
        title: "CMS administration", desc: (
            <ul>
                <li className='list-disc ms-5'>Content governance.</li>
                <li className='list-disc ms-5'>Reporting and analytics (e.g., content usage, user behavior).</li>
                <li className='list-disc ms-5'>Integrated help desk.</li>
                <li className='list-disc ms-5'>Alerts and notifications (e.g., about content publishing, modification)</li>
            </ul>
        )
    }
        , {
        title: "Content publishing and promotion", desc: (
            <ul>
                <li className='list-disc ms-5'>Built-in SEO tools and SEO-friendly URLs.</li>
                <li className='list-disc ms-5'>Customizable content approval and publishing workflows, including non-linear, multistep processes.</li>
                <li className='list-disc ms-5'> AI-driven content personalization (smart suggestions).</li>
                <li className='list-disc ms-5'>Multisite and multilanguage support.</li>
            </ul>
        )
    }, {
        title: "Security and compliance", desc: (
            <ul>
                <li className='list-disc ms-5'>Access control and multi-factor user authentication.</li>
                <li className='list-disc ms-5'>Role-based permissions.</li>
                <li className='list-disc ms-5'>Versioning and audit trail.</li>
                <li className='list-disc ms-5'>Content retention and deletion policies.</li>
                <li className='list-disc ms-5'>Technical compliance (e.g., WCAG 2).</li>

            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Key CMS Features We Deliver </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves </p>
                {/* <h4 className='text-[22px] ms-2 mt-5'>Need to build a new CRM?</h4> */}
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {CMSKeyFeaturesArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CMSKeyFeatures
