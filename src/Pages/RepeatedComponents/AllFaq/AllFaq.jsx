import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const AllFaq = ({ category, subCategory }) => {
  const [homeFaqs, setHomeFaqs] = useState([]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Fetch FAQs based on category and subcategory
  const fetchHomeFaqs = async (category, subCategory) => {
    try {
      const endpoint = category === "HomePage"
        ? "https://conscientious-technologies-backend.vercel.app/get-home-faq"
        : `https://conscientious-technologies-backend.vercel.app/get-faq-bycategorysubcategory/${category}/${subCategory}`;
      
      const response = await axios.get(endpoint);
      setHomeFaqs(category === "HomePage" ? response.data.getData : response.data.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  useEffect(() => {
    fetchHomeFaqs(category, subCategory);
  }, [category, subCategory]);

  // Toggle open/close state of the FAQ question
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className="lg:w-[85%] mx-auto w-[95%]">
        <h1 className="font-bold text-xl lg:text-3xl 2xl:text-[2.3rem]">FAQs</h1>
        <p className="lg:w-[85%] my-3 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. 
          Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. Nibh elementum eget. Integer amet, 
          consectetur adipiscing elit.
        </p>
      </div>

      <div className="faq-div lg:w-[85%] mx-auto w-[95%] text-black">
        {homeFaqs && homeFaqs.map((item, index) => (
          <div key={item._id} className="que-ans-div w-full mt-5 lg:shadow-md">
            <div
              className="w-full lg:h-16 flex justify-between items-center lg:px-5 px-3 text-base 2xl:text-xl py-[10px] cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <p>{item.question || "Why should I choose CT for software engineering, consulting, and outsourcing?"}</p>
              <h5>{openQuestionIndex === index ? <FaAngleUp /> : <FaAngleDown />}</h5>
            </div>

            {openQuestionIndex === index && (
              <div className="overflow-hidden transition-all duration-100 ease-in-out text-base text-zinc-500 flex gap-5 pb-4">
                <div className="answer-inner lg:px-7 px-3 h-auto text-sm lg:text-base py-3 font-normal w-full lg:w-3/5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.answer?.answerText || 
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex illo accusamus temporibus cupiditate ipsum nobis enim nulla officia iste.",
                    }}
                  ></p>
                  <button className="relative overflow-hidden border border-gray-300 px-4 py-1 mt-5 text-xs group">
                    <span className="absolute inset-0 bg-[#33B7D4] transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      Our Approach <span className="font-bold"> &rarr; </span>
                    </span>
                  </button>
                </div>
                
                {item.answer?.answerImg && (
                  <div className="w-56 h-32 hidden lg:block">
                    <img
                      src={item.answer.answerImg}
                      alt={item.question}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFaq;
