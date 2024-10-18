import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const KeyFeature = () => {
  const [KeyFeatureData, setKeyFeatureData] = useState([]);
  const [addKeyFeatureData, setAddKeyFeatureData] = useState({
    keyFeatureTitle: "",
    point_one_Title: "",
    point_one_Desc: "",
    point_two_Title: "",
    point_two_Desc: "",
    point_three_Title: "",
    point_three_Desc: "",
    keyFeatureImag: "",
  });
  const [editKeyFeatureData, setEditKeyFeatureData] = useState({
    keyFeatureTitle: "",
    point_one_Title: "",
    point_one_Desc: "",
    point_two_Title: "",
    point_two_Desc: "",
    point_three_Title: "",
    point_three_Desc: "",
    keyFeatureImag: "",
  });
  const [addKeyFeatureshow, setAddKeyFeatureShow] = useState(false);
  const [editKeyFeatureShow, setEditKeyFeatureShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [editSelectedFile, setEditSelectedFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [editId, setEditId] = useState(null);
  const [pointOneShow, setPointOneShow] = useState(false);
  const [pointTwoShow, setPointTwoShow] = useState(false);
  const [pointThreeShow, setPointThreeShow] = useState(false);

  const [pointOneData, setPointOneData] = useState({
    title: "",
    description: "",
  });
  const [pointTwoData, setPointTwoData] = useState({
    title: "",
    description: "",
  });
  const [pointThreeData, setPointThreeData] = useState({
    title: "",
    description: "",
  });

  const handleKeyFeatureDataClose = () => {
    setAddKeyFeatureShow(false);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setAddKeyFeatureData((prevState) => ({
      ...prevState,
      keyFeatureImag: file,
    }));
  };

  // Function to handle showing point one modal
  const handlePointOneShow = () => setPointOneShow(true);

  // Function to handle showing point two modal
  const handlePointTwoShow = () => setPointTwoShow(true);

  // Function to handle showing point three modal
  const handlePointThreeShow = () => setPointThreeShow(true);

  const handleKeyFeatureDataShow = () => setAddKeyFeatureShow(true);

  // Function to handle closing modals

  const handleEditKeyFeatureDataShow = () => setEditKeyFeatureShow(true);
  const handleEditKeyFeatureDataClose = () => {
    setEditKeyFeatureShow(false);
  };

  const handleEditFileChange = (event) => {
    const file = event.target.files[0];
    setEditSelectedFile(file);
    setEditKeyFeatureData((prevState) => ({
      ...prevState,
      keyFeatureImag: file,
    }));
  };

  const addHomeKeyFeatureDatafunc = async () => {
    try {
      const formData = new FormData();
      formData.append("keyFeatureTitle", addKeyFeatureData.keyFeatureTitle);
      formData.append("point_one_Title", addKeyFeatureData.point_one_Title);
      formData.append("point_one_Desc", addKeyFeatureData.point_one_Desc);
      formData.append("point_two_Title", addKeyFeatureData.point_two_Title);
      formData.append("point_two_Desc", addKeyFeatureData.point_two_Desc);
      formData.append("point_three_Title", addKeyFeatureData.point_three_Title);
      formData.append("point_three_Desc", addKeyFeatureData.point_three_Desc);
      formData.append("keyFeatureImag", addKeyFeatureData.keyFeatureImag);

      const response = await axios.post(
        "https://conscientious-technologies-backend.vercel.app/add-key-feature-data",
        formData
      );
      if (response.status === 200) {
        setAddKeyFeatureShow(false);
        setAddKeyFeatureData({
          keyFeatureTitle: "",
          point_one_Title: "",
          point_one_Desc: "",
          point_two_Title: "",
          point_two_Desc: "",
          point_three_Title: "",
          point_three_Desc: "",
          keyFeatureImag: "",
        });
        fetchKeyFeatureData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchKeyFeatureData = async () => {
    try {
      const response = await axios.get(
        "https://conscientious-technologies-backend.vercel.app/get-key-feature-data"
      );
      setKeyFeatureData(response.data.getdata);
      console.log(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKeyFeatureData();
  }, []);

  const editKeyFeaturefunc = async () => {
    console.log(editKeyFeatureShow);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save these changes?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const formData = new FormData();
          formData.append(
            "keyFeatureTitle",
            editKeyFeatureData.keyFeatureTitle
          );
          formData.append(
            "point_one_Title",
            editKeyFeatureData.point_one_Title
          );
          formData.append("point_one_Desc", editKeyFeatureData.point_one_Desc);
          formData.append(
            "point_two_Title",
            editKeyFeatureData.point_two_Title
          );
          formData.append("point_two_Desc", editKeyFeatureData.point_two_Desc);
          formData.append(
            "point_three_Title",
            editKeyFeatureData.point_three_Title
          );
          formData.append(
            "point_three_Desc",
            editKeyFeatureData.point_three_Desc
          );
          formData.append("keyFeatureImag", editKeyFeatureData.keyFeatureImag);

          const response = await axios.put(
            `https://conscientious-technologies-backend.vercel.app/update-key-feature-data/${editId}`,
            formData
          );
          if (response.status === 200) {
            setEditId(null);
            handleEditKeyFeatureDataClose();
            fetchKeyFeatureData();
            Swal.fire("Saved!", "Your changes have been saved.", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire(
            "Error!",
            "Failed to save changes. Please try again later.",
            "error"
          );
        }
      }
    });
  };

  const deleteKeyfeatureData = async (id) => {
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
            `https://conscientious-technologies-backend.vercel.app/delete-key-feature-data/${id}`
          );
          if (response.status === 200) {
            setEditId(null);
            fetchKeyFeatureData();
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

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = KeyFeatureData.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div className="w-full h-auto bg-gray-200 p-2">
      <div className="flex justify-between mb-2 mt-2">
        <h1 className="text-3xl font-bold">Key Feature</h1>
        <button
          onClick={setAddKeyFeatureShow}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg hover:scale-[1.1]"
        >
          +
        </button>
      </div>
      {/* add hero section modal */}
      <Modal show={addKeyFeatureshow} onHide={handleKeyFeatureDataShow}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Add Key Feature Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">
                Key Feature Title
              </label>
              <input
                type="text"
                name="keyFeatureTitle"
                id="title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    keyFeatureTitle: e.target.value,
                  });
                }}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-one-title"
                className="block text-gray-700 font-bold"
              >
                Point One Title
              </label>
              <input
                type="text"
                name="point_one_Title"
                id="point-one-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_one_Title: e.target.value,
                  });
                }}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-one-desc"
                className="block text-gray-700 font-bold"
              >
                Point One Description
              </label>
              <textarea
                name="point_one_Desc"
                id="point-one-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_one_Desc: e.target.value,
                  });
                }}
              ></textarea>
            </fieldset>

            <fieldset className="mb-4">
              <label
                htmlFor="point-two-title"
                className="block text-gray-700 font-bold"
              >
                Point two Title
              </label>
              <input
                type="text"
                name="point_two_Title"
                id="point-two-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_two_Title: e.target.value,
                  });
                }}
              />
            </fieldset>

            <fieldset className="mb-4">
              <label
                htmlFor="point-two-desc"
                className="block text-gray-700 font-bold"
              >
                Point two Description
              </label>
              <textarea
                name="point_two_Desc"
                id="point-two-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_two_Desc: e.target.value,
                  });
                }}
              ></textarea>
            </fieldset>

            <fieldset className="mb-4">
              <label
                htmlFor="point-three-title"
                className="block text-gray-700 font-bold"
              >
                Point three Title
              </label>
              <input
                type="text"
                name="point_three_Title"
                id="point-three-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_three_Title: e.target.value,
                  });
                }}
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-three-desc"
                className="block text-gray-700 font-bold"
              >
                Point Three Description
              </label>
              <textarea
                name="point_three_Desc"
                id="point-three-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                onChange={(e) => {
                  setAddKeyFeatureData({
                    ...addKeyFeatureData,
                    point_three_Desc: e.target.value,
                  });
                }}
              ></textarea>
            </fieldset>

            {/* Add similar fields for other key feature points */}
            <fieldset className="mb-4">
              <label htmlFor="key-feature-image" className="block font-bold">
                Key Feature Image
              </label>
              <div className="relative">
                <div>
                  <input
                    type="file"
                    name="keyFeatureImage"
                    id="key-feature-image"
                    className="form-input w-full rounded-md hidden overflow-hidden"
                    aria-describedby="file-upload-label"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="key-feature-image"
                    id="file-upload-label"
                    className="cursor-pointer  hover:bg-blue-700 font-bold py-2 px-4 rounded-md border"
                  >
                    Upload File
                  </label>
                </div>
                {selectedFile && (
                  <div className="ml-2 mt-4">
                    <button
                      className="text-red-500 hover:text-red-700  mt-1 ms-[110px] "
                      onClick={() => setSelectedFile(null)}
                    >
                      <AiOutlineClose />
                    </button>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected File"
                      className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2"
                    />
                    <p className="text-gray-700">{selectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button
            variant="secondary"
            onClick={handleKeyFeatureDataClose}
            className="text-gray-700 hover:text-gray-900"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleKeyFeatureDataClose();
              addHomeKeyFeatureDatafunc();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Point One modal */}
      <Modal show={pointOneShow} onHide={() => setPointOneShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Point One Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <h4>Title : {pointOneData.title}</h4>
          <p>Desc : {pointOneData.description}</p>{" "}
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button
            variant="secondary"
            onClick={() => setPointOneShow(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setPointOneShow(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Point Two modal */}
      <Modal show={pointTwoShow} onHide={() => setPointTwoShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Point Two Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <h4>{pointTwoData.title}</h4>
          <p>{pointTwoData.description}</p>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button
            variant="secondary"
            onClick={() => setPointTwoShow(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setPointTwoShow(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Point Three modal */}
      <Modal show={pointThreeShow} onHide={() => setPointThreeShow(false)}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Point Three Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <h5>
            {" "}
            <span className="text-underline"> Title : </span>{" "}
            {pointThreeData.title}
          </h5>
          <p>
            {" "}
            <span className="text-underline">
              Description : {pointThreeData.description}{" "}
            </span>
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button
            variant="secondary"
            onClick={() => setPointThreeShow(false)}
            className="text-gray-700 hover:text-gray-900"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setPointThreeShow(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* edit hero section modal */}
      <Modal show={editKeyFeatureShow} onHide={handleEditKeyFeatureDataClose}>
        <Modal.Header closeButton className="bg-gray-800 text-white">
          <Modal.Title>Edit Key Feature Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <form className="mx-auto max-w-lg">
            <fieldset className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold">
                Key Feature Title
              </label>
              <input
                type="text"
                name="keyFeatureTitle"
                placeholder="Key Feature Title"
                id="title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.keyFeatureTitle}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    keyFeatureTitle: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-one-title"
                className="block text-gray-700 font-bold"
              >
                Point One Title
              </label>
              <input
                type="text"
                name="point_one_Title"
                id="point-one-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_one_Title}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_one_Title: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-one-desc"
                className="block text-gray-700 font-bold"
              >
                Point One Description
              </label>
              <textarea
                name="point_one_Desc"
                id="point-one-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_one_Desc}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_one_Desc: e.target.value,
                  })
                }
              ></textarea>
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-two-title"
                className="block text-gray-700 font-bold"
              >
                Point Two Title
              </label>
              <input
                type="text"
                name="point_one_Title"
                id="point-two-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_two_Title}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_two_Title: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-two-desc"
                className="block text-gray-700 font-bold"
              >
                Point two Description
              </label>
              <textarea
                name="point_two_Desc"
                id="point-two-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_two_Desc}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_two_Desc: e.target.value,
                  })
                }
              ></textarea>
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-three-title"
                className="block text-gray-700 font-bold"
              >
                Point three Title
              </label>
              <input
                type="text"
                name="point_three_Title"
                id="point-three-title"
                className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_three_Title}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_three_Title: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="mb-4">
              <label
                htmlFor="point-three-desc"
                className="block text-gray-700 font-bold"
              >
                Point three Description
              </label>
              <textarea
                name="point_three_Desc"
                id="point-three-desc"
                cols="30"
                rows="2"
                className="form-textarea mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                value={editKeyFeatureData.point_three_Desc}
                onChange={(e) =>
                  setEditKeyFeatureData({
                    ...editKeyFeatureData,
                    point_three_Desc: e.target.value,
                  })
                }
              ></textarea>
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="key-feature-image" className="block font-bold">
                Key Feature Image
              </label>
              <div className="relative">
                <div>
                  <input
                    type="file"
                    name="keyFeatureImage"
                    id="key-feature-image"
                    className="form-input w-full rounded-md hidden overflow-hidden"
                    aria-describedby="file-upload-label"
                    onChange={handleEditFileChange}
                  />
                  <label
                    htmlFor="key-feature-image"
                    id="file-upload-label"
                    className="cursor-pointer border hover:bg-blue-700 font-bold py-2 px-4 rounded-md"
                  >
                    Upload File
                  </label>
                </div>
                {editSelectedFile && (
                  <div className="ml-2 mt-4">
                    <button
                      className="text-red-500 hover:text-red-700  mt-1 ms-[110px] "
                      onClick={() => setEditSelectedFile(null)}
                    >
                      <AiOutlineClose />
                    </button>
                    <img
                      src={URL.createObjectURL(editSelectedFile)}
                      alt="Selected File"
                      className="w-24 h-14 object-cover rounded-md border border-gray-300 mt-2"
                    />
                    <p className="text-gray-700">{editSelectedFile.name}</p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </Modal.Body>
        <Modal.Footer className="bg-gray-100">
          <Button
            variant="secondary"
            onClick={handleEditKeyFeatureDataClose}
            className="text-gray-700 hover:text-gray-900"
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEditKeyFeatureDataClose();
              editKeyFeaturefunc();
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="w-[100%] bg-white p-2">
        <table className="w-full z-10 border border-collapse">
          <thead className="z-10 bg-gray-800 text-white">
            <tr>
              <th className="border-r p-2 ">Sr. No</th>
              <th className="border-r p-2 ">Key Feature Title</th>
              <th className="border-r p-2">Key Feature Image</th>
              <th className="border-r p-2 ">Point One</th>
              <th className="border-r p-2">Point Two</th>
              <th className="border-r p-2">Point Three</th>
              <th className="border-r p-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border">
                <td className="border-r p-1 w-16">
                  {index + indexOfFirstItem + 1}
                </td>
                <td className="border-r p-1 w-72">{item.keyFeatureTitle}</td>
                {/* <td className="border p-1 w-[500px]">{item.point_one_Desc}</td> */}
                <td className="border-r p-1 w-24">
                  <img
                    src={item.keyFeatureImag}
                    alt={item.keyFeatureTitle}
                    className="w-[70px] h-[70px]"
                  />
                </td>
                <td className="border-r p-1">
                  <FaEye
                    onClick={() => {
                      handlePointOneShow();
                      setPointOneData({
                        title: item.point_one_Title,
                        description: item.point_one_Desc,
                      });
                    }}
                  />
                </td>

                <td className="border-r p-1">
                  <FaEye
                    onClick={() => {
                      handlePointTwoShow();
                      setPointTwoData({
                        title: item.point_two_Title,
                        description: item.point_two_Desc,
                      });
                    }}
                  />
                </td>
                <td className="border-r p-1">
                  <FaEye
                    onClick={() => {
                      handlePointThreeShow();
                      setPointThreeData({
                        title: item.point_three_Title,
                        description: item.point_three_Desc,
                      });
                    }}
                  />
                </td>

                <td className="p-1 flex gap-x-2 w-50">
                  <button
                    onClick={() => {
                      handleEditKeyFeatureDataShow();
                      setEditId(item._id);
                      setEditKeyFeatureData({
                        keyFeatureTitle: item.keyFeatureTitle,
                        keyFeatureImag: item.keyFeatureImag,
                        point_one_Title: item.point_one_Title,
                        point_one_Desc: item.point_one_Desc,
                        point_two_Title: item.point_two_Title,
                        point_two_Desc: item.point_two_Desc,
                        point_three_Title: item.point_three_Title,
                        point_three_Desc: item.point_three_Desc,
                      })
                    }}
                    className="px-2 py-1 bg-blue-500 hover:bg-blue-800 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteKeyfeatureData(item._id)}
                    className="bg-red-500 hover:bg-red-800 px-2 py-1 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
        {/* Pagination */}
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
                  Math.ceil(KeyFeatureData.length / itemsPerPage)
                )
              )
            }
            className="bg-blue-500 hover:bg-blue-700 py-2 px-2 rounded text-white font-semibold"
          >
            Next
          </button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default KeyFeature;
