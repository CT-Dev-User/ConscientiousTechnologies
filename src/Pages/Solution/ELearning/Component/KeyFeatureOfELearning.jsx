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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Key Features of eLearning Software We Deliver</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves </p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {KeyFeatureOfELearningArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default KeyFeatureOfELearning
