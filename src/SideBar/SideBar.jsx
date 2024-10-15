import React, { useEffect, useState } from "react";
import "./sidebar.css";
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
  FaIndustry,
  FaLaptop,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTools,
  FaUser,
  FaUserClock,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBar";
import { useAuth } from "../contextAPI/UserContext";
import { getUserRole } from "../utilityFunction/utilityFunction";

const SideBar = ({ children }) => {
  const navigate = useNavigate();
  const [userauth, setuserauth] = useAuth();
  const userRole = getUserRole(userauth);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen); 
 

  const [activeItem, setActiveItem] = useState("");
  const [openMenu, setOpenMenu] = useState(null);

  // Read from localStorage on initial load
  useEffect(() => {
    const savedActiveItem = localStorage.getItem("activeItem");
    const savedOpenMenu = localStorage.getItem("openMenu");

    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    }

    if (savedOpenMenu) {
      setOpenMenu(savedOpenMenu);
    }
  }, []);

  // Save to localStorage whenever activeItem or openMenu changes
  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  useEffect(() => {
    localStorage.setItem("openMenu", openMenu);
  }, [openMenu]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to log out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Make a request to the backend to log out
        axios.post("http://localhost:8080/logout") // Adjust the URL as per your backend route
          .then((response) => {
            // Clear user authentication state and token from local storage
            setuserauth({ user: null, token: "" });
            localStorage.removeItem("auth");

            // Show success message
            Swal.fire({
              title: "Logged out successfully!",
              icon: "success",
            }).then(() => {
              navigate("/"); // Redirect to home or login page
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Logout failed",
              text: error.response?.data?.message || "An error occurred",
              icon: "error",
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Logout canceled",
          icon: "info",
        });
      }
    });
  };


  const roleBasedMenuItems = {
    1: [
      {
        title: "Home",
        list: [
          {
            path: "/conscientious-users-registration",
            name: "Add Users",
            icon: <FaUser />,
          },
          {
            path: "/conscientious-home-heroslider",
            name: "Hero Slider",
            icon: <FaLaptop />,
          },
          {
            path: "/conscientious-home-partners",
            name: "Our Partners",
            icon: <FaHandshake />,
          },
          {
            path: "/conscientious-home-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-key-feature",
            name: "Key Features", 
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-home-blogs",
            name: "Blogs",
            icon: <FaBlogger />,
          },
          {
            path: "/conscientious-home-clients",
            name: "Clients reviews",
            icon: <FaDesktop />,
          },
          {
            path: "/conscientious-home-faq",
            name: "FAQ",
            icon: <FaQuestionCircle />,
          },
          {
            path: "/conscientious-home-book-free-consultation",
            name: "Book Free Consultation",
            icon: <FaUserClock />,
          },
        ],
      },
      {
        title: "Services",
        list: [
          {
            path: "/conscientious-home-services",
            name: "Services",
            icon: <FaLaptop />,
          },
          {
            path: "/conscientious-home-SubServices",
            name: "Sub Services",
            icon: <FaLaptop />,
          },
          {
            path: "/conscientious-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
        ],
      },
      {
        title: "Solutions",
        list: [
          {
            path: "/conscientious-home-solutions",
            name: "Solutions",
            icon: <FaCogs />,
          },
          {
            path: "/conscientious-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
        ],
      },
      {
        title: "Industries",
        list: [
          {
            path: "/conscientious-home-industries",
            name: "Industries",
            icon: <FaIndustry />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-contact-us",
            name: "Contact Us",
            icon: <FaAddressBook />,
          },
          {
            path: "/conscientious-social-media",
            name: "Social Media",
            icon: <FaGlobe />,
          },
          {
            path: "/conscientious-navbar",
            name: "Navbar",
            icon: <FaBloggerB />,
          },
        ],
      },
    ],
    2: [
      {
        title: "Home",
        list: [
          {
            path: "/conscientious-home-partners",
            name: "Our Partners",
            icon: <FaHandshake />,
          },
          {
            path: "/conscientious-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-home-blogs",
            name: "Blogs",
            icon: <FaBlogger />,
          },
          {
            path: "/conscientious-home-clients",
            name: "Clients reviews",
            icon: <FaDesktop />,
          },
          {
            path: "/conscientious-home-faq",
            name: "FAQ",
            icon: <FaQuestionCircle />,
          },
          {
            path: "/conscientious-home-book-free-consultation",
            name: "Book Free Consultation",
            icon: <FaUserClock />,
          },
        ],
      },
      {
        title: "Services",
        list: [
          {
            path: "/conscientious-home-services",
            name: "Services",
            icon: <FaLaptop />,
          },
          {
            path: "/conscientious-home-services",
            name: "Sub Services",
            icon: <FaLaptop />,
          },
          {
            path: "/conscientious-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
        ],
      },
      {
        title: "Solutions",
        list: [
          {
            path: "/conscientious-home-solutions",
            name: "Solutions",
            icon: <FaCogs />,
          },
          {
            path: "/conscientious-reliable-tools",
            name: "Reliable Tools",
            icon: <FaTools />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
        ],
      },
      {
        title: "Industries",
        list: [
          {
            path: "/conscientious-home-industries",
            name: "Industries",
            icon: <FaIndustry />,
          },
          {
            path: "/conscientious-home-casestudies",
            name: "Case Studies",
            icon: <FaFileAlt />,
          },
          {
            path: "/conscientious-blogs",
            name: "blogs",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-faq-category",
            name: "FAQ",
            icon: <FaBloggerB />,
          },
          {
            path: "/conscientious-contact-us",
            name: "Contact Us",
            icon: <FaAddressBook />,
          },
          {
            path: "/conscientious-social-media",
            name: "Social Media",
            icon: <FaGlobe />,
          },
          {
            path: "/conscientious-navbar",
            name: "Navbar",
            icon: <FaBloggerB />,
          },
        ],
      },
    ],
  };

  
  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  const handleMenuClick = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

 
  return (
    <div className="w-full h-screen bg-gray-100 text-sm flex justify-between overflow-x-hidden overflow-y-auto custom-scrollbar">
      <div className={`bg-black text-white h-full ${isOpen ? "w-52" : "w-20"} transition-all delay-50 overflow-y-auto py-5 px-2 custom-scrollbar`}>
        <div className={`flex items-center h-auto w-full sticky top-0 pb-5 ${isOpen ? "justify-between":"justify-center"}`}>
        <h1 className={isOpen ? 'block text-2xl' : 'hidden'}>Logo</h1>
          <div className='text-2xl flex cursor-pointer'>
            <FaBars onClick={toggle} />
          </div>
        </div>
      <ul className={`${isOpen ? "block":"hidden"}`}>
        {roleBasedMenuItems[userRole]?.map((item) => (
          <li key={item.title} className="mb-2">
            <div
              className={`p-2 flex justify-between items-center text-md font-semibold cursor-pointer ${
                openMenu === item.title ? "bg-gray-300" : ""
              }`}
              onClick={() => handleMenuClick(item.title)}
            >
              <span >{item.title}</span>
              {openMenu === item.title ? <FaAngleUp /> : <FaAngleDown/>}
            </div>
            {openMenu === item.title && (
              <ul className="mt-2">
                {item.list.map((subItem) => (
                  <MenuLink
                    item={subItem}
                    key={subItem.name}
                    isActive={activeItem}
                    onItemClick={handleItemClick}
                  />
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <div
            className="text-red-800 hover:text-green-600 flex gap-2 items-center text-md font-semibold cursor-pointer"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            <span>LogOut</span>
          </div>
        </li>
      </ul>
      </div> 
      <div className={`${isOpen ? "w-5/6":"w-11/12"}`}>
      <NavBar />
      <main className="w-11/12 h-4/5 mx-auto">{children}</main>
      </div>
    </div>
  );
};


const MenuLink = ({ item, isActive, onItemClick }) => {
  return (
    <li
      className={`p-2 hover:text-blue-500 ${
        isActive === item.path ? "text-white" : ""
      }`}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex text-[#fff] py-2 px-3 gap-3 transition-all delay-50 ${isActive ? 'bg-[lightskyblue] text-[#000]' : 'hover:bg-[lightskyblue]'} text-[#000] cursor-pointer no-underline`
        }
        style={{ textDecoration: "none" }}
        passHref
        onClick={() => onItemClick(item.path)}
      >
        {item.icon}
        <span className="ml-2">{item.name}</span>
      </NavLink>
    </li>
  );
};

export default SideBar;
