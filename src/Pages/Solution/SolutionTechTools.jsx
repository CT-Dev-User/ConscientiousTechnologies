import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SolutionTechTools = () => {
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, seteditPopUpShow] = useState(false);
  const [editId, setEditId] = useState("");
  // const navigate = useNavigate();
  const [reliableToolData, setReliableToolsData] = useState([]);
  const [subTechModalShow, setSubTechModalShow] = useState(false);
  const [logoModalShow, setLogoModalShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reliableToolData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleSubTechModalClose = () => setSubTechModalShow(false);
  const handleSubTechModalShow = (item) => {
    setSelectedItem(item);
    setSubTechModalShow(true);
  };

  const handleLogoModalClose = () => setLogoModalShow(false);
  const handleLogoModalShow = (item) => {
    setSelectedItem(item);
    setLogoModalShow(true);
  };

  const [addReliableData, setAddReliableData] = useState({
    category: "Home",
    Subcategory: "Home Tech Tools",
    technology: "",
    subTech: [{ title: "", techLogos: [{ logo: null }] }],
  });

  const handleInputChange = (e, index, logoIndex) => {
    const { name, value, files } = e.target;
    const newData = { ...addReliableData };

    if (name === "techLogos") {
      const filesArray = Array.from(files);
      if (index !== undefined && logoIndex !== undefined) {
        newData.subTech[index].techLogos[logoIndex].logo = filesArray[0];
      }
    } else if (name === "title" && index !== undefined) {
      newData.subTech[index].title = value;
    } else {
      newData[name] = value;
    }

    setAddReliableData(newData);
  };

  const addSubTechField = () => {
    setAddReliableData((prevData) => ({
      ...prevData,
      subTech: [
        ...prevData.subTech,
        { title: "", techLogos: [{ logo: null }] },
      ],
    }));
  };

  const removeSubTechField = (index) => {
    setAddReliableData((prevData) => ({
      ...prevData,
      subTech: prevData.subTech.filter((_, i) => i !== index),
    }));
  };

  const addTechLogoField = (index) => {
    const newData = { ...addReliableData };
    newData.subTech[index].techLogos.push({ logo: null });
    setAddReliableData(newData);
  };

  const fetchReliableData = async () => {
    try {
      const response = await axios.get(
        `https://conscientious-technologies-backend.vercel.app/get-reliable-tools-data/Home`
      );
      const fetchData = response.data.data;
      setReliableToolsData(fetchData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReliableData();
  }, []);

  const addReliableDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append("category", addReliableData.category);
      formData.append("Subcategory", addReliableData.Subcategory);
      formData.append("technology", addReliableData.technology);
      formData.append("subTech", JSON.stringify(addReliableData.subTech));

      addReliableData.subTech.forEach((subTechItem, index) => {
        subTechItem.techLogos.forEach((logoItem, logoIndex) => {
          if (logoItem.logo instanceof File) {
            formData.append(`techLogos`, logoItem.logo);
          }
        });
      });

      const response = await axios.post(
        "https://conscientious-technologies-backend.vercel.app/add-reliable-tools-data",
        formData
      );
      if (response.status === 200) {
        fetchReliableData();
        setAddPopUpShow(false);
        setAddReliableData({
          category: "Home",
          Subcategory: "Home Tech Tools",
          technology: "",
          subTech: [{ title: "", techLogos: [{ logo: null }] }],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteReliableDataFunc = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://conscientious-technologies-backend.vercel.app/delete-reliable-tools-data/${id}`
          );
          if (response.status === 200) {
            // setEditId(null);
            fetchReliableData();
            Swal.fire("Deleted!", "Your data has been deleted.", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Error!",
            "Failed to delete data. Please try again later.",
            "error"
          );
        }
      }
    });
  };

  const handleEdit = (item) => {
    setEditId(item._id); // Set the ID of the item being edited
    setAddReliableData({
      category: item.category,
      Subcategory: item.Subcategory,
      technology: item.technology,
      subTech: item.subTech.map((sub) => ({
        title: sub.title,
        techLogos: sub.techLogos.map((logo) => ({ logo: logo.logo })),
      })),
    });
    seteditPopUpShow(true); // Show the edit modal
  };

  const updateReliableDataFunc = async () => {
    try {
      const formData = new FormData();
      formData.append("category", addReliableData.category);
      formData.append("Subcategory", addReliableData.Subcategory);
      formData.append("technology", addReliableData.technology);
      formData.append("subTech", JSON.stringify(addReliableData.subTech));

      addReliableData.subTech.forEach((subTechItem) => {
        subTechItem.techLogos.forEach((logoItem) => {
          if (logoItem.logo instanceof File) {
            formData.append("techLogos", logoItem.logo);
          }
        });
      });

      const response = await axios.put(
        `https://conscientious-technologies-backend.vercel.app/update-reliable-tools-data/${editId}`,
        formData
      );
      if (response.status === 200) {
        fetchReliableData();
        seteditPopUpShow(false);
        Swal.fire("Success", "Data updated successfully!", "success");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to update data. Please try again.", "error");
    }
  };


  const removeTechLogo = (subTechIndex, logoIndex) => {
    const updatedSubTech = [...addReliableData.subTech];
    updatedSubTech[subTechIndex].techLogos = updatedSubTech[
      subTechIndex
    ].techLogos.filter((_, logoIdx) => logoIdx !== logoIndex);

    setAddReliableData({
      ...addReliableData,
      subTech: updatedSubTech,
    });
  };

  return (
    <div className="w-full bg-gray-300 h-full mx-auto p-4">
      <div className="flex justify-between mb-5 mr-3 gap-x-3">
        <h1 className="text-xl font-bold">Home Reliable Technology Tools</h1>
        <Button
          onClick={() => setAddPopUpShow(true)}
          className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-0 rounded text-base font-bold"
        >
          +
        </Button>
      </div>

      <Modal show={subTechModalShow} onHide={handleSubTechModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Stacks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem &&
            selectedItem.subTech.map((subTechItem, index) => (
              <div key={index}>
                <strong>{subTechItem.title}</strong>
              </div>
            ))}
        </Modal.Body>
      </Modal>

      <Modal show={logoModalShow} onHide={handleLogoModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tools</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem &&
            selectedItem.subTech.map((subTechItem, index) => (
              <div key={index}>
                <h5 className="mt-2">{subTechItem.title}</h5>
                <div className="flex flex-wrap gap-x-[30px] gap-y-[10px]">
                  {subTechItem.techLogos.map((logoItem, logoIndex) => (
                    <div key={logoIndex}>
                      <img src={logoItem.logo} width="50" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </Modal.Body>
      </Modal>

      <table className="table-auto w-full text-sm  border-collapse border bg-white">
        <thead className="bg-gray-800 text-white">
          <tr className="text-left font-semibold border">
            <th className="px-4 py-2 border-l">Sr no</th>
            <th className="px-4 py-2 border-l">Page</th>
            <th className="px-4 py-2 border-l">Section</th>
            <th className="px-4 py-2 border-l">Tools Domain</th>
            <th className="px-4 py-2 border-l">Stack</th>
            <th className="px-4 py-2 border-l">Tools</th>
            <th className="px-4 py-2 border-l">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border">
              <td className="px-4 py-2">{index + indexOfFirstItem + 1}</td>
              <td className="px-4 py-2 border-l">{item.category}</td>
              <td className="px-4 py-2 border-l">{item.Subcategory}</td>
              <td className="px-4 py-2 border-l">{item.technology}</td>
              <td className="px-4 py-2 border-l text-green-800 hover:text-teal-600 text-lg">
                <FaEye
                  onClick={() => handleSubTechModalShow(item)}
                  className="cursor-pointer"
                />
              </td>
              <td className="px-4 py-2 border-l text-green-800 hover:text-teal-600 text-lg">
                <FaEye
                  onClick={() => handleLogoModalShow(item)}
                  className="cursor-pointer"
                />
              </td>
              <td className="px-4 py-2 border-l text-lg flex gap-3">
                <FaEdit
                  onClick={() => handleEdit(item)} // Call handleEdit with the item to edit
                  className="cursor-pointer"
                />
                <FaTrash
                  onClick={() => deleteReliableDataFunc(item._id)}
                  className="cursor-pointer text-red-500 hover:text-red-800"
                />
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
                Math.min(
                  prevPage + 1,
                  Math.ceil(reliableToolData.length / itemsPerPage)
                )
              )
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Next
          </button>
        </li>
      </ul>

      <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reliable Tools</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="technology" className="form-label font-semibold">
                Tools Domain
              </label>
              <input
                type="text"
                className="form-control"
                id="technology"
                name="technology"
                value={addReliableData.technology}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label font-semibold text-blue-600">
                Tools Stack
              </label>
              {addReliableData.subTech.map((subTechItem, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Sub Tech Title"
                    name="title"
                    value={subTechItem.title}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                  <label
                    htmlFor="Tools"
                    className="text-teal-600 font-semibold"
                  >
                    Tools
                  </label>
                  {subTechItem.techLogos.map((logoItem, logoIndex) => (
                    <div key={logoIndex} className="mb-2">
                      <input
                        type="file"
                        className="form-control"
                        name="techLogos"
                        onChange={(e) => handleInputChange(e, index, logoIndex)}
                      />
                      <button
                        type="button"
                        onClick={() => removeTechLogo(index, logoIndex)}
                        className="mb-2 p-2 bg-red-600 text-white rounded font-semibold mt-2"
                      >
                        Remove Tool{logoIndex + 1}
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="mb-2 p-2 bg-teal-600 text-white rounded font-semibold"
                      onClick={() => addTechLogoField(index)}
                    >
                      Add Tools {subTechItem.techLogos.length + 1}
                    </button>
                    <button
                      type="button"
                      className="mb-2 p-2 bg-red-600 text-white rounded font-semibold"
                      onClick={() => removeSubTechField(index)}
                    >
                      Remove Stack {index + 1}
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="mb-2 p-2 bg-blue-600 text-white rounded font-semibold"
                onClick={addSubTechField}
              >
                Add Stack {addReliableData.subTech.length + 1}
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => setAddPopUpShow(false)}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={addReliableDataFunc}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={editPopupShow} onHide={() => seteditPopUpShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Reliable Tools</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="technology" className="form-label font-semibold">
                Tools Domain
              </label>
              <input
                type="text"
                className="form-control"
                id="technology"
                name="technology"
                value={addReliableData.technology}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label font-semibold text-blue-600">
                Tools Stack
              </label>
              {addReliableData.subTech.map((subTechItem, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Sub Tech Title"
                    name="title"
                    value={subTechItem.title}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                  <label
                    htmlFor="Tools"
                    className="text-teal-600 font-semibold"
                  >
                    Tools
                  </label>
                  {subTechItem.techLogos.map((logoItem, logoIndex) => (
                    <div key={logoIndex} className="mb-2">
                      <input
                        type="file"
                        className="form-control"
                        name="techLogos"
                        onChange={(e) => handleInputChange(e, index, logoIndex)}
                      />
                      <button
                        type="button"
                        onClick={() => removeTechLogo(index, logoIndex)}
                         className="mb-2 p-2 bg-red-600 text-white rounded font-semibold mt-2"
                      >
                        Remove Tool {logoIndex + 1}
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="mb-2 p-2 bg-teal-600 text-white rounded font-semibold"
                      onClick={() => addTechLogoField(index)}
                    > 
                      Add Tools {subTechItem.techLogos.length + 1}
                    </button>
                    <button
                      type="button"
                      className="mb-2 p-2 bg-red-600 text-white rounded font-semibold"
                      onClick={() => removeSubTechField(index)}
                    >
                      Remove Stack {index + 1}
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="mb-2 p-2 bg-blue-600 text-white rounded font-semibold"
                onClick={addSubTechField}
              >
                Add Stack {addReliableData.subTech.length + 1}
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => seteditPopUpShow(false)}
          >
            Close
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={updateReliableDataFunc}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SolutionTechTools;
