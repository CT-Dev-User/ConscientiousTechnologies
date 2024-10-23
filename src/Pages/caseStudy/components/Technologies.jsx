import React from 'react'

const Technologies = ({ techTools }) => {
    const techToolsArr = techTools ? techTools.split(",").map(goal => goal.trim()) : []
    return (
        <div className='w-screen h-auto py-14'>
            <div className='lg:w-[85%] mx-auto flex flex-wrap w-full px-3 lg:px-0 justify-between'>
                <div className='w-[95%] lg:w-[46%]'>
                    <h1 className='text-base lg:text-[1.5rem] 2xl:text-4xl font-bold text-[#3970F0]' >Technologies and Tools</h1>
                    <p className='text-[#272727] text-base 2xl:text-xl mt-5'>Apache Hadoop, Apache Hive, Apache Spark, Python (ETL), Scala (Spark, ETL), SQL (ETL), Amazon Web Services (Cloud storage), Microsoft Azure (Cloud storage), .NET, WPF, C#.</p>
                </div>
                <div className='w-[95%] lg:w-[46%] flex gap-6 mt-5'>
                    {techToolsArr.map((techTool, index) => (
                        <span className='bg-[#BEDCFF] text-[#272727] py-2 px-4 w-fit h-fit rounded text-base 2xl:text-[1.3rem]' key={index}>{techTool} </span>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Technologies
