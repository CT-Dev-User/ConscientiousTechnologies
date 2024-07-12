import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const AllCaseStudies = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [CSByCategory, setCSByCategory] = useState([]);
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [editPopupShow, setEditPopUpShow] = useState(false);
    const [addCS, setAddCS] = useState({ Subcategory: "", title: "", desc: "", coreTech: "", caseStudyImage: "" });
    const [editCS, setEditCS] = useState({ category: "", Subcategory: "", title: "", desc: "", coreTech: "", caseStudyImage: "" });
    const [addSelectedFile, setAddSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [descPopUp, setDescPopUp] = useState(false);
    const [showDesc, setShowDesc] = useState(null);
    const [editId, setEditId] = useState(null);
    const addEditor = useRef(null);
    const editEditor = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [dropdown, setDropdown] = useState([]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CSByCategory.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const SubCategoryDropdown = async () => {
        if (category === "Technologies") {
            // Handle Technologies category
        } else if (category === "Solutions") {
            const response = await axios.get('http://localhost:8080/get-solution-we-offer-data');
            setDropdown(response.data.getData);
        } else if (category === "Services") {
            const response = await axios.get('http://localhost:8080/get-service-data');
            setDropdown(response.data.getData);
        } else if (category === "Industries") {
            const response = await axios.get('http://localhost:8080/get-industries-data');
            setDropdown(response.data.getData);
        }
    };

    useEffect(() => {
        SubCategoryDropdown();
    }, []);

    const fetchCSByCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-case-study-bycategory/${category}`);
            setCSByCategory(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCSByCategory();
    }, []);

    const handleAddFileChange = (e) => {
        setAddSelectedFile(e.target.files[0]);
        setAddCS({ ...addCS, caseStudyImage: e.target.files[0] });
    };

    const handleEditFileChange = (e) => {
        setEditCS({ ...editCS, caseStudyImage: e.target.files[0] });
        setEditSelectedFile(e.target.files[0]);
    };

    const removeAddSelectedFile = () => {
        setAddSelectedFile(null);
        setAddCS({ ...addCS, caseStudyImage: "" });
    };

    const removeEditSelectedFile = () => {
        setEditSelectedFile(null);
        setEditCS({ ...editCS, caseStudyImage: "" });
    };

    const addHomeCSDataFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('category', category);
            formData.append('Subcategory', addCS.Subcategory);
            formData.append('title', addCS.title);
            formData.append('desc', addCS.desc);
            formData.append('coreTech', addCS.coreTech);
            formData.append('images', addCS.caseStudyImage);

            const response = await axios.post("http://localhost:8080/add-case-study", formData);

            if (response.status === 200) {
                fetchCSByCategory();
                setAddPopUpShow(false);
                setAddSelectedFile(null);
                setAddCS({ Subcategory: "", title: "", desc: "", coreTech: "", caseStudyImage: "" }); // Reset form fields
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editCSFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('category', category);
            formData.append('Subcategory', editCS.Subcategory);
            formData.append('title', editCS.title);
            formData.append('desc', editCS.desc);
            formData.append('coreTech', editCS.coreTech);
            formData.append('images', editCS.caseStudyImage);
            const response = await axios.put(`http://localhost:8080/update-case-study/${editId}`, formData);
            if (response.status === 200) {
                setEditPopUpShow(false);
                setEditCS({ Subcategory: "", title: "", desc: "", coreTech: "", caseStudyImage: "" }); // Reset form fields
                setEditSelectedFile(null);
                fetchCSByCategory();
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

    const deleteCSData = async (id) => {
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
                    const response = await axios.delete(`http://localhost:8080/delete-case-study/${id}`);
                    if (response.status === 200) {
                        setEditId(null);
                        fetchCSByCategory();
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
                <Button onClick={() => navigate('/conscientious-case-studies-category')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add FAQ's</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Case Studies</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="SubCategory" className="block text-gray-700 font-bold">SubCategory</label>
                            {dropdown ? (
                                <select className="mb-4" id='SubCategory' onChange={(e) => { setAddCS({ ...addCS, Subcategory: e.target.value }) }}>
                                    <option>--select {category}--</option>
                                    {dropdown.map((item, index) => {
                                        return (
                                            <option key={index} value={item.title}>
                                                {item.title}
                                            </option>
                                        )
                                    })}
                                </select>
                            ) : (
                                <input type="text" name="SubCategory" id="SubCategory" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddCS({ ...addCS, Subcategory: e.target.value }) }} />
                            )}
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddCS({ ...addCS, title: e.target.value }) }} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>
                            <JoditEditor
                                ref={addEditor}
                                value={addCS.desc}
                                onChange={newContent => setAddCS({ ...addCS, desc: newContent })}
                            />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="coreTech" className="block text-gray-700 font-bold">Core Technologies</label>
                            <input type="text" name="coreTech" id="coreTech" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddCS({ ...addCS, coreTech: e.target.value }) }} />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="file" className="block text-gray-700 font-bold">Image</label>
                            <input type="file" name="caseStudyImage" id="file" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={handleAddFileChange} />
                            {addSelectedFile && (
                                <div className="mt-2 relative">
                                    <img src={URL.createObjectURL(addSelectedFile)} alt="Selected" className="h-20 w-20 object-cover" />
                                    <button onClick={removeAddSelectedFile} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            )}
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-800">
                    <Button variant="secondary" onClick={() => setAddPopUpShow(false)}>Close</Button>
                    <Button onClick={addHomeCSDataFunc}>Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Case Studies</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="SubCategory" className="block text-gray-700 font-bold">SubCategory</label>
                            {dropdown ? (
                                <select className="mb-4" id='SubCategory' value={editCS.Subcategory} onChange={(e) => { setEditCS({ ...editCS, Subcategory: e.target.value }) }}>
                                    <option>--select {category}--</option>
                                    {dropdown.map((item, index) => {
                                        return (
                                            <option key={index} value={item.title}>
                                                {item.title}
                                            </option>
                                        )
                                    })}
                                </select>
                            ) : (
                                <input type="text" name="SubCategory" id="SubCategory" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setEditCS({ ...editCS, Subcategory: e.target.value }) }} />
                            )}
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" value={editCS.title} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setEditCS({ ...editCS, title: e.target.value }) }} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>
                            <JoditEditor
                                ref={editEditor}
                                value={editCS.desc}
                                onChange={newContent => setEditCS({ ...editCS, desc: newContent })}
                            />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="coreTech" className="block text-gray-700 font-bold">Core Technologies</label>
                            <input type="text" name="coreTech" id="coreTech" value={editCS.coreTech} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setEditCS({ ...editCS, coreTech: e.target.value }) }} />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="file" className="block text-gray-700 font-bold">Image</label>
                            <input type="file" name="caseStudyImage" id="file" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={handleEditFileChange} />
                            {editSelectedFile && (
                                <div className="mt-2 relative">
                                    <img src={URL.createObjectURL(editSelectedFile)} alt="Selected" className="h-20 w-20 object-cover" />
                                    <button onClick={removeEditSelectedFile} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            )}
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-800">
                    <Button variant="secondary" onClick={() => setEditPopUpShow(false)}>Close</Button>
                    <Button onClick={editCSFunc}>Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={descPopUp} onHide={() => setDescPopUp(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: showDesc }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setDescPopUp(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

            <div className="bg-white p-4 shadow-md rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Subcategory</th>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Title</th>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Description</th>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Core Technologies</th>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Image</th>
                                <th className="py-2 px-4 border-b-2 border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b border-gray-300">{item.Subcategory}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">{item.title}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                <FaEye  onClick={() => { setDescPopUp(true); setShowDesc(item.desc) }} className='mx-auto'/>
                                    </td>
                                    <td className="py-2 px-4 border-b border-gray-300">{item.coreTech}</td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        {item.caseStudyImage && <img src={item.caseStudyImage} alt={item.title} className="h-20 w-20 object-cover" />}
                                    </td>
                                    <td className="py-2 px-4 border-gray-300 flex gap-x-5">
                                        <Button className="text-blue-500" onClick={() => { setEditPopUpShow(true); setEditCS(item); setEditId(item._id) }}>Edit</Button>
                                        <Button className="text-red-500" onClick={() => deleteCSData(item._id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: Math.ceil(CSByCategory.length / itemsPerPage) }, (_, i) => (
                            <Button key={i + 1} onClick={() => paginate(i + 1)} className={`py-1 px-3 mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                                {i + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCaseStudies;
