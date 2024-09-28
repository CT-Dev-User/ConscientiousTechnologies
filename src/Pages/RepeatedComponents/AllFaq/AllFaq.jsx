import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleUp, FaAngleDown } from "react-icons/fa"; // Ensure you're using the correct imports for the icons.

const AllFaq = ({ category, subCategory }) => {
  const [homeFaqs, setHomeFaqs] = useState([]);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null); // Track a single open question

  // Fetch FAQs based on category and subcategory
  const fetchHomeFaqs = async () => {
    if (category === "All") {
      try {
        const response = await axios.get("http://localhost:8080/get-faq");
        setHomeFaqs(response.data.getData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.get(
          `http://localhost:8080/get-faq-bycategorysubcategory/${category}/${subCategory}`
        );
        setHomeFaqs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchHomeFaqs();
  }, [category, subCategory]); // Update if category or subCategory changes

  // Toggle open/close state of the FAQ question
  const toggleQuestion = (index) => {
    // If the clicked question is already open, close it. Otherwise, set it as the open question.
    setOpenQuestionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-screen h-[auto] bg-[white] pb-[30px] pt-[80px] box-border md:pb-[10px]">
      <div className="lg:w-[85%] lg:mx-auto w-[90%] mx-[20px]">
        <h1 className="font-bold lg:text-3xl text-xl 2xl:text-[2.3rem]">
          FAQs
        </h1>
        <p className="w-[70%] my-3 md:w-[100%] lg:text-lg text-sm 2xl:text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut
          nullam ipsum at enim. Ut imperdiet eu sodales eros. Nibh elementum
          eget. Integer amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="faq-div w-[85%] mx-auto">
        {homeFaqs.map((items, index) => (
          <div
            className="que-ans-div w-[100%] mt-[20px] shadow-md md:shadow-none"
            key={index}
          >
            <div
              className="w-[100%] lg:h-[60px] flex justify-between items-center lg:px-[20px] px-[10px] h-[auto] lg:text-xl text-base 2xl:text-[1.3rem] py-[10px] md:gap-[20px] font-normal"
              onClick={() => toggleQuestion(index)}
            >
              <p>
                {items.question ||
                  "Why should I choose CT for software engineering, consulting, and outsourcing?"}
              </p>
              <h5>
                {openQuestionIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </h5>
            </div>

            {openQuestionIndex === index && (
              <div className="overflow-hidden transition-all duration-100 ease-in-out md:text-[15px] text-zinc-500 flex gap-5">
                <div className="answer-inner lg:px-[30px] px-[10px] h-[auto] lg:text-xl text-base 2xl:text-base py-[10px] font-normal w-[100%] lg:w-[60%] lg:flex flex-col">
                  <p
                    className="w-[100%]"
                    dangerouslySetInnerHTML={{
                      __html:
                        items.answer?.answerText ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex illo accusamus temporibus cupiditate ipsum nobis enim nulla officia iste.",
                    }}
                  ></p>
                  <button className="relative overflow-hidden border border-[#ccc] px-[15px] py-[5px] w-[fit-content] text-[13px] group mt-[20px]">
                    <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                      Our Approach <span className="font-bold"> &rarr; </span>
                    </span>
                  </button>
                </div>
                {items.answer?.answerImg && (
                  <div className="w-[250px] h-[170px] lg:block bg-[black] hidden">
                    <img
                      src={items.answer.answerImg}
                      alt={items.question}
                      className="w-full h-full"
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
