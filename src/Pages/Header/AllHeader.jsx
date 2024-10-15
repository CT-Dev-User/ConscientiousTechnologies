import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const AllHeader = () => {
    const navigate = useNavigate()
    const { category } = useParams();
    const [headersByCategory, setHeadersByCategory] = useState([]);
    const [addPopupShow, setAddPopUpShow] = useState(false);
    const [editPopupShow, setEditPopUpShow] = useState(false);
    const [addHeaders, setAddHeaders] = useState({ headerCategory: "", headerSubCategory: "", title: "", subTitle: "", image: "" });
    const [editHeaders, seteditHeaders] = useState({ headerCategory: "", headerSubCategory: "", title: "", subTitle: "", image: "" });
    const [addselectedFile, setAddSelectedFile] = useState(null);
    const [editSelectedFile, setEditSelectedFile] = useState(null);
    const [headerSubtitle, setHeadersubtitle] = useState(null)
    const [subtitlePopUp, setSubtitlePopUp] = useState(false)
    const [editId, setEditId] = useState(null);
    const addEditor = useRef(null);
    const editEditor = useRef(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const [dropdown, setDropdown] = useState([])
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = headersByCategory.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const SubCategoryDropdown = async () => {
        if (category === "Technologies") {

        } else if (category === "Solutions") {
            const response = await axios.get('http://localhost:8080/get-solution-we-offer-data')
            setDropdown(response.data.getData)
        } else if (category === "Services") {
            const response = await axios.get('http://localhost:8080/get-service-data')
            setDropdown(response.data.getData)
        } else if (category === "Industries") {
            const response = await axios.get('http://localhost:8080/get-industries-data')
            setDropdown(response.data.getData)
        }

    }
    useEffect(() => {
        SubCategoryDropdown();
    }, [])


    const fetchHeadersByCategory = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-header-by-headerCategory/${category}`);
            setHeadersByCategory(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHeadersByCategory();
    }, []);

    const handleAddfileChange = (e) => {
        setAddHeaders({ ...addHeaders, image: e.target.files[0] });
        setAddSelectedFile(e.target.files[0]);
    };

    const handleEditFileChange = (e) => {
        seteditHeaders({ ...editHeaders, image: e.target.files[0] });
        setEditSelectedFile(e.target.files[0])
    }

    const addHeadersDataFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('headerCategory', category);
            formData.append('headerSubCategory', addHeaders.headerSubCategory);
            formData.append('title', addHeaders.title);
            formData.append('subTitle', addHeaders.subTitle);
            formData.append('image', addHeaders.image);

            const response = await axios.post("http://localhost:8080/add-header", formData);

            if (response.status === 200) {
                fetchHeadersByCategory()
                setAddPopUpShow(false);
                setAddSelectedFile(null);
                setAddHeaders({ headerCategory: "", headerSubCategory: "", title: "", subTitle: "", image: "" });
                // Reset form fields
            }
        } catch (error) {
            console.log(error);
        }
    };

    const editHeadersFunc = async () => {
        try {
            const formData = new FormData();
            formData.append('headerCategory', category);
            formData.append('headerSubCategory', editHeaders.headerSubCategory);
            formData.append('title', editHeaders.title);
            formData.append('subTitle', editHeaders.subTitle);
            formData.append('images', editHeaders.image);

            const response = await axios.put(`http://localhost:8080/edit-header-by-id/${editId}`, formData)
            // console.log(response.status)
            if (response.status === 200) {

                seteditHeaders({ headerCategory: "", headerSubCategory: "", title: "", subTitle: "", image: "" });

                fetchHeadersByCategory()
                setEditPopUpShow(false);
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

    const deleteHeaderData = async (id) => {
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
                    const response = await axios.delete(`http://localhost:8080/delete-header-by-id/${id}`);
                    if (response.status === 200) {
                        setEditId(null);
                        fetchHeadersByCategory()
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
                <Button onClick={() => navigate('/conscientious-header')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
                <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add Header Data</Button>
            </div>

            <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Add Header Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 font-bold">SubCategory of {category}</label>
                            {dropdown.length !== 0 ?
                                <select className="mb-4" onChange={(e) => { setAddHeaders({ ...addHeaders, headerSubCategory: e.target.value }) }}>
                                    <option>--select {category}--</option>
                                    {dropdown.map((item, index) => {
                                        return (
                                            <option key={index} value={item.title}>
                                                {item.title}
                                            </option>
                                        )
                                    })}
                                </select> :
                                <input type="text" className="form-control" id="Subcategory" name="Subcategory" value={addHeaders.Subcategory} onChange={(e) => setAddHeaders({ ...addHeaders, headerSubCategory: e.target.value })} />
                            }


                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddHeaders({ ...addHeaders, title: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Subtitle</label>
                            <JoditEditor
                                ref={addEditor}
                                value={addHeaders.subTitle}
                                onChange={(value) => setAddHeaders({ ...addHeaders, subTitle: value })}
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
                                        <p className="text-gray-700">{addselectedFile.name}</p>
                                    </div>
                                )}
                            </div>
                        </fieldset>
                    </form>
                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
                    <Button variant="primary" onClick={() => { setAddPopUpShow(false); addHeadersDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Header</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <form className="mx-auto max-w-lg">
                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">SubCategory</label>

                            {dropdown.length !== 0 ?
                                 <select className="mb-4" onChange={(e) => { seteditHeaders({ ...editHeaders, headerSubCategory: e.target.value }) }}>
                                 <option>--select {category}--</option>
                                 {dropdown.map((item, index) => {
                                     return (
                                         <option key={index} value={item.title}>
                                             {item.title}
                                         </option>
                                     )
                                 })}
                             </select> :
                                <input type="text" className="form-control" id="Subcategory" name="Subcategory" value={addHeaders.Subcategory} onChange={(e) => { seteditHeaders({ ...editHeaders, headerSubCategory: e.target.value }) }} />
                            }

                          
                        </fieldset>

                        <fieldset className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
                            <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => seteditHeaders({ ...editHeaders, title: e.target.value })} />
                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>
                            <JoditEditor
                                ref={editEditor}
                                value={editHeaders.subTitle || ''} // Use optional chaining to avoid errors if editHomeFAQ.answer is null or undefined
                                onChange={(value) => seteditHeaders({ ...editHeaders, subTitle: value })}
                            />


                        </fieldset>
                        <fieldset className="mb-4">
                            <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
                            <div className="relative">
                                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                                {editSelectedFile && (
                                    <div className="ml-2 mt-4">
                                        <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => seteditHeaders(null)}>
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
                    <Button variant="primary" onClick={() => { setEditPopUpShow(false); editHeadersFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={subtitlePopUp} onHide={() => setSubtitlePopUp(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Head Section Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <div dangerouslySetInnerHTML={{ __html: headerSubtitle }} />

                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => setSubtitlePopUp(false)} className="text-gray-700 hover:text-gray-900">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Sr. No</th>
                        {/* <th className="border p-2">Faq Category</th> */}
                        <th className="border p-2">Subcategory</th>
                        <th className="border p-2">Title</th>

                        <th className="border p-2">Desc</th>
                        <th className="border p-2">bg image</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((header, i) => (
                        <tr key={header._id}>
                            <td className="border p-2">{i + indexOfFirstItem + 1}</td>
                            <td className="border p-2">{header.headerSubCategory}</td>
                            <td className="border p-2">{header.title}</td>

                            {/* <td className="border p-2">{faq.question}</td> */}
                            <td className="border p-2">
                                <FaEye onClick={() => { setHeadersubtitle(header.subTitle); setSubtitlePopUp(true); }} className='cursor-pointer' />
                            </td>
                            <td className="border p-2">
                                <img src={header.image} alt={header.title} className="w-[60px] h-[60px]" />
                            </td>
                            <td className="border flex items-center justify-start gap-[20px] p-2">
                                <button className="bg-blue-500 hover:bg-blue-700 px-[20px] py-[7x] text-white font-bold py-2 px-4 rounded" onClick={() => { setEditPopUpShow(true); setEditId(header._id) }}>Edit</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => deleteHeaderData(header._id)}>Delete</button>
                                <button className='hover:bg-red-700 h-[37px] bg-[green] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => navigate(`/conscientious-header-subpage/${header.headerSubCategory}`)}>SubPages</button>
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
                {[...Array(Math.ceil(headersByCategory.length / itemsPerPage)).keys()].map(number => (
                    <li key={number} className="mx-1">
                        <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
                    </li>
                ))}
                <li>
                    <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(headersByCategory.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
                </li>
            </ul>
        </div>
    );
};

export default AllHeader;