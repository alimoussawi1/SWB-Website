import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Swb from "../assets/swblogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const location = useLocation(); // Get the current location

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.omarnaous.swb";
    } else if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
      window.location.href =
        "https://apps.apple.com/lb/app/student-with-benefits/id6590629020";
    } else {
      alert("This app is only available for Android and iOS devices.");
    }
  };

  return (
    <div className="bg-white shadow-md h-20 fixed top-0 w-full z-50">
      <div className="container mx-auto px- py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex">
          <Link to="/">
            <img
              src={Swb}
              alt="Student With Benefits Logo"
              className="h-14 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/partner"
            className={`font-medium ${
              location.pathname === "/partner" ? "text-[#10758B]" : "text-gray-600"
            } hover:text-[#10758B]`}
          >
            Become a Partner
          </Link>
          <Link
            to="/privacy"
            className={`font-medium ${
              location.pathname === "/privacy" ? "text-[#10758B]" : "text-gray-600"
            } hover:text-[#10758B]`}
          >
            Privacy
          </Link>
          <Link
            to="/media"
            className={`font-medium ${
              location.pathname === "/media" ? "text-[#10758B]" : "text-gray-600"
            } hover:text-[#10758B]`}
          >
            About Us
          </Link>
          <Link
            to="/jobs"
            className={`font-medium ${
              location.pathname === "/jobs" ? "text-[#10758B]" : "text-gray-600"
            } hover:text-[#10758B]`}
          >
            Student Jobs
          </Link>
          <div
            className="bg-[#5842aa] border border-[#5842aa] text-white rounded-lg px-4 py-2 flex items-center cursor-pointer"
            onClick={handleDownload}
          >
            <FaDownload className="mr-2 text-lg" />
            <p className="text-white font-medium">Download Now</p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64`}
      >
        <button
          className="text-gray-600 p-4 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav className="flex flex-col p-4 space-y-4">
          <Link
            to="/partner"
            className={`font-medium ${
              location.pathname === "/partner" ? "text-[#d0522f]" : "text-gray-600"
            } hover:text-[#d0522f]`}
          >
            Become a Partner
          </Link>
          <Link
            to="/privacy"
            className={`font-medium ${
              location.pathname === "/privacy" ? "text-[#d0522f]" : "text-gray-600"
            } hover:text-[#d0522f]`}
          >
            Privacy
          </Link>
          <Link
            to="/media"
            className={`font-medium ${
              location.pathname === "/media" ? "text-[#d0522f]" : "text-gray-600"
            } hover:text-[#d0522f]`}
          >
            About Us
          </Link>
          <Link
            to="/jobs"
            className={`font-medium ${
              location.pathname === "/jobs" ? "text-[#d0522f]" : "text-gray-600"
            } hover:text-[#d0522f]`}
          >
            Student Jobs
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
