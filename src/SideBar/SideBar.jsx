import React, { useState } from 'react';
import './sidebar.css';
import {
  FaAddressBook,
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaBlogger,
  FaBloggerB,
  FaCogs,
  FaDesktop,
  FaFileAlt,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaImage,
  FaIndustry,
  FaLaptop,
  FaQuestionCircle,
  FaRegEdit,
  FaTh,
  FaTools,
  FaUser,
  FaUserClock,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [homeDrop, setHomeDrop] = useState(false);
  const [repeatedComponentDrop, setrepeatedComponentDrop] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleHomeDrop = () => setHomeDrop(!homeDrop);
  const toggleRepeatedDrop = () => setrepeatedComponentDrop(!repeatedComponentDrop)

  const roleBasedMenuItems = {
    1: [
      {
        path: '/conscientious-users-registration',
        name: 'Add Users',
        icon: <FaUser />,
      },
      {
        path: '/conscientious-contact-us',
        name: 'Contact Us',
        icon: <FaAddressBook />,
      },
      {
        path: '/conscientious-social-media',
        name: 'Social Media',
        icon: <FaGlobe />,
      },
      {
        path: '/conscientious-navbar',
        name: 'Navbar',
        icon: <FaBloggerB />,
      },
      {
        path: '/conscientious-blogs',
        name: 'blogs',
        icon: <FaBloggerB />,
      },
    ],
  };

  const repeated_Fields = {
    1: [
      {
        path: '/conscientious-header',
        name: 'Header',
        icon: <FaBloggerB />,
      },

      {
        path: '/conscientious-choosect-slider',
        name: 'Why CT Page',
        icon: <FaQuestionCircle />,
      },
      {
        path: '/conscientious-partner-up',
        name: 'Partner Up With City',
        icon: <FaHandshake />,
      },

      {
        path: '/conscientious-case-studies-category',
        name: 'Case Studies by category',
        icon: <FaFileAlt />,
      },
      {
        path: '/conscientious-reliable-tools',
        name: 'Reliable Tools',
        icon: <FaTools />,
      },
      {
        path: '/conscientious-area-of-experties',
        name: 'Area Of Experties',
        icon: <FaGlobe />,
      },
      {
        path: '/conscientious-faq-category',
        name: 'FAQ',
        icon: <FaBloggerB />,
      },
    ]
  }

  const homePageMenuItems = {
    1: [
      {
        path: '/conscientious-home-heroslider',
        name: 'Hero Section',
        icon: <FaImage />,
      },
      {
        path: '/conscientious-home-partners',
        name: 'Our Partners',
        icon: <FaHandshake />,
      },
      {
        path: '/conscientious-home-services',
        name: 'Services',
        icon: <FaLaptop />,
      },
      {
        path: '/conscientious-home-solutions',
        name: 'Solutions',
        icon: <FaCogs />,
      },
      {
        path: '/conscientious-home-industries',
        name: 'Industries',
        icon: <FaIndustry />,
      },
      {
        path: '/conscientious-home-casestudies',
        name: 'Case Studies',
        icon: <FaFileAlt />,
      },
      {
        path: '/conscientious-home-blogs',
        name: 'Blogs',
        icon: <FaBlogger />,
      },
      {
        path: '/conscientious-home-clients',
        name: 'Clients reviews',
        icon: <FaDesktop />,
      },
      {
        path: '/conscientious-home-book-free-consultation',
        name: 'Book Free Consultation',
        icon: <FaUserClock />,
      },
      {
        path: '/conscientious-home-faq',
        name: 'FAQ',
        icon: <FaQuestionCircle />,
      },
      {
        path: '/conscientious-key-feature',
        name: 'Key Feature',
        icon: <FaQuestionCircle />,
      },
    ],
  };



  return (
    <div className='w-[100vw] h-[100vh] bg-[white] flex justify-between overflow-x-hidden'>
      <div className={`bg-[black] text-white h-[100vh] ${isOpen ? 'w-[20%]' : 'w-[5%]'} transition-all delay-50 overflow-y-auto pb-[20px]`}>
        <div className='flex items-center py-[20px] px-[15px] h-auto w-[100%] sticky top-0 justify-between bg-[#ccc]'>
          <h1 className={isOpen ? 'block text-[25px]' : 'hidden'}>Logo</h1>
          <div className='text-[25px] flex cursor-pointer'>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex text-[#fff] py-[10px] px-[15px] g-[15px] transition-all delay-50 ${isActive ? 'bg-[lightskyblue] text-[#000]' : 'hover:bg-[lightskyblue]'} text-[#000] cursor-pointer no-underline`
            }
            style={{ textDecoration: "none" }}
          >
            <div className='text-white text-[20px]'><FaTh /></div>
            <div className='text-[white] ms-[20px]' style={{ display: isOpen ? 'block' : 'none' }}>
              Dashboard
            </div>
          </NavLink>
        </div>
        <div>
          <div
            className='flex text-[#fff] py-[10px] px-[15px] g-[15px] transition-all delay-50 hover:bg-[lightskyblue] cursor-pointer'
            onClick={toggleHomeDrop}
          >
            <div className='text-white text-[20px]'><FaHome /></div>
            <div className={`w-[70%] text-[white] ms-[20px] ${isOpen ? 'flex justify-between' : 'hidden'}`}>
              Home {homeDrop ? <FaAngleUp className='mt-1 transition-all delay-50' /> : <FaAngleDown className='mt-1 transition-all delay-50' />}
            </div>
          </div>
          {homePageMenuItems[1]?.map((homeItems, i) => (
            <div
              key={i}
              className='ml-[15px]'
              style={{
                maxHeight: homeDrop ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height .5s ease-in-out',
              }}
            >
              <NavLink
                to={homeItems.path}
                className={({ isActive }) =>
                  `flex text-[#fff] py-[10px] px-[5px] g-[15px] transition-all delay-50 ${isActive ? 'bg-[lightskyblue] text-[#000]' : 'hover:bg-[lightskyblue]'} text-[#000] cursor-pointer`
                }
                style={{ textDecoration: "none" }}
              >
                <div className='text-white text-[20px]'>{homeItems.icon}</div>
                <div className={`w-[70%] text-[white] ms-[20px] ${isOpen ? 'flex justify-between' : 'hidden'}`}>
                  <h6>{homeItems.name}</h6> <FaRegEdit className='mt-1' />
                </div>
              </NavLink>
            </div>
          ))}
        </div>


        <div
          className='flex text-[#fff] py-[10px] px-[15px] g-[15px] transition-all delay-50 hover:bg-[lightskyblue] cursor-pointer'
          onClick={toggleRepeatedDrop}
        >
          <div className='text-white text-[20px]'><FaHome /></div>
          <div className={`w-[70%] text-[white] ms-[20px] ${isOpen ? 'flex justify-between' : 'hidden'}`}>
            Repeated Fields {repeatedComponentDrop ? <FaAngleUp className='mt-1 transition-all delay-50' /> : <FaAngleDown className='mt-1 transition-all delay-50' />}
          </div>
        </div>

        {repeated_Fields[1]?.map((homeItems, i) => (
          <div
            key={i}
            className='ml-[15px]'
            style={{
              maxHeight: repeatedComponentDrop ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height .5s ease-in-out',
            }}
          >
            <NavLink
              to={homeItems.path}
              className={({ isActive }) =>
                `flex text-[#fff] py-[10px] px-[5px] g-[15px] transition-all delay-50 ${isActive ? 'bg-[lightskyblue] text-[#000]' : 'hover:bg-[lightskyblue]'} text-[#000] cursor-pointer`
              }
              style={{ textDecoration: "none" }}
            >
              <div className='text-white text-[20px]'>{homeItems.icon}</div>
              <div className={`w-[70%] text-[white] ms-[20px] ${isOpen ? 'flex justify-between' : 'hidden'}`}>
                <h6>{homeItems.name}</h6> <FaRegEdit className='mt-1' />
              </div>
            </NavLink>
          </div>
        ))}


        {roleBasedMenuItems[1]?.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex text-[#fff] py-[10px] px-[15px] g-[15px] transition-all delay-50 ${isActive ? 'bg-[lightskyblue] text-[#000]' : 'hover:bg-[lightskyblue]'} text-[#000] cursor-pointer no-underline`
              }
              style={{ textDecoration: "none" }}
            >
              <div className='text-white text-[20px]'>{item.icon}</div>
              <div className='text-[white] ms-[20px]' style={{ display: isOpen ? 'block' : 'none' }}>
                {item.name}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
      <div className={`${isOpen ? 'w-[80%]' : 'w-[95%]'} h-[100vh] overflow-y-auto`}>
        <NavBar />
        <main className='w-[100%] h-[90%]'>{children}</main>
      </div>
    </div>
  );
};

export default SideBar;
