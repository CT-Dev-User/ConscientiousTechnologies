import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Clients = () => {
  const [clientReviewsData, setClientReviewsData] = useState([])
  const [review, setReview] = useState("")
  const [reviewPopUp, setReviewPopup] = useState(false)

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [name, setName] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [rating, setRating] = useState(0)
  const [selectedClientId, setSelectedClientId] = useState(null);
  const [reviewHeading, setReviewHeading] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientReviewsData.slice(indexOfFirstItem, indexOfLastItem);

  const fetchClientReviewData = async () => {
    try {
      const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-client-review-data");
      setClientReviewsData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClientReviewData();
  }, []);

  const deleteClientsData = (id) => {
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
          const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-client-review-data/${id}`);
          if (response.status === 200) {
            fetchClientReviewData()
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

  // Handle add/edit form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('review', review);
    formData.append('jobProfile', jobProfile);
    formData.append('rating', rating);
    formData.append('reviewHeading', reviewHeading);
    if (profileImage) formData.append('profileImage', profileImage);

    try {
      if (selectedClientId) {
        console.log("ok")
        // Edit existing client
        await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-client-review-data/${selectedClientId}`, formData);

        Swal.fire('Success', 'Client review updated successfully!', 'success');
      } else {
        // Add new client
        await axios.post('https://conscientious-technologies-backend.vercel.app/add-client-review-data', formData);
        Swal.fire('Success', 'Client review added successfully!', 'success');
      }
      fetchClientReviewData();
      setShowAddModal(false);
      setShowEditModal(false);


      //Reset form fields
      setName('');
      setReview('');
      setJobProfile('');
      setRating(0);
      setProfileImage(null);
      setReviewHeading('');
      setReviewPopup(false);

    } catch (error) {
      console.log(error);
      Swal.fire('Error', 'Failed to submit data. Please try again.', 'error');
    }
  };

  // Handle opening edit modal
  const handleEdit = (client) => {
    setSelectedClientId(client._id);
    setName(client.name);
    setReview(client.review);
    setRating(client.rating);
    setJobProfile(client.jobProfile);
    setReviewHeading(client.reviewHeading);
    setProfileImage(null); // Clear image upload for editing
    setShowEditModal(true);
  };




  return (
    <div className='w-full bg-gray-300 h-full mx-auto p-4'>
      <div className='flex justify-between'>
        <h1 className="text-xl font-bold">Meet Our Client Data</h1>
        <button onClick={() => setShowAddModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded my-3">Add Client Review</button>
      </div>

      <table className="w-full border-collapse border">
        <thead className="bg-gray-800 text-white">
          <tr className="border-b">
            <th className="border-r p-2">Sr. No</th>
            <th className="border-r p-2">Client name</th>
            <th className="border-r p-2">Job Profile</th>
            <th className="border-r p-2">Review Heading</th>
            <th className="border-r p-2">Rating</th>
            <th className="border-r p-2">Image</th>
            <th className="border-r p-2">Review Description</th>
            <th className="border-r p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((client, i) => (
            <tr key={i}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{client.name}</td>
              <td className="border p-2">{client.jobProfile}</td>
              <td className="border p-2">{client.reviewHeading}</td>
              <td className="border p-2">{client.rating}</td>
              <td className="border p-2"><img src={client.profileImage} alt={client.title} className='h-[50px]' /></td>
              <td className="border p-2">  <FaEye className='cursor-pointer' onClick={() => { setReviewPopup(true); setReview(client.review) }} /> </td>

              <td className="border flex items-center justify-center h-full">
                <button onClick={() => handleEdit(client)} className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>Edit</button>

                <button className='hover:bg-red-700 bg-[red] px-2 py-1 rounded text-white shadow-md' onClick={() => { deleteClientsData(client._id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {/* Pagination */}
        <ul className="flex justify-center gap-[20px] mt-[90px]">
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
                Math.min(prevPage + 1, Math.ceil(clientReviewsData.length / itemsPerPage))
              )
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Next
          </button>
        </li>
      </ul>
      <Modal size="lg" show={reviewPopUp} onHide={() => setReviewPopup(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div dangerouslySetInnerHTML={{ __html: review }} />

        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setReviewPopup(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton className='bg-gray-800 text-white'>
          <Modal.Title>Add Client Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Label>Review Heading</Form.Label>
              <Form.Control type="text" value={reviewHeading} onChange={(e) => setReviewHeading(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Job Profile</Form.Label>
              <Form.Control type="text" value={jobProfile} onChange={(e) => setJobProfile(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
            </Form.Group>

            <button className="bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-700" type="submit" >Submit</button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton className='bg-gray-800 text-white'>
          <Modal.Title>Edit Client Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Review</Form.Label>
              <Form.Control as="textarea" rows={3} value={review} onChange={(e) => setReview(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Job Profile</Form.Label>
              <Form.Control type="text" value={jobProfile} onChange={(e) => setJobProfile(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Review Heading</Form.Label>
              <Form.Control type="text" value={reviewHeading} onChange={(e) => setReviewHeading(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
            </Form.Group>
            <button className="bg-blue-500 text-white px-4 py-1 rounded mt-4 hover:bg-blue-700" type="submit" >Update</button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Clients
