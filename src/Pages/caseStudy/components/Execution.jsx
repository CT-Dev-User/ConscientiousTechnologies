import React from 'react'

const Execution = ({ executionHeading1, executionHeading2, executionHeading3, executionPoint1, executionPoint2, executionPoint3, executionHeading4, executionPoint4 }) => {
    const executionPoint1Arr = executionPoint1 ? executionPoint1.split(".") : [];
    const executionPoint2Arr = executionPoint2 ? executionPoint2.split(".") : [];
    const executionPoint3Arr = executionPoint3 ? executionPoint3.split(".") : [];
    // const executionHeading4 = executionHeading4 ? executionPoint4.split(",") : [];
    const executionPoint4Arr = executionPoint4 ? executionPoint4.split(".") : [];

    return (
        <div className='w-screen h-auto bg-black py-14'>
            <div className='lg:w-[85%] w-[90%] mx-auto'>
                <h1 className='lg:text-3xl 2xl:text-4xl font-bold text-[#3970F0] tracking-wider' >Execution</h1>
                <div className='w-full mt-14 flex flex-wrap gap-y-14'>
                    <div className='md:w-[46%] w-full'>
                        <h1 className='text-lg lg:text-2xl 2xl:text-3xl text-[#3970F0] tracking-wider font-semibold' > {executionHeading1 ? executionHeading1 : "Analytics"} </h1>
                        {executionPoint1Arr ? <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                            {executionPoint1Arr.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}

                        </ul> :
                            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                                <li>Shifted marketing budgets towards mobile app promotion to align with the mobile-centric user trend.</li>
                                <li>Designed appealing welcome offers to attract and convert new customers, resulting in improved conversion rates.</li>
                            </ul>
                        }
                    </div>

                    <div className='md:w-[46%] w-full'>
                        <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold text-[#3970F0] tracking-wider' >Paid Media</h1>
                        {executionPoint2Arr ? <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                            {executionPoint2Arr.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}

                        </ul> :
                            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                                <li>Shifted marketing budgets towards mobile app promotion to align with the mobile-centric user trend.</li>
                                <li>Designed appealing welcome offers to attract and convert new customers, resulting in improved conversion rates.</li>
                            </ul>
                        }

                    </div>
                    <div className='md:w-[46%] w-full'>
                        <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold text-[#3970F0] tracking-wider' >UI/UX Optimization</h1>
                        {executionPoint3Arr ? <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                            {executionPoint3Arr.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}

                        </ul> :
                            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-base 2xl:text-xl w-[90%]'>
                                <li>Conducted thorough analytics to identify user interaction weaknesses.</li>
                                <li>Redesigned the checkout process to increase order numbers and conversion rates.</li>
                            </ul>
                        }

                    </div>
                    <div className='md:w-[46%] w-full'>
                        <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold text-[#3970F0] tracking-wider'  > {executionHeading4 ? executionHeading4 : "Audience Segmentation & Targeting "} </h1>

                        {executionPoint4Arr ? <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal  text-base 2xl:text-xl w-[90%]'>
                            {executionPoint4Arr.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}

                        </ul> :
                            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-base 2xl:text-xl w-[90%]'>
                                <li>Identified distinct audience groups through focus group surveys and post-view conversion analytics.</li>
                                <li>Adjusted marketing efforts to target valuable audience segments, resulting in increased restaurant visits from financially stable customer bases.</li>
                            </ul>
                        }
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Execution
