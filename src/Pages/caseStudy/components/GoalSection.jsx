import React from 'react'

const GoalSection = ({ goals }) => {
    const goalArr = goals ? goals.split(",").map(goal => goal.trim()) : []
    return (
        <div className='w-full py-14'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='text-3xl font-bold'>Goal</h1>
                {goalArr.map((goal, index) => (
                    <li key={index} className='list-none flex gap-2 mt-5 w-[95%] mx-auto'>
                        <div className='w-[23px] h-[23px] rounded bg-[#E89900] mt-2 flex justify-center items-center text-white font-semibold '>  &#10003; </div>
                       <span className='text-xl mt-1 font-semibold text-[#272727]'>{goal} </span> 
                    </li>
                ))}
                <div>

                </div>
            </div>


        </div>
    )
}

export default GoalSection
