import React, { useEffect, useState } from "react";
import "./sidebar.css";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaBlog,
  FaBlogger,
  FaCalendarCheck,
  FaComments,
  FaConciergeBell,
  FaEnvelopeOpenText,
  FaFileAlt,
  FaFileSignature,
  FaFolderOpen,
  FaHandshake,
  FaHandsHelping,
  FaIndustry,
  FaInfoCircle,
  FaLayerGroup,
  FaPhotoVideo,
  FaPuzzlePiece,
  FaQuestionCircle,
  FaShareAlt,
  FaSignOutAlt,
  FaStar,
  FaThumbsUp,
  FaToolbox,
  FaUser,
  FaWrench,
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
        axios
          .post("https://conscientious-technologies-backend.vercel.app/logout") // Adjust the URL as per your backend route
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
          { path: "/conscientious-users-registration", name: "Add Users", icon: <FaUser /> },
          { path: "/conscientious-home-heroslider", name: "Hero Slider", icon: <FaPhotoVideo /> },
          { path: "/conscientious-home-partners", name: "Our Partners", icon: <FaHandsHelping /> },
          { path: "/conscientious-home-reliable-tools", name: "Reliable Tools", icon: <FaWrench /> },
          { path: "/conscientious-home-casestudies", name: "Case Studies", icon: <FaFileAlt /> },
          { path: "/conscientious-key-feature", name: "Key Features", icon: <FaStar /> },
          { path: "/conscientious-home-blogs", name: "Blogs", icon: <FaBlogger /> },
          { path: "/conscientious-home-clients", name: "Clients reviews", icon: <FaComments /> },
          { path: "/conscientious-home-faq", name: "FAQ", icon: <FaQuestionCircle /> },
          { path: "/conscientious-home-book-free-consultation", name: "Book Free Consultation", icon: <FaCalendarCheck /> },
        ],
      },
      {
        title: "Services",
        list: [
          { path: "/conscientious-services", name: "Services", icon: <FaConciergeBell /> },
          { path: "/conscientious-SubServices", name: "Sub Services", icon: <FaLayerGroup /> },
          { path: "/conscientious-service-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-service-reliable-tools", name: "Reliable Tools", icon: <FaToolbox /> },
          { path: "/conscientious-service-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-service-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-service-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Solutions",
        list: [
          { path: "/conscientious-solutions", name: "Solutions", icon: <FaPuzzlePiece /> },
          { path: "/conscientious-solution-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-solution-reliable-tools", name: "Reliable Tools", icon: <FaToolbox /> },
          { path: "/conscientious-solution-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-solution-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-solution-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Industries",
        list: [
          { path: "/conscientious-home-industries", name: "Industries", icon: <FaIndustry /> },
          { path: "/conscientious-industry-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-industry-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-industry-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-industry-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Important Details",
        list: [
          { path: "/conscientious-contact-us", name: "Get Started", icon: <FaEnvelopeOpenText /> },
          { path: "/conscientious-contact-us-form", name: "Contact Us Form Data", icon: <FaFileSignature /> },
          { path: "/conscientious-social-media", name: "Social Media", icon: <FaShareAlt /> },
        ],
      },
      {
        title: "Common Components",
        list: [
          { path: "/conscientious-partner-up", name: "Partner Up", icon: <FaHandshake /> },
        ],
      },
    ],
    2: [
      {
        title: "Home",
        list: [
          { path: "/conscientious-users-registration", name: "Add Users", icon: <FaUser /> },
          { path: "/conscientious-home-heroslider", name: "Hero Slider", icon: <FaPhotoVideo /> },
          { path: "/conscientious-home-partners", name: "Our Partners", icon: <FaHandsHelping /> },
          { path: "/conscientious-home-reliable-tools", name: "Reliable Tools", icon: <FaWrench /> },
          { path: "/conscientious-home-casestudies", name: "Case Studies", icon: <FaFileAlt /> },
          { path: "/conscientious-key-feature", name: "Key Features", icon: <FaStar /> },
          { path: "/conscientious-home-blogs", name: "Blogs", icon: <FaBlogger /> },
          { path: "/conscientious-home-clients", name: "Clients reviews", icon: <FaComments /> },
          { path: "/conscientious-home-faq", name: "FAQ", icon: <FaQuestionCircle /> },
          { path: "/conscientious-home-book-free-consultation", name: "Book Free Consultation", icon: <FaCalendarCheck /> },
        ],
      },
      {
        title: "Services",
        list: [
          { path: "/conscientious-services", name: "Services", icon: <FaConciergeBell /> },
          { path: "/conscientious-SubServices", name: "Sub Services", icon: <FaLayerGroup /> },
          { path: "/conscientious-service-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-service-reliable-tools", name: "Reliable Tools", icon: <FaToolbox /> },
          { path: "/conscientious-service-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-service-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-service-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Solutions",
        list: [
          { path: "/conscientious-solutions", name: "Solutions", icon: <FaPuzzlePiece /> },
          { path: "/conscientious-solution-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-solution-reliable-tools", name: "Reliable Tools", icon: <FaToolbox /> },
          { path: "/conscientious-solution-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-solution-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-solution-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Industries",
        list: [
          { path: "/conscientious-home-industries", name: "Industries", icon: <FaIndustry /> },
          { path: "/conscientious-industry-why-choose-ct-slider", name: "Why Choose C.T.", icon: <FaThumbsUp /> },
          { path: "/conscientious-industry-casestudies", name: "Case Studies", icon: <FaFolderOpen /> },
          { path: "/conscientious-industry-blogs", name: "Blogs", icon: <FaBlog /> },
          { path: "/conscientious-industry-faq-category", name: "FAQ", icon: <FaInfoCircle /> },
        ],
      },
      {
        title: "Important Details",
        list: [
          { path: "/conscientious-contact-us", name: "Get Started", icon: <FaEnvelopeOpenText /> },
          { path: "/conscientious-contact-us-form", name: "Contact Us Form Data", icon: <FaFileSignature /> },
          { path: "/conscientious-social-media", name: "Social Media", icon: <FaShareAlt /> },
        ],
      },
      {
        title: "Common Components",
        list: [
          { path: "/conscientious-partner-up", name: "Partner Up", icon: <FaHandshake /> },
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
      <div
        className={`bg-black text-white h-full ${
          isOpen ? "w-1/6" : "w-20"
        } transition-all delay-50 overflow-y-auto px-2 custom-scrollbar`}
      >
        <div
          className={`bg-black text-white flex items-center h-auto w-full sticky top-0 pb-5 ${
            isOpen ? "justify-between" : "justify-center"
          }`}
        >
          <h1 className={isOpen ? "block text-2xl mt-3" : "hidden"}>Logo</h1>
          <div className="text-2xl flex cursor-pointer mt-3">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <ul className={`${isOpen ? "block" : "hidden"}`}>
          {roleBasedMenuItems[userRole]?.map((item) => (
            <li key={item.title} className="mb-2">
              <div
                className={`p-2 flex justify-between items-center text-md font-semibold cursor-pointer ${
                  openMenu === item.title ? "bg-gray-300" : ""
                }`}
                onClick={() => handleMenuClick(item.title)}
              >
                <span>{item.title}</span>
                {openMenu === item.title ? <FaAngleUp /> : <FaAngleDown />}
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
      <div className={`${isOpen ? "w-5/6" : "w-11/12"}`}>
        <NavBar />
        <main className="w-11/12 h-4/5 mx-auto">{children}</main>
      </div>
    </div>
  );
};

const MenuLink = ({ item, isActive, onItemClick }) => {
  return (
    <li
      className={`py-2 hover:text-blue-500 ${
        isActive === item.path ? "text-white" : ""
      }`}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `text-xs flex text-[#fff] p-2 gap-3 transition-all delay-50 ${
            isActive
              ? "bg-[lightskyblue] text-[#000]"
              : "hover:bg-[lightskyblue]"
          } text-[#000] cursor-pointer no-underline`
        }
        style={{ textDecoration: "none" }}
        passHref
        onClick={() => onItemClick(item.path)}
      >
        {item.icon}
        <span>{item.name}</span>
      </NavLink>
    </li>
  );
};

export default SideBar;
