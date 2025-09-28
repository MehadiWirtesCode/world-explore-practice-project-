import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="w-full bg-gray-800 text-white text-lg font-semibold">
      <div className="h-16 flex items-center justify-between px-8">
        <NavLink to="/">
          <h1 className="text-amber-600 font-bold text-3xl italic">
            World Info
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 flex-row">
          <li className="hover:text-blue-400">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : ""
              }
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : ""
              }
              to="/Country"
            >
              Country
            </NavLink>
          </li>
          <li className="hover:text-blue-400">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : ""
              }
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-lg font-semibold bg-gray-700">
          <li>
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : "hover:text-blue-400"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : "hover:text-blue-400"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Country"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : "hover:text-blue-400"
              }
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : "hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
