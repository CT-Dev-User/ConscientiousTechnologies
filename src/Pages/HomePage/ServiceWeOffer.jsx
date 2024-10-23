import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ServicesCMS = () => {
  // State for handling services data
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState(null); // For editing
  const [showModal, setShowModal] = useState(false); // Modal open state
  const [showViewModal, setShowViewModal] = useState(false); // For viewing header data
  const [showViewCardModal, setShowViewCardModal] = useState(false); // For viewing card data

  // States for each form field
  const [serviceName, setServiceName] = useState('');
  const [headerTagLine, setHeaderTagLine] = useState('');
  const [headerDescription, setheaderDescription] = useState('');
  const [headerImage, setHeaderImage] = useState(null);
  const [cardImage, setCardImage] = useState(null);
  const [cardTitle, setcardTitle] = useState('');
  const [cardPoint1Heading, setCardPoint1Heading] = useState('');
  const [cardPoint1Desc, setCardPoint1Desc] = useState('');
  const [cardPoint2Heading, setCardPoint2Heading] = useState('');
  const [cardPoint2Desc, setCardPoint2Desc] = useState('');
  const [cardPoint3Heading, setCardPoint3Heading] = useState('');
  const [cardPoint3Desc, setCardPoint3Desc] = useState('');
  const [cardPoint4Heading, setCardPoint4Heading] = useState('');
  const [cardPoint4Desc, setCardPoint4Desc] = useState('');

  // States for viewing header data
  const [viewHeaderTagLine, setViewHeaderTagLine] = useState('');
  const [viewHeaderImage, setViewHeaderImage] = useState(null);
  const [viewheaderDescription, setViewheaderDescription] = useState(null);
  const [viewCardService, setviewCardService] = useState(null);

  // States for viewing card data
  const [viewCardImage, setViewCardImage] = useState(null);
  const [viewCardPoint1Heading, setViewCardPoint1Heading] = useState('');
  const [viewCardPoint1Desc, setViewCardPoint1Desc] = useState('');
  const [viewCardPoint2Heading, setViewCardPoint2Heading] = useState('');
  const [viewCardPoint2Desc, setViewCardPoint2Desc] = useState('');
  const [viewCardPoint3Heading, setViewCardPoint3Heading] = useState('');
  const [viewCardPoint3Desc, setViewCardPoint3Desc] = useState('');
  const [viewCardPoint4Heading, setViewCardPoint4Heading] = useState('');
  const [viewCardPoint4Desc, setViewCardPoint4Desc] = useState('');
  const [viewcardTitle, setviewcardTitle] = useState('');

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  // Fetch all services on mount
  useEffect(() => {
    fetchServices();
  }, []);

  // New function to open view modal for header data
  const openViewModal = (service) => {
    console.log(service)
    setViewHeaderTagLine(service.headerTagLine);
    setViewheaderDescription(service.headerDescription);
    setviewCardService(service.serviceName);

    setViewHeaderImage(service.headerImage);
    setShowViewModal(true);
  };


  const closeViewModal = () => {
    setShowViewModal(false);
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-latest-service-data');
      console.log(response.data);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  // Open the modal for adding or editing

  const openViewCardModal = (service) => {
    setviewcardTitle(service.cardTitle);
    setViewCardImage(service.cardImage);
    setViewCardPoint1Heading(service.cardPoint1Heading);
    setViewCardPoint1Desc(service.cardPoint1Desc);
    setViewCardPoint2Heading(service.cardPoint2Heading);
    setViewCardPoint2Desc(service.cardPoint2Desc);
    setViewCardPoint3Heading(service.cardPoint3Heading);
    setViewCardPoint3Desc(service.cardPoint3Desc);
    setViewCardPoint4Heading(service.cardPoint4Heading);
    setViewCardPoint4Desc(service.cardPoint4Desc);
    setShowViewCardModal(true);
  };

  const closeViewCardModal = () => {
    setShowViewCardModal(false);
  };

  const openModal = (service = null) => {
    if (service) {
      // Pre-fill form for editing
      setServiceId(service._id);
      setServiceName(service.serviceName);
      setHeaderTagLine(service.headerTagLine);
      setcardTitle(service.cardTitle);
      setheaderDescription(service.headerDescription);
      setCardPoint1Heading(service.cardPoint1Heading);
      setCardPoint1Desc(service.cardPoint1Desc);
      setCardPoint2Heading(service.cardPoint2Heading);
      setCardPoint2Desc(service.cardPoint2Desc);
      setCardPoint3Heading(service.cardPoint3Heading);
      setCardPoint3Desc(service.cardPoint3Desc);
      setCardPoint4Heading(service.cardPoint4Heading);
      setCardPoint4Desc(service.cardPoint4Desc);
    } else {
      // Clear form for adding
      clearForm();
    }
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    clearForm();
  };

  // Clear form fields
  const clearForm = () => {
    setServiceId(null);
    setServiceName('');
    setcardTitle('')
    setHeaderTagLine('');
    setheaderDescription('');
    setHeaderImage(null);
    setCardImage(null);
    setCardPoint1Heading('');
    setCardPoint1Desc('');
    setCardPoint2Heading('');
    setCardPoint2Desc('');
    setCardPoint3Heading('');
    setCardPoint3Desc('');
    setCardPoint4Heading('');
    setCardPoint4Desc('');
  };

  // Handle form submission for adding or updating
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('serviceName', serviceName);
    formData.append('headerTagLine', headerTagLine);
    formData.append('headerDescription', headerDescription);
    formData.append('headerImage', headerImage);
    formData.append('cardImage', cardImage);
    formData.append('cardTitle', cardTitle);
    formData.append('cardPoint1Heading', cardPoint1Heading);
    formData.append('cardPoint1Desc', cardPoint1Desc);
    formData.append('cardPoint2Heading', cardPoint2Heading);
    formData.append('cardPoint2Desc', cardPoint2Desc);
    formData.append('cardPoint3Heading', cardPoint3Heading);
    formData.append('cardPoint3Desc', cardPoint3Desc);
    formData.append('cardPoint4Heading', cardPoint4Heading);
    formData.append('cardPoint4Desc', cardPoint4Desc);

    try {
      if (serviceId) {
        // Update service
        await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-existing-service-data/${serviceId}`, formData);
      } else {
        // Create new service
        await axios.post('https://conscientious-technologies-backend.vercel.app/create-new-service-data', formData);
      }
      closeModal();
      fetchServices();
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  // Handle file input change
  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  // Handle service deletion

  const handleDelete = async (id) => {
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
          const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-existing-service-data-by-id/${id}`);
          if (response.status === 200) {
            // setEditId(null);
            fetchServices();
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
    <div className="p-4 bg-gray-200">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold mb-4">Services Management</h1>
        <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Service
        </button>
      </div>
      <div className="mt-4">
        <table className="w-full border-collapse border bg-white">
          <thead className='bg-gray-800 text-white'>
            <tr className='border-b'>
              <th className="border-r p-2">Service Name</th>
              <th className="border-r p-2">Header Data</th>
              <th className="border-r p-2">Card Data</th>
              <th className="border-r p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.map(service => (
              <tr key={service._id} className='border-b hover:bg-gray-300'>
                <td className="border-r p-2">{service.serviceName}</td>
                <td className="border-r p-2">
                  <button onClick={() => openViewModal(service)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border-r p-2">
                  <button onClick={() => openViewCardModal(service)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border-r p-2">
                  <button onClick={() => openModal(service)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(service._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
      <ul className="flex justify-center gap-[20px] mt-2">
        <li>
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Prev
          </button>
        </li>
        <li className="py-2 px-2 text-black font-semibold">{currentPage}</li>
        <li>
          <button
            onClick={() =>
              setCurrentPage((prevPage) =>
                Math.min(
                  prevPage + 1,
                  Math.ceil(services.length / itemsPerPage)
                )
              )
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Next
          </button>
        </li>
      </ul>
      </div>

      {/* Modal for Adding/Editing Services */}

      <Modal show={showModal} onHide={closeModal}>
        <div className='w-[50vw] mx-auto bg-white rounded-xl'>
          <Modal.Header closeButton className="bg-gray-800 text-white">
            <Modal.Title>{serviceId ? 'Edit Service' : 'Add New Service'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Service Name</label>
                <input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Header Tagline</label>
                <input
                  type="text"
                  value={headerTagLine}
                  onChange={(e) => setHeaderTagLine(e.target.value)}
                  className="w-full p-2 border rounded"

                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Header Description</label>
                <input
                  type="text"
                  value={headerDescription}
                  onChange={(e) => setheaderDescription(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Header Image</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setHeaderImage)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <h1 className='text-lg font-semibold text-black'>Card Data</h1>
              <div className="mb-4">
                <label className="block text-gray-700">Card Title</label>
                <input
                  type="text"
                  value={cardTitle}
                  onChange={(e) => setcardTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Image</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setCardImage)}
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Additional Card Points */}
              <div className="mb-4">
                <label className="block text-gray-700">Card Point 1 Heading</label>
                <input
                  type="text"
                  value={cardPoint1Heading}
                  onChange={(e) => setCardPoint1Heading(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 1 Description</label>
                <textarea
                  value={cardPoint1Desc}
                  onChange={(e) => setCardPoint1Desc(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 2 Heading</label>
                <input
                  type="text"
                  value={cardPoint2Heading}
                  onChange={(e) => setCardPoint2Heading(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 2 Description</label>
                <textarea
                  value={cardPoint2Desc}
                  onChange={(e) => setCardPoint2Desc(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 3 Heading</label>
                <input
                  type="text"
                  value={cardPoint3Heading}
                  onChange={(e) => setCardPoint3Heading(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 3 Description</label>
                <textarea
                  value={cardPoint3Desc}
                  onChange={(e) => setCardPoint3Desc(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 4 Heading</label>
                <input
                  type="text"
                  value={cardPoint4Heading}
                  onChange={(e) => setCardPoint4Heading(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Card Point 4 Description</label>
                <textarea
                  value={cardPoint4Desc}
                  onChange={(e) => setCardPoint4Desc(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className='flex justify-start gap-4'>
                <button className='py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md' type="submit">
                  {serviceId ? 'Update Service' : 'Add Service'}
                </button>
                <button className='py-2 px-4 border border-blue-500 text-blue-500  hover:bg-gray-500 hover:text-white  rounded-md' onClick={closeModal}>
                  Cancel
                </button>
              </div>

            </form>
          </Modal.Body>
        </div>

      </Modal>


      {/* Modal for Viewing Header Data */}
      <Modal show={showViewModal} onHide={closeViewModal}>
        <Modal.Header closeButton className='text-black'>
          <Modal.Title>View Header Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className="text-lg font-semibold className='text-black'"> <span className='font-bold'>Header Services :-</span> {viewCardService}</h2>

          <h2 className="text-lg font-semibold className='text-black'"> <span className='font-bold'>Header TagLine :-</span> {viewHeaderTagLine}</h2>
          <h2 className="text-lg font-semibold className='text-black'"> <span className='font-bold'>Header Description :-</span> {viewheaderDescription}</h2>
          <div> <span className='font-bold'>Header Image :-</span>
            {viewHeaderImage && (
              <img src={viewHeaderImage} alt="Header" className="mt-2 w-[150px] h-[100px]" />
            )}
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeViewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Viewing Card Data */}
      <Modal show={showViewCardModal} onHide={closeViewCardModal} >
        <Modal.Header closeButton className="bg-gray-100">
          <Modal.Title className="text-lg font-semibold">View Card Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-6 bg-white">
          <div className="mt-4">
            <h5 className="text-xl font-bold text-gray-800 underline">{viewcardTitle}</h5>
            <h5 className="text-xl font-bold text-gray-800 underline">{viewCardPoint1Heading}</h5>
            <p className="text-gray-600 mb-4">{viewCardPoint1Desc}</p>

            <h5 className="text-xl font-bold text-gray-800 underline">{viewCardPoint2Heading}</h5>
            <p className="text-gray-600 mb-4">{viewCardPoint2Desc}</p>

            <h5 className="text-xl font-bold text-gray-800 underline">{viewCardPoint3Heading}</h5>
            <p className="text-gray-600 mb-4">{viewCardPoint3Desc}</p>

            <h5 className="text-xl font-bold text-gray-800 underline">{viewCardPoint4Heading}</h5>
            <p className="text-gray-600">{viewCardPoint4Desc}</p>
          </div>
          <div className=' mt-10'>
            <h4 className='font-bold'>Card Image</h4>
            {viewCardImage && (
              <img src={viewCardImage} alt="Card" className="w-[150px] h-[150px] rounded-lg shadow-lg" />
            )}
          </div>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default ServicesCMS;
