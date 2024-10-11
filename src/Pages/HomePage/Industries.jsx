import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const IndustryCMS = () => {
  const [Industries, setIndustries] = useState([]); // Fixed the name from 'Industry' to 'Industries'
  const [industryId, setindustryId] = useState(null);
  const [industryName, setindustryName] = useState('');
  const [cardImage, setCardImage] = useState(null);
  const [cardDescription, setCardDescription] = useState('');
  const [headerTagLine, setHeaderTagLine] = useState('');
  const [headerImage, setHeaderImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);


  const openHeaderModal = (Industry) => {
    setHeaderTagLine(Industry.headerTagLine);
    setHeaderImage(Industry.headerImage);
    setShowHeaderModal(true);
  };

  const closeHeaderModal = () => {
    setShowHeaderModal(false);
  };


  // Fetch all Industry data on mount
  useEffect(() => {
    fetchIndustries();
  }, []);

  const fetchIndustries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get-latest-industry-data');
      console.log(response.data);
      setIndustries(response.data);
    } catch (error) {
      console.error('Error fetching Industry Data:', error);
    }
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
          const response = await axios.delete(`http://localhost:8080/delete-existing-Industry-data-by-id/${id}`);
          if (response.status === 200) {
            fetchIndustries(); // Refresh the Industry list
            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          }
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'Failed to delete data. Please try again later.', 'error');
        }
      }
    });
  };

  const openModal = (Industry = null) => {
    if (Industry) {
      setindustryId(Industry._id);
      setindustryName(Industry.industryName);
      setHeaderTagLine(Industry.headerTagLine);
      setCardDescription(Industry.cardDescription);
      setCardImage(null); // Reset cardImage for editing
      setHeaderImage(null); // Reset headerImage for editing
    } else {
      setindustryId(null); // Reset ID for adding a new Industry
      setindustryName('');
      setHeaderTagLine('');
      setCardDescription('');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form fields
    setindustryId(null);
    setindustryName('');
    setHeaderTagLine('');
    setCardDescription('');
    setCardImage(null);
    setHeaderImage(null);
  };

  const openCardDataModal = (Industry) => {
    setCardImage(Industry.cardImage);
    setCardDescription(Industry.cardDescription);
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
    formData.append('industryName', industryName);
    formData.append('headerTagLine', headerTagLine);
    formData.append('cardDescription', cardDescription);
    if (headerImage) formData.append('headerImage', headerImage);
    if (cardImage) formData.append('cardImage', cardImage);

    try {
      if (industryId) {
        // Update existing Industry
        const response = await axios.put(`http://localhost:8080/edit-existing-industry-data/${industryId}`, formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'Industry updated successfully.', 'success');
        }
      } else {
        // Create new Industry
        const response = await axios.post('http://localhost:8080/create-new-industry-data', formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'New Industry added successfully.', 'success');
        }
      }
      fetchIndustries(); // Refresh the Industries list
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error!', 'Failed to save data. Please try again later.', 'error');
    }
  };

  return (
    <div className="p-4">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold mb-4">Industries Management</h1>
        <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Industry
        </button>
      </div>

      <div className="mt-4">
        <table className="w-full border-collapse ">
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className="border p-2">Industry Name</th>
              <th className="border p-2">Header Data</th>
              <th className="border p-2">Card Data</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Industries.map(Industry => (
              <tr key={Industry._id}>
                <td className="border p-2">{Industry.industryName}</td>
                <td className="border p-2">
                  <button onClick={() => openHeaderModal(Industry)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openCardDataModal(Industry)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openModal(Industry)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(Industry._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <div className='w-[50vw] mx-auto bg-white'>
          <Modal.Header closeButton className="bg-gray-100">
            <Modal.Title>{industryId ? 'Edit Industry' : 'Add New Industry'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Industry Name</label>
                <input
                  type="text"
                  value={industryName}
                  onChange={(e) => setindustryName(e.target.value)}
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
                <label className="block text-gray-700">Header Image</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, setHeaderImage)}
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

              <div className="mb-4">
                <label className="block text-gray-700">Card Description</label>
                <textarea
                  value={cardDescription}
                  onChange={(e) => setCardDescription(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className='flex justify-start gap-4'>
                <button className='py-2 px-4 bg-blue-500 text-white hover:bg-blue-700 rounded-md' type="submit">
                  {industryId ? 'Update Industry' : 'Add Industry'}
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
            <label className="lock text-gray-700 font-bold font-serif">Header Image</label>
            {headerImage && (
              <img src={headerImage} alt="Header" className="w-[400px] h-[150px] rounded" />
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
            <label className="block text-gray-700 font-bold font-serif">Card Description</label>
            <p>{cardDescription}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold font-serif">Card Image</label>
            {cardImage && (
              <img src={cardImage} alt="Card" className="w-[150px] h-[150px] rounded" />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='py-2 px-4 border border-blue-500 text-blue-500 hover:bg-gray-500 hover:text-white rounded-md' onClick={closeCardDataModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>


    </div>
  );
};

export default IndustryCMS;