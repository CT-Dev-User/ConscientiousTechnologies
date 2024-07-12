import axios from 'axios'
import JoditEditor from 'jodit-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Industries = () => {
  const [homeIndustriesData, setHomeIndustriesData] = useState([])
  const [addHomeIndustryData, setAddHomeIndustryData] = useState({ title: "", images: "", desc: "" })
  const [editHomeIndustryData, seteditHomeIndustryData] = useState({ title: "", images: "", desc: "" })
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [addSelectedFile, setAddSelectedFile] = useState(null);
  const [editPopUpShow, setEditPopUpShow] = useState(false)
  const [EditSelectedFile, setEditSelectedFile] = useState(null)
  const [editId, setEditId] = useState(null)
  const [descModal, setDescModal] = useState(false);
  const [desc, setDesc] = useState(null)

  const addEditor = useRef(null);
  const editEditor = useRef(null)

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = homeIndustriesData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddfileChange = (e) => {
    setAddHomeIndustryData({ ...addHomeIndustryData, images: e.target.files[0] });
    setAddSelectedFile(e.target.files[0]);
  };

  const handleEditFileChange = (e) => {
    seteditHomeIndustryData({ ...editHomeIndustryData, images: e.target.files[0] });
    setEditSelectedFile(e.target.files[0])
  }

  const addHomeIndustryDatafunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addHomeIndustryData.title);
      formData.append('desc', addHomeIndustryData.desc);
      formData.append('images', addHomeIndustryData.images);

      const response = await axios.post("http://localhost:8080/add-industries-data", formData);
      if (response.status === 200) {
        // Assuming you want to fetch updated data after adding
        getHomeIndustriesData();
        setAddPopUpShow(false);
        setAddHomeIndustryData({ title: "", images: "", desc: "" });

      }

    } catch (error) {
      console.log(error);
    }
  };

  const getHomeIndustriesData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-industries-data")
      if (response.status === 200) {
        setHomeIndustriesData(response.data.getData)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const editHomeIndustriesDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', editHomeIndustryData.title);
      formData.append('desc', editHomeIndustryData.desc);
      formData.append('images', editHomeIndustryData.images);

      const response = await axios.put(`http://localhost:8080/edit-industries-data/${editId}`, formData)
      console.log(response.status)
      if (response.status === 200) {
        Swal.fire(
          'Saved!',
          'Your changes have been saved.',
          'success'
        );
        seteditHomeIndustryData({ title: "", images: "", desc: "" });
        getHomeIndustriesData();
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

  const deleteHomeIndustriesData = async (id) => {
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
          const response = await axios.delete(`http://localhost:8080/delete-industries-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            getHomeIndustriesData()
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


  useEffect(() => {
    getHomeIndustriesData()
  }, [])

  return (
    <div className='w-full mx-auto p-6'>
      <div className="flex justify-between mb-5 mr-3">
        <h5 className='underline'> Industries Data </h5>
        <Button onClick={() => setAddPopUpShow(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Industry</Button>
      </div>

      {/* Add Modals popup*/}
      <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Industries Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddHomeIndustryData({ ...addHomeIndustryData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>
              <JoditEditor
                ref={addEditor}
                value={addHomeIndustryData.desc}
                onChange={(value) => { setAddHomeIndustryData({ ...addHomeIndustryData, desc: value }) }}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {addSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700 mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
                      < AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(addSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{addSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setAddPopUpShow(false)} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => { { addHomeIndustryDatafunc(); setAddPopUpShow(false) } }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Service Data */}
      <Modal show={editPopUpShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="hero_title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { seteditHomeIndustryData({ ...editHomeIndustryData, title: e.target.value }) }} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-desc" className="block text-gray-700 font-bold">Home Service Desc</label>

              <JoditEditor
                ref={editEditor}
                value={editHomeIndustryData.desc}
                onChange={(value) => { seteditHomeIndustryData({ ...editHomeIndustryData, desc: value }) }}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-image" className="block font-bold">Home Service Image</label>
              <div className="relative">
                <div>
                  <input type="file" name="hero_image" id="hero-home-image" className="form-input  block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                  <label htmlFor="hero-home-image" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                </div>

                {EditSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
                      < AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(EditSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{EditSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setEditPopUpShow(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
          <Button variant="primary" onClick={() => { setEditPopUpShow(false); editHomeIndustriesDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={descModal} onHide={() => setDescModal(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div dangerouslySetInnerHTML={{ __html: desc }} />

        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setDescModal(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <table className="w-full border-collapse border mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Industry Title</th>
            <th className="border p-2">Industry Description</th>
            <th className="border p-2">Industry Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((homeindustryData, i) => (
            <tr key={i}>
              <td className="border p-2">{i + indexOfFirstItem + 1}</td>
              <td className="border p-2">{homeindustryData.title}</td>
              <td className="border p-2">
                <FaEye onClick={() => { setDesc(homeindustryData.desc); setDescModal(true) }} />
              </td>
              <td className="border p-2"><img src={homeindustryData.homePageIndustryImage} alt={homeindustryData.title} className='h-[50px]' /></td>
              <td className="border p-2 flex gap-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditId(homeindustryData._id); setEditPopUpShow(true) }}>Edit</button>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => deleteHomeIndustriesData(homeindustryData._id)}>Delete</button>
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
        {[...Array(Math.ceil(homeIndustriesData.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(homeIndustriesData.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>
    </div>
  )
}

export default Industries
