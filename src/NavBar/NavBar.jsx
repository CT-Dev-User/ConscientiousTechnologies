// NavBar Component
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./navBar.css";
import { useAuth } from "../contextAPI/UserContext";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [userauth] = useAuth();
  return (
    <nav className="shadow-lg shadow-gray-100 bg-slate-500 text-[white] w-[90%] h-[60px] mx-auto mt-[10px] px-[20px] box-border sticky top-[10px] mb-[20px]">
      <div className="py-[12px] mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">logo</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl hidden md:block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl  hidden md:block "
          />
        )}
        <ul className="md:hidden flex text-white gap-10">
          <li>{userauth.user && userauth.user.email.split("@")[0]}</li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`duration-1000 hidden md:block w-full h-screen text-white fixed bg-black top-[92px]
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="p-5">User Name</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
