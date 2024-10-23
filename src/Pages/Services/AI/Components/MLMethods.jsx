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

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='2xl:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Machine Learning Methods We Rely On</h1>
            <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>Empowering Innovations: Leveraging state-of-the-art machine learning techniques, we at CT harness the power of data-driven insights to drive transformative solutions and unlock unprecedented opportunities for our clients.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {ourSoftDevOption.map((item, index) => (
                <div key={index} className='lg:w-[46%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default MLMethods;
