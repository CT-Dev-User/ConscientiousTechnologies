import axios from 'axios';
import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import "../../SideBar/sidebar.css"
const CaseStudies = () => {
  const [CaseStudiesData, setCaseStudies] = useState([])
  const [addCaseStudyData, setAddCaseStudyData] = useState({ title: "", images: "", desc: "", coreTec: "" })
  const [editCaseStudyData, seteditCaseStudyData] = useState({ title: "", images: "", desc: "", coreTec: "" })

  const [editId, setEditId] = useState(null)
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [addSelectedFile, setAddSelectedFile] = useState(null);
  const [EditSelectedFile, setEditSelectedFile] = useState(null);
  const [descModal, setDescModal] = useState(false)
  const [CaseStudiesDesc, setCaseStudiesDesc] = useState(null)
  const addEditor = useRef(null);
  const editEditor = useRef(null)

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CaseStudiesData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddfileChange = (e) => {
    setAddCaseStudyData({ ...addCaseStudyData, images: e.target.files[0] });
    setAddSelectedFile(e.target.files[0]);
  };

  const handleEditFileChange = (e) => {
    setEditSelectedFile({ ...editCaseStudyData, images: e.target.files[0] });
    setEditSelectedFile(e.target.files[0])
  }

  const getCaseStudiesDataFunc = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-case-studies-data");
      setCaseStudies(response.data.getData);
    }
    catch (error) {
      console.log(error)
    }
  }

  const addCaseStudyDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addCaseStudyData.title);
      formData.append('desc', addCaseStudyData.desc);
      formData.append('images', addCaseStudyData.images);
      formData.append('coreTech', addCaseStudyData.coreTec);

      const response = await axios.post("http://localhost:8080/add-case-studies-data", formData);

      // Assuming you want to fetch updated data after adding
      if (response.status === 200) {
        getCaseStudiesDataFunc();
        setAddPopUpShow(false);
        // setAddSelectedFile(null)
        setAddCaseStudyData({ title: "", images: "", desc: "", coreTec: "" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editCaseStudyDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', editCaseStudyData.title);
      formData.append('desc', editCaseStudyData.desc);
      formData.append('images', editCaseStudyData.images);
      formData.append('coreTech', editCaseStudyData.coreTec);

      const response = await axios.put(`http://localhost:8080/edit-case-studies-data/${editId}`, formData)
      if(response.status === 200){
        setEditPopUpShow(false)
        getCaseStudiesDataFunc();
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

  useEffect(() => {
    getCaseStudiesDataFunc()
  }, [])

  const deleteHomeCaseStudiesData = (id) => {
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
          const response = await axios.delete(`http://localhost:8080/delete-case-studies-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            getCaseStudiesDataFunc()
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
    <div className='w-full bg-gray-300 h-full mx-auto p-4'>
      <div className="flex justify-end mb-5 mr-3">
      <h1 className='text-2xl font-bold text-black'>Case Studies</h1>
        <Button onClick={() => setAddPopUpShow(true)} className='className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>Add Case Study</Button>
      </div>

      {/* Add Modals popup*/}
      <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Service Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddCaseStudyData({ ...addCaseStudyData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>

              <JoditEditor
                ref={addEditor}
                value={addCaseStudyData.desc}
                onChange={(value) => { setAddCaseStudyData({ ...addCaseStudyData, desc: value }) }}
              />

            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="core-tech" className="block text-gray-700 font-bold">Core Tech</label>
              <input type="text" name="core-Tech" id="core-tech" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddCaseStudyData({ ...addCaseStudyData, coreTec: e.target.value })} />
            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md border border-gray-300 focus:border-blue-500 overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md">Upload File</label>
                {addSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
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
          <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => {  addCaseStudyDataFunc(); setAddPopUpShow(false)  }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

          {/* Edit Service Data */}
          <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Case Studies Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => seteditCaseStudyData({ ...editCaseStudyData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>

              <JoditEditor
                ref={editEditor}
                value={editCaseStudyData.desc}
                onChange={(value) => { seteditCaseStudyData({ ...editCaseStudyData, desc: value }) }}
              />

            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="core-tech" className="block text-gray-700 font-bold">Core Tech</label>
              <input type="text" name="core-Tech" id="core-tech" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => seteditCaseStudyData({ ...editCaseStudyData, coreTec: e.target.value })} />
            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md border border-gray-300 focus:border-blue-500 overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md">Upload File</label>
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
          <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => {  editCaseStudyDataFunc(); setEditPopUpShow(false)  }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={descModal} onHide={()=>setDescModal(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
        <div dangerouslySetInnerHTML={{__html:CaseStudiesDesc }}/>

        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setDescModal(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Case Studies Title</th>
            <th className="border p-2">Case Studies Description</th>
            <th className="border p-2">Case Studies Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((caseStudy, i) => (
            <tr key={i}>
              <td className="border p-2">{i + indexOfFirstItem + 1}</td>
              <td className="border p-2">{caseStudy.title}</td>
              <td className="border p-2">
                <FaEye onClick={() => { setDescModal(true); setCaseStudiesDesc(caseStudy.desc) }} className='usersor-pointer' />
              </td>
              <td className="border p-2"><img src={caseStudy.homePageCaseStudiesImage} alt={caseStudy.title} className='h-[50px]' /></td>
              <td className="border p-2 flex gap-x-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{setEditId(caseStudy._id) ;setEditPopUpShow(true)}}>Edit</button>

                <button className=' hover:bg-red-700 bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => { deleteHomeCaseStudiesData(caseStudy._id) }}>Delete</button>
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
        {[...Array(Math.ceil(CaseStudiesData.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(CaseStudiesData.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>

    </div>
  )
}

export default CaseStudies
