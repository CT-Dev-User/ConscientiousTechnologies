import React from 'react'

const BlockChainDevStep = () => {
    const pythonDevData = [
        { srNo: '01', title: "Discovery stage", desc: "If you are implementing blockchain for corporate use, ScienceSoft’s consultants analyze its feasibility for your business needs to ensure it will bring the expected payback. For blockchain startups, we research the", srColor: '#FF8585' },
        { srNo: '02', title: "Blockchain software design", desc: "We compose an optimal feature set for your blockchain software, decide on the fitting blockchain network type and consensus mechanism, and suggest the most effective approach to development", srColor: '#76AA06' },
        { srNo: '03', title: "Tech stack selection", desc: "Our experts select a reliable toolkit for blockchain implementation, including networks, hosting platforms, smart contract frameworks, off-chain storage, and more. When picking a tech stack", srColor: '#FFC635' },
        { srNo: '04', title: "PoC delivery (optional)", desc: "We build small blockchain software components and sample smart contacts to prove their technical viability, usability, and compatibility with the required systems.", srColor: '#A772FF' },
        { srNo: '05', title: "Development and testing", desc: "We develop the essential blockchain software components (back end, smart contracts, APIs, oracles, cross-chain bridges, role-specific user interfaces, etc.),", srColor: '#F34A91' },
        { srNo: '06', title: "Deployment", desc: "We set up a blockchain software infrastructure, configure data backup and recovery procedures, implement robust network protection mechanisms, and establish a DevOps environment to speed up releases.", srColor: '#51ACFF' }
    ];

    return (
        <div id='how-we-work' className='w-[100vw] h-[auto] bg-[white] box-border pt-[60px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[20px] md:text-[blue]'>Blockchain Development Steps</h1>
                <p className='w-[70%] text-[14px] mt-[20px] md:w-[100%] md:text-[16px]'>According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:</p>
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
                    <div key={i} className={`w-[49%] h-auto pb-[10px] text-[black] border-[#737373] border-dashed flex flex-col justify-around px-[5px] ${i === 0 || i === 2 || i === 4 ? 'border-r' : ''} ${i === 0 || i == 1 || i == 2 || i == 3 ? 'border-b' : ''}`} >
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

export default BlockChainDevStep