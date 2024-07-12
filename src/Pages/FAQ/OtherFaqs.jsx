import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OtherFaqs = () => {
    const navigate = useNavigate();
    const [homeFaqs, setHomeFaqs] = useState([]);
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [editPopupShow, setEditPopUpShow] = useState(false);
    const [addFAQ, setAddFAQ] = useState({ category: "", Subcategory: "", question: "", answer: { answerText: "", images: "" } });
    const [editHomeFAQ, seteditHomeFAQ] = useState({ category: "", question: "", answer: { answerText: "", answerImg: "" } });
    const [addselectedFile, setAddSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [faqAnswer, setFaqAnswer] = useState(null);
    const [answerPopUp, setAnswerPopUp] = useState(false);
    const [editId, setEditId] = useState(null);
    const addEditor = useRef(null);
    const editEditor = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = homeFaqs.slice(indexOfFirstItem, indexOfLastItem);

    const fetchOtherFaq = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-faq");
            const fetchData = response.data.getData;
            const filteredData = fetchData.filter(item =>
                item.category !== 'Technologies' &&
                item.category !== 'Services' &&
                item.category !== 'Industries' &&
                item.category !== 'Solutions'
            );
            setHomeFaqs(filteredData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchOtherFaq();
    }, []);

    const handleAddfileChange = (e) => {
        setAddSelectedFile(e.target.files[0]);
        setAddFAQ({ ...addFAQ, answer: { ...addFAQ.answer, answerImg: e.target.files[0] } });
    };

    const handleEditFileChange = (e) => {
        seteditHomeFAQ({ ...editHomeFAQ, images: e.target.files[0] });
        setEditSelectedFile(e.target.files[0]);
    };

    const addHomeFaqDataFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('category', addFAQ.category);
            formData.append('Subcategory', addFAQ.Subcategory);
            formData.append('question', addFAQ.question);
            formData.append('answerText', addFAQ.answer.answerText);
            formData.append('images', addFAQ.answer.answerImg);

            const response = await axios.post("http://localhost:8080/add-faq", formData);
            if (response.status === 200) {
                fetchOtherFaq();
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

            const response = await axios.put(`http://localhost:8080/update-faq/${editId}`, formData);
            if (response.status === 200) {
                setEditPopUpShow(false);
                seteditHomeFAQ({ question: "", answer: { answerText: "", answerImg: null } });
                fetchOtherFaq();
                Swal.fire(
                    'Saved!',
                    'Your changes have been saved.',
                    'success'
                );
            }

        } catch (error) {
            console.log(error);
            Swal.fire(
                'Error!',
                'Failed to save changes. Please try again later.',
                'error'
            );
        }
    };

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
                    const response = await axios.delete(`http://localhost:8080/delete-faq/${id}`);
                    if (response.status === 200) {
                        setEditId(null);
                        fetchOtherFaq();
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
                            <label htmlFor="title" className="block text-gray-700 font-bold">Category</label>
                            <input type="text" className="form-control" id="category" name="category" value={addFAQ.category} onChange={(e) => { setAddFAQ({ ...addFAQ, category: e.target.value }) }} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">SubCategory</label>
                            <input type="text" className="form-control" id="Subcategory" name="Subcategory" value={addFAQ.Subcategory} onChange={(e) => { setAddFAQ({ ...addFAQ, Subcategory: e.target.value }) }} />
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
                                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {addselectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700 mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
                                            <AiOutlineClose />
                                        </button>
                                        <img src={URL.createObjectURL(addselectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-800">
                    <Button onClick={addHomeFaqDataFunc} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Add Data
                    </Button>
                    <Button onClick={() => setAddPopUpShow(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Home FAQ Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Question</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={editHomeFAQ.question} onChange={(e) => seteditHomeFAQ({ ...editHomeFAQ, question: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Answer</label>
                            <JoditEditor
                                ref={editEditor}
                                value={editHomeFAQ.answer.answerText}
                                onChange={(value) => seteditHomeFAQ({ ...editHomeFAQ, answer: { ...editHomeFAQ.answer, answerText: value } })}
                            />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {editSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700 mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
                                            <AiOutlineClose />
                                        </button>
                                        <img src={URL.createObjectURL(editSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-800">
                    <Button onClick={editHomeFAQFunc} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Edit Data
                    </Button>
                    <Button onClick={() => setEditPopUpShow(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="p-3">Category</th>
                        <th className="p-3">SubCategory</th>
                        <th className="p-3">Question</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index} className="bg-gray-100 border-b border-gray-200">
                            <td className="p-3 text-center">{item.category}</td>
                            <td className="p-3 text-center">{item.Subcategory}</td>
                            <td className="p-3 text-center">{item.question}</td>
                            <td className="p-3 text-center flex justify-center gap-x-2">
                                <button className="text-blue-500 hover:text-blue-700" onClick={() => { setEditId(item._id); seteditHomeFAQ(item); setEditPopUpShow(true); }}>
                                    Edit
                                </button>
                                <button className="text-red-500 hover:text-red-700" onClick={() => deleteHomeFAQData(item._id)}>
                                    Delete
                                </button>
                                <button className="text-green-500 hover:text-green-700" onClick={() => { setFaqAnswer(item.answer.answerText); setAnswerPopUp(true); }}>
                                    <FaEye />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ul className="flex justify-center gap-[20px] mt-[90px]">
                <li>
                    <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Previous</button>
                </li>
                <li>
                    <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(homeFaqs.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
                </li>
            </ul>
            <Modal show={answerPopUp} onHide={() => setAnswerPopUp(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Answer</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: faqAnswer }}></p>
                </Modal.Body>
                <Modal.Footer className="bg-gray-800">
                    <Button onClick={() => setAnswerPopUp(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default OtherFaqs;
