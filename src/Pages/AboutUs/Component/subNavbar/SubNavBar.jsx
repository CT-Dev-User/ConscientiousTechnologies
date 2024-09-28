// SubNav Component
import React, { useState, useEffect } from 'react';
import './subNav.css';

const SubNavBar = ({ setHideNavbar, setActiveSubNav}) => {
  const [subNavTop, setSubNavTop] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState('');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      setSubNavTop(navbarHeight);

      const sections = ['about_us', 'our_core_values', 'our_Journey', 'our_partner', 'gallery'];

      let activeSection = '';
      let minDistance = Number.MAX_VALUE;

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveAnchor(id);
            return; // Exit early if the section is in view
          }
          // Otherwise, find the section closest to the top of the viewport
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            activeSection = id;
          }
        }
      });

      // Update the active link to the closest section
      setActiveAnchor(activeSection);

      if (window.scrollY === 0) {
        setIsAtTop(true);
        setHideNavbar(true); // Hide navbar at the top of the page
      } else {
        setIsAtTop(false);
        setHideNavbar(false);
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setHideNavbar]);


  const handleClick = (id) => {
    setActiveAnchor(id);
    setIsAtTop(true);
    setActiveSubNav(true);
    setHideNavbar(true);

    const targetElement = document.getElementById(id);

    if (targetElement) {
      // Calculate the distance to scroll
      const offsetTop = targetElement.getBoundingClientRect().top;
      const offset = window.scrollY;
      const targetOffsetTop = offsetTop + offset;
      const duration = 300; // Adjust the duration as needed (in milliseconds)

      // Smooth scrolling animation
      const startTime = performance.now();
      const easeInOutQuad = (t) => t < 0.3 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const scroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsed / duration) * (targetOffsetTop - offset) + offset);
        if (elapsed < duration) {
          requestAnimationFrame(scroll);
        }
      };
      requestAnimationFrame(scroll);
    }
  };



  return (
    <div
      className={`mt-6 h-[50px] w-[100vw] border-b border-[#D9D9D9] sticky ${isAtTop ? 'top-[calc(90px + 1rem)]' : 'top-0 bg-white'} z-50 hidden lg:flex`}
      style={{
        top: subNavTop,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <ul className='flex justify-center gap-x-[50px] w-[100%] items-center text-[16px] about-sub-nav'>
        <li>
          <a href="#about_us" onClick={(e) => { handleClick('about_us') }} className={activeAnchor === 'about_us' ? 'active-about-us' : ''}>About Us</a>
        </li>
        <li>
          <a href="#our_core_values" onClick={(e) => handleClick('our_core_values')} className={activeAnchor === 'our_core_values' ? 'active-about-us' : ''}>Our Core Values</a>
        </li>
        <li>
          <a href="#our_Journey" onClick={(e) => handleClick('our_Journey')} className={activeAnchor === 'our_Journey' ? 'active-about-us' : ''}>Our Journey</a>
        </li>
        <li>
          <a href="#our_partner" onClick={(e) => handleClick('our_partner')} className={activeAnchor === 'our_partner' ? 'active-about-us' : ''}>Our Partner</a>
        </li>
        <li>
          <a href="#gallery" onClick={(e) => handleClick('gallery')} className={activeAnchor === 'gallery' ? 'active-about-us' : ''}>Gallery</a>
        </li>
      </ul>
    </div>
  );
};

export default SubNavBar;
