// SubNav Component
import React, { useState, useEffect } from 'react';
import './subNav.css';

const SubNav = ({ setHideNavbar, setActiveSubNav}) => {
  const [subNavTop, setSubNavTop] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState('');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      setSubNavTop(navbarHeight);

      const sections = ['overview', 'service', 'solution', 'how-we-work', 'industries', 'testimonials', 'book-free-consultation'];

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
      className={`h-[50px] w-[100vw] bg-black sticky ${isAtTop ? 'top-[calc(90px + 1rem)]' : 'top-0'} z-50 md:hidden flex`}
      style={{
        top: subNavTop,
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <ul className='flex text-white justify-evenly w-[100%] items-center text-[12px]'>
        <li>
          <a href="#overview" onClick={(e) => { handleClick('overview') }} className={activeAnchor === 'overview' ? 'active1' : ''}>Overview</a>
        </li>
        <li>
          <a href="#service" onClick={(e) => handleClick('service')} className={activeAnchor === 'service' ? 'active1' : ''}>Services</a>
        </li>
        <li>
          <a href="#solution" onClick={(e) => handleClick('solution')} className={activeAnchor === 'solution' ? 'active1' : ''}>Solutions</a>
        </li>
        <li>
          <a href="#how-we-work" onClick={(e) => handleClick('how-we-work')} className={activeAnchor === 'how-we-work' ? 'active1' : ''}>How we work</a>
        </li>
        <li>
          <a href="#industries" onClick={(e) => handleClick('industries')} className={activeAnchor === 'industries' ? 'active1' : ''}>Industries</a>
        </li>
        <li>
          <a href="#testimonials" onClick={(e) => handleClick('testimonials')} className={activeAnchor === 'testimonials' ? 'active1' : ''}>Testimonials</a>
        </li>
        <li>
          <a href="#book-free-consultation" onClick={(e) => handleClick('book-free-consultation')} className={activeAnchor === 'book-free-consultation' ? 'active1' : ''}>Book free consultation</a>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
