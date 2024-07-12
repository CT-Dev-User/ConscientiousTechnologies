import axios from 'axios';
import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Blogs = () => {
  const [blogData, setBlogData] = useState([])
  const [addBlogData, setAddBlogData] = useState({ title: "", images: "", desc: "" })
  const [EditBlogData, setEditBlogData] = useState({ title: "", images: "", desc: "" })
  const [descModal, setDescModal] = useState(false)
  const [BlogDesc, setBlogDesc] = useState(null)
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [addselectedFile, setAddSelectedFile] = useState(null);
  const [editSelectedFile, setEditSelectedFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const addEditor = useRef(null);
  const editEditor = useRef(null)

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddfileChange = (e) => {
    setAddBlogData({ ...addBlogData, images: e.target.files[0] });
    setAddSelectedFile(e.target.files[0]);
  };

  const handleEditFileChange = (e) => {
    setEditBlogData({ ...EditBlogData, images: e.target.files[0] });
    setEditSelectedFile(e.target.files[0])
  }


  const fetchBlogsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-blog-data");
      setBlogData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  const addCBlogDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addBlogData.title);
      formData.append('desc', addBlogData.desc);
      formData.append('images', addBlogData.images);

      const response = await axios.post("http://localhost:8080/add-blog-data", formData);

      // Assuming you want to fetch updated data after adding
      if (response.status === 200) {
        fetchBlogsData();
        setAddPopUpShow(false);
        // setAddSelectedFile(null)
        setAddBlogData({ title: "", images: "", desc: "", coreTec: "" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editBlogDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', EditBlogData.title);
      formData.append('desc', EditBlogData.desc);
      formData.append('images', EditBlogData.images);

      const response = await axios.put(`http://localhost:8080/edit-blog-data/${editId}`, formData)
      console.log(response.status)
      if (response.status === 200) {
        setEditPopUpShow(false);
        setEditBlogData({ title: "", images: "", desc: "", coreTec: "" })
        fetchBlogsData();
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


  // setAddBlogData({ ...addBlogData
  const deletesDataBlogData = (id) => {
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
        // If user confirms deletion
        try {
          const response = await axios.delete(`http://localhost:8080/delete-blog-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            fetchBlogsData()
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
  }

  return (
    <div className="w-full bg-gray-300 h-full mx-auto p-4">
      <div className="flex justify-end mb-5 mr-3">
        <Button onClick={() => setAddPopUpShow(true)} className='className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>Add Case Study</Button>
      </div>

      <table className="w-full border-collapse border" >
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Blogs Title</th>
            <th className="border p-2">Blogs Description</th>
            <th className="border p-2">Blogs Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((blog, i) => (
            <tr key={i}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{blog.title}</td>
              <td className="border p-2">
                <FaEye onClick={() => { setDescModal(true); setBlogDesc(blog.desc) }} className='usersor-pointer' />
              </td>
              <td className="border p-2"><img src={blog.homePageBlogImage} alt={blog.title} className='h-[50px]' /></td>
              <td className="border p-2 flex gap-x-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditId(blog._id); setEditPopUpShow(true) }}>Edit</button>

                <button className=' hover:bg-red-700 bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => { deletesDataBlogData(blog._id) }}>Delete</button>
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
        {[...Array(Math.ceil(blogData.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(blogData.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>

      {/* Add Modals popup*/}
      <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Blog Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddBlogData({ ...addBlogData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>

              <JoditEditor
                ref={addEditor}
                value={addBlogData.desc}
                onChange={(value) => { setAddBlogData({ ...addBlogData, desc: value }) }}
              />

            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {addselectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
                      < AiOutlineClose />
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
          <Button variant="primary" onClick={() => { { setAddPopUpShow(false); addCBlogDataFunc() } }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal PopPup */}
      <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Blog Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setEditBlogData({ ...EditBlogData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>

              <JoditEditor
                ref={editEditor}
                value={EditBlogData.desc}
                onChange={(value) => { setEditBlogData({ ...EditBlogData, desc: value }) }}
              />

            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {editSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
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
          <Button variant="primary" onClick={() => { setEditPopUpShow(false); editBlogDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={descModal} onHide={() => setDescModal(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div dangerouslySetInnerHTML={{ __html: BlogDesc }} />

        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setDescModal(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Blogs
