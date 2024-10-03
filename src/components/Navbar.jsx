import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
      >
        <p className="blue-gradient_text">PG</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `text-blue-500` : `text-black`
          }
        >
          about
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? `text-blue-500` : `text-black`
          }
        >
          project
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `text-blue-500` : `text-black`
          }
        >
          contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
