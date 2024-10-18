import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import Swal from 'sweetalert2';

const SocialMedia = () => {
    const [SocialMedias, setSocialMedias] = useState([]);
    const [addSocialMedias, setAddSocialMedias] = useState({ title: "", social_icon: "", link:"" });
    const [editSocialMedias, setEditSocialMedias] = useState({ title: "", social_icon: "", link :""});
    const [addSocialMediasshow, setAddSocialMediasShow] = useState(false);
    const [editSocialMediasShow, setEditSocialMediasShow] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [editId, setEditId] = useState(null);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setAddSocialMedias(prevState => ({ ...prevState, social_icon: file }));
    };

    const handleEditSocialMediaClose = () => {
        setEditSocialMediasShow(false);
    };


    const handleEditFileChange = (event) => {
        const file = event.target.files[0];
        setEditSelectedFile(file);
        setEditSocialMedias(prevState => ({ ...prevState, social_icon: file }));
    };



    const addHSocialMediasfunc = async () => {
        try {
            const formData = new FormData();
            formData.append('title', addSocialMedias.title);
            formData.append('social_icon', addSocialMedias.social_icon);
            formData.append('link', addSocialMedias.link);

            const response = await axios.post("https://conscientious-technologies-backend.vercel.app/add-social-media-data", formData);
            if (response.status === 200) {
                setAddSocialMediasShow(false);
                setAddSocialMedias({ title: "", social_icon: "" });
                fetchSocialMedias();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchSocialMedias = async () => {
        try {
            const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-social-media-data");
            setSocialMedias(response.data.getdata);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSocialMedias();
    }, []);


    const editSocialMediasfunc = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to save these changes?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const formData = new FormData();
                    formData.append('title', editSocialMedias.title);
                    formData.append('social_icon', editSocialMedias.social_icon);
                    formData.append('link', editSocialMedias.link);

                    const response = await axios.put(`https://conscientious-technologies-backend.vercel.app/update-social-media-data/${editId}`, formData);
                    if (response.status === 200) {
                        setEditId(null);
                        handleEditSocialMediaClose();
                        fetchSocialMedias();
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
            }
        });
    };

    const deleteSocialMediasData = async (id) => {
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
                    const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-social-media-data/${id}`);
                    if (response.status === 200) {
                        setEditId(null);
                        fetchSocialMedias();
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

    // Calculate indexes for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = SocialMedias.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div className="w-full h-auto bg-gray-200">
            <div className="float-right text-[white] mb-2 mr-[20px] hover:scale-[1.1] mt-2">
                <Button onClick={setAddSocialMediasShow}>+</Button>
            </div>



            {/* add hero section modal */}
            <Modal show={addSocialMediasshow} onHide={() => { setAddSocialMedias(false) }}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Social Media Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Social Media Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddSocialMedias({ ...addSocialMedias, title: e.target.value }) }} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="link" className="block text-gray-700 font-bold">Social Media Link</label>
                            <input type="text" name="link" id="link" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddSocialMedias({ ...addSocialMedias, link: e.target.value }) }} />
                        </fieldset>
                        {/* Add similar fields for other key feature points */}
                        <fieldset className="mb-4">
                            <label htmlFor="key-feature-image" className="block font-bold">Social Icons</label>
                            <div className="relative">
                                <div>
                                    <input type="file" name="social_icon" id="social_icon" className="form-input  block w-full rounded-md overflow-hidden" aria-describedby="file-upload-label" onChange={handleFileChange} />
                                    <label htmlFor="social_icon" id="file-upload-label" className="cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                </div>
                                {selectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setSelectedFile(null)}>
                                            < AiOutlineClose />
                                        </button>
                                        <img src={URL.createObjectURL(selectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                                        <p className="text-gray-700">{selectedFile.name}</p>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100 ">
                    <Button variant="secondary" onClick={()=>{setAddSocialMediasShow(false)}} className="text-gray-700 hover:text-gray-900">
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { setAddSocialMediasShow(false); addHSocialMediasfunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* edit hero section modal */}
            <Modal show={editSocialMediasShow} onHide={handleEditSocialMediaClose}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Key Feature Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold"> Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={editSocialMedias.title} onChange={(e) => setEditSocialMedias({ ...editSocialMedias, title: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="link" className="block text-gray-700 font-bold"> link</label>
                            <input type="text" name="link" id="link" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={editSocialMedias.link} onChange={(e) => setEditSocialMedias({ ...editSocialMedias, link: e.target.value })} />
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="social_icon" className="block font-bold">Social Image</label>
                            <div className="relative">
                                <div>
                                    <input type="file" name="social_icon" id="social_icon" className="form-input  block w-full rounded-md overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                                    <label htmlFor="social_icon" id="file-upload-label" className="cursor-pointer hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                </div>
                                {editSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
                                            <AiOutlineClose />
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
                    <Button variant="secondary" onClick={handleEditSocialMediaClose} className="text-gray-700 hover:text-gray-900">
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { handleEditSocialMediaClose(); editSocialMediasfunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="w-[100%] bg-[white]">
                <table className="w-full z-10">
                    <thead className='z-10'>
                        <tr>
                            <th className="border p-1 ">Sr. No</th>
                            <th className="border p-1 ">Social media Title</th>
                            <th className="border p-1">Social Icons Link</th>
                            <th className="border p-1">Social Icons Image</th>
                            <th className="border p-1 ">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index}>
                                <td className="border p-1">{index + indexOfFirstItem + 1}</td>
                                <td className="border p-1">{item.title}</td>
                                <td className="border p-1">{item.link}</td>
                                {/* <td className="border p-1 w-[500px]">{item.point_one_Desc}</td> */}
                                <td className="border p-1">
                                    <img src={item.social_icon} alt={item.title} className="w-[70px] h-[70px]" />
                                </td>



                                <td className="border p-1 flex gap-x-2 w-fit py-4 px-3">
                                    <Button onClick={() => { setEditSocialMediasShow(true); setEditId(item._id); }}>Edit</Button>
                                    <Button onClick={() => deleteSocialMediasData(item._id)} className='bg-red-500'>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <ul className="flex justify-center mt-4">
                    {[...Array(Math.ceil(SocialMedias.length / itemsPerPage)).keys()].map(number => (
                        <li key={number} className="mx-1">
                            <button onClick={() => paginate(number + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{number + 1}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default SocialMedia;
