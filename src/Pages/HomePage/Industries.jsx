import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const IndustryCMS = () => {
  const [Industrys, setIndustrys] = useState([]); // Fixed the name from 'Industry' to 'Industrys'
  const [IndustryId, setIndustryId] = useState(null);
  const [IndustryName, setIndustryName] = useState('');
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
  const [paginatedIndustrys, setPaginatedIndustrys] = useState([]);


  const openHeaderModal = (Industry) => {
    setHeaderTagLine(Industry.headerTagLine);
    // setCardTitle(Industry.cardTitle);
    setIndustryName(Industry.IndustryName);
    setHeaderImage(Industry.headerImage);
    setheaderDescription(Industry.headerDescription);
    setShowHeaderModal(true);
  };

  const closeHeaderModal = () => {
    setShowHeaderModal(false);
  };

  // Fetch all Industry data on mount
  useEffect(() => {
    fetchIndustrys();
  }, []);

  useEffect(() => {
    setPaginatedIndustrys(paginate(Industrys, currentPage, itemsPerPage));
  }, [Industrys, currentPage, itemsPerPage]);

  const fetchIndustrys = async () => {
    try {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-latest-industry-data');
      console.log(response.data);
      setIndustrys(response.data);
    } catch (error) {
      console.error('Error fetching Industry Data:', error);
    }
  };


  const paginate = (Industrys, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return Industrys.slice(startIndex, endIndex);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(Industrys.length / itemsPerPage)) setCurrentPage(currentPage + 1);
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
          const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-existing-industry-data-by-id/${id}`);
          if (response.status === 200) {
            fetchIndustrys(); // Refresh the Industry list
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
      setIndustryId(Industry._id);
      setIndustryName(Industry.industryName);
      setHeaderTagLine(Industry.headerTagLine);
      setCardTitle(Industry.cardTitle);
      setheaderDescription(Industry.headerDescription);
      setCardDescription(Industry.cardDescription);
      setCardImage(null); // Reset cardImage for editing
      setHeaderImage(null); // Reset headerImage for editing
    } else {
      setIndustryId(null); // Reset ID for adding a new Industry
      setIndustryName('');
      setHeaderTagLine('');
      setCardDescription('');
      setCardTitle('');
      setheaderDescription('');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form fields
    setIndustryId(null);
    setIndustryName('');
    setHeaderTagLine('');
    setCardDescription('');
    setCardImage(null);
    setHeaderImage(null);
    setCardTitle('');
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
    formData.append('industryName', IndustryName);
    formData.append('headerTagLine', headerTagLine);
    formData.append('headerDescription', headerDescription);
    formData.append('cardTitle',  cardTitle);
    formData.append('cardDescription', cardDescription);
    if (headerImage) formData.append('headerImage', headerImage);
    if (cardImage) formData.append('cardImage', cardImage);

    try {
      if (IndustryId) {
        // Update existing Industry
        const response = await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-existing-industry-data/${IndustryId}`, formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'Industry updated successfully.', 'success');
        }
      } else {
        // Create new Industry
        const response = await axios.post('https://conscientious-technologies-backend.vercel.app/create-new-industry-data', formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'New Industry added successfully.', 'success');
        }
      }
      fetchIndustrys(); // Refresh the Industrys list
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error!', 'Failed to save data. Please try again later.', 'error');
    }
  };

  return (
    <div className="p-4">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold mb-4">Industry Management</h1>
        <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Industry
        </button>
      </div>

      <div className="mt-4">
        <table className="w-full border-collapse ">
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className="border p-2">Sr No.</th>
              <th className="border p-2">Industry Name</th>
              <th className="border p-2">Header Data</th>
              <th className="border p-2">Card Data</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedIndustrys.map((Industry, index) => (
              <tr key={Industry._id}>
                <td className="border p-2">{(currentPage - 1) * itemsPerPage + index + 1}</td>
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

        <div className="flex justify-center gap-x-6 items-center mt-4">
          <button
            onClick={goToPreviousPage}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {Math.ceil(Industrys.length / itemsPerPage)}
          </span>
          <button
            onClick={goToNextPage}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${currentPage === Math.ceil(Industrys.length / itemsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === Math.ceil(Industrys.length / itemsPerPage)}
          >
            Next
          </button>
        </div>


      </div>

      <Modal show={showModal} onHide={closeModal}>
        <div className='w-[50vw] mx-auto bg-white'>
          <Modal.Header closeButton className="bg-gray-100">
            <Modal.Title>{IndustryId ? 'Edit Industry' : 'Add New Industry'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Industry Name</label>
                <input
                  type="text"
                  value={IndustryName}
                  onChange={(e) => setIndustryName(e.target.value)}
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
                  {IndustryId ? 'Update Industry' : 'Add Industry'}
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

export default IndustryCMS;