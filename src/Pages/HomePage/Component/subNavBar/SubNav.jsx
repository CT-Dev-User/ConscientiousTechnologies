import React, { useState, useEffect } from "react";
import "./subNav.css";

const SubNav = ({ setHideNavbar, setActiveSubNav }) => {
  const [activeAnchor, setActiveAnchor] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [subNavTop, setSubNavTop] = useState(0);

  useEffect(() => {
    // Get the initial height of the main navbar
    const mainNavbar = document.querySelector(".navbar");
    console.log(mainNavbar)
    if (mainNavbar) {
      setNavbarHeight(mainNavbar.offsetHeight);
      setSubNavTop(mainNavbar.offsetHeight); // Set initial top position based on navbar height
    }

    const handleScroll = () => {
      // Check which section is active on scroll
      const sections = [
        "overview",
        "service",
        "solution",
        "how-we-work",
        "industries",
        "testimonials",
        "book-free-consultation",
      ];

      let activeSection = "";
      let minDistance = Number.MAX_VALUE;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            activeSection = id;
          }
        }
      });

      setActiveAnchor(activeSection);
      setIsAtTop(window.scrollY === 0);
      setHideNavbar(window.scrollY === 0);

      // Update SubNav top position
      if (window.scrollY >= navbarHeight) {
        setSubNavTop(0); // Stick to top of the screen after scrolling past navbar
      } else {
        setSubNavTop(navbarHeight); // Keep SubNav below the navbar initially
      }
    };
    console.log(subNavTop)

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setHideNavbar, navbarHeight]);

  const handleClick = (id) => {
    setActiveAnchor(id);
    setActiveSubNav(true);
    setHideNavbar(true);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="hidden lg:flex h-14 w-screen sticky z-50 bg-black transition-transform duration-300 ease-in-out"
      style={{
        top: `${subNavTop}px`, // Dynamically adjust top position based on scroll
      }}
    >
      <ul className="flex text-white justify-evenly w-full items-center text-xs">
        {[ 
          { id: "overview", label: "Overview" },
          { id: "service", label: "Services" },
          { id: "solution", label: "Solutions" },
          { id: "how-we-work", label: "How we work" },
          { id: "industries", label: "Industries" },
          { id: "testimonials", label: "Testimonials" },
          { id: "book-free-consultation", label: "Book free consultation" },
        ].map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              className={activeAnchor === item.id ? "active1" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubNav;
