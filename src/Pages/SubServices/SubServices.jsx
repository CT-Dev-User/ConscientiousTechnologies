import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SubServicesCMS = () => {
  const [subServices, setSubServices] = useState([]); // Fixed the name from 'service' to 'services'
  const [serviceId, setserviceId] = useState(null);
  const [serviceName, setserviceName] = useState('');
  const [subServiceTitle, setsubServiceTitle] = useState('')
  const [cardNo, setCardNo] = useState(0);
  const [cardTitle, setCardTitle] = useState('');
  const [cardImage, setCardImage] = useState(null);
  const [cardDescription, setCardDescription] = useState('');
  const [headerTagLine, setHeaderTagLine] = useState('');
  const [headerDescription, setheaderDescription] = useState('')
  const [headerImage, setHeaderImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page
  const [paginatedservices, setPaginatedservices] = useState([]);


  const openHeaderModal = (service) => {
    setHeaderTagLine(service.headerTagLine);
    // setCardTitle(service.cardTitle);
    setserviceName(service.serviceName);
    setHeaderImage(service.headerImage);
    setheaderDescription(service.headerDescription);
    setShowHeaderModal(true);
  };

  const closeHeaderModal = () => {
    setShowHeaderModal(false);
  };

  // Fetch all service data on mount
  useEffect(() => {
    fetchSubservices();
  }, []);

  useEffect(() => {
    setPaginatedservices(paginate(subServices, currentPage, itemsPerPage));
  }, [subServices, currentPage, itemsPerPage]);
  console.log(paginatedservices, "p")

  const fetchSubservices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get-latest-subservice-data');
<<<<<<< HEAD
      // console.log(response.data);
=======
      console.log(response.data);
>>>>>>> e39a4b8f5ac87fdafe53bd2bf34935d982055504
      setSubServices(response.data);
    } catch (error) {
      console.error('Error fetching service Data:', error);
    }
  };


  const paginate = (subServices, currentPage, itemsPerPage) => {
    if (!subServices) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return subServices.slice(startIndex, endIndex);
  };


  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(subServices.length / itemsPerPage)) setCurrentPage(currentPage + 1);
  };

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
          const response = await axios.delete(`http://localhost:8080/delete-existing-subservice-data-by-id/${id}`);
          if (response.status === 200) {
            fetchSubservices(); // Refresh the service list
            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          }
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'Failed to delete data. Please try again later.', 'error');
        }
      }
    });
  };

  const openModal = (service = null) => {
    if (service) {
      setserviceId(service._id);
      setserviceName(service.serviceName);
      setSubServices(service.subServiceTitle)
      setHeaderTagLine(service.headerTagLine);
      setCardTitle(service.cardTitle);
      setCardNo(service.cardNo)
      setheaderDescription(service.headerDescription);
      setCardDescription(service.cardDescription);
      setCardImage(null); // Reset cardImage for editing
      setHeaderImage(null); // Reset headerImage for editing
    } else {
      setserviceId(null); // Reset ID for adding a new service
      setserviceName('');
      setSubServices('')
      setHeaderTagLine('');
      setCardDescription('');
      setCardTitle('');
      setCardNo('')
      setheaderDescription('');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form fields
    setserviceId(null);
    setserviceName('');
    setSubServices('')
    setHeaderTagLine('');
    setCardDescription('');
    setCardNo('');
    setCardImage(null);
    setHeaderImage(null);
    setCardTitle('');
  };

  const openCardDataModal = (service) => {
    setCardImage(service.cardImage);
    // setCardDescription(service.cardDescription);
    setCardNo(service.cardNo);
    setCardTitle(service.cardTitle);
    setShowCardModal(true);
  };

  const closeCardDataModal = () => {
    setShowCardModal(false);
  };

  const handleFileChange = (event, setImage) => {
    setImage(event.target.files[0]); // Handle file input
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('serviceName', serviceName);
    formData.append('subServiceTitle', subServiceTitle);
    formData.append('cardNo', cardNo);
    formData.append('headerTagLine', headerTagLine);
    formData.append('headerDescription', headerDescription);
    formData.append('cardTitle', cardTitle);
    formData.append('cardDescription', cardDescription);
    if (headerImage) formData.append('headerImage', headerImage);
    if (cardImage) formData.append('cardImage', cardImage);

    try {
      if (serviceId) {
        // Update existing service
        const response = await axios.put(`http://localhost:8080/edit-existing-subservice-data/${serviceId}`, formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'service updated successfully.', 'success');
        }
      } else {
        // Create new service
        const response = await axios.post('http://localhost:8080/create-new-subservice-data', formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'New service added successfully.', 'success');
        }
      }
      fetchSubservices(); // Refresh the services list
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error!', 'Failed to save data. Please try again later.', 'error');
    }
  };

  return (
    <div className="p-4">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold mb-4">Subservice Management</h1>
        <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New SubService
        </button>
      </div>

      <div className="mt-4">
        <table className="w-full border-collapse ">
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">service Name</th>
              <th className="border p-2">Subservice Name</th>
              <th className="border p-2">Header Data</th>
              <th className="border p-2">Card Data</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedservices && Array.isArray(paginatedservices) && paginatedservices.map((service, index) => (
              <tr key={service._id}>
                <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="border p-2">{service.serviceName}</td>
                <td className="border p-2">{service.subServiceTitle}</td>
                <td className="border p-2">
                  <button onClick={() => openHeaderModal(service)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openCardDataModal(service)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openModal(service)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(service._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center gap-x-6 items-center mt-4">
          <button
            onClick={goToPreviousPage}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {subServices ? Math.ceil(subServices.length / itemsPerPage) : 0}
          </span>
          <button
            onClick={goToNextPage}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === (subServices ? Math.ceil(subServices.length / itemsPerPage) : 0) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === (subServices ? Math.ceil(subServices.length / itemsPerPage) : 0)}
          >
            Next
          </button>
        </div>


      </div>

      <Modal show={showModal} onHide={closeModal}>
        <div className='w-[50vw] mx-auto bg-white'>
          <Modal.Header closeButton className="bg-gray-100">
            <Modal.Title>{serviceId ? 'Edit service' : 'Add New service'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">service Name</label>
                <input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setserviceName(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subservice Name</label>
                <input
                  type="text"
                  value={subServiceTitle}
                  onChange={(e) => setsubServiceTitle(e.target.value)}
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
                  required
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
                  onChange={(e) => setCardTitle(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Card No</label>
                <input
                  type="number"
                  value={cardNo}
                  onChange={(e) => setCardNo(e.target.value)}
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

              <div className='flex justify-start gap-4'>
                <button className='py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md' type="submit">
                  {serviceId ? 'Update service' : 'Add service'}
                </button>
                <button className='py-2 px-4 border border-blue-500 text-blue-500 hover:bg-gray-500 hover:text-white rounded-md' onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>

      <Modal show={showHeaderModal} onHide={closeHeaderModal}>
        <Modal.Header closeButton>
          <Modal.Title>Header Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Header Tagline</label>
            <p>{headerTagLine}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Header Description</label>
            <p>{headerDescription}</p>
          </div>

          <div className="mb-4">
            <label className="lock text-gray-700 font-bold font-serif">Header Image</label>
            {headerImage && (
              <img src={headerImage} alt="Header" className="w-full h-auto rounded" />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='py-2 px-4 border border-blue-500 text-blue-500 hover:bg-gray-500 hover:text-white rounded-md' onClick={closeHeaderModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      {/* Card Data Modal */}
      <Modal show={showCardModal} onHide={closeCardDataModal}>
        <Modal.Header closeButton>
          <Modal.Title>Card Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Card Title</label>
            <p>{cardTitle}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Card Description</label>
            <p>{cardDescription}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Card No</label>
            <p>{cardNo}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Card Image</label>
            {cardImage && (
              <img src={cardImage} alt="Card" className="w-[150px] h-[150px] rounded" />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeCardDataModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default SubServicesCMS;