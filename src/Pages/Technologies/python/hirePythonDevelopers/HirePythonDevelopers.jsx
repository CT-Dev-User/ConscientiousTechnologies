import React from 'react'

const HirePythonDevelopers = () => {
    const pythonDevData = [
        { srNo: '01', title: "Initial request", desc: "You send us a request, specifying the number of Python experts you need, their desired level of experience, as well as the model of cooperation you're interested in.", srColor: '#FF8585' },
        { srNo: '02', title: "CV scanning", desc: "ScienceSoft performs preliminary scanning of our experts' CVs in the database and sends you the most relevant ones.", srColor: '#76AA06' },
        { srNo: '03', title: "Interview scheduling", desc: "You choose the CVs you're most interested in and let us know the time you're available for interviewing candidates.", srColor: '#FFC635' },
        { srNo: '04', title: "Interviews", desc: "We help arrange the interviews with our Python developers within 1-2 days.", srColor: '#A772FF' },
        { srNo: '05', title: "SLA preparation", desc: "After you confirm the experts' competence, ScienceSoft works with you to compose a service level agreement (SLA).", srColor: '#F34A91' },
        { srNo: '06', title: "Onboarding", desc: "Once you sign, we set up communication with your side, and our experts (led by ScienceSoft or your PM — you decide) immediately start working on your project.", srColor: '#51ACFF' }
    ];

    return (
        <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[60px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>How to Hire Python Developers from ScienceSoft</h1>
                <p className='w-[70%] text-[14px] mt-[20px] md:w-[100%] md:text-[12px]'>Maximize Efficiency: Discover the transformative advantages of Cloud Consulting Services with CT. From cost optimization to enhanced security, unlock the full potential of cloud technology for your business success.</p>
            </div>
            <div className='flex text-[white] w-[85%] flex-wrap mx-[110px] flex-wrap mt-[40px] md:hidden'>

                {pythonDevData.map((data, i) => (
                    <div key={i} className={`w-[32%] h-[220px] text-[black] border-[#737373] flex flex-col justify-around py-2 px-[30px]  ${i === 0 || i === 1 || i === 3 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 ? 'border-b' : ''}`} >
                        <h1 className='font-bold text-[40px] self-end mr-5' style={{ color: data.srColor }}>{data.srNo}</h1>
                        <div>
                            <h3 className='font-semibold text-[18px]'>{data.title}</h3>
                            <p className='text-[14px] mt-2'>{data.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='hidden md:flex text-[white] w-[90%] flex-wrap mx-auto justify-center flex-wrap mt-[30px]'>
                {pythonDevData.map((data, i) => (
                    <div key={i} className={`w-[49%] h-[180px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
                        <h1 className='font-bold self-end mr-2 text-[18px]' style={{ color: data.srColor }}>{data.srNo}</h1>
                        <div>
                            <h3 className='text-[14px] font-bold'>{data.title}</h3>
                            <p className='text-[12px]'>{data.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HirePythonDevelopers