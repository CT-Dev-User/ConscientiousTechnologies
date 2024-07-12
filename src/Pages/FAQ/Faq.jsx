import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FAQ = () => {
    const navigate = useNavigate()
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [input, setInput] = useState({ faqCategory: "" });
    const [categories, setCategories] = useState([]);

    const addFaqCategory = async () => {
        try {
            const response = await axios.post("http://localhost:8080/add-category", input);
            if (response.status === 200) {
                fetchFaqCategory();
                setAddPopUpShow(false);
                setInput({ faqCategory: "" }); // Reset form fields
            }
        } catch (error) {
            console.log(error);
        }
    };


    const deleteCategoryData = async (id) => {
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
                    const response = await axios.delete(`http://localhost:8080/delete-category/${id}`);
                    if (response.status === 200) {
                        fetchFaqCategory()
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


    const fetchFaqCategory = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-category");
            setCategories(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFaqCategory();
    }, []);


    return (
        <div className='w-full bg-gray-300 h-full mx-auto p-4'>
            <div className="flex justify-end gap-[20px] mb-5 mr-3">
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Category</Button>
                <Button onClick={() => navigate('/other-faq-data')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Add other FAQs</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Home FAQ Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Faq Category</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setInput({ ...input, faqCategory: e.target.value })} />
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
                    <Button variant="primary" onClick={() => { setAddPopUpShow(false); addFaqCategory() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        <th className="border p-2">Faq Category</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((faq, i) => (
                        <tr key={faq._id}>
                            <td className="border p-2">{i + 1}</td>
                            <td className="border p-2">{faq.faqCategory}</td>
                            <td className="border p-2"><button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(`/conscientious/${faq.faqCategory}`) }}>See All</button></td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => { deleteCategoryData(faq._id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default FAQ;
