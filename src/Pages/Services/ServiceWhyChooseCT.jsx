import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contextAPI/UserContext";
const Spinner = () => (
  <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-700 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-700 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
            <div class="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);
const ServiceWhyChooseCT = () => {
  const router = useNavigate();
  const [userauth] = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userauth || !userauth.token) {
      router("/"); // Redirect to login page if not authenticated
    } else {
      fetchServices();
      fetchSliderDataByCategory();
    }
  }, [userauth, router]);
  const [sliderDataByCaregory, setsliderDataByCaregory] = useState([]);
  const [sliderData, setsliderData] = useState([]);
  const [services, setServices] = useState([]);
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [addSliderData, setAddSliderData] = useState({
    category: "",
    Subcategory: "",
    heading: "",
    subtitle: "",
    logoHeading: "",
    images: [],
    points: [],
  });
  const [editSliderData, seteditSliderData] = useState({
    category: "",
    Subcategory: "",
    heading: "",
    subtitle: "",
    logoHeading: "",
    images: [],
    points: [],
  });
  const [logosPopUp, setLogosPopUp] = useState(false);
  const [pointsPopUp, setPointsPopUp] = useState(false);
  const [editId, setEditId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [sliderImages, setSliderImages] = useState([]);
  const [sliderPoints, setSliderPoints] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sliderData
    ? sliderData.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "https://conscientious-technologies-backend.vercel.app/get-latest-service-data"
      );
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSliderDataByCategory = async () => {
    setLoading(true);
    setsliderDataByCaregory([]);
    setsliderData([]);
    try {
      const response = await axios.get(
        `https://conscientious-technologies-backend.vercel.app/get-choose-ct-slider-data/Service`
      );
      console.log(response.data.data);
      setsliderDataByCaregory(response.data.data);
      setsliderData(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Error fetching data");
      console.log(error);
    }
  };

  const handleAddSliderDataChange = (field, value) => {
    setAddSliderData({ ...addSliderData, [field]: value });
  };

  const handleAddFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...addSliderData.images];
    updatedImages[index] = files[0]; // Replace existing file or add new one if it doesn't exist
    setAddSliderData({ ...addSliderData, images: updatedImages });
  };

  const handleAddImageField = () => {
    setAddSliderData({
      ...addSliderData,
      images: [...addSliderData.images, null],
    });
  };

  const handleAddPoint = () => {
    setAddSliderData({
      ...addSliderData,
      points: [...addSliderData.points, { title: "" }],
    });
  };

  const handlePointChange = (index, field, value) => {
    const updatedPoints = [...addSliderData.points];
    updatedPoints[index][field] = value;
    setAddSliderData({ ...addSliderData, points: updatedPoints });
  };

  const handleEditSliderDataChange = (field, value) => {
    seteditSliderData({ ...editSliderData, [field]: value });
  };

  const handleEditFileChange = (e, index) => {
    const files = Array.from(e.target.files);
    const updatedImages = [...editSliderData.images];
    updatedImages[index] = files[0]; // Replace existing file or add new one if it doesn't exist
    seteditSliderData({ ...editSliderData, images: updatedImages });
  };

  const handleEditImageField = () => {
    seteditSliderData({
      ...editSliderData,
      images: [...editSliderData.images, null],
    });
  };

  const handleEditPoint = () => {
    seteditSliderData({
      ...editSliderData,
      points: [...editSliderData.points, { title: "" }],
    });
  };

  const handleEditPointChange = (index, field, value) => {
    const updatedPoints = [...editSliderData.points];
    updatedPoints[index][field] = value;
    seteditSliderData({ ...editSliderData, points: updatedPoints });
  };

  const addSliderDataFunc = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("category", "Service"); // Ensure this is needed, otherwise remove it
      formData.append("Subcategory", addSliderData.Subcategory);
      formData.append("heading", addSliderData.heading);
      formData.append("subtitle", addSliderData.subtitle);
      formData.append("logoHeading", addSliderData.logoHeading);

      // Append images
      for (let i = 0; i < addSliderData.images.length; i++) {
        formData.append("images", addSliderData.images[i]);
      }

      // Convert points array to JSON string before sending
      formData.append("points", JSON.stringify(addSliderData.points));
      console.log([...formData]); // Log FormData object to check its contents

      const response = await axios.post(
        "https://conscientious-technologies-backend.vercel.app/add-choose-ct-slider-data",
        formData
      );

      if (response.status === 200) {
        fetchSliderDataByCategory();
        setAddPopUpShow(false);
        setAddSliderData({
          category: "",
          Subcategory: "",
          heading: "",
          subtitle: "",
          logoHeading: "",
          images: [],
          points: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editSliderDataFunc = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("category", "Service");
      formData.append("Subcategory", editSliderData.Subcategory);
      formData.append("heading", editSliderData.heading);
      formData.append("subtitle", editSliderData.subtitle);
      formData.append("logoHeading", editSliderData.logoHeading);

      for (let i = 0; i < editSliderData.images.length; i++) {
        formData.append("images", editSliderData.images[i]);
      }

      formData.append("points", JSON.stringify(editSliderData.points));

      const response = await axios.put(
        `https://conscientious-technologies-backend.vercel.app/edit-choose-ct-slider-data/${editId}`,
        formData
      );
      console.log(response.status);
      if (response.status === 200) {
        fetchSliderDataByCategory();
        setEditPopUpShow(false);
        seteditSliderData({
          category: "",
          Subcategory: "",
          heading: "",
          subtitle: "",
          logoHeading: "",
          images: [],
          points: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHeaderData = async (id) => {
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
            `https://conscientious-technologies-backend.vercel.app/delete-choose-ct-slider-data/${id}`
          );
          if (response.status === 200) {
            setEditId(null);
            fetchSliderDataByCategory();
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
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="w-full h-full mx-auto p-4 bg-gray-200">
          <div className="flex justify-between mb-5 mr-3 gap-x-3">
            <h1 className="text-xl font-bold text-black">
              Service Why Choose CT
            </h1>
            <select
              name=""
              onChange={(e) => {
                if (e.target.value === "All services") {
                  setsliderData(sliderDataByCaregory); // Show all FAQs
                } else {
                  setsliderData(
                    sliderDataByCaregory.filter(
                      (item) => item.Subcategory === e.target.value
                    )
                  );
                }
              }}
              className="p-2 border rounded"
              id=""
            >
              <option value="All services">All services</option>
              {services.map((service, index) => (
                <option key={index} value={service.serviceName}>
                  {service.serviceName}
                </option>
              ))}
            </select>
            <Button
              onClick={() => setAddPopUpShow(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded"
            >
              Add Slider Data
            </Button>
          </div>

          <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Add Slider Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={addSliderDataFunc} className="mx-auto max-w-lg">
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    SubCategory
                  </label>

                  <select
                    onChange={(e) =>
                      setAddSliderData({
                        ...addSliderData,
                        Subcategory: e.target.value,
                      })
                    }
                    value={addSliderData.Subcategory}
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500 py-2 px-1"
                  >
                    <option>Select Service</option>
                    {services.map((item, index) => (
                      <option key={index} value={item.serviceName}>
                        {item.serviceName}
                      </option>
                    ))}
                  </select>

                  {/* <input type="text" className="form-control" id="Subcategory" name="Subcategory" value={addSliderData.Subcategory} onChange={(e) => { setAddSliderData({ ...addSliderData, Subcategory: e.target.value }) }} /> */}
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={addSliderData.heading}
                    onChange={(e) =>
                      handleAddSliderDataChange("heading", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={addSliderData.subtitle}
                    onChange={(e) =>
                      handleAddSliderDataChange("subtitle", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Logo Heading
                  </label>
                  <input
                    type="text"
                    value={addSliderData.logoHeading}
                    onChange={(e) =>
                      handleAddSliderDataChange("logoHeading", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset>
                  <label>Images</label>
                  {addSliderData.images.map((image, index) => (
                    <div key={index} className="my-2">
                      <input
                        type="file"
                        onChange={(e) => handleAddFileChange(e, index)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="border border-black px-2 py-1"
                    onClick={handleAddImageField}
                  >
                    Add Image
                  </button>
                </fieldset>

                {/* Render input fields for points */}
                <fieldset className="mt-5">
                  {addSliderData.points.map((point, index) => (
                    <div key={index}>
                      <fieldset className="mb-4">
                        <label className="block text-gray-700 font-bold">
                          Point Title
                        </label>
                        <input
                          type="text"
                          value={point.title}
                          onChange={(e) =>
                            handlePointChange(index, "title", e.target.value)
                          }
                          className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                        />
                      </fieldset>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="border border-black px-2 py-1"
                    onClick={handleAddPoint}
                  >
                    Add Point
                  </button>
                </fieldset>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded flex mx-auto"
                >
                  Save
                </button>
              </form>
            </Modal.Body>
          </Modal>
          <Modal
            size="lg"
            show={logosPopUp}
            onHide={() => setLogosPopUp(false)}
          >
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Slider Logos</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <div className="flex flex-wrap  gap-4">
                {sliderImages.map((image, index) => (
                  <div className="w-[70px] border border-gray-300 p-2">
                    <img
                      key={index}
                      src={image.logo}
                      alt={`Logo ${index}`}
                      className="w-full  h-auto"
                    />
                  </div>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer className="bg-gray-100">
              <Button
                variant="secondary"
                onClick={() => setLogosPopUp(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            size="lg"
            show={pointsPopUp}
            onHide={() => setPointsPopUp(false)}
          >
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Slider Points</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-white">
              <ul className="list-disc pl-5">
                {sliderPoints.map((point, index) => (
                  <li key={index}>{point.title}</li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer className="bg-gray-100">
              <Button
                variant="secondary"
                onClick={() => setPointsPopUp(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
            <Modal.Header closeButton className="bg-gray-800 text-white">
              <Modal.Title>Edit Slider Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={editSliderDataFunc} className="mx-auto max-w-lg">
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    SubCategory
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="Subcategory"
                    name="Subcategory"
                    value={editSliderData.Subcategory}
                    onChange={(e) =>
                      handleEditSliderDataChange("Subcategory", e.target.value)
                    }
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Heading
                  </label>
                  <input
                    type="text"
                    value={editSliderData.heading}
                    onChange={(e) =>
                      handleEditSliderDataChange("heading", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={editSliderData.subtitle}
                    onChange={(e) =>
                      handleEditSliderDataChange("subtitle", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset className="mb-4">
                  <label className="block text-gray-700 font-bold">
                    Logo Heading
                  </label>
                  <input
                    type="text"
                    value={editSliderData.logoHeading}
                    onChange={(e) =>
                      handleEditSliderDataChange("logoHeading", e.target.value)
                    }
                    className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                  />
                </fieldset>
                <fieldset>
                  <label>Images</label>
                  {editSliderData.images.map((image, index) => (
                    <div key={index} className="my-2">
                      <input
                        type="file"
                        onChange={(e) => handleEditFileChange(e, index)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    className="border border-black px-2 py-1"
                    onClick={handleEditImageField}
                  >
                    Add Image
                  </button>
                </fieldset>
                {/* Render input fields for points */}
                <fieldset className="mt-5">
                  {editSliderData.points.map((point, index) => (
                    <div key={index}>
                      <fieldset className="mb-4">
                        <label className="block text-gray-700 font-bold">
                          Point Title
                        </label>
                        <input
                          type="text"
                          value={point.title}
                          onChange={(e) =>
                            handleEditPointChange(
                              index,
                              "title",
                              e.target.value
                            )
                          }
                          className="form-input mt-1 block w-full rounded-md border border-gray-300 focus:border-blue-500"
                        />
                      </fieldset>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="border border-black px-2 py-1"
                    onClick={handleEditPoint}
                  >
                    Add Point
                  </button>
                </fieldset>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded flex mx-auto"
                >
                  Save
                </button>
              </form>
            </Modal.Body>
          </Modal>
          <table className="w-full border-collapse border h-auto py-5 bg-white">
            <thead className="bg-gray-800 text-white">
              <tr className="border-b">
                <th className="border-r p-2">Sr. No</th>
                <th className="border-r p-2">SubCategory</th>
                <th className="border-r p-2">Title</th>
                {/* <th className="border p-2">Why Choose CT brief desc</th> */}
                <th className="border-r p-2">LogoHeading</th>
                <th className="border-r p-2">Why Choose Logos</th>
                <th className="border-r p-2">Why Choose Points</th>
                <th className="border-r p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((slider, i) => (
                <tr key={slider._id} className="border-b">
                  <td className="border-r p-2">{i + indexOfFirstItem + 1}</td>
                  <td className="border-r p-2">{slider.Subcategory}</td>
                  <td className="border-r p-2">{slider.heading}</td>
                  {/* <td className="border p-2">
                                <FaEye onClick={() => { setHeadersubtitle(slider.subTitle); setSubtitlePopUp(true); }} className='cursor-pointer' />
                            </td> */}
                  <td className="border-r p-2">{slider.logoHeading}</td>

                  <td className="border-r p-2">
                    <FaEye
                      onClick={() => {
                        setSliderImages(slider.logos);
                        setLogosPopUp(true);
                      }}
                      className="cursor-pointer"
                    />
                  </td>

                  <td className="border-r p-2">
                    <FaEye
                      onClick={() => {
                        setSliderPoints(slider.points);
                        setPointsPopUp(true);
                      }}
                      className="cursor-pointer"
                    />
                  </td>

                  <td className="border-r flex items-center justify-start gap-[20px] p-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        setEditPopUpShow(true);
                        setEditId(slider._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="hover:bg-red-700 h-[37px] bg-[red] px-[20px] py-[7x] rounded-[7px] text-white shadow-md"
                      onClick={() => deleteHeaderData(slider._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <ul className="flex justify-center mt-5">
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
            {[
              ...Array(
                Math.ceil(sliderDataByCaregory.length / itemsPerPage)
              ).keys(),
            ].map((number) => (
              <li key={number} className="mx-1">
                <button
                  onClick={() => paginate(number + 1)}
                  className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
                >
                  {number + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(
                      prevPage + 1,
                      Math.ceil(sliderDataByCaregory.length / itemsPerPage)
                    )
                  )
                }
                className="border border-black hover:bg-blue-700 py-1 px-2 rounded hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ServiceWhyChooseCT;
