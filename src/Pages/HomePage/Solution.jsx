import axios from 'axios'
import JoditEditor from 'jodit-react';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Solution = () => {
  const [getSolutionData, setGetSolutionData] = useState([])
  const [addSoltionHomePoup, setAddSolutionHomePopUp] = useState(false)
  const [addSolutionHomeData, setAddSolutionHomeData] = useState({ title: "", desc: "", images: "" })
  const [editSolutionHomeData, seteditSolutionHomeData] = useState({ title: "", desc: "", images: "" })
  const [editPopUpShow, setEditPopUpShow] = useState(false)
  const [addSelectedFile, setAddSelectedFile] = useState(null);
  const [EditSelectedFile, setEditSelectedFile] = useState(null);
  const [editId, setEditId] = useState(null);
  const [HomeSolutionDescData, setHomeSolutionDescData] = useState(null);
  const [DescModal, setDescModal] = useState(false);
  const addEditor = useRef(null);
  const editEditor = useRef(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getSolutionData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
  const handleAddfileChange = (e) => {
    setAddSolutionHomeData({ ...addSolutionHomeData, images: e.target.files[0] });
    setAddSelectedFile(e.target.files[0]);
  };
  const handleEditFileChange = (e) => {
    seteditSolutionHomeData({ ...editSolutionHomeData, images: e.target.files[0] });
    setEditSelectedFile(e.target.files[0])
  }

  const AddHomeSolutionDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addSolutionHomeData.title);
      formData.append('desc', addSolutionHomeData.desc);
      formData.append('images', addSolutionHomeData.images);

      const response = await axios.post("http://localhost:8080/add-solution-we-offer-data", formData);
      if (response.status === 200) {
        setAddSolutionHomePopUp(false);
        setEditSelectedFile(null)
        setAddSolutionHomeData({ title: "", images: "", desc: "" });
        getHomeSolutionDataFunc();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getHomeSolutionDataFunc = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-solution-we-offer-data")
      // console.log(response.data.getData)
      setGetSolutionData(response.data.getData)

    } catch (error) {
      console.log(error)
    }
  }

  const editHomeSolutionDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', editSolutionHomeData.title);
      formData.append('desc', editSolutionHomeData.desc);
      formData.append('images', editSolutionHomeData.images);
      const response = await axios.put(`http://localhost:8080/edit-solution-we-offer-data/${editId}`, formData)
      if (response.status === 200) {
        setEditPopUpShow(false);
        setEditSelectedFile(null)
        getHomeSolutionDataFunc();
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

  const deleteHomeSolutionData = async (id) => {
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
          const response = await axios.delete(`http://localhost:8080/delete-solution-we-offer-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            getHomeSolutionDataFunc();
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
    getHomeSolutionDataFunc()
  }, [])



  return (
    <div className="w-full bg-gray-300 h-full mx-auto p-4">
      <div className="flex justify-between mb-5 mr-3">
        <h5 className='underline'>Solution Data</h5>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAddSolutionHomePopUp(true)}>+</Button>
      </div>
      <table className="w-[95%] border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Solution Title</th>
            <th className="border p-2">Solution Description</th>
            <th className="border p-2">Solution Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((homeSoluData, i) => (
            <tr key={i}>
              <td className="border p-2">{i + indexOfFirstItem + 1}</td>
              <td className="border p-2">{homeSoluData.title}</td>
              <td className="border p-2">
                <FaEye onClick={() => { setHomeSolutionDescData(homeSoluData.desc); setDescModal(true) }} className='usersor-pointer' />

              </td>
              <td className="border p-2"><img src={homeSoluData.SolutionhomePageImage} alt={homeSoluData.title} className='h-[50px]' /></td>
              <td className="border p-2 flex gap-x-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditPopUpShow(true); setEditId(homeSoluData._id) }}>Edit</button>

                <button className=' hover:bg-red-700 bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={()=>deleteHomeSolutionData(homeSoluData._id)}>Delete</button>
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
        {[...Array(Math.ceil(getSolutionData.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(getSolutionData.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>

      {/* Add Home Solution Data Pop Up */}

      <Modal show={addSoltionHomePoup} onHide={() => setAddSolutionHomePopUp(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Solution We Offer Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddSolutionHomeData({ ...addSolutionHomeData, title: e.target.value })} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 font-bold">Description</label>

              <JoditEditor
                ref={addEditor}
                value={addSolutionHomeData.desc}
                onChange={(value) => setAddSolutionHomeData({ ...addSolutionHomeData, desc: value })}
              />

            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {addSelectedFile && (
                  <div className="ml-2 mt-4">
                    {/* Button to remove selected file */}
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
          <Button variant="secondary" onClick={() => setAddSolutionHomePopUp(false)} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => { { AddHomeSolutionDataFunc(); setAddSolutionHomePopUp(false) } }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal pop up */}
      <Modal show={editPopUpShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="hero_title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { seteditSolutionHomeData({ ...editSolutionHomeData, title: e.target.value }) }} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-desc" className="block text-gray-700 font-bold">Home Service Desc</label>

              <JoditEditor
                ref={editEditor}
                value={editSolutionHomeData.desc}
                onChange={(value) => { seteditSolutionHomeData({ ...editSolutionHomeData, desc: value }) }}
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
          <Button variant="primary" onClick={() => { setEditPopUpShow(false); editHomeSolutionDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* description showing modal */}

      <Modal size="lg" show={DescModal} onHide={() => setDescModal(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div dangerouslySetInnerHTML={{ __html: HomeSolutionDescData }} />

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

export default Solution
