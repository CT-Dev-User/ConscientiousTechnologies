import React, { useState, useEffect, useContext } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ctlogo from '../assets/heroSectionImg/CTLogo1@2x-8.png';
import clientby from '../assets/serviceWeOffer/clientby.png';
import searchIcon from '../assets/serviceWeOffer/searchicon.png'
import "./navBar.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CTContext } from '../../../../Context/createContext';

const NavBar = ({ hideNavbar, setHideNavbar, activeSubNav }) => {
  const { dropdowns, setDropdowns, activeItem, setActiveItem } = useContext(CTContext)
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navigations, setNavigations] = useState([])
  const [dropdownsData, setDropdownsData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setHideNavbar(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, setHideNavbar]);

  const handleToggle = () => {
    setToggle(!toggle);
    setActiveItem(null);
  };

  const fetchNavCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-category");
      setNavigations(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchNavCategory();
  }, [])

  const dropdownToggle = async (navcategory) => {
    try {
      if (activeItem === navcategory) {
        setDropdownsData([]);
        setActiveItem("");
      } else {
        const response = await axios.get(`http://localhost:8080/get-navigation-by-navCategory/${navcategory}`);
        if (response.data.message === "Category retrieved successfully") {
          setDropdownsData(response.data.data);
        } else {
          setDropdownsData([]);
          setActiveItem("");
          setToggle(false);
          navigate(`/${navcategory}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <nav className={`navbar ${visible && !hideNavbar ? 'active' : 'hidden'} w-full p-1 z-50 box-border fixed top-0 md:p-2 ${visible && prevScrollPos > 10 ? 'bg-black opacity-[0.8]' : 'transparent opacity-[1]'} md:bg-black md:opacity-100`}>
      <div className={`w-[80vw] overflow-y-auto absolute top-[50px] left-[12vw] duration-1000 transition-height ease-in-out ${dropdownsData.length > 0 ? 'p-[10px] h-auto opacity-100 dropdown' : 'p-[0px] h-0 opacity-0 pointer-events-none'} md:hidden`} onMouseLeave={() => { setActiveItem(""); setDropdownsData([]) }}>
        <div className="w-[95%] flex flex-wrap gap-[15px] mx-auto">
          {
            dropdownsData.map((item, index) => (
              <div key={index} className='hover:text-[#FFA843] hover:border-b hover:border-[#FFA843] transition-border h-[25px] w-[18%] text-[12px] text-white flex justify-between items-center mb-[10px] font-normal cursor-pointer' onClick={() => { setDropdowns(`${item.navSubcategory}`); navigate(`${activeItem}/${item.navSubcategory}`); setDropdownsData([]); }}>
                <h4>{item.navSubcategory}</h4> <h4 className='text-[20px]'>›</h4>
              </div>
            ))
          }
        </div>
        <div className={`w-[95%] h-[200px] mx-auto text-white pt-[20px] ${dropdownsData && activeItem === 'Services' ? 'flex ' : 'hidden'}`}>
          <div className='w-[70%] h-[80%]'>
            <h2>By Client Type</h2>
            <div className='w-[90%] flex flex-wrap mt-[20px] ml-[30px] justify-between'>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/by-client/Start Up"); setActiveItem(""); setDropdownsData([]) }}>For Startup</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>Custom Software for Bussiness Goals</p>
              </div>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/by-client/Enterprises"); setActiveItem(""); setDropdownsData([]) }}>For Enterprises</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>End-to-end Automation Solution</p>
              </div>
              <div className='w-[30%]'>
                <button className='flex justify-between items-center bg-[#2C2C2C] h-[40px] px-[20px] hover:text-[#FFA843]'><span className='mr-[10px]' onClick={() => { navigate("/by-client/Agencies"); setActiveItem(""); setDropdownsData([]) }}>For Agencies</span><span>{">"}</span></button>
                <p className='text-[14px] font-normal mt-[20px]'>Expand with White-label Services</p>
              </div>
            </div>
          </div>
          <div className='w-[30%] flex flex-col justify-between'>
            <h2>What services do you want?</h2>
            <div className='flex items-center justify-around w-[100%] h-[30px] border-[1px] border-white'><input type="text" className='w-[80%] transperent bg-[#1E1E1E] outline-none' placeholder='eg. software development teams...' /> |
              <img src={searchIcon} alt="search" className='w-[10px] h-[10px]' />
            </div>
            <img src={clientby} alt="client by" />
          </div>
        </div>
      </div>
      <div className='w-[100%] py-[2px] mx-auto flex justify-between items-center'>
        <div>
          <img src={ctlogo} alt='logo' className='h-[40px] md:h-[50px] cursor-pointer' onClick={() => navigate("/")} />
        </div>
        <div className='hidden md:block me-[20px]'>
          {toggle ? (
            <AiOutlineClose onClick={handleToggle} className='text-4xl text-white' />
          ) : (
            <AiOutlineMenu onClick={handleToggle} className='text-4xl text-white' />
          )}
        </div>
        <ul className='flex gap-10 text-white text-[14px] md:hidden'>
          {navigations.map((nav, i) => {
            return (
              <li key={i} className={`cursor-pointer ${activeItem === `${nav.faqCategory}` ? 'active2' : ''} hover:text-[#FFA843]`} onClick={() => { setActiveItem(`${nav.faqCategory}`); dropdownToggle(`${nav.faqCategory}`);if(activeItem === "Career"){
                navigate('/Career')
              } }}>{nav.faqCategory}</li>
            )
          })}
        </ul>
        <div className='block md:hidden cursor-pointer relative overflow-hidden text-white border border-current px-3 py-1 group' onClick={() => navigate('/get-connect-with-us')}>
          <span className='absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
          <span className='relative z-10 text-white'>Get Started<span className='font-bold ml-[10px]'>&rarr;</span></span>
        </div>

        <ul className={`hidden md:block duration-1000 w-[100vw] h-[100vh] overflow-y-auto text-white fixed top-[70px] box-border p-5 ${toggle ? 'left-[0%] opacity-100 dark-bg' : 'left-[-100%] opacity-0 pointer-events-none'}`}>
          {navigations.map((nav, i) => {
            return (
              <li key={i} className={`border-t border-[#FFA843] ${activeItem === `${nav.faqCategory}` ? 'active2' : ''}`}>
                <div className='flex justify-between items-center' onClick={() => { setActiveItem(`${nav.faqCategory}`); dropdownToggle(`${nav.faqCategory}`); }}><span>{nav.faqCategory}</span><span className='text-[20px]'>⌵</span></div>
                <ul className={`${activeItem === nav.faqCategory && dropdownsData ? "block" : "hidden"} duration-1000 transition-height ease-in-out bg-black text-white p-3 h-[40vh] overflow-y-auto`}>
                  {dropdownsData.map((item, index) => {
                    if (item.navCategory === nav.faqCategory) {
                      return (
                        <li className="border-t border-[#FFA843]" key={index} onClick={() => { navigate(`${activeItem}/${item.navSubcategory}`); setDropdownsData([]); setToggle(false) }}>
                          <div className='flex justify-between items-center'>
                            <span> {item.navSubcategory}
                            </span><span className='text-[20px]'>›</span>
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
