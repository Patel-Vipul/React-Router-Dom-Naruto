import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="data:image/jpeg;base64,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"
              className="mr-3 h-10 sm:h-12"
              alt="Logo"
            />
          </Link>

          {/* Right Buttons (Login / Get Started) */}
          <div className="hidden md:flex items-center lg:order-2 space-x-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // ✖ Close icon
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // ☰ Hamburger icon
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <div
            id="mobile-menu-2"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:flex justify-between items-center md:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 text-center md:text-left">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                    md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                    md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                    md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? "text-orange-700" : "text-gray-700"}
                    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 
                    md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
