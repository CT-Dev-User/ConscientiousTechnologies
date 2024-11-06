import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contextAPI/UserContext";

const Spinner = () => (
  <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const IndustryFAQ = () => {
  const router = useNavigate();
  const [industries, setIndustries] = useState([]);
  const [userauth] = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userauth || !userauth.token) {
      router("/"); // Redirect to login page if not authenticated
    } else {
      fetchIndustry();
      fetchHomeFaqs();
    }
  }, [userauth, router]);
  const [homeFaqs, setHomeFaqs] = useState([]);
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [addHomeFAQ, setAddHomeFAQ] = useState({
    category: "Industry",
    Subcategory: "",
    question: "",
    answer: { answerText: "", answerImg: "" },
  });
  const [editHomeFAQ, seteditHomeFAQ] = useState({
    category: "Industry",
    Subcategory: "",
    question: "",
    answer: { answerText: "", answerImg: "" },
  });
  const [addselectedFile, setAddSelectedFile] = useState(null);
  const [editSelectedFile, setEditSelectedFile] = useState(null);
  const [faqAnswer, setFaqAnswer] = useState(null);
  const [answerPopUp, setAnswerPopUp] = useState(false);
  const [editId, setEditId] = useState(null);
  const addEditor = useRef(null);
  const editEditor = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [filterFaq, setfilterFaq] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterFaq
    ? filterFaq.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const handleAddfileChange = (e) => {
    setAddSelectedFile(e.target.files[0]);
    setAddHomeFAQ({
      ...addHomeFAQ,
      answer: { ...addHomeFAQ.answer, answerImg: e.target.files[0] },
    });
  };

  const handleEditFileChange = (e) => {
    seteditHomeFAQ({
      ...editHomeFAQ,
      answer: { ...editHomeFAQ.answer, answerImg: e.target.files[0] },
    });
    setEditSelectedFile(e.target.files[0]);
  };

  const addHomeFaqDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append("category", addHomeFAQ.category);
      formData.append("Subcategory", addHomeFAQ.Subcategory);
      formData.append("question", addHomeFAQ.question);
      formData.append("answerText", addHomeFAQ.answer.answerText);
      formData.append("images", addHomeFAQ.answer.answerImg);

      const response = await axios.post(
        "https://conscientious-technologies-backend.vercel.app/add-faq",
        formData
      );

      if (response.status === 200) {
        Swal.fire("Added!", "Your data has been added.", "success");
        fetchHomeFaqs();
        setAddPopUpShow(false);
        setAddSelectedFile(null);
        setAddHomeFAQ({
          category: "Industry",
          Subcategory: "",
          question: "",
          answer: { answerText: "", answerImg: "" },
        }); // Reset form fields
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editHomeFAQFunc = async () => {
    try {
      const formData = new FormData();
      formData.append("category", editHomeFAQ.category);
      formData.append("Subcategory", editHomeFAQ.Subcategory);
      formData.append("question", editHomeFAQ.question);
      formData.append("answerText", editHomeFAQ.answer.answerText);
      formData.append("images", editHomeFAQ.answer.answerImg);

      const response = await axios.put(
        `https://conscientious-technologies-backend.vercel.app/update-faq/${editId}`,
        formData
      );
      // console.log(response.status);
      if (response.status === 200) {
        Swal.fire("Saved!", "Your changes have been saved.", "success");
        fetchHomeFaqs();
        seteditHomeFAQ({
          category: "Industry",
          Subcategory: "",
          question: "",
          answer: { answerText: "", answerImg: "" },
        });
        setEditPopUpShow(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire(
        "Error!",
        "Failed to save changes. Please try again later.",
        "error"
      );
    }
  };

  const fetchHomeFaqs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://conscientious-technologies-backend.vercel.app/get-faq-bycategory/Industry"
      );
      setHomeFaqs(response.data.data);
      console.log(response.data.data);
      setfilterFaq(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching:");
      setLoading(false);
    }
  };

  const fetchIndustry = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://conscientious-technologies-backend.vercel.app/get-latest-industry-data"
      );
      setIndustries(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching:");
      setLoading(false);
    }
  };
  const deleteHomeFAQData = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://conscientious-technologies-backend.vercel.app/delete-faq/${id}`
          );
          if (response.status === 200) {
            setEditId(null);
            fetchHomeFaqs();
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Error!",
            "Failed to delete data. Please try again later.",
            "error"
          );
        }
      }
    });
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="w-full bg-gray-300 h-full mx-auto p-4">
          <div className="flex justify-between mb-4 mr-3">
            <h1 className="text-2xl font-bold">FAQ's for Industries</h1>

            <select
              name=""
              onChange={(e) => {
                if (e.target.value === "All Industries") {
                  setfilterFaq(homeFaqs); // Show all FAQs
                } else {
                  setfilterFaq(
                    homeFaqs.filter(
                      (item) => item.Subcategory === e.target.value
                    )
                  );
                }
              }}
              className="p-2 border rounded"
              id=""
            >
              <option value="All Industries">All Industries</option>
              {homeFaqs.map((industry, index) => (
                <option key={index} value={industry.Subcategory}>
                  {industry.Subcategory}
                </option>
              ))}
            </select>
            <Button
              onClick={() => setAddPopUpShow(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add FAQ's
            </Button>
          </div>

          <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Add Home FAQ Data</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <form className="mx-auto max-w-lg">
                <fieldset className="mb-4">
                  <label className="block text-gray-700">industry Name</label>
                  <select
                    name=""
                    value={addHomeFAQ.Subcategory}
                    onChange={(e) =>
                      setAddHomeFAQ({
                        ...addHomeFAQ,
                        Subcategory: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    id=""
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry, index) => (
                      <option key={index} value={industry.industryName}>
                        {industry.industryName}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <fieldset className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold"
                  >
                    Question
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                    onChange={(e) =>
                      setAddHomeFAQ({ ...addHomeFAQ, question: e.target.value })
                    }
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label
                    htmlFor="desc"
                    className="block text-gray-700 font-bold"
                  >
                    Answer
                  </label>
                  <JoditEditor
                    ref={addEditor}
                    value={addHomeFAQ.answer.answerText}
                    onChange={(value) =>
                      setAddHomeFAQ({
                        ...addHomeFAQ,
                        answer: { ...addHomeFAQ.answer, answerText: value },
                      })
                    }
                  />
                </fieldset>

                <fieldset className="mb-4">
                  <label
                    htmlFor="ServiceHomePageimage"
                    className="block font-bold"
                  >
                    Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="ServiceHomePageimage"
                      id="ServiceHomePageimage"
                      className="form-input block w-full rounded-md overflow-hidden file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      aria-describedby="file-upload-label"
                      onChange={handleAddfileChange}
                    />
                    {addselectedFile && (
                      <div className="ml-2 mt-4">
                        <button
                          className="text-red-500 hover:text-red-700 mt-1 ms-[110px] "
                          onClick={() => setAddSelectedFile(null)}
                        >
                          <AiOutlineClose />
                        </button>
                        <img
                          src={URL.createObjectURL(addselectedFile)}
                          alt="Selected File"
                          className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2"
                        />
                        <p className="text-gray-700">{addselectedFile.name}</p>
                      </div>
                    )}
                  </div>
                </fieldset>
              </form>
            </Modal.Body>
            <Modal.Footer className="bg-gray-100">
              <Button
                variant="secondary"
                onClick={() => {
                  setAddPopUpShow(false);
                }}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setAddPopUpShow(false);
                  addHomeFaqDataFunc();
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Edit FAQ's</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <form className="mx-auto max-w-lg">
                <fieldset className="mb-4">
                  <label className="block text-gray-700">industry Name</label>
                  <select
                    name=""
                    value={editHomeFAQ.Subcategory}
                    onChange={(e) =>
                      seteditHomeFAQ({
                        ...editHomeFAQ,
                        Subcategory: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    id=""
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry, index) => (
                      <option key={index} value={industry.industryName}>
                        {industry.industryName}
                      </option>
                    ))}
                  </select>
                </fieldset>
                <fieldset className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-input mt-1 block w-full 
                            rounded-md border border-gray-300 focus:border-blue-500"
                    value={editHomeFAQ.question}
                    onChange={(e) =>
                      seteditHomeFAQ({
                        ...editHomeFAQ,
                        question: e.target.value,
                      })
                    }
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label
                    htmlFor="desc"
                    className="block text-gray-700 font-bold"
                  >
                    Description
                  </label>
                  <JoditEditor
                    ref={editEditor}
                    value={editHomeFAQ.answer?.answerText || ""} // Use optional chaining to avoid errors if editHomeFAQ.answer is null or undefined
                    onChange={(value) =>
                      seteditHomeFAQ({
                        ...editHomeFAQ,
                        answer: {
                          ...(editHomeFAQ.answer || {}), // Ensure that editHomeFAQ.answer is an object before spreading its properties
                          answerText: value,
                        },
                      })
                    }
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label
                    htmlFor="ServiceHomePageimage"
                    className="block font-bold"
                  >
                    Image
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="ServiceHomePageimage"
                      id="ServiceHomePageimage"
                      className="form-input block w-full rounded-md overflow-hidden file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      aria-describedby="file-upload-label"
                      onChange={handleEditFileChange}
                    />
                    {editSelectedFile && (
                      <div className="ml-2 mt-4">
                        <button
                          className="text-red-500 hover:text-red-700  mt-1 ms-[110px] "
                          onClick={() => setEditSelectedFile(null)}
                        >
                          <AiOutlineClose />
                        </button>
                        <img
                          src={URL.createObjectURL(editSelectedFile)}
                          alt="Selected File"
                          className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2"
                        />
                        <p className="text-gray-700">{editSelectedFile.name}</p>
                      </div>
                    )}
                  </div>
                </fieldset>
              </form>
            </Modal.Body>
            <Modal.Footer className="bg-gray-100">
              <Button
                variant="secondary"
                onClick={() => {
                  setEditPopUpShow(false);
                }}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  editHomeFAQFunc();
                  setEditPopUpShow(false);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="lg"
            show={answerPopUp}
            onHide={() => setAnswerPopUp(false)}
          >
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Edit Hero Section Data</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <div dangerouslySetInnerHTML={{ __html: faqAnswer }} />
            </Modal.Body>
            <Modal.Footer className="bg-gray-100">
              <Button
                variant="secondary"
                onClick={() => setAnswerPopUp(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <table className="w-full border-collapse border bg-white">
            <thead className="bg-gray-800 text-white">
              <tr className="border-b">
                <th className="border-r p-2">Sr. No</th>
                <th className="border-r p-2">Subcategory / Industry</th>
                <th className="border-r p-2">Question</th>
                <th className="border-r p-2">Answer</th>
                <th className="border-r p-2">Answer Image</th>
                <th className="border-r p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems &&
                currentItems.map((faq, i) => (
                  <tr key={faq._id} className="border-b">
                    <td className="border-r p-2">{i + indexOfFirstItem + 1}</td>
                    <td className="border-r p-2">{faq.Subcategory}</td>
                    <td className="border-r p-2">{faq.question}</td>
                    <td className="border-r p-2">
                      <FaEye
                        onClick={() => {
                          setFaqAnswer(faq.answer && faq.answer.answerText);
                          setAnswerPopUp(true);
                        }}
                        className="cursor-pointer"
                      />
                    </td>
                    <td className="border-r p-2">
                      <img
                        src={faq.answer && faq.answer.answerImg}
                        alt={faq.question}
                        className="w-[60px] h-[60px]"
                      />
                    </td>
                    <td className="border-r flex items-center justify-start gap-[20px] p-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          setEditPopUpShow(true);
                          setEditId(faq._id);
                          seteditHomeFAQ({
                            category: "Industry",
                            Subcategory: faq.Subcategory,
                            question: faq.question,
                            answer: {
                              answerText: faq.answer.answerText,
                              answerImg: null,
                            },
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="hover:bg-red-700 h-[37px] bg-[red] py-2 px-4 rounded text-white shadow-md"
                        onClick={() => deleteHomeFAQData(faq._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* Pagination */}
          <ul className="flex justify-center mt-5">
            <li>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                }
                className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
              >
                Previous
              </button>
            </li>
            <li className="py-1 px-2">{currentPage}</li>
            <li>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(
                      prevPage + 1,
                      Math.ceil(homeFaqs.length / itemsPerPage)
                    )
                  )
                }
                className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default IndustryFAQ;
