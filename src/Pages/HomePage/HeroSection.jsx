import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const HeroSection = () => {
  const [homeHeroData, setHeroData] = useState([]);
  const [addHeroHomeData, setAddHeroHomeData] = useState({ title: "", herosliderImage: "", heroHomedesc: "" });
  const [editHeroData, setEditHeroData] = useState({ title: "", herosliderImage: "", heroHomedesc: "" });
  const [addHeroshow, setAddHeroShow] = useState(false);
  const [editHeroShow, setEditHeroShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [editSelectedFile, setEditSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [editId, setEditId] = useState(null);



  const handleAddHeroDataClose = () => {
    setAddHeroShow(false);
    setSelectedFile(null);
  };

  const handleEditHeroDataClose = () => {
    setEditHeroShow(false);
  };

  const handleAddHeroDataShow = () => setAddHeroShow(true);

  const handleEditHeroDataShow = () => setEditHeroShow(true);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setAddHeroHomeData(prevState => ({ ...prevState, herosliderImage: file }));
  };

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    setEditSelectedFile(file);
    setEditHeroData(prevState => ({ ...prevState, herosliderImage: file }));
  };

  const addHomeHeroDatafunc = async () => {
    try {
      const formData = new FormData();
      formData.append('title', addHeroHomeData.title);
      formData.append('heroHomedesc', addHeroHomeData.heroHomedesc);
      formData.append('herosliderImage', addHeroHomeData.herosliderImage);

      const response = await axios.post("https://conscientious-technologies-backend.vercel.app/add-heroslider-data", formData);
      if (response.status === 200) {
        setAddHeroShow(false);
        setAddHeroHomeData({ title: "", herosliderImage: "", heroHomedesc: "" });
        fetchHomeHeroData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchHomeHeroData = async () => {
    try {
      const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-heroslider-data");
      setHeroData(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHomeHeroData();
  }, []);
  const editHomeHeroDatafunc = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to save these changes?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const formData = new FormData();
          formData.append("title", editHeroData.title);
          formData.append("heroHomedesc", editHeroData.heroHomedesc);
          formData.append("herosliderImage", editHeroData.herosliderImage);

          const response = await axios.put(`https://conscientious-technologies-backend.vercel.app/edit-heroslider-data/${editId}`, formData);
          if (response.status === 200) {
            setEditId(null);
            handleEditHeroDataClose();
            fetchHomeHeroData();
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
    });
  };

  const deleteHomeHeroData = async (id) => {
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
          const response = await axios.delete(`https://conscientious-technologies-backend.vercel.app/delete-heroslider-data/${id}`);
          if (response.status === 200) {
            setEditId(null);
            fetchHomeHeroData();
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

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = homeHeroData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div className="w-full h-auto bg-gray-200">
      <div className="float-right text-[white] mb-2 mr-[20px] hover:scale-[1.1] mt-2">
        <Button onClick={handleAddHeroDataShow}>+</Button>
      </div>



      {/* add hero section modal */}
      <Modal show={addHeroshow} onHide={handleAddHeroDataClose}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="hero_title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddHeroHomeData({ ...addHeroHomeData, title: e.target.value }) }} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-desc" className="block text-gray-700 font-bold">Hero Home Description</label>
              <textarea name="hero_home_desc" id="hero-home-desc" cols="30" rows="2" className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setAddHeroHomeData({ ...addHeroHomeData, heroHomedesc: e.target.value }) }}></textarea>
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-image" className="block font-bold">Hero Home Image</label>
              <div className="relative">
                <div>
                  <input type="file" name="hero_image" id="hero-home-image" className="form-input w-full rounded-md hidden overflow-hidden" aria-describedby="file-upload-label" onChange={handleFileChange} />
                  <label htmlFor="hero-home-image" id="file-upload-label" className="cursor-pointer  hover:bg-blue-700 font-bold py-2 px-4 rounded-md border">Upload File</label>
                </div>
                {selectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setSelectedFile(null)}>
                      < AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(selectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{selectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={handleAddHeroDataClose} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleAddHeroDataClose(); addHomeHeroDatafunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* edit hero section modal */}
      <Modal show={editHeroShow} onHide={handleEditHeroDataClose}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Hero Section Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">Title</label>
              <input type="text" name="hero_title" id="title" className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setEditHeroData({ ...editHeroData, title: e.target.value }) }} />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-desc" className="block text-gray-700 font-bold">Hero Home Description</label>
              <textarea name="hero_home_desc" id="hero-home-desc" cols="30" rows="2" className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500" onChange={(e) => { setEditHeroData({ ...editHeroData, heroHomedesc: e.target.value }) }}></textarea>
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="hero-home-image" className="block font-bold">Hero Home Image</label>
              <div className="relative">
                <div>
                  <input type="file" name="hero_image" id="hero-home-image" className="form-input  block w-full rounded-md overflow-hidden" aria-describedby="file-upload-label" onChange={handleEditFileChange} />
                  <label htmlFor="hero-home-image" id="file-upload-label" className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md ">Upload File</label>
                </div>
                {editSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button className="text-red-500 hover:text-red-700  mt-1 ms-[110px] " onClick={() => setEditSelectedFile(null)}>
                      < AiOutlineClose />
                    </button>
                    <img src={URL.createObjectURL(editSelectedFile)} alt="Selected File" className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2" />
                    <p className="text-gray-700">{editSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button variant="secondary" onClick={handleEditHeroDataClose} className="text-gray-700 hover:text-gray-900">
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleEditHeroDataClose(); editHomeHeroDatafunc() }} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="w-[100%] bg-[white]">
        <table className="w-full z-10">
          <thead className='z-10'>
            <tr>
              <th className="border p-2 w-16">Sr. No</th>
              <th className="border p-2 w-72">HeroSection Title</th>
              <th className="border p-2 w-72">HeroSection HomePageDesc</th>
              <th className="border p-2 w-24">HeroSection HomeImage</th>
              <th className="border p-2 w-72">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td className="border p-1 w-16">{index + indexOfFirstItem + 1}</td>
                <td className="border p-1 w-72">{item.title}</td>
                <td className="border p-1 w-[500px]">{item.heroHomedesc}</td>
                <td className="border p-1 w-24">
                  <img src={item.herosliderImage} alt={item.title} className="w-full h-[80%]" />
                </td>
                <td className="border p-1 flex gap-x-2 w-50">
                  <Button onClick={() => { handleEditHeroDataShow(); setEditId(item._id); }}>Edit</Button>
                  <Button onClick={() => deleteHomeHeroData(item._id)} className='bg-red-500'>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <ul className="flex justify-center mt-4">
          {[...Array(Math.ceil(homeHeroData.length / itemsPerPage)).keys()].map(number => (
            <li key={number} className="mx-1">
              <button onClick={() => paginate(number + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{number + 1}</button>
            </li>
          ))}
        </ul>
      </div>



    </div>
  );
};

export default HeroSection;
