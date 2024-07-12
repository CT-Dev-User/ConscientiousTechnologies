import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [input, setInput] = useState({ faqCategory: "" });
    const [categories, setCategories] = useState([]);

    const addCategory = async () => {
        try {
            const response = await axios.post("http://localhost:8080/add-category", input);
            if (response.status === 200) {
                fetchCategory();
                setAddPopUpShow(false);
                setInput({ faqCategory: "" }); // Reset form fields
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchCategory = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get-category");
            setCategories(response.data.getData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);


    return (
        <div className='w-full bg-gray-300 h-full mx-auto p-4'>
            <div className="flex justify-end gap-[20px] mb-5 mr-3">
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Category</Button>
                <Button onClick={() =>navigate('/other-header-data')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Header &rarr;</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Header Category</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Header Category</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setInput({ ...input, faqCategory: e.target.value })} />
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
                    <Button variant="primary" onClick={() => { setAddPopUpShow(false); addCategory() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        <th className="border p-2">Header Category</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((header, i) => (
                        <tr key={header._id}>
                            <td className="border p-2">{i + 1}</td>
                            <td className="border p-2">{header.faqCategory}</td>
                            <td className="border p-2"><button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded" onClick={() => { navigate(`/conscientious-header/${header.faqCategory}`) }}>See All</button></td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Header;
