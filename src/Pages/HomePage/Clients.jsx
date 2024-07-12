import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Clients = () => {
  const [clientReviewsData, setClientReviewsData] = useState([])
  const [review, setReview] = useState("")
  const [reviewPopUp, setReviewPopup] = useState(false)

  const fetchClientReviewData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-client-review-data");
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
          const response = await axios.delete(`http://localhost:8080/delete-client-review-data/${id}`);
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

  return (
    <div className='w-full bg-gray-300 h-full mx-auto p-4'>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            <th className="border p-2">Client name</th>
            <th className="border p-2">Client Review Description</th>
            <th className="border p-2">Client Job Profile</th>
            <th className="border p-2">Client Image</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {clientReviewsData.map((client, i) => (
            <tr key={i}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{client.name}</td>
              <td className="border p-2">  <FaEye className='cursor-pointer' onClick={()=>{setReviewPopup(true); setReview(client.review)}}/> </td>
              <td className="border p-2">{client.jobProfile}</td>
              <td className="border p-2"><img src={client.profileImage} alt={client.title} className='h-[50px]' /></td>

              <td className="border flex items-center justify-center">
                <button className='hover:bg-red-700 bg-[red] px-[20px] h-10 rounded-[7px] text-white shadow-md' onClick={() => { deleteClientsData(client._id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal size="lg" show={reviewPopUp} onHide={() => setReviewPopup(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <div dangerouslySetInnerHTML={{ __html: review}} />

        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => setReviewPopup(false)} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Clients
