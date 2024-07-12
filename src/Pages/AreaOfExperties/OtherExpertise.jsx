import axios from 'axios';
import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const OtherExpertise = () => {
    const navigate = useNavigate();
    const [expertiesData, setExpertiesData] = useState([]);
    const [addPopupShow, setAddPopupShow] = useState(false);
    const [editPopupShow, setEditPopupShow] = useState(false);
    const [addData, setAddData] = useState({ Category: "", SubCategory: "", title: "", image: "" });
    const [editData, setEditData] = useState({ Category: "", SubCategory: "", title: "", image: "" });
    const [addSelectedFile, setAddSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [editId, setEditId] = useState(null);
    const addEditor = useRef(null);
    const editEditor = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = expertiesData.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const fetchExperties = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-experies-data`);
            const fetchData = response.data.getdata
            const filteredData = fetchData.filter(item =>
                item.Category !== 'Technologies' &&
                item.Category !== 'Services' &&
                item.Category !== 'Industries' &&
                item.Category !== 'Solutions'
            );
            setExpertiesData(filteredData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExperties();
    }, []);

    const handleAddFileChange = (e) => {
        setAddData({ ...addData, image: e.target.files[0] });
        setAddSelectedFile(e.target.files[0]);
    };

    const handleEditFileChange = (e) => {
        setEditData({ ...editData, image: e.target.files[0] });
        setEditSelectedFile(e.target.files[0]);
    };

    const addExpertiesDataFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('Category', addData.Category);
            formData.append('SubCategory', addData.SubCategory);
            formData.append('title', addData.title);
            formData.append('image', addData.image);

            const response = await axios.post("http://localhost:8080/add-experies-data", formData);

            if (response.status === 200) {
                fetchExperties();
                setAddPopupShow(false);
                setAddSelectedFile(null);
                setAddData({ Category: "", SubCategory: "", title: "", image: "" });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editExpertiesFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('Category', editData.Category);
            formData.append('SubCategory', editData.SubCategory);
            formData.append('title', editData.title);
            formData.append('image', editData.image);

            const response = await axios.put(`http://localhost:8080/edit-experties-by-id/${editId}`, formData);
            console.log(response.status)
            if (response.status === 200) {
                fetchExperties();
                setEditPopupShow(false);
                Swal.fire('Saved!', 'Your changes have been saved.', 'success');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error!', 'Failed to save changes. Please try again later.', 'error');
        }
    };

    const deleteExpertiesData = async (id) => {
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
                    const response = await axios.delete(`http://localhost:8080/delete-experties-by-id/${id}`);
                    if (response.status === 200) {
                        fetchExperties();
                        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire('Error!', 'Failed to delete data. Please try again later.', 'error');
                }
            }
        });
    };

    return (
        <div className='w-full bg-gray-300 h-full mx-auto p-4'>
            <div className="flex justify-end mb-5 mr-3 gap-x-3">
                <Button onClick={() => navigate('/conscientious-area-of-experties')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
                <Button onClick={() => setAddPopupShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add Area of  Exprties Data</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopupShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Area of  Exprties Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="Category" className="block text-gray-700 font-bold">Category</label>
                            <input type="text" className="form-control" id="Category" name="Category" value={addData.Category} onChange={(e) => setAddData({ ...addData, Category: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="SubCategory" className="block text-gray-700 font-bold">SubCategory</label>
                            <input type="text" className="form-control" id="SubCategory" name="SubCategory" value={addData.SubCategory} onChange={(e) => setAddData({ ...addData, SubCategory: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddData({ ...addData, title: e.target.value })} />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="image" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="image" id="image" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddFileChange} />
                                <label htmlFor="image" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {addSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700" onClick={() => setAddSelectedFile(null)}>
                                            <span className="ml-1">{addSelectedFile.name}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-white">
                    <Button variant="secondary" onClick={() => setAddPopupShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addExpertiesDataFunc}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editPopupShow} onHide={() => setEditPopupShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Header Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="Category" className="block text-gray-700 font-bold">SubCategory</label>
                            <input type="text" className="form-control" id="Category" name="Category" value={editData.Category} onChange={(e) => setEditData({ ...editData, Category: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="SubCategory" className="block text-gray-700 font-bold">SubCategory</label>
                            <input type="text" className="form-control" id="SubCategory" name="SubCategory" value={editData.SubCategory} onChange={(e) => setEditData({ ...editData, SubCategory: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Subtitle</label>
                            <JoditEditor
                                ref={editEditor}
                                value={editData.subTitle}
                                onChange={(value) => setEditData({ ...editData, subTitle: value })}
                            />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="image" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="image" id="image" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                                <label htmlFor="image" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {editSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700" onClick={() => setEditSelectedFile(null)}>
                                            <span className="ml-1">{editSelectedFile.name}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-white">
                    <Button variant="secondary" onClick={() => setEditPopupShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={editExpertiesFunc}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container mx-auto p-4">
                <table className="min-w-full bg-white border-collapse">
                    <thead>
                        <tr>
                            <th className="py-2 border border-gray-300 text-center">Category</th>
                            <th className="py-2 border border-gray-300 text-center">SubCategory</th>
                            <th className="py-2 border border-gray-300 text-center">Title</th>
                            <th className="py-2 border border-gray-300 text-center">Image</th>
                            <th className="py-2 border border-gray-300 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item._id} className="border border-gray-300">
                                <td className="py-2 border border-gray-300 text-center">{item.Category}</td>
                                <td className="py-2 border border-gray-300 text-center">{item.SubCategory}</td>
                                <td className="py-2 border border-gray-300 text-center">{item.title}</td>
                                <td className="py-2 border border-gray-300 text-center">
                                    <img src={item.image} alt={item.title} className="object-cover w-[70px] h-[70px] rounded-t-lg mx-auto" />
                                </td>
                                <td className="py-2 border border-gray-300 flex justify-center space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => { setEditData({ Category: item.Category, SubCategory: item.SubCategory, title: item.title, image: item.image }); setEditId(item._id); setEditPopupShow(true); }}>
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteExpertiesData(item._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex justify-center">
                    {expertiesData.length > itemsPerPage && (
                        <ul className="flex space-x-2">
                            {Array.from({ length: Math.ceil(expertiesData.length / itemsPerPage) }).map((_, index) => (
                                <li key={index}>
                                    <button onClick={() => paginate(index + 1)} className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OtherExpertise