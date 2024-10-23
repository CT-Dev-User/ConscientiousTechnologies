import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ConsultationData = () => {
  const [consultationData, setConsultationData] = useState([])
  const [message, setMessage] = useState(null)
  const [messageModal, setMessageModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = consultationData.slice(indexOfFirstItem, indexOfLastItem);
  const fetchConsultationData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-book-free-con-data");
      setConsultationData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteConsultationData = async (id) => {
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
                const response = await axios.delete(`http://localhost:8080/delete-book-free-con-data/${id}`);
                if (response.status === 200) {
                  fetchConsultationData()
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

  useEffect(() => {
    fetchConsultationData();
  }, []);

  return (
    <div className='w-full bg-gray-300 h-full mx-auto p-4'>
      <div className='flex justify-start'>
         <h1 className='text-2xl font-bold mb-4'>Consultation Data</h1>
      </div>
      <table className="w-full border-collapse border bg-white">
        <thead className='bg-gray-800 text-white'>
          <tr className="border-b">
            <th className="border-r p-2">Sr. No</th>
            <th className="border-r p-2">Full Name</th>
            <th className="border-r p-2">Company Name</th>
            <th className="border-r p-2">Work Email</th>
            <th className="border-r p-2">Work Name</th>
            <th className="border-r p-2">Message</th>
            <th className="border-r p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems && currentItems.map((data, i) => (
            <tr key={data._id} className="border-b">
              <td className="border-r p-2">{data.fullName}</td>
              <td className="border-r p-2">{data.companyName}</td>
              <td className="border-r p-2">{data.workEmail}</td>
              <td className="border-r p-2">{data.workName}</td>
              <td className="border-r p-2" > <FaEye onClick={()=>{setMessage(data.message); setMessageModal(true)}}/></td>
              <td className="border flex items-center justify-start gap-[20px] p-2">
                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={()=>{deleteConsultationData(data._id)}}>Delete</button>
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
                Math.min(prevPage + 1, Math.ceil(consultationData.length / itemsPerPage))
              )
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Next
          </button>
        </li>
      </ul>
      <Modal size="md" show={messageModal} onHide={() => setMessageModal(false)}>
                <Modal.Header closeButton className="bg-gray-800 text-white">
                    <Modal.Title>Edit Hero Section Data</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-white">
                    <div dangerouslySetInnerHTML={{ __html: message }} />

                </Modal.Body>
                <Modal.Footer className="bg-gray-100">
                    <Button variant="secondary" onClick={() => setMessageModal(false)} className="text-gray-700 hover:text-gray-900">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default ConsultationData
