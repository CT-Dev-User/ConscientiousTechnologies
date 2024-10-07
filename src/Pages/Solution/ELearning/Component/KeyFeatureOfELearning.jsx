import React from 'react'

const KeyFeatureOfELearning = () => {
    const KeyFeatureOfELearningArr = [{
        title: "Learning content development and management", desc: (
            <ul>
                <li className='list-disc ms-5'>Multiple content types (e.g., text, images, video, audio, AR/VR).</li>
                <li className='list-disc ms-5'>Built-in content authoring (e.g., eLearning course development).
                </li>
                <li className='list-disc ms-5'>Learner-generated, third-party, and corporate content aggregation.
                </li>
                <li className='list-disc ms-5'>Reusable content and templates.
                </li>
                <li className='list-disc ms-5'>Content tagging and intelligent search.</li>

            </ul>
        )
    }, {
        title: "Asset maintenance management", desc: (
            <ul>

                <li className='list-disc ms-5'>Support of various types of learning (instructor-led online learning, blended learning, microlearning, self-paced learning, and more).
                </li>
                <li className='list-disc ms-5'>Automated enrollment to courses based on job roles, required skills, learning history, etc.
                </li>
                <li className='list-disc ms-5'>Learning event scheduling (e.g., trainings, workshops, exams)</li>
                <li className='list-disc ms-5'>Automated reminders and notifications (e.g., new courses, deadlines).
                </li>
            </ul>
        )
    }, {
        title: "Social features", desc: (
            <ul>
                <li className='list-disc ms-5'>Learners’ profile pages.
                </li>
                <li className='list-disc ms-5'>Learning communities.</li>
                <li className='list-disc ms-5'>Discussion boards, chats and forums for learners.</li>
                <li className='list-disc ms-5'>Interactions with content via likes, shares, comments.</li>
                <li className='list-disc ms-5'>Gamification (scores, badges, leaderboards, levels, rewards).</li>
            </ul>
        )
    }, {
        title: "Social features", desc: (
            <ul>
                <li className='list-disc ms-5'>Learners’ profile pages.
                </li>
                <li className='list-disc ms-5'>Learning communities.</li>
                <li className='list-disc ms-5'>Discussion boards, chats and forums for learners.</li>
                <li className='list-disc ms-5'>Interactions with content via likes, shares, comments.</li>
                <li className='list-disc ms-5'>Gamification (scores, badges, leaderboards, levels, rewards).</li>
            </ul>
        )
    }
    ]
    return (

        
        <div className='w-full mt-16 mb-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Key Features of eLearning Software We Deliver</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
            </div>
            {/* <div className='lg:w-[85%] mx-auto w-[95%]'> */}
                <div className='lg:w-[85%] mx-auto flex flex-wrap gap-7 mt-12 w-[95%]'>
                    {KeyFeatureOfELearningArr.map((item, index) => (
                        <div key={index} className='md:w-[48%] lg:border lg:border-gray-300 p-3 h-auto py-5'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            {/* </div> */}
        </div>

    )
}

export default KeyFeatureOfELearning
