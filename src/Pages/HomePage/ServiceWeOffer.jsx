import React from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalBody } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa'
const ServiceWeOffer = () => {
  const [homeServiceData, setHomeServiceData] = useState([]);
  const [addHomeServiceData, setAddHomeServiceData] = useState({ title: "", images: "", points: [] });
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [addSelectedFile, setAddSelectedFile] = useState(null);

  const [editHomeServiceData, setEditHomeServiceData] = useState({ title: "", images: "", points: [] });
  const [editPopUpShow, setEditPopUpShow] = useState(false)
  const [EditSelectedFile, setEditSelectedFile] = useState(null)
  const [editId, setEditId] = useState(null)
  const addEditor = useRef(null);
  const editEditor = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const [HomeServiceDescData, setHomeServiceDescData] = useState(null)

  const handleAddPoint = () => {
    setAddHomeServiceData({
      ...addHomeServiceData,
      points: [...addHomeServiceData.points, { title: "", description: "" }]
    });
  };


  // Function to update title or description of a point in addHomeServiceData
  const handlePointChange = (index, field, value) => {
    const updatedPoints = [...addHomeServiceData.points];
    updatedPoints[index][field] = value;
    setAddHomeServiceData({ ...addHomeServiceData, points: updatedPoints });
  };

  const handleAddfileChange = (e) => {
    setAddHomeServiceData({ ...addHomeServiceData, images: e.target.files[0] });
    setAddSelectedFile(e.target.files[0]);
  };

  const [descModal, setDescModal] = useState(false)


  const addHomeServiceDatafunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addHomeServiceData.title);
      formData.append('images', addHomeServiceData.images);
      formData.append('points', JSON.stringify(addHomeServiceData.points)); // Convert points array to string before sending

      const response = await axios.post("http://localhost:8080/add-service-data", formData);
      if (response.status === 200) {
        // Assuming you want to fetch updated data after adding
        fetchHomeServiceData();
        setAddPopUpShow(false);
        setAddHomeServiceData({ title: "", ServiceHomePageimage: "", desc: "", points: [] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHomeServiceData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-service-data");
      setHomeServiceData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditPointChange = (index, field, value) => {
    const updatedPoints = [...editHomeServiceData.points];
    updatedPoints[index][field] = value;
    setEditHomeServiceData({ ...editHomeServiceData, points: updatedPoints });
  };

  // Function to add a new point in editHomeServiceData
  const handleEditAddPoint = () => {
    setEditHomeServiceData({
      ...editHomeServiceData,
      points: [...editHomeServiceData.points, { title: "", description: "" }]
    });
  };

  const handleEditFileChange = (e) => {
    setEditHomeServiceData({ ...editHomeServiceData, images: e.target.files[0] });
    setEditSelectedFile(e.target.files[0])
  }

  const editHomeServiceDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', editHomeServiceData.title);
      formData.append('images', editHomeServiceData.images);
      formData.append('desc', editHomeServiceData.desc);
      formData.append('points', JSON.stringify(editHomeServiceData.points)); // Convert points array to string before sending

      const response = await axios.put(`http://localhost:8080/edit-service-data/${editId}`, formData);
      if (response.status === 200) {
        setEditPopUpShow(false);
        fetchHomeServiceData();
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



  const deleteHomeServiceData = async (id) => {
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
          const response = await axios.delete(`http://localhost:8080/delete-service-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            fetchHomeServiceData();
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
    fetchHomeServiceData();
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = homeServiceData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="w-full bg-gray-300 h-full mx-auto p-4">
      <div className="flex justify-end mb-5 mr-3">
        <Button onClick={() => setAddPopUpShow(true)} className='className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"'>Add Services</Button>
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
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => setAddHomeServiceData({ ...addHomeServiceData, title: e.target.value })} />
            </fieldset>

            <fieldset className="mb-4">
              <label htmlFor="ServiceHomePageimage" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="ServiceHomePageimage" id="ServiceHomePageimage" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleAddfileChange} />
                <label htmlFor="ServiceHomePageimage" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {addSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setAddSelectedFile(null)}>
                      <AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(addSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{addSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>

            {/* Render input fields for points */}
            {addHomeServiceData.points.map((point, index) => (
              <div key={index}>
                <fieldset className="mb-4">
                  <label htmlFor={`point-title-${index}`} className="block text-gray-700 font-bold">Point Title</label>
                  <input type="text" id={`point-title-${index}`} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={point.title} onChange={(e) => handlePointChange(index, 'title', e.target.value)} />
                </fieldset>
                <fieldset className="mb-4">
                  <label htmlFor={`point-description-${index}`} className="block text-gray-700 font-bold">Point Description</label>
                  <JoditEditor
                    value={point.description}
                    onChange={(value) => handlePointChange(index, 'description', value)}
                  />
                </fieldset>
              </div>
            ))}
            <button type="button" onClick={handleAddPoint}>Add Point</button>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setAddPopUpShow(false)} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => { addHomeServiceDatafunc(); setAddPopUpShow(false) }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>



      {/* Edit Service Data */}
      <Modal show={editPopUpShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Service Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="edit-title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" id="edit-title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={editHomeServiceData.title} onChange={(e) => setEditHomeServiceData({ ...editHomeServiceData, title: e.target.value })} />
            </fieldset>

            {/* Edit file input field */}
            <fieldset className="mb-4">
              <label htmlFor="edit-image" className="block font-bold">Image</label>
              <div className="relative">
                <input type="file" name="edit-image" id="edit-image" className="form-input block w-full rounded-md hidden overflow-hidden" aria-describedby="edit-file-upload-label" onChange={handleEditFileChange} />
                <label htmlFor="edit-image" id="edit-file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                {EditSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700 mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
                      <AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(EditSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{EditSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>

            {/* Edit points input fields */}
            <fieldset className="mb-4">
              <label className="block font-bold">Points</label>
              {editHomeServiceData.points.map((point, index) => (
                <div key={index}>
                  <fieldset className="mb-2">
                    <label htmlFor={`edit-point-title-${index}`} className="block text-gray-700 font-bold">Point Title</label>
                    <input type="text" id={`edit-point-title-${index}`} className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" value={point.title} onChange={(e) => handleEditPointChange(index, 'title', e.target.value)} />
                  </fieldset>
                  <fieldset className="mb-2">
                    <label htmlFor={`edit-point-description-${index}`} className="block text-gray-700 font-bold">Point Description</label>
                    <JoditEditor
                      value={point.description}
                      onChange={(value) => handleEditPointChange(index, 'description', value)}
                    />
                  </fieldset>
                </div>
              ))}
              <button type="button" onClick={handleEditAddPoint}>Add Point</button>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setEditPopUpShow(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
          <Button variant="primary" onClick={() => { setEditPopUpShow(false); editHomeServiceDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal size="md" show={descModal} onHide={() => setDescModal(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Service Description</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          {HomeServiceDescData && HomeServiceDescData.map((point, index) => (
            <li key={index} className="mb-4 list-none">
              <h3 className="text-lg font-semibold underline">{point.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: point.description }} /> {/* Display description */}
            </li>
          ))}
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
            <th className="border p-2">Service Title</th>
            <th className="border p-2">Service Description</th>
            <th className="border p-2">Service Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((homeServData, i) => (
            <tr key={i}>
              <td className="border p-2">{i + indexOfFirstItem + 1}</td>
              <td className="border p-2">{homeServData.title}</td>
              <td className="border p-2">
                <FaEye onClick={() => { setHomeServiceDescData(homeServData.points); setDescModal(true) }} className='usersor-pointer' />
              </td>
              <td className="border p-2"><img src={homeServData.ServiceHomePageimage} alt={homeServData.title} className='h-[50px]' /></td>
              <td className="border p-2 flex gap-x-[20px]">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditId(homeServData._id); setEditPopUpShow(true) }}>Edit</button>
                <button className=' hover:bg-red-700 bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => { deleteHomeServiceData(homeServData._id) }}>Delete</button>
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
        {[...Array(Math.ceil(homeServiceData.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(homeServiceData.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>

    </div>
  );
};

export default ServiceWeOffer;
