import React, { useState } from 'react';
import './contactUs.css';
import ctSolution from './ct-solution-team.png';
import { FaFileAlt, FaMedal, FaPhoneAlt, FaUsers, FaWhatsapp, FaMicrophone, FaTrophy, FaMailBulk } from 'react-icons/fa';
import { BiBriefcase } from 'react-icons/bi';
import { FaRegMessage } from 'react-icons/fa6';
import axios from 'axios';

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
      if (response.status === 200) {
        alert('Form submitted successfully!');
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
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-[100vw] h-auto bg-[#464444] pt-[55px]">
      <div className='flex justify-center py-[30px] w-[100%] wave-bg'>
        <div className="w-[25%] flex flex-col gap-[20px] text-white pt-[20px] pr-[30px] font-normal">
          <div className='flex gap-[20px] items-center'>
            <FaTrophy size={30} />
            <div>
              <h1 className='font-semibold'>35 years in IT</h1>
              delivering project success no matter what
            </div>
          </div>
          <div className='flex gap-[20px] items-center'>
            <FaMedal size={30} />
            <div>
              <h1 className='font-semibold'>Project Management Office</h1>
              to ensure service quality and reduced project costs
            </div>
          </div>
          <div className='flex gap-[20px] items-center'>
            <BiBriefcase size={30} />
            <div>
              <h1 className='font-semibold'>Around 4,000 success stories</h1>
              including projects for Walmart, eBay, NASA JPL, Baxter, IBM
            </div>
          </div>
          <div className='flex gap-[20px] items-center'>
            <FaUsers size={30} />
            <div>
              <h1 className='font-semibold'>Over 750 specialists</h1>
              who love what they do
            </div>
          </div>
        </div>

        <div className="w-[65%] flex justify-center items-center">
          <form className="w-[65%] bg-white px-8 pt-6 pb-8 mb-4 h-[100%] flex flex-wrap gap-[20px]" onSubmit={handleSubmit}>
            <div className="text-black mb-2 w-[100%] flex border border-2 border-[#ccc]">
              <div className='w-[30%]'>
                <img
                  src={ctSolution}
                  alt="CT Solution"
                  className="w-[100%] h-[100%]"
                  srcSet={`
        ${ctSolution} 1x, 
        ${ctSolution.replace('.jpg', '@2x.jpg')} 2x, 
        ${ctSolution.replace('.jpg', '@3x.jpg')} 3x
    `}
                />
              </div>
              <div className='w-[70%] box-border pl-[10px]'>
                <h1 className='text-[20px]'>Talk to the solution team</h1>
                <p className='text-[14px] text-gray-700 font-normal'> Get your intricate questions answered by our <span className='font-semibold'>consultants, architects, and project managers</span> bypassing the usual sales pitch.
                </p>
              </div>
            </div>
            <div className="mb-1 w-[100%]">
              <textarea
                className="border border-[1px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#1df0d4]"
                id="message_request"
                placeholder="Kindly describe your request"
                rows="5"
                required
                onChange={handleInputChange}
                value={formData.message_request}
              ></textarea>
            </div>
            <div className="mb-1 w-[48%]">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#1df0d4]"
                id="fullName"
                type="text"
                placeholder="full name"
                required
                onChange={handleInputChange}
                value={formData.fullName}
              />
            </div>
            <div className="mb-1 w-[48%]">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#1df0d4]"
                id="companyName"
                type="text"
                placeholder="company name"
                required
                onChange={handleInputChange}
                value={formData.companyName}
              />
            </div>
            <div className="mb-1 w-[48%]">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#1df0d4]"
                id="workEmail"
                type="email"
                placeholder="work email"
                required
                onChange={handleInputChange}
                value={formData.workEmail}
              />
            </div>
            <div className="mb-1 w-[48%]">
              <input
                className="border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#1df0d4]"
                id="phone"
                type="tel"
                placeholder="phone number"
                required
                onChange={handleInputChange}
                value={formData.phone}
              />
            </div>
            <div className="mb-1 w-[48%] file-upload">
              <label htmlFor="fileInput" className="upload-button">
                <span className="text-gray-700 bg-gray-300 hover:bg-gray-500 font-bold py-2 px-4 rounded cursor-pointer">
                  Upload Files
                </span>
              </label>
              <input
                type="file"
                id="fileInput"
                className="file-input"
                accept="image/*"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            <div className="mb-1 w-[48%] flex gap-[10px]">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="nda">
                I'd like to sign an NDA
              </label>
              <label className="toggle-switch">
                <input
                  id="nda"
                  type="checkbox"
                  onChange={handleInputChange}
                  checked={formData.nda}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="flex items-center justify-between mx-auto">
              <button
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          <div className="w-[30%] flex flex-col gap-[30px] px-[40px] pb-8 mb-4 h-[100%] socialMedia text-white pt-[20px] font-normal">
            <div className='flex flex-col gap-[20px]'>
              <h2 className='font-semibold'>Our contact details</h2>
              <div className='flex flex-col gap-[10px]'>
                <div className='flex gap-[10px] items-center'>
                  <FaPhoneAlt />
                  <a href="">+1 214 306 6837</a>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <FaMailBulk />
                  <a href="">
                    contact@scnsoft.com
                  </a>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <FaWhatsapp />
                  <a href="">
                    WhatsApp
                  </a>
                </div>
                <div className='flex gap-[10px] items-center'>
                  <FaRegMessage />
                  <a href="">
                    Live chat
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <h2 className='font-semibold'>For journalists</h2>
              <div className='flex gap-[10px] items-center'>
                <FaMicrophone />
                <a href="">Get unique insights</a>
              </div>
            </div>
            <div className='flex flex-col gap-[20px]'>
              <h2 className='font-semibold'>Join our team</h2>
              <div className='flex gap-[10px] items-center'>
                <FaFileAlt />
                <a href="">Upload your CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
