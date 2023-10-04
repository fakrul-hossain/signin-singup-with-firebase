import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="md:flex shadow-lg py-5  justify-between items-center md:px-3">
        <h1 className="text-3xl font-bold text-indigo-500 text-center">
          Firebase Authentication
        </h1>
        <ul className="flex gap-6 justify-center items-center">
          <li className="font-medium text-[18px]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-medium text-[18px]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : " "
              }
            >
              Login
            </NavLink>
          </li>
          <li className="font-medium text-[18px]">
            <NavLink
              to="/signIn"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
             Register
            </NavLink>
          </li>
          <li className="font-medium  ">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              <img className="rounded-[50%] w-[50px]" src="" alt="" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;