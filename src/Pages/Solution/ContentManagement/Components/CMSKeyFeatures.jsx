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

        <div className="w-full my-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Key CMS Features We Deliver </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {CMSKeyFeaturesArr.map((item, index) => (
                    <div key={index} className='md:w-[46%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default CMSKeyFeatures
