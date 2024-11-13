import React, { useState } from 'react';
import './contactUs.css';
import ctSolution from './ct-solution-team.png';
import { FaFileAlt, FaMedal, FaPhoneAlt, FaUsers, FaWhatsapp, FaMicrophone, FaTrophy, FaMailBulk } from 'react-icons/fa';
import { BiBriefcase } from 'react-icons/bi';
import { FaRegMessage } from 'react-icons/fa6';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    message_request: '',
    sourceImage: null,
    nda: false,
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      sourceImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append('fullName', formData.fullName);
      form.append('companyName', formData.companyName);
      form.append('workEmail', formData.workEmail);
      form.append('phone', formData.phone);
      form.append('message_request', formData.message_request);
      form.append('nda', formData.nda);
      if (formData.sourceImage) {
        form.append('sourceImage', formData.sourceImage);
      }

      const response = await axios.post('http://localhost:8080/add-contact-us-data', form);
      if (response.status == 200) {
        Swal.fire("Success", "success");
        setFormData({
          fullName: '',
          companyName: '',
          workEmail: '',
          phone: '',
          message_request: '',
          sourceImage: null,
          nda: false,
        })
      } else {
        Swal.fire("Error", "Something went wrong Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong Please try again.", "error");
    }
  };
  const ContactSection = ({ title, details }) => (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold">{title}</h2>
      {details.map((detail, index) => (
        <div key={index} className="flex gap-2 items-center">
          <detail.icon />
          <a href={detail.href} className="hover:underline">{detail.text}</a>
        </div>
      ))}
    </div>
  );


  return (
    <div className="w-full h-auto bg-[#464444] pt-[55px]">
      <div className="flex justify-center py-8 w-full wave-bg flex-wrap">

        {/* Left Information Section */}
        <div className="w-[90%] lg:w-1/4 hidden md:flex flex-col gap-6 text-white pt-5 pr-6 font-normal">
          {[
            { icon: FaTrophy, title: "35 years in IT", text: "delivering project success no matter what" },
            { icon: FaMedal, title: "Project Management Office", text: "to ensure service quality and reduced project costs" },
            { icon: BiBriefcase, title: "Around 4,000 success stories", text: "including projects for Walmart, eBay, NASA JPL, Baxter, IBM" },
            { icon: FaUsers, title: "Over 750 specialists", text: "who love what they do" },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <item.icon size={30} />
              <div className=''>
                <h1 className="font-semibold">{item.title}</h1>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3 flex justify-center flex-wrap px-4">
          <form className="w-full mt-5 lg:w-3/4 bg-white p-8 mb-4 flex flex-wrap gap-6" onSubmit={handleSubmit}>

            {/* Header Section */}
            <div className="flex items-center border-2 border-gray-300 w-full text-black p-4 mb-4">
              <div className="w-1/3">
                <img src={ctSolution} alt="CT Solution" className="w-full h-full" />
              </div>
              <div className="w-2/3 pl-4">
                <h1 className="text-lg">Talk to the solution team</h1>
                <p className="text-sm text-gray-700">Get your intricate questions answered by our <span className="font-semibold">consultants, architects, and project managers</span> bypassing the usual sales pitch.</p>
              </div>
            </div>

            {/* Textarea */}
            <div className="w-full mb-2">
              <textarea
                className="border w-full py-2 px-3 text-gray-700 focus:outline-[#1df0d4]"
                id="message_request"
                placeholder="Kindly describe your request"
                rows="5"
                required
                onChange={handleInputChange}
                value={formData.message_request}
              ></textarea>
            </div>

            {/* Input Fields */}
            {[
              { id: "fullName", placeholder: "Full name", value: formData.fullName, type: "text" },
              { id: "companyName", placeholder: "Company name", value: formData.companyName, type: "text" },
              { id: "workEmail", placeholder: "Work email", value: formData.workEmail, type: "email" },
              { id: "phone", placeholder: "Phone number", value: formData.phone, type: "tel" },
            ].map((input, index) => (
              <div key={index} className="w-full lg:w-1/2 mb-2">
                <input
                  className="border w-full py-2 px-3 text-gray-700 focus:outline-[#1df0d4]"
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  required
                  onChange={handleInputChange}
                  value={input.value}
                />
              </div>
            ))}

            {/* File Upload */}
            <div className="w-full lg:w-1/2 mb-2">
              <label htmlFor="fileInput" className="upload-button cursor-pointer">
                <span className="text-gray-700 bg-gray-300 hover:bg-gray-500 font-bold py-2 px-4 rounded">Upload Files</span>
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </div>

            {/* NDA Toggle */}
            <div className="w-full lg:w-1/2 flex items-center gap-2 mb-2">
              <label htmlFor="nda" className="text-gray-700 text-sm font-bold">I'd like to sign an NDA</label>
              <label className="toggle-switch">
                <input id="nda" type="checkbox" onChange={handleInputChange} checked={formData.nda} />
                <span className="slider"></span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
                Send
              </button>
            </div>
          </form>

          {/* Contact Details Section */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6 text-white p-4 mb-4 font-normal">
            <ContactSection title="Our contact details" details={[
              { icon: FaPhoneAlt, text: "+1 214 306 6837", href: "tel:+12143066837" },
              { icon: FaMailBulk, text: "contact@scnsoft.com", href: "mailto:contact@scnsoft.com" },
              { icon: FaWhatsapp, text: "WhatsApp", href: "#" },
              { icon: FaRegMessage, text: "Live chat", href: "#" }
            ]} />
            <ContactSection title="For journalists" details={[
              { icon: FaMicrophone, text: "Get unique insights", href: "#" }
            ]} />
            <ContactSection title="Join our team" details={[
              { icon: FaFileAlt, text: "Upload your CV", href: "#" }
            ]} />
          </div>
        </div>
      </div>

    </div>

    // Reusable ContactSection Component

  );
};

export default ContactUs;
