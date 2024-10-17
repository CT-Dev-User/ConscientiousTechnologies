import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ctlogo from "../assets/heroSectionImg/CTLogo1@2x-8.png";
import clientby from "../assets/serviceWeOffer/clientby.png";
import searchIcon from "../assets/serviceWeOffer/searchicon.png";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CTContext } from "../../../../Context/createContext";

const NavBar = ({ hideNavbar, setHideNavbar }) => {

  const navCategory = [{ name: "Services" }, { name: "Solutions" }, { name: "Industries" }, { name: "About Us" }, { name: "Career" }, { name: "Contact Us" }];
  console.log(navCategory);

  const { dropdowns, setDropdowns, activeItem, setActiveItem } =
    useContext(CTContext);
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navigations, setNavigations] = useState([]);
  const [dropdownsData, setDropdownsData] = useState([]);
  const[search,setSearch]=useState("")
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setHideNavbar(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, setHideNavbar]);

  const handleToggle = () => {
    setToggle(!toggle);
    setActiveItem(null);
  };

  const fetchNavCategory = async () => {
    try {
      const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-category");
      setNavigations(response.data.getData);
      console.log(response.data.getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNavCategory();
  }, []);


  const dropdownToggle = async (navCategory) => {
    try {
      if (activeItem === navCategory) {
        setDropdownsData([]);
        setActiveItem("");
      } else {
        if (navCategory === "Services") {
          const response = await axios.get(
            `https://conscientious-technologies-backend.vercel.app/get-latest-service-data`
          )
          if (response.status === 200) {
            setDropdownsData(response.data);
            setSearch("serviceName")
          } else {
            setDropdownsData([]);
            setActiveItem("");
            setToggle(false);
            navigate(`/${navCategory}`);
          }

        } else if (navCategory === "Solutions") {
          const response = await axios.get(
            `https://conscientious-technologies-backend.vercel.app/get-latest-solution-data`
          )
         if (response.status === 200) {
            setDropdownsData(response.data);
            setSearch("solutionName")

          } else {
            setDropdownsData([]);
            setActiveItem("");
            setToggle(false);
            navigate(`/${navCategory}`);
          }
        } else if (navCategory === "Industries") {
          const response = await axios.get(
            `https://conscientious-technologies-backend.vercel.app/get-latest-industry-data`
          )
          if (response.status === 200) {
            setDropdownsData(response.data);
            setSearch("industryName")
          } else {
            setDropdownsData([]);
            setActiveItem("");
            setToggle(false);
            navigate(`/${navCategory}`);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav
      className={`navbar  ${visible && !hideNavbar ? "active" : "hidden"
        } w-screen lg:p-1 z-50 fixed top-0 p-2 ${visible && prevScrollPos > 10
          ? "bg-black opacity-80"
          : "transparent opacity-100"
        }`}
    >
      {/* Dropdown menu */}
      <div
        className={`hidden lg:block w-4/5 overflow-y-auto absolute top-12 left-[12%] duration-1000 transition-height ease-in-out ${dropdownsData.length > 0
          ? "p-2 h-auto opacity-100 dropdown"
          : "p-0 h-0 opacity-0 pointer-events-none"
          }`}
        onMouseLeave={() => {
          setActiveItem("");
          setDropdownsData([]);
        }}
      >
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {dropdownsData.map((item, index) => (
            <div
              key={index}
              className="hover:text-[#FFA843] hover:border-b hover:border-[#FFA843] transition-border h-6 w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer"
              onClick={() => {
                setDropdowns(`${item[search]}`);
                navigate(`${activeItem}/${item[search]}`);
                setDropdownsData([]);
              }}
            >
              <h4 >{item[search]}</h4>
              <h4 className="text-xl">›</h4>
            </div>
          ))}
        </div>
        {/* Additional menu when Services is active
        <div
          className={`w-[95%] h-52 mx-auto text-white pt-5 ${
            dropdownsData && activeItem === "Service" ? "flex" : "hidden"
          }`}
        >
          <div className="w-[70%] h-4/5">
            <h2>By Client Type</h2>
            <div className="w-[90%] flex flex-wrap mt-5 ml-7 justify-between">
              {["Start Up", "Enterprises", "Agencies"].map((clientType, i) => (
                <div key={i} className="w-[30%]">
                  <button
                    className="flex justify-between items-center bg-[#2C2C2C] h-10 px-5 hover:text-[#FFA843]"
                    onClick={() => {
                      navigate(`/by-client/${clientType}`);
                      setActiveItem("");
                      setDropdownsData([]);
                    }}
                  >
                    <span>{`For ${clientType}`}</span>
                    <span>{">"}</span>
                  </button>
                  <p className="text-sm font-normal mt-5">
                    Service description for {clientType}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[30%] flex flex-col justify-between">
            <h2>What services do you want?</h2>
            <div className="flex items-center justify-around w-[100%] h-8 border border-white">
              <input
                type="text"
                className="w-4/5 bg-[#1E1E1E] outline-none"
                placeholder="eg. software development teams..."
              />
              <img
                src={searchIcon}
                alt="search"
                className="w-[10px] h-[10px]"
              />
            </div>
            <img src={clientby} alt="client by" />
          </div>
        </div> */}
      </div>

      {/* Navbar content */}
      <div className="lg:w-[90%] w-full py-2 mx-auto flex justify-between items-center">
        <div>
          <img
            src={ctlogo}
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="lg:hidden me-5">
          {toggle ? (
            <AiOutlineClose
              onClick={handleToggle}
              className="text-4xl text-white"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleToggle}
              className="text-4xl text-white"
            />
          )}
        </div>

        {/* Desktop menu */}

        <ul className="hidden lg:flex gap-10 text-white text-sm">
          {navCategory.map((nav, i) => (
            <li
              key={i}
              className={`cursor-pointer lg:text-sm text-base ${activeItem === nav.name ? "active2" : ""} hover:text-[#FFA843]`}
              onClick={() => {
                setActiveItem(nav.name);
                dropdownToggle(nav.name);
                if (nav.name === "Career") {
                  navigate("/Career");
                }else if(nav.name === "Contact Us"){
                  navigate("/contact-us")
                }else if(nav.name === "About Us"){
                  navigate("/about-us")
                }
              }}
            >
              {nav.name}
            </li>
          ))}
        </ul>

        {/* Get Started button */}
        <div
          className="hidden lg:block cursor-pointer relative overflow-hidden text-white border border-current px-3 py-1 group"
          onClick={() => navigate("/get-connect-with-us")}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 text-white">
            Get Started<span className="font-bold ml-[10px]">&rarr;</span>
          </span>
        </div>

        {/* Mobile menu */}
        <ul
          className={`lg:hidden duration-1000 w-screen h-screen overflow-y-auto text-white fixed top-[70px] box-border p-5 ${toggle
            ? "left-[0%] opacity-100 dark-bg"
            : "left-[-100%] opacity-0 pointer-events-none"
            }`}
        >
          {navCategory.map((nav, i) => {
            return (
              <li
                key={i}
                className={`border-t border-[rgb(255,168,67)] ${activeItem === `${nav.name}` ? "active2" : ""
                  }`}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    setActiveItem(`${nav.name}`);
                    dropdownToggle(`${nav.name}`);
                  }}
                >
                  <span>{nav.name}</span>
                  <span className="text-[20px]">⌵</span>
                </div>
                <ul
                  className={`${activeItem === nav.name && dropdownsData
                    ? "block"
                    : "hidden"
                    } duration-1000 transition-height ease-in-out bg-black text-white p-3 h-[40vh] overflow-y-auto`}
                >
                  {dropdownsData.map((item, index) => {
                    if (navCategory === nav.name) {
                      return (
                        <li
                          className="border-t border-[#FFA843]"
                          key={index}
                          onClick={() => {
                            navigate(`${activeItem}/${item.serviceName}`);
                            setDropdownsData([]);
                            setToggle(false);
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span> {item.serviceName}</span>
                            <span className="text-xl">›</span>
                          </div>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
