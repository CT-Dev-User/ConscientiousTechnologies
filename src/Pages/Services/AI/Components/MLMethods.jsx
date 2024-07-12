import React from 'react';

const MLMethods = () => {
    const ourSoftDevOption = [
        {
            title: "Non-neural-network machine learning",
            desc:
                (
                    <ul>
                        <li className='list-disc ms-5'>Supervised learning algorithms, such as decision trees, linear regression, logistic regression, support vector machines.</li>
                        <li className='list-disc ms-5'>Unsupervised learning algorithms: K-means clustering, hierarchical clustering, etc.</li>
                        <li className='list-disc ms-5'>Reinforcement learning methods, including Q-learning, SARSA, temporal differences method.</li>
                    </ul>
                )
        },
        {
            title: "Full-cycle product development",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Convolutional and recurrent neural networks (including LSTM and GRU)</li>
                    <li className='list-disc ms-5'>Autoencoders (VAE, DAE, SAE, etc.).</li>
                    <li className='list-disc ms-5'>Generative adversarial networks (GANs)</li>
                    <li className='list-disc ms-5'>Deep Q-Networks (DQNs)</li>
                    <li className='list-disc ms-5'>Feed-forward neural networks, including Bayesian deep learning</li>
                </ul>
            )
        }
    ];

    return (
        <div className="w-full pt-[20px] pb-[30px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Machine Learning Methods We Rely On</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Empowering Innovations: Leveraging state-of-the-art machine learning techniques, we at CT harness the power of data-driven insights to drive transformative solutions and unlock unprecedented opportunities for our clients.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MLMethods;
