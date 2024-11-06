import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contextAPI/UserContext";

const Spinner = () => (
  <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const SolutionWhyChooseCT = () => {
  const router = useNavigate();
  const [userauth] = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Rest of the state declarations remain the same...

  const addSliderDataFunc = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Validate required fields
      if (!addSliderData.Subcategory || !addSliderData.heading || !addSliderData.subtitle) {
        Swal.fire('Error', 'Please fill in all required fields', 'error');
        return;
      }

      formData.append("category", "Solution");
      formData.append("Subcategory", addSliderData.Subcategory);
      formData.append("heading", addSliderData.heading);
      formData.append("subtitle", addSliderData.subtitle);
      formData.append("logoHeading", addSliderData.logoHeading || '');

      // Handle images
      if (addSliderData.images && addSliderData.images.length > 0) {
        addSliderData.images.forEach((image, index) => {
          if (image) {
            formData.append(`images`, image);
          }
        });
      }

      // Handle points
      if (addSliderData.points && addSliderData.points.length > 0) {
        // Filter out empty points
        const validPoints = addSliderData.points.filter(point => point.title.trim() !== '');
        formData.append("points", JSON.stringify(validPoints));
      } else {
        formData.append("points", JSON.stringify([]));
      }

      const response = await axios.post(
        "https://conscientious-technologies-backend.vercel.app/add-choose-ct-slider-data",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Add authorization header if required
            'Authorization': `Bearer ${userauth?.token}`
          }
        }
      );

      if (response.status === 200) {
        await fetchSliderDataByCategory();
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
        Swal.fire('Success', 'Data added successfully', 'success');
      }
    } catch (error) {
      console.error('Error adding slider data:', error);
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Failed to add slider data',
        'error'
      );
    }
  };

  const editSliderDataFunc = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Validate required fields
      if (!editSliderData.Subcategory || !editSliderData.heading || !editSliderData.subtitle) {
        Swal.fire('Error', 'Please fill in all required fields', 'error');
        return;
      }

      formData.append("category", "Solution");
      formData.append("Subcategory", editSliderData.Subcategory);
      formData.append("heading", editSliderData.heading);
      formData.append("subtitle", editSliderData.subtitle);
      formData.append("logoHeading", editSliderData.logoHeading || '');

      // Handle images
      if (editSliderData.images && editSliderData.images.length > 0) {
        editSliderData.images.forEach((image, index) => {
          if (image) {
            formData.append(`images`, image);
          }
        });
      }

      // Handle points
      if (editSliderData.points && editSliderData.points.length > 0) {
        // Filter out empty points
        const validPoints = editSliderData.points.filter(point => point.title.trim() !== '');
        formData.append("points", JSON.stringify(validPoints));
      } else {
        formData.append("points", JSON.stringify([]));
      }

      const response = await axios.put(
        `https://conscientious-technologies-backend.vercel.app/edit-choose-ct-slider-data/${editId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            // Add authorization header if required
            'Authorization': `Bearer ${userauth?.token}`
          }
        }
      );

      if (response.status === 200) {
        await fetchSliderDataByCategory();
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
        Swal.fire('Success', 'Data updated successfully', 'success');
      }
    } catch (error) {
      console.error('Error updating slider data:', error);
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Failed to update slider data',
        'error'
      );
    }
  };

  const fetchSliderDataByCategory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://conscientious-technologies-backend.vercel.app/get-choose-ct-slider-data/Solution`,
        {
          headers: {
            'Authorization': `Bearer ${userauth?.token}`
          }
        }
      );
      
      if (response.data?.data) {
        setsliderDataByCaregory(response.data.data);
        setfiltersliderDataByCaregory(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || "Error fetching data");
      console.error(error);
    }
  };

  // Rest of the component code remains the same...
};

export default SolutionWhyChooseCT;
