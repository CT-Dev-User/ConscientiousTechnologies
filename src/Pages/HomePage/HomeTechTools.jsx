import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const HomeTechTools = () => {
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const navigate = useNavigate();
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
        `http://localhost:8080/get-reliable-tools-data/Home`
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
        "http://localhost:8080/add-reliable-tools-data",
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
            `http://localhost:8080/delete-reliable-tools-data/${id}`
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

  return (
    <div className="w-full bg-gray-300 h-full mx-auto p-4">
      <div className="flex justify-between mb-5 mr-3 gap-x-3">
        <h1 className="text-xl font-bold">Reliable Tools</h1>
        <Button
          onClick={() => setAddPopUpShow(true)}
          className="bg-blue-500 hover:bg-blue-800 text-white px-2 py-0 rounded text-base font-bold"
        >
          +
        </Button>
      </div>

      <Modal show={subTechModalShow} onHide={handleSubTechModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sub Tech</Modal.Title>
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
          <Modal.Title>Tech Logos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem &&
            selectedItem.subTech.map((subTechItem, index) => (
              <div key={index}>
                <h5 className="mt-2">{subTechItem.title}</h5>
                <div className="flex flex-wrap gap-x-[30px] gap-y-[10px]">
                  {subTechItem.techLogos.map((logoItem, logoIndex) => (
                    <div key={logoIndex}>
                      <img src={logoItem.logo} width="50" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </Modal.Body>
      </Modal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>category</th>
            <th>Subcategory</th>
            <th>Technology</th>
            <th>Sub Tech</th>
            <th>Tech Logos</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{index + indexOfFirstItem + 1}</td>
              <td>{item.category}</td>
              <td>{item.Subcategory}</td>
              <td>{item.technology}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleSubTechModalShow(item)}
                >
                  View Sub Tech
                </Button>
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleLogoModalShow(item)}
                >
                  View Tech Logos
                </Button>
              </td>
              <td>
                {/* <Button variant="warning" onClick={() => handleEditPopupShow(item)}>Edit</Button> */}
                <Button
                  variant="danger"
                  onClick={() => deleteReliableDataFunc(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination */}
      <ul className="flex justify-center gap-[20px] mt-[90px]">
        <li>
          <button
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
            className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
          >
            Previous
          </button>
        </li>
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
            className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
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
              <label htmlFor="category" className="form-label">
                category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={addReliableData.category}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Subcategory" className="form-label">
                Subcategory
              </label>
              <input
                type="text"
                className="form-control"
                id="Subcategory"
                name="Subcategory"
                value={addReliableData.Subcategory}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="technology" className="form-label">
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
              <label className="form-label">Tools Stack</label>
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
                  {subTechItem.techLogos.map((logoItem, logoIndex) => (
                    <div key={logoIndex} className="mb-2">
                      <input
                        type="file"
                        className="form-control"
                        name="techLogos"
                        onChange={(e) => handleInputChange(e, index, logoIndex)}
                      />
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    className="mb-2"
                    onClick={() => addTechLogoField(index)}
                  >
                    Add Tool Logo
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => removeSubTechField(index)}
                  >
                    Remove Tool Stack
                  </Button>
                </div>
              ))}
              <Button variant="secondary" onClick={addSubTechField}>
                Add Tool Stack
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAddPopUpShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addReliableDataFunc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HomeTechTools;
