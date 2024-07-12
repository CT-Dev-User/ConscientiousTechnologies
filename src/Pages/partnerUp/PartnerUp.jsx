import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PartnerUp = () => {
    const navigate = useNavigate();
    const [partnerUpData, setPartnerUpData] = useState([]);
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [editPopupShow, setEditPopUpShow] = useState(false);
    const [addPartnerUpData, setAddPartnerUpData] = useState({ heading1: "", images1: [], heading2: "", images2: [] });
    const [editPartnerUpData, setEditPartnerUpData] = useState({ heading1: "", images1: [], heading2: "", images2: [] });
    const [editId, setEditId] = useState(null);

    const fetchPartnerUpData = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-partner-up-data");
            if (response.status === 200) {
                setPartnerUpData(response.data.getdata);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPartnerUpData();
    }, []);

    const handleAddPartnerUpDataChange = (field, value) => {
        setAddPartnerUpData({ ...addPartnerUpData, [field]: value });
    };

    const handleEditPartnerUpDataChange = (field, value) => {
        setEditPartnerUpData({ ...editPartnerUpData, [field]: value });
    };

    const handleAddFileChange = (e, index, field) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...addPartnerUpData[field]];
        updatedImages[index] = files[0]; // Replace existing file or add new one if it doesn't exist
        setAddPartnerUpData({ ...addPartnerUpData, [field]: updatedImages });
    };

    const handleEditFileChange = (e, index, field) => {
        const files = Array.from(e.target.files);
        const updatedImages = [...editPartnerUpData[field]];
        updatedImages[index] = files[0]; // Replace existing file or add new one if it doesn't exist
        setEditPartnerUpData({ ...editPartnerUpData, [field]: updatedImages });
    };

    const handleAddImageField = (field) => {
        setAddPartnerUpData({ ...addPartnerUpData, [field]: [...addPartnerUpData[field], null] });
    };

    const handleEditImageField = (field) => {
        setEditPartnerUpData({ ...editPartnerUpData, [field]: [...editPartnerUpData[field], null] });
    };

    const removeAddFile = (index, field) => {
        const updatedImages = addPartnerUpData[field].filter((_, i) => i !== index);
        setAddPartnerUpData({ ...addPartnerUpData, [field]: updatedImages });
    };

    const removeEditFile = (index, field) => {
        const updatedImages = editPartnerUpData[field].filter((_, i) => i !== index);
        setEditPartnerUpData({ ...editPartnerUpData, [field]: updatedImages });
    };

    const addPartnerUpDataFunc = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('heading1', addPartnerUpData.heading1);
            formData.append('heading2', addPartnerUpData.heading2);
            addPartnerUpData.images1.forEach((image) => formData.append('images1', image));
            addPartnerUpData.images2.forEach((image) => formData.append('images2', image));

            const response = await axios.post("http://localhost:8080/add-partner-up-data", formData);

            if (response.status === 200) {
                fetchPartnerUpData();
                setAddPopUpShow(false);
                setAddPartnerUpData({ heading1: "", images1: [], heading2: "", images2: [] });
                Swal.fire('Success!', 'Data added successfully.', 'success');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error!', 'Failed to add data. Please try again later.', 'error');
        }
    };

    const editPartnerUpDataFunc = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('heading1', editPartnerUpData.heading1);
            formData.append('heading2', editPartnerUpData.heading2);
            editPartnerUpData.images1.forEach((image) => formData.append('images1', image));
            editPartnerUpData.images2.forEach((image) => formData.append('images2', image));

            const response = await axios.put(`http://localhost:8080/edit-partner-up-data/${editId}`, formData);
            if (response.status === 200) {
                setEditPopUpShow(false);
                setEditPartnerUpData({ heading1: "", images1: [], heading2: "", images2: [] });
                fetchPartnerUpData();
                Swal.fire('Saved!', 'Your changes have been saved.', 'success');
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error!', 'Failed to save changes. Please try again later.', 'error');
        }
    };

    const deletePartnerUpData = async (id) => {
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
                    const response = await axios.delete(`http://localhost:8080/delete-partner-up-data/${id}`);
                    if (response.status === 200) {
                        fetchPartnerUpData();
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
                <Button onClick={() => navigate('/')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add Header Data</Button>
            </div>
            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add PartnerUp Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addPartnerUpDataFunc} className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label className="block text-gray-700 font-bold">First Heading</label>
                            <input type="text" value={addPartnerUpData.heading1} onChange={(e) => handleAddPartnerUpDataChange('heading1', e.target.value)} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" />
                        </fieldset>
                        <fieldset>
                            <label>Images</label>
                            {addPartnerUpData.images1.map((image, index) => (
                                <div key={index} className='my-2 flex items-center'>
                                    <input type="file" onChange={(e) => handleAddFileChange(e, index, 'images1')} />
                                    <button type="button" onClick={() => removeAddFile(index, 'images1')} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
                                </div>
                            ))}
                            <button type="button" className='border border-black px-2 py-1' onClick={() => handleAddImageField('images1')}>Add Image</button>
                        </fieldset>
                        <fieldset className="mb-4">
                            <label className="block text-gray-700 font-bold">Second Heading</label>
                            <input type="text" value={addPartnerUpData.heading2} onChange={(e) => handleAddPartnerUpDataChange('heading2', e.target.value)} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" />
                        </fieldset>
                        <fieldset>
                            <label>Images</label>
                            {addPartnerUpData.images2.map((image, index) => (
                                <div key={index} className='my-2 flex items-center'>
                                    <input type="file" onChange={(e) => handleAddFileChange(e, index, 'images2')} />
                                    <button type="button" onClick={() => removeAddFile(index, 'images2')} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
                                </div>
                            ))}
                            <button type="button" className='border border-black px-2 py-1' onClick={() => handleAddImageField('images2')}>Add Image</button>
                        </fieldset>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded flex mx-auto">Save</button>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit PartnerUp Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={editPartnerUpDataFunc} className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label className="block text-gray-700 font-bold">First Heading</label>
                            <input type="text" value={editPartnerUpData.heading1} onChange={(e) => handleEditPartnerUpDataChange('heading1', e.target.value)} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" />
                        </fieldset>
                        <fieldset>
                            <label>Images</label>
                            {editPartnerUpData.images1.map((image, index) => (
                                <div key={index} className='my-2 flex items-center'>
                                    <input type="file" onChange={(e) => handleEditFileChange(e, index, 'images1')} />
                                    <button type="button" onClick={() => removeEditFile(index, 'images1')} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
                                </div>
                            ))}
                            <button type="button" className='border border-black px-2 py-1' onClick={() => handleEditImageField('images1')}>Add Image</button>
                        </fieldset>
                        <fieldset className="mb-4">
                            <label className="block text-gray-700 font-bold">Second Heading</label>
                            <input type="text" value={editPartnerUpData.heading2} onChange={(e) => handleEditPartnerUpDataChange('heading2', e.target.value)} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" />
                        </fieldset>
                        <fieldset>
                            <label>Images</label>
                            {editPartnerUpData.images2.map((image, index) => (
                                <div key={index} className='my-2 flex items-center'>
                                    <input type="file" onChange={(e) => handleEditFileChange(e, index, 'images2')} />
                                    <button type="button" onClick={() => removeEditFile(index, 'images2')} className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Remove</button>
                                </div>
                            ))}
                            <button type="button" className='border border-black px-2 py-1' onClick={() => handleEditImageField('images2')}>Add Image</button>
                        </fieldset>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded flex mx-auto">Save</button>
                    </form>
                </Modal.Body>
            </Modal>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        <th className="border p-2">Heading1</th>
                        <th className="border p-2">Heading2</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {partnerUpData.map((partner, i) => (
                        <tr key={partner._id}>
                            <td className="border p-2">{i + 1}</td>
                            <td className="border p-2">{partner.heading1}</td>
                            <td className="border p-2">{partner.heading2}</td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7px] text-white font-bold rounded" onClick={() => { setEditPopUpShow(true); setEditId(partner._id); setEditPartnerUpData({ heading1: partner.heading1, images1: partner.images1, heading2: partner.heading2, images2: partner.images2 }); }}>Edit</button>
                                <button className='hover:bg-red-700 bg-red-500 px-[20px] py-[7px] rounded text-white shadow-md' onClick={() => deletePartnerUpData(partner._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PartnerUp;
