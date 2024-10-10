import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SolutionCMS = () => {
  const [solutions, setSolutions] = useState([]); // Fixed the name from 'solution' to 'solutions'
  const [solutionId, setSolutionId] = useState(null);
  const [solutionName, setSolutionName] = useState('');
  const [cardImage, setCardImage] = useState(null);
  const [cardDescription, setCardDescription] = useState('');
  const [headerTagLine, setHeaderTagLine] = useState('');
  const [headerImage, setHeaderImage] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);


  const openHeaderModal = (solution) => {
    setHeaderTagLine(solution.headerTagLine);
    setHeaderImage(solution.headerImage);
    setShowHeaderModal(true);
  };

  const closeHeaderModal = () => {
    setShowHeaderModal(false);
  };


  // Fetch all solution data on mount
  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/get-latest-solution-data');
      console.log(response.data);
      setSolutions(response.data);
    } catch (error) {
      console.error('Error fetching Solution Data:', error);
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
          const response = await axios.delete(`http://localhost:8080/delete-existing-solution-data-by-id/${id}`);
          if (response.status === 200) {
            fetchSolutions(); // Refresh the solution list
            Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
          }
        } catch (error) {
          console.log(error);
          Swal.fire('Error!', 'Failed to delete data. Please try again later.', 'error');
        }
      }
    });
  };

  const openModal = (solution = null) => {
    if (solution) {
      setSolutionId(solution._id);
      setSolutionName(solution.solutionName);
      setHeaderTagLine(solution.headerTagLine);
      setCardDescription(solution.cardDescription);
      setCardImage(null); // Reset cardImage for editing
      setHeaderImage(null); // Reset headerImage for editing
    } else {
      setSolutionId(null); // Reset ID for adding a new solution
      setSolutionName('');
      setHeaderTagLine('');
      setCardDescription('');
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form fields
    setSolutionId(null);
    setSolutionName('');
    setHeaderTagLine('');
    setCardDescription('');
    setCardImage(null);
    setHeaderImage(null);
  };

  const openCardDataModal = (solution) => {
    setCardImage(solution.cardImage);
    setCardDescription(solution.cardDescription);
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
    formData.append('solutionName', solutionName);
    formData.append('headerTagLine', headerTagLine);
    formData.append('cardDescription', cardDescription);
    if (headerImage) formData.append('headerImage', headerImage);
    if (cardImage) formData.append('cardImage', cardImage);

    try {
      if (solutionId) {
        // Update existing solution
        const response = await axios.put(`http://localhost:8080/edit-solution-data/${solutionId}`, formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'Solution updated successfully.', 'success');
        }
      } else {
        // Create new solution
        const response = await axios.post('http://localhost:8080/create-new-solution-data', formData);
        if (response.status === 200) {
          Swal.fire('Success!', 'New solution added successfully.', 'success');
        }
      }
      fetchSolutions(); // Refresh the solutions list
      closeModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error!', 'Failed to save data. Please try again later.', 'error');
    }
  };

  return (
    <div className="p-4">
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold mb-4">Solutions Management</h1>
        <button onClick={() => openModal()} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New Solution
        </button>
      </div>

      <div className="mt-4">
        <table className="w-full border-collapse ">
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className="border p-2">Solution Name</th>
              <th className="border p-2">Header Data</th>
              <th className="border p-2">Card Data</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {solutions.map(solution => (
              <tr key={solution._id}>
                <td className="border p-2">{solution.solutionName}</td>
                <td className="border p-2">
                  <button onClick={() => openHeaderModal(solution)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openCardDataModal(solution)} className="bg-blue-950 text-white px-2 py-1 rounded mr-2">View</button>
                </td>
                <td className="border p-2">
                  <button onClick={() => openModal(solution)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                  <button onClick={() => handleDelete(solution._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <div className='w-[50vw] mx-auto bg-white'>
          <Modal.Header closeButton className="bg-gray-100">
            <Modal.Title>{solutionId ? 'Edit Solution' : 'Add New Solution'}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Solution Name</label>
                <input
                  type="text"
                  value={solutionName}
                  onChange={(e) => setSolutionName(e.target.value)}
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
                  {solutionId ? 'Update Solution' : 'Add Solution'}
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

export default SolutionCMS;