import React from 'react'

const PowerAppsUseCases = () => {
    const softwareAdv = [{ title: "Workflow management", points: ["Drag-and-drop workflow editor for creating custom workflows.", "Pre-built templates for typical workflows.", "Workflow-related emails and notifications.", "Workflow scheduling.", "Real-time dashboards with workflow status, progress, due dates, etc."] }, { title: "Financial management", points: ["Expenses on your ready-made product grow together with your customer base.", "Unmet customer needs due to a problematic implementation of custom functionality in Expense reporting.", "Review and processing of accounts payable and accounts receivable.", "Invoice creation and review.", "Financial reporting (e.g., end of year a ready-made product.", "Low user satisfaction due to a complex interface and issues at the code level."] }, { title: "Cost control", points: ["Cost estimation.", "Budgeting.", "Cost allocation.", "Cost tracking.", "Reporting (actual and committed costs, cost variances, cost trends, etc.)."] }, { title: "Inventory management", points: ["Automated inventory data uploading and editing.", "Storage of multiple data types (e.g., image, RFID data).", "Inventory search by keywords and serial number.", "Purchase order creating and approval.", "Sales order placing."] }, { title: "Configure price quote", points: ["Guided ordering and purchasing for customers.", "AI-based calculation of price of configurable products.", "Real-time updating of product pricing and discounting data.", "Sales validation and approval.", "One-click quoting."] }, { title: "Asset management", points: ["Asset tracking.", "Asset booking.", "Asset check-in and check-out.", "Work order creation and routing.", "Asset warranty tracking."] }, { title: "HR management", points: ["EWorkforce planning.", "Recruiting and onboarding.", "Employee database management.", "Time and attendance tracking.", "Performance reviews."] }, { title: "Portals", points: ["Employee portals.", "Customer portals.", "Patient portals.", "Ecommerce portals (B2C and B2B).", "Vendor portals."] }, { title: "Inspection and audit management", points: ["Inventory audit.", "Safety and compliance audit (e.g., vehicles, ATM).", "Workplace health and safety audit.", "Quality control.", "Incident reporting."] }, { title: "Project management", points: ["Project planning and scheduling.", "Project monitoring (tasks, stages, milestones, etc.).", "Resources (people, assets, budget, etc.) tracking and allocating.", "Project team collaboration.", "Project team performance tracking."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Power Apps Use Cases</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap gap-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[240px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] shadow-[4px] flex flex-col gap-[10px] pt-[10px] md:pt-[10px] px-[10px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px] md:text-[18px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PowerAppsUseCases