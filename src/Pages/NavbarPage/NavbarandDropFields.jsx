import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const NavbarandDropFields = () => {
  const navigate = useNavigate()
  const { navcategory } = useParams();
  const [fieldsByCategory, setFieldsByCategory] = useState([]);
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [addnavFields, setAddNavFields] = useState({ navCategory: navcategory, navSubcategory: "" });
  const [editnavFields, seteditNavFields] = useState({ navCategory: navcategory, navSubcategory: "" });
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [dropdown, setDropdown] = useState([])
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fieldsByCategory.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const SubCategoryDropdown = async (navcategory) => {
    if (navcategory === "Technologies") {
      setDropdown("")
    } else if (navcategory === "Solutions") {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-solution-we-offer-data')
      setDropdown(response.data.getData)
    } else if (navcategory === "Services") {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-service-data')
      setDropdown(response.data.getData)
    } else if (navcategory === "Industries") {
      const response = await axios.get('https://conscientious-technologies-backend.vercel.app/get-industries-data')
      setDropdown(response.data.getData)
    }

  }
  useEffect(() => {
    SubCategoryDropdown(navcategory);
  }, [navcategory])


  const fetchNavByCategory = async (navcategory) => {
    try {
      const response = await axios.get(`https://conscientious-technologies-backend.vercel.app/get-navigation-by-navCategory/${navcategory}`);
      setFieldsByCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNavByCategory(navcategory);
  }, [navcategory]);

  const addNavFiledsDataFunc = async () => {
    try {
      const response = await axios.post("https://conscientious-technologies-backend.vercel.app/add-navigation", addnavFields);
      // console.log(response)
      if (response.status === 200) {
        fetchNavByCategory()
        setAddPopUpShow(false);
        setAddNavFields({ navCategory: navcategory, navSubcategory: "" });
        // Reset form fields
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editNavFieldsFunc = async () => {
    try {
      const formData = new FormData();
      formData.append('navCategory', navcategory);
      formData.append('navSubCategory', editnavFields.navSubcategory);

      const response = await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-navigation-by-id//${editId}`, formData)
      if (response.status === 200) {
        fetchNavByCategory();
        setEditPopUpShow(false);

        seteditNavFields({ navCategory: navcategory, navSubcategory: "" });
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

  const deleteNavData = async (id) => {
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
          const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-navigation-by-id/${id}`);
          if (response.status === 200) {
            setEditId(null);
            fetchNavByCategory();
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
    <div className='w-full bg-gray-300 h-full mx-auto p-4'>
      <div className="flex justify-end mb-5 mr-3 gap-x-3">
        <Button onClick={() => navigate('/conscientious-navbar')} className='bg-blue-100 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Back</Button>
        <Button onClick={() => setAddPopUpShow(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded'>Add dropdown fields Data</Button>
      </div>

      <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Navbar Dropdowns Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">

            {dropdown ? <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Navigation fields</label>
              <select className="mb-4" onChange={(e) => { setAddNavFields({ ...addnavFields, navSubcategory: e.target.value }) }}>
                <option>--select {navcategory}--</option>
                {dropdown.map((item, index) => {
                  return (
                    <option key={index} value={item.title}>
                      {item.title}
                    </option>
                  )
                })}
              </select></fieldset> : <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Navigation fields</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"  onChange={(e) => { setAddNavFields({ ...addnavFields, navSubcategory: e.target.value }) }} />
            </fieldset>}


          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => { setAddPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => { setAddPopUpShow(false); addNavFiledsDataFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit dropdowns fields</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
           
            {dropdown ? <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Navigation fields</label>
              <select className="mb-4" onChange={(e) => { seteditNavFields({ ...editnavFields, navSubcategory: e.target.value }) }}>
                <option>--select {navcategory}--</option>
                {dropdown.map((item, index) => {
                  return (
                    <option key={index} value={item.title}>
                      {item.title}
                    </option>
                  )
                })}
              </select>
            </fieldset>: <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Navigation fields</label>
              <input type="text" name="title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { seteditNavFields({ ...editnavFields, navSubcategory: e.target.value }) }}/>
            </fieldset>}
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={() => { setEditPopUpShow(false) }} className="text-gray-700 hover:text-gray-900">Close</Button>
          <Button variant="primary" onClick={() => { setEditPopUpShow(false); editNavFieldsFunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Sr. No</th>
            {/* <th className="border p-2">Faq Category</th> */}
            <th className="border p-2">dropdown fields of {navcategory}</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((nav, i) => (
            <tr key={nav._id}>
              <td className="border p-2">{i + indexOfFirstItem + 1}</td>
              <td className="border p-2">{nav.navSubcategory}</td>
              {/* <td className="border p-2">{faq.question}</td> */}
              <td className="border flex items-center justify-start gap-[20px] p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { setEditPopUpShow(true); setEditId(nav._id) }}>Edit</button>
                <button className='hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md' onClick={() => deleteNavData(nav._id)}>Delete</button>
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
        {[...Array(Math.ceil(fieldsByCategory.length / itemsPerPage)).keys()].map(number => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number + 1)} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">{number + 1}</button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(fieldsByCategory.length / itemsPerPage)))} className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white">Next</button>
        </li>
      </ul>
    </div>
  );
};



export default NavbarandDropFields;
