import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const AllFAQ = () => {
    const navigate = useNavigate()
    const { faqCategory1 } = useParams();
    const [homeFaqs, setHomeFaqs] = useState([]);
    const [FaqsByCategory, setFaqsByCategory] = useState([]);
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [editPopupShow, setEditPopUpShow] = useState(false);
    const [addFAQ, setAddFAQ] = useState({ category: "", Subcategory: "", question: "", answer: { answerText: "", images: "" } });
    const [editHomeFAQ, seteditHomeFAQ] = useState({ category: "", question: "", answer: { answerText: "", answerImg: "" } });
    const [addselectedFile, setAddSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [faqAnswer, setFaqAnswer] = useState(null)
    const [answerPopUp, setAnswerPopUp] = useState(false)
    const [editId, setEditId] = useState(null);
    const addEditor = useRef(null);
    const editEditor = useRef(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [dropdown, setDropdown] = useState([])
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = FaqsByCategory.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const SubCategoryDropdown = async (faqCategory1) => {
        if (faqCategory1 === "Technologies") {

        } else if (faqCategory1 === "Solutions") {
            const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-solution-we-offer-data')
            setDropdown(response.data.getData)
        } else if (faqCategory1 === "Services") {
            const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-service-data')
            setDropdown(response.data.getData)
        } else if (faqCategory1 === "Industries") {
            const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-industries-data')
            setDropdown(response.data.getData)
        }

    }
    useEffect(() => {
        SubCategoryDropdown(faqCategory1);
    }, [faqCategory1])

    const fetchHomeFaqs = async () => {
        try {
            const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-faq");
            setHomeFaqs(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHomeFaqs();
    }, []);


    const fetchFaqsByCategory = async (faqCategory1) => {
        try {
            const response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-faq-bycategory/${faqCategory1}`);
            setFaqsByCategory(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFaqsByCategory(faqCategory1);
    }, [faqCategory1]);

    const handleAddfileChange = (e) => {
        setAddSelectedFile(e.target.files[0]);
        setAddFAQ({ ...addFAQ, answer: { ...addFAQ.answer, answerImg: e.target.files[0] } });
    };

    const handleEditFileChange = (e) => {
        seteditHomeFAQ({ ...editHomeFAQ, images: e.target.files[0] });
        setEditSelectedFile(e.target.files[0])
    }

    const addHomeFaqDataFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('category', faqCategory1);
            formData.append('Subcategory', addFAQ.Subcategory);
            formData.append('question', addFAQ.question);
            formData.append('answerText', addFAQ.answer.answerText);
            formData.append('images', addFAQ.answer.answerImg);

            const response = await axios.post("https://conscientious-technologies-backend.vercel.app/add-faq", formData);

            if (response.status === 200) {
                fetchFaqsByCategory()
                setAddPopUpShow(false);
                setAddSelectedFile(null);
                setAddFAQ({ question: "", answer: { answerText: "", answerImg: null } }); // Reset form fields
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editHomeFAQFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('question', editHomeFAQ.question);
            formData.append('answerText', editHomeFAQ.answer.answerText);
            formData.append('images', editHomeFAQ.answer.answerImg);

            const response = await axios.put(`https://conscientious-technologies-backend.vercel.app/update-faq/${editId}`, formData)
            console.log(response.status)
            if (response.status === 200) {
                setEditPopUpShow(false);
                seteditHomeFAQ({ question: "", answer: { answerText: "", answerImg: null } })
                fetchFaqsByCategory()
                Swal.fire(
                    'Saved!',
                    'Your changes have been saved.',
                    'success'
                );
            }

        } catch (error) {
            console.log(error)
            Swal.fire(
                'Error!',
                'Failed to save changes. Please try again later.',
                'error'
            );
        }
    }

    const deleteHomeFAQData = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this data!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-faq/${id}`);
                    if (response.status === 200) {
                        setEditId(null);
                        fetchFaqsByCategory()
                        Swal.fire(
                            'Deleted!',
                            'Your data has been deleted.',
                            'success'
                        );
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire(
                        'Error!',
                        'Failed to delete data. Please try again later.',
                        'error'
                    );
                }
            }
        });
    };


    return (
        <div className='w-full bg-gray-300 h-full mx-auto p-4'>
            <div className="flex justify-end mb-5 mr-3 gap-x-3">
                <Button onClick={() => navigate('/conscientious-faq-category')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add FAQ's</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Home FAQ Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">SubCategory</label>
                            {dropdown.length !== 0 ?
                                <select className="mb-4" onChange={(e) => { setAddFAQ({ ...addFAQ, Subcategory: e.target.value }) }}>
                                    <option>--select {faqCategory1}--</option>
                                    {dropdown.map((item, index) => {
                                        return (
                                            <option key={index} value={item.title}>
                                                {item.title}
                                            </option>
                                        )
                                    })}
                                </select> :
                                <input type="text" className="form-control" id="Subcategory" name="Subcategory" value={addFAQ.Subcategory} onChange={(e) => { setAddFAQ({ ...addFAQ, Subcategory: e.target.value }) }} />
                            }
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Question</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddFAQ({ ...addFAQ, question: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Answer</label>
                            <JoditEditor
                                ref={addEditor}
                                value={addFAQ.answer.answerText}
                                onChange={(value) => setAddFAQ({ ...addFAQ, answer: { ...addFAQ.answer, answerText: value } })}
                            />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {addselectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700 mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
                                            <AiOutlineClose />
                                        </button>
                                        <img src={URL.createObjectURL(addselectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                                        <p className="text-gray-700">{addselectedFile.name}</p>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
                    <Button variant="primary" onClick={() => { setAddPopUpShow(false); addHomeFaqDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit FAQ's</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">



                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Questionn</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => seteditHomeFAQ({ ...editHomeFAQ, question: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Answer</label>
                            <JoditEditor
                                ref={editEditor}
                                value={editHomeFAQ.answer?.answerText || ''} // Use optional chaining to avoid errors if editHomeFAQ.answer is null or undefined
                                onChange={(value) => seteditHomeFAQ({
                                    ...editHomeFAQ,
                                    answer: {
                                        ...(editHomeFAQ.answer || {}), // Ensure that editHomeFAQ.answer is an object before spreading its properties
                                        answerText: value
                                    }
                                })}
                            />


                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {editSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => seteditHomeFAQ(null)}>
                                            < AiOutlineClose />
                                        </button>
                                        <img src={URL.createObjectURL(editSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                                        <p className="text-gray-700">{editSelectedFile.name}</p>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => { setEditPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
                    <Button variant="primary" onClick={() => { setEditPopUpShow(false); editHomeFAQFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={answerPopUp} onHide={() => setAnswerPopUp(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Hero Section Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <div dangerouslySetInnerHTML={{ __html: faqAnswer }} />

                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => setAnswerPopUp(false)} className="text-gray-700 hover:text-gray-900">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        {/* <th className="border p-2">Faq Category</th> */}
                        <th className="border p-2">Faq SubCategory</th>
                        <th className="border p-2">Questions</th>
                        <th className="border p-2">Answer</th>
                        <th className="border p-2">Answer Image</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((faq, i) => (
                        <tr key={faq._id}>
                            <td className="border p-2">{i + indexOfFirstItem + 1}</td>
                            <td className="border p-2">{faq.Subcategory}</td>
                            <td className="border p-2">{faq.question}</td>
                            {/* <td className="border p-2">{faq.question}</td> */}
                            <td className="border p-2">
                                <FaEye onClick={() => { setFaqAnswer(faq.answer && faq.answer.answerText); setAnswerPopUp(true); }} className='cursor-pointer' />
                            </td>
                            <td className="border p-2">
                                <img src={faq.answer && faq.answer.answerImg} alt={faq.question} className="w-[60px] h-[60px]" />
                            </td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditPopUpShow(true); setEditId(faq._id) }}>Edit</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => deleteHomeFAQData(faq._id)}>Delete</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[green] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => navigate(`/conscientious-faq/${faq.Subcategory}`)}>SubPages</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
            {/* Pagination */}
            <ul className="flex justify-center mt-[90px]">
                <li>
                    <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Previous</button>
                </li>
                {[...Array(Math.ceil(homeFaqs.length / itemsPerPage)).keys()].map(number => (
                    <li key={number} className="mx-1">
                        <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
                    </li>
                ))}
                <li>
                    <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(homeFaqs.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
                </li>
            </ul>
        </div>
    );
};

export default AllFAQ;
