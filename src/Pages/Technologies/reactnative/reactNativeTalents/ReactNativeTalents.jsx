import React from 'react'

const ReactNativeTalents = () => {
    const softDevWithNet = [{ title: "Code rules and guidelines", points: ["Adherence to the React Native coding standards and practices.", "Code split into short and focused units.","Descriptive names for all code variables.","In-code comments on what each function and method does.","Documented dependencies and general code functionality explanations.","Use of version control tools."] }, { title: "Unit testing", points: ["Unit tests are created before writing code and described in specifications.", "Helps verify code behavior in response to the input of standard, boundary, and incorrect value.","Helps check all code assumptions."] },{title:"Code review practice",points:["Ad hoc review, email pass-around review, code walkthrough, code inspection."]},{title:"Code quality metrics", points:["Maintainability index (MI), Cyclomatic Complexity (CC), Lines of Code."]}]
    return (
        <div className='w-[85vw] mx-[110px] md:w-[90vw] md:mx-[20px] pt-[60px] pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>How Our React Native Talents Ensure Code Quality </h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:text-[16px]'>
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

export default ReactNativeTalents