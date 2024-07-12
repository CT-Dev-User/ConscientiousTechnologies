import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Faq = () => {
    const faqData = [{ que: "Why should I choose CT for software engineering, consulting, and outsourcing?", answer: "Why should I choose CT for software engineering, consulting, and outsourcing?", ansImage: "" }, { que: "Why should I choose CT for software engineering, consulting, and outsourcing?", answer: "Why should I choose CT for software engineering, consulting, and outsourcing?", ansImage: "" }, { que: "Why should I choose CT for software engineering, consulting, and outsourcing?", answer: "Why should I choose CT for software engineering, consulting, and outsourcing?", ansImage: "" }, { que: "Why should I choose CT for software engineering, consulting, and outsourcing?", answer: "Why should I choose CT for software engineering, consulting, and outsourcing?", ansImage: "" }]

    const [homeFaqs, setHomeFaqs] = useState([]);

    const fetchHomeFaqs = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-home-faq");
            setHomeFaqs(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHomeFaqs();
    }, []);


    const [openQuestions, setOpenQuestions] = useState([]);

    const toggleQuestion = (index) => {
        setOpenQuestions((prevOpenQuestions) => {
            const newOpenQuestions = [...prevOpenQuestions];
            newOpenQuestions[index] = !newOpenQuestions[index];
            return newOpenQuestions;
        });
    };

    return (
        <div className='w-[100vw] h-[auto] bg-[white] pb-[30px] pt-[80px] box-border md:pb-[10px]'>
            <div className='w-[85%] mx-auto md:w-[95%] md:mx-auto'>
                <h1 className='text-3xl font-bold md:text-[18px]'>FAQs</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='faq-div w-[85%] mx-auto'>
                {
                    homeFaqs.map((items, index) => {
                        return (
                            <div className='que-ans-div w-[100%] mt-[20px] shadow-md md:shadow-none'>
                                <div className='w-[100%] h-[60px]  flex justify-between items-center px-[20px] md:px-[10px] md:h-[auto] md:text-[12px] py-[10px] md:gap-[20px]'>
                                    <p>{items.question}</p>

                                    <i class="fa fa-caret-down" aria-hidden="true"
                                        onClick={() => toggleQuestion(index)}
                                        style={{ display: !openQuestions[index] ? 'block' : 'none' }}
                                    ></i>
                                    <i class="fa fa-caret-up" aria-hidden="true"
                                        onClick={() => toggleQuestion(index)}
                                        style={{ display: openQuestions[index] ? 'block' : 'none' }}
                                    ></i>

                                </div>

                                {openQuestions[index] && (
                                    <div className={`answer ${openQuestions[index] ? 'open' : ''}`}>
                                        <div className='answer-inner w-[70%] md:text-[12px] md:w-[100%] md:flex flex-col justify-end items-end'>
                                            <p className='md:w-[100%]' dangerouslySetInnerHTML={{__html:items.answer.answerText}}/>
                                            <button
                                                className="relative overflow-hidden border border-[#ccc] px-[15px] py-[5px] w-[fit-content] text-[12px] group mt-[20px] md:bg-cyan-500">
                                                <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                                                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Our Approach{" "}<span className="font-bold">&rarr;</span></span>
                                            </button>
                                        </div>
                                        <div className='w-[250px] h-[170px] bg-[black] md:hidden'>
                                        <img src={items.answer && items.answer.answerImg} alt={items.question} className="w-[90%] h-[90%]" />
                                        </div>
                                    </div>

                                )}


                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Faq
